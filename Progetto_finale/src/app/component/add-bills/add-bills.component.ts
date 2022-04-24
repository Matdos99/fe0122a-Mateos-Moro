import { bill } from 'src/app/model/Bills';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-bills',
  templateUrl: './add-bills.component.html',
  styleUrls: ['./add-bills.component.scss']
})
export class AddBillsComponent implements OnInit {
  
  form!:bill
  id!:any
  bill!:bill
  theseId:any=''

  constructor(private srv:UserService,  private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=> {
      this.id=+params ['id'];
      this.updateBill()

    })

  }



  async onSubmit(form:NgForm){

    try{
      await this.srv.Bills(this.id, form.value).subscribe(data=>{
      console.log(data)})
      this.router.navigate(['/fatture/'+ this.bill.cliente?.id])
    }catch(error:any){
      console.log(error)
      console.log(form.value)
    }
}

updateBill() {
  this.srv.updateBill(this.id).subscribe(data => {
    console.log(data)
    this.bill = data
    this.theseId= this.bill.cliente?.id
  })
}



}
