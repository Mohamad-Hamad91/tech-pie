import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/api/users/users.service';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {

    constructor(private usersService: UsersService, private config: ConfigService) {
        super({
            usernameField: 'email',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            // secretOrKey: process.env.JWT_SECRET,
            secretOrKey: config.get('JWT_SECRET')
        });
    }

    async validate(payload: any): Promise<any> {
        const temp = payload;
        const { _id, email, roles } = await this.validateJWTUser(payload?.email);
        return { _id, email, roles };
    }

    async validateJWTUser(email: string) {
        const user = await this.usersService.findOne(email);
        if (!user) throw new UnauthorizedException("");
        else {
            const { password, ...result } = user;
            return result;
        }
    }
}