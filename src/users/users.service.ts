import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: '1',
      username: 'oscarandresdav',
      email: 'oscar@mail.com',
      password: 'password',
      status: true,
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`User with id {${id}} not found`);
    }
    return user;
  }

  create(createUserDto: any) {
    this.users.push(createUserDto);
    return createUserDto;
  }

  update(id: string, updateUserDto: any) {
    const existingUser = this.findOne(id);
    if (existingUser) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const userIndex = this.users.findIndex((item) => item.id === id);
    if (userIndex >= 0) {
      this.users.splice(userIndex, 1);
    }
  }
}
