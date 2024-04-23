import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MeasuringUnit } from './entities/measuring-unit.entity';
import { Repository } from 'typeorm';
import { CreateMeasuringUnitDto } from './dto/create-measuring-unit.dto';
import { UpdateMeasuringUnitDto } from './dto/update-measuring-unit.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Injectable()
export class MeasuringUnitsService {
  constructor(
    @InjectRepository(MeasuringUnit)
    private readonly measuringUnitRepository: Repository<MeasuringUnit>,
  ) {}

  findAll(paginationQueryDto: PaginationQueryDto) {
    const { limit, offset } = paginationQueryDto;
    return this.measuringUnitRepository.find({
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const measuringUnit = await this.measuringUnitRepository.findOne({
      where: { id },
    });
    if (!measuringUnit) {
      throw new NotFoundException(`Measuring Unit with id{${id}} not found`);
    }
    return measuringUnit;
  }

  create(createMeasuringUnitDto: CreateMeasuringUnitDto) {
    const measuringUnit = this.measuringUnitRepository.create(
      createMeasuringUnitDto,
    );
    return this.measuringUnitRepository.save(measuringUnit);
  }

  async update(id: string, updateMeasuringUnitDto: UpdateMeasuringUnitDto) {
    const measuringUnit = await this.measuringUnitRepository.preload({
      id,
      ...updateMeasuringUnitDto,
    });
    if (!measuringUnit) {
      throw new NotFoundException(`Measuring Unit with id{${id}} not found`);
    }
    return this.measuringUnitRepository.save(measuringUnit);
  }

  async remove(id: string) {
    const measuringUnit = await this.findOne(id);
    return this.measuringUnitRepository.remove(measuringUnit);
  }
}
