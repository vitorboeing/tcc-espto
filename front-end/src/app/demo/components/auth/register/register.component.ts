import { UserService } from './../../../service/user-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TypeDisability } from 'src/app/demo/api/type-disability';
import { Gender, User } from 'src/app/demo/api/user';
import { AuthService } from 'src/app/demo/service/auth-service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { SelecionaCidadeComponent } from '../../modal/seleciona-cidade/seleciona-cidade.component';
import { DialogService } from 'primeng/dynamicdialog';
import { City } from 'src/app/demo/api/location';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    providers: [DialogService, MessageService],
    styles: [
        `
            ::ng-deep .p-image img {
                border-radius: 50%;
                object-fit: cover;
                border: 1px solid
            }
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
})
export class RegisterComponent implements OnInit {
    valCheck: string[] = ['remember'];
    email: string;
    password!: string;
    apiError: boolean;
    user: User;
    confirmPassword: string;
    genders: any[];
    typeDisabilities: any[];
    cityName = 'Escolher Cidade';

    selectedFile: File | null = null;
    profileImageUrl: string = 'assets/demo/images/avatar/profile-main.jpg';

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService,
        private userService: UserService,
        private messageService: MessageService,
        private router: Router,
        private dialogService: DialogService
    ) {}

    ngOnInit(): void {
        this.user = new User();

        this.genders = Object.keys(Gender).map((key) => ({
            label: Gender[key],
            value: key,
        }));

        this.typeDisabilities = Object.keys(TypeDisability).map((key) => ({
            label: TypeDisability[key],
            value: key,
        }));
    }

    register() {
        console.log(this.user);
        this.authService.signup(this.user).subscribe({
            error: (error) => {
                this.apiError = true;
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: error.error.message,
                });
            },
            next: (authResult: any) => {
              const user = authResult.user;
              this.userService.onUpload(user.id, this.selectedFile);
            },
            complete: () => {
                this.router.navigate(['']);
            },
        });
    }

    logout() {
        this.authService.logout();
    }

    showDialogSelecionaCidade(): void {
        const ref = this.dialogService.open(SelecionaCidadeComponent, {
            header: 'Selecionar Cidade',
            width: '35vw',
            contentStyle: { overflow: 'visible', 'max-height': '300px' },
        });

        ref.onClose.subscribe((selectedCity: City) => {
            if (selectedCity) {
                this.user.city = selectedCity;
                this.cityName = selectedCity.name;
                this.messageService.add({
                    severity: 'info',
                    summary: 'Product Selected',
                    detail: 'product.name',
                });
            }
        });
    }

    onFileSelected(event: any) {
        this.selectedFile = event.files[0];
        if (this.selectedFile) {
            this.profileImageUrl = URL.createObjectURL(this.selectedFile);
        }
    }

    onUpload() {
        if (this.selectedFile) {
            const formData = new FormData();
            formData.append('file', this.selectedFile);
            // Envia a foto de perfil para o backend
            //   this.http.post('http://localhost:8080/api/users/1/upload', formData)
            //     .subscribe(response => {
            //       console.log('Upload com sucesso', response);
            //     }, error => {
            //       console.error('Erro no upload', error);
            //     });
        }
    }

    // Função para obter a imagem
    getProfilePicture() {
        // this.http.get('http://localhost:8080/api/users/1/profile-picture', { responseType: 'blob' })
        //   .subscribe((response: Blob) => {
        //     const url = window.URL.createObjectURL(response);
        //     window.open(url);
        //   });
    }
}
