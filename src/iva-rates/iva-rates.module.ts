import { Module } from '@nestjs/common';
import { IvaRatesService } from './iva-rates.service';
import { IvaRatesController } from './iva-rates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IvaRate } from './entities/iva-rate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IvaRate])],
  providers: [IvaRatesService],
  controllers: [IvaRatesController],
})
export class IvaRatesModule {}
