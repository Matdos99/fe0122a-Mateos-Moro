import { Router, ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { UserService} from './../../user.service';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { ClientData } from '../../model/interface';
import { map, tap } from 'rxjs/operators';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
clientSource:ClientData|any=null
pageEvent!:PageEvent
displayedColumns: string[]=['id', 'ragioneSociale', 'tipoCliente', 'telefonoContatto', 'button']
id!:number


  constructor(private srv:UserService, private router:Router, private route:ActivatedRoute) {
   }

  ngOnInit(): void {
this.initDataSource()
  }
  initDataSource(){
    this.srv.getClient(0,20/*, {id: 0, ASC: ''}*/).pipe(map((clientData:ClientData)=>{this.clientSource=clientData})).subscribe()
  }

  onPaginateChange(event:PageEvent){
    let page= event.pageIndex;
    let size= event.pageSize;
    page=page +0

    this.srv.getClient(page, size).pipe(map(userData=> this.clientSource = userData)).subscribe()

  }

  popUp(id:number){
    if(confirm("Sei sicuro di voler cancellare?"))
    {this.deleteCliente(id)
      this.resetPage()
  }
  }

  resetPage(){
    this.router.routeReuseStrategy.shouldReuseRoute= () => false;
    this.router.onSameUrlNavigation= 'reload';
    this.router.navigate(['/client'], {
      relativeTo: this.route
  })}


   async deleteCliente(id:number){
     try{
     await this.srv.deleteClient(id).subscribe()

     this.router.navigate([this.route.url])
      console.log(id)
    }
    catch(error){
      console.log(error)

    }
  }

  
}
