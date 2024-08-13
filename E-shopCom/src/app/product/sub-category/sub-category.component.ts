import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  subProducts: any;
  routeName: any

  constructor(private activatedRoute: ActivatedRoute, public productService: ProductService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (data: any) => { 
        console.log('data', data['id'])
        this.routeName = data['id']
        this.productService.getProductsBySubCategory(data['id']).subscribe(
          products => {
            console.log('products', products)
            this.subProducts = products
          }
        )
    
      }

    )

  }
}
