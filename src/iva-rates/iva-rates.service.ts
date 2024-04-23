import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IvaRate } from './entities/iva-rate.entity';
import { Repository } from 'typeorm';
import { CreateIvaRateDto } from './dto/create-iva-rate.dto';
import { UpdateIvaRateDto } from './dto/update-iva-rate.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Injectable()
export class IvaRatesService {
  constructor(
    @InjectRepository(IvaRate)
    private readonly ivaRepository: Repository<IvaRate>,
  ) {}

  findAll(paginationQueryDto: PaginationQueryDto) {
    const { limit, offset } = paginationQueryDto;
    return this.ivaRepository.find({
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const iva = await this.ivaRepository.findOne({ where: { id } });
    if (!iva) {
      throw new NotFoundException(`Iva Rate with id {${id}} not found`);
    }
    return iva;
  }

  create(createIvaDto: CreateIvaRateDto) {
    const iva = this.ivaRepository.create(createIvaDto);
    return this.ivaRepository.save(iva);
  }

  async update(id: string, updateIvaDto: UpdateIvaRateDto) {
    const iva = await this.ivaRepository.preload({
      id,
      ...updateIvaDto,
    });
    if (!iva) {
      throw new NotFoundException(`Iva Rate with id {${id}} not found`);
    }
    return this.ivaRepository.save(iva);
  }

  async remove(id: string) {
    const iva = await this.findOne(id);
    return this.ivaRepository.remove(iva);
  }
}
