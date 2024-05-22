import { Controller, Get, Post } from '@nestjs/common';

@Controller('activities')
export class ActivitiesController {
  // Retourne toutes les activités salariales d'un utilisateur
  @Get()
  getCompanies() {}
  @Get()
  getCompaniesDetails() {}
  // Ajouter une activité salarié
  @Post()
  createCompanyActivity() {}
}
