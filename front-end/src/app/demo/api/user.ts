import { TypeDisability } from './type-disability';
import { City } from "./location";

export class User {
    id: number
    email: String;
    password?: String;
    name: String;
    bio: String;
    lastName: String;
    gender: Gender;
    birthday: Date;
    typesDisability: TypeDisability[];
    followers: Follower[]
    following: Following[]
    city: City
}

export class Follower {
    id: number
    follower: User
}

export class Following {
    id: number
    following: User
}

export enum Gender {
    MALE = "Masculino",
    FEMALE = "Feminino",
}
