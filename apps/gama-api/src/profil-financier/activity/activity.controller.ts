import { Controller, Get, Param } from '@nestjs/common';
import { ActivityService } from './activity.service';

@Controller('activity')
export class ActivityController {
  constructor(private userActivityService: ActivityService) {}

  @Get(':id')
  async getAllActivitiesUser(@Param('id') userId: string) {
    return await this.userActivityService.getAllActivitiesUser(userId);
  }
}
