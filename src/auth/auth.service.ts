import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) { }

  async register(registerAuthDto: RegisterAuthDto) {
    const { name, email, password } = registerAuthDto;

    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) throw new ConflictException('Já possui um usuário com este e-mail.');

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await this.userRepository.save(user)

    delete user.password;

    return user;
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }

  async login(loginAuthDto: LoginAuthDto) {
    const { email, password } = loginAuthDto;
    const user = await this.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    delete user.password

    const payload = { sub: user.id, email: user.email };
    const access_token = this.jwtService.sign(payload)

    return {
      ...user,
      access_token,
    };
  }
}
