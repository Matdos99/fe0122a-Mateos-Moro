import { Product } from 'src/app/model/product';
import { observable, map, Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  product!: Product[]

  baseUrl='http://localhost:4201/product';
  url='${this.baseUrl}/${id}'

  constructor(private HttpClient: HttpClient) { }
  //per chiamare elenco prodotti: ${this.baseUrl}/product

  //per chiamare il dettaglio prodotti: ${this.baseUrl}/product/${id}

  getData(){
  return this.HttpClient
    .get(this.baseUrl).pipe(map((res:any)=>{
      return res

    }))

/*.subscribe((product: Product[]|any) => {
      console.log('prodotti', product)
      this.product = product
    },(error) => console.log("error : " + error))*/}

  getDataId(id:number):Observable<Product>{

    return this.HttpClient.get<Product>(this.url)
  }


update(product:Product):Observable<any>{
  return this.HttpClient.put(this.baseUrl, product)

}
}

/*export function Upload(){
  const baseUrl='http://localhost:4201/product';

  const product:Product[]=[]
  product = product.map(product => product.id == id ? { ...product} : product);
return product.find(product => product.id == id) as Product;}*/








