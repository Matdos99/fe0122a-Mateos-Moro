import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductsService } from 'src/app/service/products.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
totalItemNumber:number=0;

  constructor(private ts:CartService) { }

  ngOnInit(): void {
    this.ts.getProductData().subscribe((res)=>{
      this.totalItemNumber = res.lenght;
      console.log(res)

    })
  }



}
