import { Body, Controller, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { GetUser } from '../../utils/decorator/get-user.decorator';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller({
  path: 'auth',
  version: '1'
})
@UsePipes(ValidationPipe)
export class AuthController {

  constructor(private authService: AuthService) { }


  @Post('/register')
  async register(@Body() user: RegisterDto) {
    await this.authService.register(user);
  }

  @Post('/login')
  async login(@Body() user: LoginDto) {
    return this.authService.login(user);
  }

  @Post('/admin-login')
  async adminLogin(@Body() user: { email: string, password: string }) {
    return this.authService.login(user);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  async test(@GetUser() user) {
    console.log(user);

  }
}
