import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
cartDataList:any=[]
cartDetailList:any=[]
productList= new BehaviorSubject<any>([])
detailsList= new BehaviorSubject<any>([])

  constructor(private http: HttpClient) { }

  getProductData(){
    return this.productList.asObservable()
  }


  setProduct(product:any){
    this.cartDataList.push(...product)
    this.productList.next(product)
  }

  addToCart(product:any){
    this.cartDataList.push(product)
    this.productList.next(this.cartDataList)
    this.getTotalAmount()
  }
  addToDetails(product:any){
    this.cartDetailList.push(product)
    this.productList.next(this.cartDetailList)
    this.getTotalAmount()
  }

  getTotalAmount(){
    let grandToal=0
    this.cartDataList.map((a:any)=>{
      grandToal += a.total
    })
  }

  removeCartData(product:any){
    this.cartDataList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartDataList.splice(index, 1)
      }
    })
  }
  removeDetail(product:any){
    this.cartDetailList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartDetailList.splice(index, 1)
      }
    })
  }

  removeAll(){
    this.cartDataList=[]
    this.productList.next(this.cartDataList)

  }
}
