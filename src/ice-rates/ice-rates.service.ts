import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IceRate } from './entities/ice-rate.entity';
import { Repository } from 'typeorm';
import { CreateIceRateDto } from './dto/create-ice-rate.dto';
import { UpdateIceRateDto } from './dto/update-ice-rate.dto';

@Injectable()
export class IceRatesService {
  constructor(
    @InjectRepository(IceRate)
    private readonly iceRepository: Repository<IceRate>,
  ) {}

  findAll() {
    return this.iceRepository.find();
  }

  async findOne(id: string) {
    const ice = await this.iceRepository.findOne({ where: { id } });
    if (!ice) {
      throw new NotFoundException(`Ice Rate with id {${id}} not found`);
    }
    return ice;
  }

  create(createIceDto: CreateIceRateDto) {
    const ice = this.iceRepository.create(createIceDto);
    return this.iceRepository.save(ice);
  }

  async update(id: string, updateIceDto: UpdateIceRateDto) {
    const ice = await this.iceRepository.preload({
      id,
      ...updateIceDto,
    });
    if (!ice) {
      throw new NotFoundException(`Ice Rate with id {${id}} not found`);
    }
    return this.iceRepository.save(ice);
  }

  async remove(id: string) {
    const ice = await this.findOne(id);
    return this.iceRepository.remove(ice);
  }
}
