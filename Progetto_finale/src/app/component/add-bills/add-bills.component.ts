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
  errorMessage:any= undefined
  isLoadingIn=false

  constructor(private srv:UserService,  private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=> {
      this.id=+params ['id'];
      this.updateBill()

    })

  }



  async onSubmit(form:NgForm){
    this.isLoadingIn=true

    try{
      this.isLoadingIn=false
      await this.srv.Bills(this.id, form.value).toPromise()
      
        this.router.navigate(['/fatture/'+ this.theseId])
        
    }catch(error:any){
      this.errorMessage=error.error.error
      this.isLoadingIn=false
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
