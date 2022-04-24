import { ClientData, BillData } from '../../model/interface';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { map, tap } from 'rxjs/operators';
import { UserData } from '../../model/interface';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
  clientSource:BillData|any=null;
  pageEvent!:PageEvent
  displayedColumns: string[] = ['numero', 'anno','cliente', 'importo', 'stato','button' ]

  text:any=''

  constructor(private srv:UserService,private router:Router, private route:ActivatedRoute) {
    this.router.events.subscribe((e: any) => {
      if (e["routerEvent"] != undefined) {
        this.ngOnInit()
        }
    })
   }
id:any
Oneid:any
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
this.getBillS()
  }

  getBillS(){
this.srv.getBill(this.id, 0, 20).pipe( map((billData:BillData)=>{this.clientSource=billData})).subscribe()
  }
  onPaginateChange(event:PageEvent){
    let page= event.pageIndex;
    let size= event.pageSize;
    page=page +0

    this.srv.getBill(this.id,page, size).pipe(map(billData=> this.clientSource = billData)).subscribe()

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


}
