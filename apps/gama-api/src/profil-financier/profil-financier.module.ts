import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProfilFinancierTypes} from "./entity/profil-financier-types.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ProfilFinancierTypes])]
})
export class ProfilFinancierModule {}
