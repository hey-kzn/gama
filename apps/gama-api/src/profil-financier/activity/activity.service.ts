import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserActivityProfil } from './entity/user-activity-profil.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(UserActivityProfil)
    private userActivityProfilRepository: Repository<UserActivityProfil>,
  ) {}
  async getAllActivitiesUser(userId: string) {
    return await this.userActivityProfilRepository.find({
      where: { user: userId },
    });
  }
}
