import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  findOne(token: string) {
    const id = token
    return `This action returns a #${id} user`;
  }

  update(token: string, updateUserDto: UpdateUserDto) {
    const id = token
    return `This action updates a #${id} user`;
  }
}
