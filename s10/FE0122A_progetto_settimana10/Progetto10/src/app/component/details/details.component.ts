import { CartService } from './../../service/cart.service';

import { Routes, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from './../../model/product';

import { Component, OnInit } from '@angular/core';



import { ProductsService} from 'src/app/service/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  product!: Product[];



  constructor(private rs: ProductsService, private ts: CartService) { }

  ngOnInit():void{
    this.ts.getProductData().subscribe((response)=>{
      this.product=response;

    })


    }
    addtoCart(item:any){
      this.ts.addToCart(item)


    }

    removeItemDetails(item:any){
      this.ts.removeDetail(item)

    }






    }





