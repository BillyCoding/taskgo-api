import { Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  register(createAuthDto: RegisterAuthDto) {
    return 'This action create a new user';
  }

  login(loginAuthDto: LoginAuthDto) {
    const mock = {
      name: "John Doo",
      email: "johndoo@email.com",
      token: "Ds8btkOGy9E47bUztVcGk0ijgj2uhsz20SlmcdDi7mXSamDKTFBTOw6ZxTdHmIcg"
    }
    return mock;
  }
}
