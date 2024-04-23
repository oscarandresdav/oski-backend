import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandsModule } from './brands/brands.module';
import { CategoriesModule } from './categories/categories.module';
import { IceRatesModule } from './ice-rates/ice-rates.module';
import { IvaRatesModule } from './iva-rates/iva-rates.module';
import { ProductTypesModule } from './product-types/product-types.module';
import { MeasuringUnitsModule } from './measuring-units/measuring-units.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'oski',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    BrandsModule,
    CategoriesModule,
    IceRatesModule,
    IvaRatesModule,
    ProductTypesModule,
    MeasuringUnitsModule,
    ProductsModule,
  ],
})
export class AppModule {}
