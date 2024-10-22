import { Body, Controller, Get, Param, Put, Req, UseGuards } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('me')
  findOne(@Req() req) {
    const userId = req.user.userId;
    return this.userService.findOne(userId);
  }

  @Put('me')
  update(@Req() req, @Body() updateUserDto: UpdateUserDto) {
    const userId = req.user.userId;
    return this.userService.update(userId, updateUserDto);
  }
}
