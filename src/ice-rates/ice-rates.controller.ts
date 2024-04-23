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
import { IceRatesService } from './ice-rates.service';
import { CreateIceRateDto } from './dto/create-ice-rate.dto';
import { UpdateIceRateDto } from './dto/update-ice-rate.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Controller('ice-rates')
export class IceRatesController {
  constructor(private readonly iceService: IceRatesService) {}

  @Get()
  findAll(@Query() paginationQueryDto: PaginationQueryDto) {
    return this.iceService.findAll(paginationQueryDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.iceService.findOne(id);
  }

  @Post()
  create(@Body() createIceDto: CreateIceRateDto) {
    return this.iceService.create(createIceDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIceDto: UpdateIceRateDto) {
    return this.iceService.update(id, updateIceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iceService.remove(id);
  }
}
