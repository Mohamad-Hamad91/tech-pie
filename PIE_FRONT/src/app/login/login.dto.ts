export class LoginDto {
    email: string;
    password: string;
}

export class LoginResDto {
    accessToken: string;
    email: string;
    id: string;
    roles: string[];
}