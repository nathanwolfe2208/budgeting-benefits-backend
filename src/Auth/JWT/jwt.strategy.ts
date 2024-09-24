import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt'; 
import { jwtFromRequest } from 'passport-jwt'; 
import { jwtConstants } from './jwt.constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // jwtFromRequest: new ExtractJwt().fromAuthHeaderAsBearerToken()
      jwtFromRequest: jwtFromRequest.extractJwtFromAuthHeaderAsBearerToken(), 
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    // Validate the payload here
    
    return payload;
  }
}