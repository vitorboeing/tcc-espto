import { City } from "./location";

export class User {
    id: number
    email: String
    name: String;
    bio: String;
    lastName: String;
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
