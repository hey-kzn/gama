import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCompaniesActivityDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  job: string;
  @IsNotEmpty()
  @IsString()
  annual_salary_brut: string;
  @IsNotEmpty()
  @IsString()
  started_at: string;
  @IsString()
  end_at?: string;
}
