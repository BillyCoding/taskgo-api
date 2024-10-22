import { Injectable, NotFoundException } from '@nestjs/common';
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

  async update(userId: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) throw new NotFoundException('Usuário não encontrado');

    Object.assign(user, updateUserDto);

    await this.userRepository.save(user);

    delete user.password
    return user;
  }
}
