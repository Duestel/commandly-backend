import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';

@Injectable()
export class CommonService {
  hashPassword(password: string) {
    return argon.hash(password);
  }

  comparePassword(password: string, hash: string) {
    return argon.verify(hash, password);
  }
}
