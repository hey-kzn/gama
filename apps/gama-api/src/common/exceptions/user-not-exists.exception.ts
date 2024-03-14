import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotExistsException extends HttpException {
  constructor() {
    super('The user does not exists', HttpStatus.NOT_FOUND);
  }
}
