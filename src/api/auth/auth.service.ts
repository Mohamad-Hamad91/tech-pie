import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async register(user: RegisterDto) {
        return this.usersService.create(user);
    }

    async validateJWTUser(email: string) {
        const user = await this.usersService.findOne(email);
        if (!user) throw new UnauthorizedException("");
        else {
            const { password, ...result } = user;
            return result;
        }
    }

    async login(data: LoginDto) {
        const user = await this.validateLocalUser(data.email, data.password);
        if (!user) throw new UnauthorizedException("");
        const payload = { email: user?.email, id: user?._id.toString(), roles: user?.roles };
        const accessToken = await this.jwtService.signAsync(payload);
        return { accessToken, email: user?.email, id: user?._id.toString(), roles: user?.roles};
    }

    async validateLocalUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        if (user && (await bcrypt.compare(pass, user.password))) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

}
