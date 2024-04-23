import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MeasuringUnitsService } from './measuring-units.service';
import { CreateMeasuringUnitDto } from './dto/create-measuring-unit.dto';
import { UpdateMeasuringUnitDto } from './dto/update-measuring-unit.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Controller('measuring-units')
export class MeasuringUnitsController {
  constructor(private readonly measurementUnitService: MeasuringUnitsService) {}

  @Get()
  findAll(@Query() paginationQueryDto: PaginationQueryDto) {
    return this.measurementUnitService.findAll(paginationQueryDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.measurementUnitService.findOne(id);
  }

  @Post()
  create(@Body() createMeasuringUnitDto: CreateMeasuringUnitDto) {
    return this.measurementUnitService.create(createMeasuringUnitDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMeasuringUnitDto: UpdateMeasuringUnitDto,
  ) {
    return this.measurementUnitService.update(id, updateMeasuringUnitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.measurementUnitService.remove(id);
  }
}
