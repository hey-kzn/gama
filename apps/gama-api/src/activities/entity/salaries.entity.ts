import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Companies } from './companies.entity';

@Entity('salaries')
export class Salaries {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  // companie
  @Column()
  amount: string;
  @Column()
  statement: string;
  @CreateDateColumn()
  created_at: string;
  @UpdateDateColumn()
  updated_at: string;

  @ManyToOne(() => Companies, (companies) => companies.salaries)
  companies: Companies;
}
