import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserActivityProfil } from './entity/user-activity-profil.entity';
import { Repository } from 'typeorm';
import { transformUserActivityProfil } from './dto/get-user-activity-profil.dto';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(UserActivityProfil)
    private userActivityProfilRepository: Repository<UserActivityProfil>,
  ) {}
  async getAllActivitiesUser(userId: string) {
    const data = await this.userActivityProfilRepository.find({
      where: { user: userId },
      relations: ['activityProfilsEntity', 'userEntity'],
    });
    return data.map(transformUserActivityProfil);
  }
}
