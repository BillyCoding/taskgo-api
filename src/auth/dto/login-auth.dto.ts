import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginAuthDto {
    @ApiProperty({ description: 'User e-mail' })
    @IsEmail()
    email: string

    @ApiProperty({ description: 'User password' })
    @IsNotEmpty()
    password: string
}