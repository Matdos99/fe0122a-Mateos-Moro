import { Component, OnInit } from '@angular/core';
import { FotoService } from 'src/app/foto.service';

@Component({
  selector: 'app-favoriti',
  templateUrl: './favoriti.component.html',
  styleUrls: ['./favoriti.component.scss']
})
export class FavoritiComponent implements OnInit {
  totale: number=0

  constructor(private fotoSrv: FotoService) { }

  ngOnInit(): void {
    this.fotoSrv.sub.subscribe((conta)=>{
      this.totale = conta
    })
  }

}
