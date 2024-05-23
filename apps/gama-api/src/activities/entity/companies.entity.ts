import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Users } from '../../users/entity/users.entity';
import { Salaries } from './salaries.entity';

@Entity('companies')
export class Companies {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  // user
  @Column()
  name: string;
  @Column()
  job: string;
  @Column()
  annual_salary_brut: string;
  @Column({ type: 'date' })
  started_at: Date;
  @Column({ type: 'date' })
  end_at: Date;
  @CreateDateColumn()
  created_at: string;
  @UpdateDateColumn()
  updated_at: string;

  @ManyToOne(() => Users, (users) => users.companies)
  user: Users;

  @OneToMany(() => Salaries, (salaries) => salaries.companies)
  salaries: Salaries[];
}
