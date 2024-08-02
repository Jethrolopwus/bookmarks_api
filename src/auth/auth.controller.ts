import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authservices: AuthService) {}
  @Post('signup')
  signup(@Body() dto: authDto) {
    return this.authservices.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: authDto) {
    return this.authservices.signin(dto);
  }
}
