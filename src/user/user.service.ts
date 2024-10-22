import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async findOne(userId: string) {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    delete user.password
    return user;
  }

  update(token: string, updateUserDto: UpdateUserDto) {
    const id = token
    return `This action updates a #${id} user`;
  }
}
