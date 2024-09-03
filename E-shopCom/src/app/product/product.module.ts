import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ProductAccessoriesComponent } from './product-accessories/product-accessories.component';
import { ProductBagsComponent } from './product-bags/product-bags.component';
import { ProductClothingComponent } from './product-clothing/product-clothing.component';
import { ProductCosmeticsComponent } from './product-cosmetics/product-cosmetics.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductRoutingModule } from './product-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { TitleTransformPipe } from './title.transform.pipe';
import { ProductEditComponent } from './product-edit/product-edit.component';



@NgModule({
  declarations: [
    ProductHomeComponent,
    ProductBagsComponent,
    ProductDetailComponent,
    SubCategoryComponent,
    TitleTransformPipe,
    NavbarComponent,
    ProductClothingComponent,
    ProductCosmeticsComponent,
    ProductAccessoriesComponent,
    ProductCreateComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    IvyCarouselModule,
    ReactiveFormsModule
  ]
})
export class ProductModule {}
