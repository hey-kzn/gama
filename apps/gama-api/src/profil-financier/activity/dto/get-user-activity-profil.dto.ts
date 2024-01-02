import { UserActivityProfil } from '../entity/user-activity-profil.entity';

export interface GetUserActivityProfilDto {
  id: string;
  typeName: string;
  status: boolean;
}

export const transformUserActivityProfil = (
  userActivityProfil: UserActivityProfil,
): GetUserActivityProfilDto => {
  return {
    id: userActivityProfil.id,
    typeName:
      userActivityProfil.activityProfilsEntity.name || userActivityProfil.type,
    status: userActivityProfil.status,
  };
};
