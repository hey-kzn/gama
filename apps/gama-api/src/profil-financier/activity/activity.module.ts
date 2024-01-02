import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserActivityProfil } from './entity/user-activity-profil.entity';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserActivityProfil])],
  controllers: [ActivityController],
  providers: [ActivityService],
})
export class ActivityModule {}
