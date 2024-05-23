import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCompaniesActivityDTO } from './dto/create-companies-activity.dto';
import { ActivitiesService } from './activities.service';

@Controller('activities')
export class ActivitiesController {
  constructor(private activtiesService: ActivitiesService) {}
  // Retourne toutes les activités salariales d'un utilisateur
  @Get()
  async getCompanies() {
    return await 'todo';
  }
  @Get()
  async getCompaniesDetails() {
    return await 'todo';
  }
  // Ajouter une activité salarié
  @Post()
  async createCompanyActivity(@Body() dto: CreateCompaniesActivityDTO) {
    return await this.activtiesService.createCompanyActivity(dto);
  }
}
