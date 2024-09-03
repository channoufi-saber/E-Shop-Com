import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.apiUrl + '/product')
  }

  getProductsBySubCategory(id: any) {
    return this.http.get(this.apiUrl + '/product/category/' + id)
  }

  getProductDetailById(id: any) {
    return this.http.get(this.apiUrl + '/product/' + id)

  }

  createProduct(product: any) {
    return this.http.post(this.apiUrl + '/product', product).subscribe(data => console.log(data))
  }

  deleteProduct(id: any) {
    return this.http.delete(this.apiUrl + '/product/' + id, { responseType: 'text' })
  }

  editProduct(id: any, product: any) {
    return this.http.patch(this.apiUrl + '/product/' + id, product)
  }
}
















