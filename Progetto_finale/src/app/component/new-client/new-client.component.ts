import { Client, ClientData } from './../../model/interface';
import { Provincia } from './../../model/Provincia';
import { Comune } from './../../model/Comune';

import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../user.service';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Component, ElementRef, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
  id: any = 0
  form!: FormGroup
  comune!: any
  provincia!: any
  clientData!: Client
  comuni!:any
  isLoadingIn=false

  constructor(private srv: UserService, private route: ActivatedRoute, private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=> {
      this.id=+params['id'];
      //this.inizializzaForm()
    })
    this.getOneClientData()
    this.getComune()
    this.getProvincia()

  }

  /*Client(form:NgForm) {
    this.comuni.forEach((item:any) => {
      if(item.id==form.value.indirizzoSedeOperativa.comune.id)
      { form.value.indirizzoSedeOperativa.comune=item}
    });

    try {
      this.srv.Client(this.id, form.value).toPromise()
      console.log(form.value)

    } catch (error) {
      console.log(error)
    }

  }*/

  async onSubmit(form:NgForm){
    this.isLoadingIn=true
    try{
      this.isLoadingIn=false
      await this.srv.Client(this.id, form.value).toPromise()
      console.log(form.value)
      this.router.navigate(['/client'])
    }catch(error:any){
      this.isLoadingIn=false

      console.log(error)
      console.log(form.value)
    }


    }

  /*inizializzaForm() {
    this.form = this.fb.group({
      ragioneSociale: new FormControl('', [Validators.required]),
      partitaIva: new FormControl('', [Validators.required]),
      tipoCliente: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      pec: new FormControl(''),
      telefono: new FormControl(''),
      nomeContatto: new FormControl(''),
      cognomeContatto: new FormControl(''),
      telefonoContatto: new FormControl(''),
      emailContatto: new FormControl('', [Validators.required]),
      indirizzoSedeOperativa: this.fb.group({
        via: new FormControl(''),
        civico: new FormControl(''),
        cap: new FormControl(''),
        localita: new FormControl(''),
        comune: this.fb.group({
          id: new FormControl(''),
          nome: new FormControl(''),
          provincia: {}
        })
      }),


    })
  }*/

  getOneClientData() {
    this.srv.getOneClientData(this.id).subscribe(data => {
      console.log(data)
      this.clientData = data
    })
  }

  getComune() {
    this.srv.getComuni().subscribe(data => {
      console.log(data)
      this.comune = data
    })
  }
  getProvincia() {
    this.srv.getProvincia().subscribe(data => {
      console.log(data)
      this.provincia = data
    })
  }


}
