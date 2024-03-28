import { Module } from '@nestjs/common';
import { IceRatesService } from './ice-rates.service';
import { IceRatesController } from './ice-rates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IceRate } from './entities/ice-rate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IceRate])],
  providers: [IceRatesService],
  controllers: [IceRatesController],
})
export class IceRatesModule {}
