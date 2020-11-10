export class LoginRequest {
    username: string;
    password: string;

    constructor(
        username: string,
        password: string
    ) {
        this.username = username;
        this.password = password;
    }
}

export class Token {
    jwt: string;

    constructor(jwt: string) {
        this.jwt = jwt;
    }
}