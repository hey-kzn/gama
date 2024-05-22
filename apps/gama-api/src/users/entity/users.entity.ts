import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Companies } from '../../activities/entity/companies.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid', { primaryKeyConstraintName: 'PK_USER_ID' })
  id: string;

  @Column({ type: 'varchar', length: 120 })
  username: string;

  @Column({ type: 'varchar', length: 120 })
  email: string;

  @Column({ type: 'varchar' })
  password?: string;

  @CreateDateColumn({
    type: 'timestamp with time zone',
  })
  created_at?: string;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
  })
  updated_at?: string;

  @Column({ type: 'varchar', nullable: true })
  hashed_rt?: string;

  @OneToMany(() => Companies, (companies) => companies.user)
  companies?: Companies[];
}
