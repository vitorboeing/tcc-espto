import { HttpClient } from '@angular/common/http';
import { User } from '../api/user';
import { CrudService } from './crud-service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService extends CrudService<User> {
    constructor(protected override http: HttpClient) {
        super(http, environment.API + '/user');
    }

    onUpload(idUser: number, profileImageFile: File) {
        if (profileImageFile) {
            const formData = new FormData();
            formData.append('file', profileImageFile);
            this.http
                .post(this.API_URL + '/' + idUser + '/upload', formData)
                .subscribe(
                    (response) => {
                        console.log('Upload com sucesso', response);
                    },
                    (error) => {
                        console.error('Erro no upload', error);
                    }
                );
        }
    }

    followUser(userId: number, userIdFollow: number) {
       return this.http.post(this.API_URL + '/follow-user/' + userId + '/' + userIdFollow , {})
    }

    unfollowUser(userId: number, userIdUnfollow: number) {
         return   this.http.post(this.API_URL + '/unfollow-user/' + userId + '/' + userIdUnfollow , {})
    }

}
