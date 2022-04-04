import { FotoService } from 'src/app/foto.service';
import { Component } from '@angular/core';
import { Foto } from './inteface/foto';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 's9_g2';

  fotoInArrivo:Foto[]| undefined

  constructor(private fotoSrv:FotoService){}

  ngOnInit(): void {
    this.fotoSrv.get().subscribe((fotoArrivate)=>{
      this.fotoInArrivo = fotoArrivate
    }, (err)=>{alert(err)},
    )}

    cancella(id:number, index:number){
      this.fotoSrv.delete(id).subscribe(()=>{
        this.fotoInArrivo?.splice(index, 1)
      },(err)=>{
        alert(err)
      })
    }

    aggiungiFavoriti(){
      this.fotoSrv.conta()
    }
}
