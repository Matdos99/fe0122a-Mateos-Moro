import { filmData, filmFavourite } from './../../film.service';
import { AuthService } from './../../auth/auth.service';

import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/film.service';
import { PartialObserver } from 'rxjs';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  film!:filmFavourite[]|any
isLoading=false
color:any='white'

  constructor(private filmS: FilmService) { }

  ngOnInit(): void {
    this.filmS.getAll().subscribe((data)=>{console.log(data)
      this.film=data

    }

    )
  }

  addFavorite(data: any){
    this.filmS.addFavourite(data).subscribe(data=>{console.log(data)
  })

}

  deleteFavourite(data:any){
    this.filmS.deleteFavorite(data).subscribe(data=>{console.log(data)})}

}



       /* async addFavourite(data:filmFavourite){
          this.isLoading=true
          try{

            await this.addFavourite(data)
          }
          catch(error){
            this.isLoading=false
            console.log(error)
            console.log(data)
          }

          }*/










