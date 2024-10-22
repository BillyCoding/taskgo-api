import { Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  register(createAuthDto: RegisterAuthDto) {
    return 'This action create a new user';
  }

  login(loginAuthDto: LoginAuthDto) {
    return 'This action get a auth user';
  }
}
