import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { UserService } from 'src/app/user.service';
import { BillData } from '../../model/interface';

@Component({
  selector: 'app-all-bills',
  templateUrl: './all-bills.component.html',
  styleUrls: ['./all-bills.component.scss']
})
export class AllBillsComponent implements OnInit {

  clientSource:BillData|any=null;
  pageEvent!:PageEvent
  displayedColumns: string[] = ['numero', 'anno','cliente', 'importo', 'stato', 'button']

  constructor(private srv:UserService, private route:ActivatedRoute, private router:Router) {
    
   }
id:any
Oneid:any
  ngOnInit(): void {
this.getallBill()
  }

  getallBill(){
this.srv.getallBill(0, 20).pipe(tap(users=> console.log(users)), map((billData:BillData)=>{this.clientSource=billData})).subscribe()
  }
  onPaginateChange(event:PageEvent){
    let page= event.pageIndex;
    let size= event.pageSize;
    page=page +0

    this.srv.getallBill(page, size).pipe(map(billData=> this.clientSource = billData)).subscribe()

  }

  popUp(id:number){
    if(confirm("Sei sicuro di voler cancellare?"))
    {this.deleteClientBill(id)}
  }

  async deleteClientBill(Oneid:number){
    try{
    await this.srv.deleteClientBill(Oneid).subscribe()
     console.log(Oneid)
   }
   catch(error){
     console.log(error)

   }}


   onChangeUr1() {

    }


}
