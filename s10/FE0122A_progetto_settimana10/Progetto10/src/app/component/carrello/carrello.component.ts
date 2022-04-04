import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/service/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {
  products:Product[]=[]
  allProduct:any=0


  constructor(private rs:ProductsService, private ts:CartService) { }


  ngOnInit(): void {

    this.ts.getProductData().subscribe((response)=>{
      this.products=response
      this.allProduct=this.ts.getTotalAmount()
      console.log(response)
      console.log()

    })
  }


  removeItem(item:any){
    this.ts.removeCartData(item)

  }

  removeAll(){
    this.ts.removeAll()
  }

}
