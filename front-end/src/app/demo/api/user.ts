export class User {
    id: number
    email: String
    name: String;
    lastName: String;
    friends: UserFriend[]
}

export class UserFriend {
    id: number
    friend: User
}
