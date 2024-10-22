import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, MinLength } from "class-validator"

export class RegisterAuthDto {
    @ApiProperty({ description: 'User name' })
    @IsNotEmpty()
    name: string

    @ApiProperty({ description: 'User e-mail' })
    @IsEmail()
    email: string


    @ApiProperty({ description: 'User password' })
    @IsNotEmpty()
    @MinLength(8)
    password: string
}
