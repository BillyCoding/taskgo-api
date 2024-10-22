import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class UpdateUserDto {

    @ApiProperty({ description: 'User name' })
    @IsNotEmpty()
    name: string
}
