import { Product } from './model/product';
import { ProductsService } from 'src/app/service/products.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Progetto10';
  constructor(private rs:ProductsService){}

  product!: Product[];

  ngOnInit():void{
    this.rs.getData()

  }


}
