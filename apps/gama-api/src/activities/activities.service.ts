import { Injectable } from '@nestjs/common';
import { CreateCompaniesActivityDTO } from './dto/create-companies-activity.dto';
import { Repository } from 'typeorm';
import { Companies } from './entity/companies.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Companies)
    private companiesRepository: Repository<Companies>,
  ) {}
  async createCompanyActivity(dto: CreateCompaniesActivityDTO) {
    try {
      return await this.companiesRepository.save(dto);
    } catch (err) {}
  }
}
