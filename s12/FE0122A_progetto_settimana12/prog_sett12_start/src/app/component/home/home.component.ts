import { filmData } from './../../film.service';
import { AuthService } from './../../auth/auth.service';

import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/film.service';
import { style } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  film!:filmData[]

color:any='white'

  constructor(private filmS: FilmService) { }

  ngOnInit(): void {
    this.filmS.getAll().subscribe((data)=>{console.log(data)
      this.film=data

    }

    )
  }





}
