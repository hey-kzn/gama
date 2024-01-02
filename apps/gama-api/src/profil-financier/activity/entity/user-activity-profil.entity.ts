import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ManyToOne } from 'typeorm';
import { User } from '../../../users/entity/user.entity';
import { ActivityProfils } from '../../entity/profil-financier-types.entity';

@Entity({})
export class UserActivityProfil {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user: string;

  @Column()
  type: string;

  // activity profil
  @Column({ type: 'boolean' })
  status: boolean;

  @CreateDateColumn({
    type: 'timestamp with time zone',
  })
  created_at: string;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
  })
  updated_at: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user' })
  userEntity: User;

  @ManyToOne(() => ActivityProfils)
  @JoinColumn({ name: 'type' })
  activityProfilsEntity: ActivityProfils;
}
