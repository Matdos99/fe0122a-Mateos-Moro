import { AuthService } from './../../auth/auth.service';
import { UserService} from './../../user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, map, Observable, of, tap } from 'rxjs';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../model/interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{

dataSource:UserData|any=null;
pageEvent!:PageEvent
displayedColumns: string[] = ['id', 'username', 'email', 'roles']


  user!:UserData|any


  constructor(private srv:UserService, private active:ActivatedRoute, private auth:AuthService){

  }

  ngOnInit(): void {
this.initDataSource()
this.auth.user$.subscribe(data=> {
  this.user=data
})
  }

  initDataSource(){
    this.srv.getUser(0,20).pipe(tap(users=> console.log(users)), map((userData:UserData)=>{this.dataSource=userData})).subscribe()
  }

  onPaginateChange(event:PageEvent){
    let page= event.pageIndex;
    let size= event.pageSize;
    page=page +0

    this.srv.getUser(page, size).pipe(map(userData=> this.dataSource = userData)).subscribe()

  }

}
