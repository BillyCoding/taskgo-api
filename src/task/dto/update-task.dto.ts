import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {

    @ApiProperty({ description: 'Indicates whether the task is complete' })
    @IsBoolean()
    checked: boolean
}
