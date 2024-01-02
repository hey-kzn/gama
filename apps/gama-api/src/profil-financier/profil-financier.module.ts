import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityProfils } from './entity/profil-financier-types.entity';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityProfils]), ActivityModule],
})
export class ProfilFinancierModule {}
