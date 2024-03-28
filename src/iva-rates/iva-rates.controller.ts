import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { IvaRatesService } from './iva-rates.service';
import { CreateIvaRateDto } from './dto/create-iva-rate.dto';
import { UpdateIvaRateDto } from './dto/update-iva-rate.dto';

@Controller('iva-rates')
export class IvaRatesController {
  constructor(private readonly ivaService: IvaRatesService) {}

  @Get()
  findAll() {
    return this.ivaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ivaService.findOne(id);
  }

  @Post()
  create(@Body() createIvaDto: CreateIvaRateDto) {
    return this.ivaService.create(createIvaDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIvaDto: UpdateIvaRateDto) {
    return this.ivaService.update(id, updateIvaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ivaService.remove(id);
  }
}
