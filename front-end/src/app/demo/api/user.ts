import { City } from "./location";

export class User {
    id: number
    email: String
    name: String;
    lastName: String;
    friends: UserFriend[]
    city: City
}

export class UserFriend {
    id: number
    friend: User
}
