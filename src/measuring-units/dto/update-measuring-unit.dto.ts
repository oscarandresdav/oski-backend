import { PartialType } from '@nestjs/mapped-types';
import { CreateMeasuringUnitDto } from './create-measuring-unit.dto';

export class UpdateMeasuringUnitDto extends PartialType(
  CreateMeasuringUnitDto,
) {}
