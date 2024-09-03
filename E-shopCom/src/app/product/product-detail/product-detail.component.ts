import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaypalService } from 'src/app/services/paypal.service';
import { environment } from 'src/environments/environment';
import { ProductService } from '../services/product.service';

declare var paypal: any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @ViewChild('paypal', { static: true })
  paypalElement: any

  product: any

  images = [
    { path: 'https://ik.imagekit.io/bprw8mk45/products/bags_300_vKpy1UGw8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653603859448' },
    { path: 'https://ik.imagekit.io/bprw8mk45/products/bags_300_vKpy1UGw8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653603859448' },
    { path: 'https://ik.imagekit.io/bprw8mk45/products/bags_300_vKpy1UGw8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653603859448' },
    { path: 'https://ik.imagekit.io/bprw8mk45/products/bags_300_vKpy1UGw8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653603859448' },
    { path: 'https://ik.imagekit.io/bprw8mk45/products/bags_300_vKpy1UGw8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653603859448' },
    { path: 'https://ik.imagekit.io/bprw8mk45/products/bags_300_vKpy1UGw8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653603859448' },
    { path: 'https://ik.imagekit.io/bprw8mk45/products/bags_300_vKpy1UGw8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653603859448' },
  ]

  clientId: string = environment.clientId
  constructor(private activatedRoute: ActivatedRoute,
    public productService: ProductService,
    public paypalService: PaypalService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(url => {
      console.log('url', url['id'])

      this.productService.getProductDetailById(url['id'])
        .subscribe(data => {
          console.log('data', data)
          this.product = data
        })
    })

    this.paypalService.initiate(this.clientId).subscribe(
      () => paypal.Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                name: this.product.brands,
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.product.price,
                }
              }
            ]
          });
        },

        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          console.log('order', order)
        },
        onCancel: (data: any, actions: any) => {
          return actions.redirect('/')
        },
        onError: (err: any) => {
          console.log('Error', err)
        }
      }).render(this.paypalElement.nativeElement)
    );
  }

}