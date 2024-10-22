import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('me')
  findOne() {
    return this.userService.findOne('');
  }

  @Put('me')
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.update('', updateUserDto);
  }
}
