import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductBagsComponent } from './product-bags/product-bags.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductRoutingModule } from './product-routing.module';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { TitleTransformPipe } from './title.transform.pipe';



@NgModule({
  declarations: [
    ProductHomeComponent,
    ProductBagsComponent,
    ProductDetailComponent,
    SubCategoryComponent,
    TitleTransformPipe,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ]
})
export class ProductModule {}
