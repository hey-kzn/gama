import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Companies } from './entity/companies.entity';
import { Salaries } from './entity/salaries.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Companies, Salaries])],
  exports: [TypeOrmModule],
})
export class ActivitiesModule {}
