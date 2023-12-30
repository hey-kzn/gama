import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'profils_financier_types' })
export class ProfilFinancierTypes {
  @PrimaryGeneratedColumn('uuid', {
    primaryKeyConstraintName: 'PK_PROFILS_FINANCIER_TYPES',
  })
  id: string;
  @Column({ type: 'varchar' })
  name: string;
}
