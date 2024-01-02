import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'activity_profils' })
export class ActivityProfils {
  @PrimaryGeneratedColumn('uuid', {
    primaryKeyConstraintName: 'PK_ACTIVITY_PROFILS',
  })
  id: string;
  @Column({ type: 'varchar' })
  name: string;
}
