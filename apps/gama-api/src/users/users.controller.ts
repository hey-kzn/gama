import { Controller, Delete, Get, Param, Patch, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDTO } from './dto/update-user-dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  async findOne(@Param() id: string) {
    console.log(id);
    return await this.usersService.findOne(id);
  }

  // Activité de l'utilisateur
  @Get(':id/activities')
  getUsersActivities() {
    return 'todo';
  }

  @Patch(':id')
  async update(@Param() id: string, @Body() dto: UpdateUserDTO) {
    return await this.usersService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param() id: string) {
    return await this.usersService.delete(id);
  }
}
