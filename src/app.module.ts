import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Info } from './info-model';
import { InfoServices } from './info-service';
import { InformacoesControler as InformacoesController } from './informacoes-controller';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootadmin',
      database: 'clientes',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Info])
  ],
  controllers: [AppController, InformacoesController],
  providers: [AppService, InfoServices],
})
export class AppModule {}
