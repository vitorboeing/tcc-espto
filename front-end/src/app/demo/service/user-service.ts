import { HttpClient } from "@angular/common/http";
import { User } from "../api/user";
import { CrudService } from "./crud-service";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService  extends CrudService<User> {

    constructor(protected override http: HttpClient) {
        super(http , environment.API + '/user');
     }

}
