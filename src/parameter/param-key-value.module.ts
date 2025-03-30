import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParamKeyValueService } from './param-key-value.service'; // Remplacez avec le bon chemin
import { ParamKeyValue } from './param-key-value.entity'; // Remplacez avec le bon chemin
import { ParamKeyValueController } from './param-key-value.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ParamKeyValue]), // Ajoutez l'entité dans le module
  ],
  controllers: [ParamKeyValueController],
  providers: [ParamKeyValueService], // Ajoutez le service ici
  exports: [ParamKeyValueService], // Si vous voulez l'utiliser dans d'autres modules
})
export class ParamKeyValueModule {}
