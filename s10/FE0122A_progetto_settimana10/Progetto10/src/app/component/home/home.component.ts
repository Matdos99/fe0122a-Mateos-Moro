
import { Product } from './../../model/product';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 product!: Product[];


  constructor(private rs: ProductsService, private ts:CartService) { }




  ngOnInit():void{
    this.rs.getData().subscribe((response)=>{
      this.product=response;
      this.product.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})

      })
    })


    }

addtoCart(item:any){
  this.ts.addToCart(item)
}

addtoDetail(item:any){
  this.ts.addToDetails(item)
}

}
