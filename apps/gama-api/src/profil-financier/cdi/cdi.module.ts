import { Module } from '@nestjs/common';
import { SalariesService } from './salaries/salaries.service';

@Module({
  imports: [SalariesService],
})
export class CdiModule {}
