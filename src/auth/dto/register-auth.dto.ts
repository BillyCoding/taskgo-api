import { IsEmail, IsNotEmpty, MinLength } from "class-validator"

export class RegisterAuthDto {
    @IsNotEmpty()
    name: string

    @IsEmail()
    email: string

    @IsNotEmpty()
    @MinLength(8)
    password: string
}
