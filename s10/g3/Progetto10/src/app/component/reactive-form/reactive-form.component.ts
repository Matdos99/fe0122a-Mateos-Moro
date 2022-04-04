import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  form!:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      nome:[],
      alterEgo:[],
      poteri:this.fb.array([]),
      pianeta:[],
      debolezza:this.fb.array([])
    })
  }

  controlloErrori(name:string, error:string
  ){
    return this.form.get(name)?.errors![error]
  }

  controlloForm(name:string){
    return this.form.get(name) as AbstractControl

  }

  aggiungiPoteri(){
    const nuovoControllo= new FormControl(null);
    (this.form.get('power') as FormArray).push(nuovoControllo)
  }

  restituisciArray(name:string){
    return(this.form.get(name) as FormArray).controls

  }

  aggiungiDebolezza(){
    const nuovoControllo= new FormControl(null);
    (this.form.get('debolezza') as FormArray).push(nuovoControllo)
  }

  submit(){
    console.log(this.form.value)
  }

}
