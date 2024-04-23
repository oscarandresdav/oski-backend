import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductType } from './entities/product-type.entity';
import { Repository } from 'typeorm';
import { CreateProductTypeDto } from './dto/create-product-type.dto';
import { UpdateProductTypeDto } from './dto/update-product-type.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Injectable()
export class ProductTypesService {
  constructor(
    @InjectRepository(ProductType)
    private readonly productTypeRepository: Repository<ProductType>,
  ) {}

  findAll(paginationQueryDto: PaginationQueryDto) {
    const { limit, offset } = paginationQueryDto;
    return this.productTypeRepository.find({
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const productType = await this.productTypeRepository.findOne({
      where: { id },
    });
    if (!productType) {
      throw new NotFoundException(`Product type with id {${id}} not found`);
    }
    return productType;
  }

  create(createProductTypeDto: CreateProductTypeDto) {
    const productType = this.productTypeRepository.create(createProductTypeDto);
    return this.productTypeRepository.save(productType);
  }

  async update(id: string, updateProductTypeDto: UpdateProductTypeDto) {
    const productType = await this.productTypeRepository.preload({
      id,
      ...updateProductTypeDto,
    });
    if (!productType) {
      throw new NotFoundException(`Product type with id {${id}} not found`);
    }
    return this.productTypeRepository.save(productType);
  }

  async remove(id: string) {
    const productType = await this.findOne(id);
    return this.productTypeRepository.remove(productType);
  }
}
