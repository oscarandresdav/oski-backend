import { Module } from '@nestjs/common';
import { MeasuringUnitsService } from './measuring-units.service';
import { MeasuringUnitsController } from './measuring-units.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeasuringUnit } from './entities/measuring-unit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MeasuringUnit])],
  providers: [MeasuringUnitsService],
  controllers: [MeasuringUnitsController],
})
export class MeasuringUnitsModule {}
