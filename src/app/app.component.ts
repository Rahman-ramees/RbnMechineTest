import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rbnMtest';
  myForm:FormGroup
  studArray:any = []
  addStud = false

  constructor(private fromBuilder:FormBuilder){
    this.myForm = fromBuilder.group({
      name:['', Validators.required,Validators.name],
      email:['', Validators.required,Validators.email],
      aadhaar:['', Validators.required],
      address:['', Validators.required],
    })
  }
  

  onSubmit(){
    const name = this.myForm.get('name')
    const email = this.myForm.get('email')
    const aadhaar = this.myForm.get('aadhaar')
    const address = this.myForm.get('address')

    const userData = {
      name : name?.value,
      email : email?.value,
      aadhaar : aadhaar?.value,
      address : address?.value,
    }
    this.studArray.push(userData)
    console.log(this.studArray);   
}
  removeData(obj:any){
    this.studArray = this.studArray.filter((student: { name: any; }) => student.name !== obj.name)
    
  }

  openAddStud(){
    this.addStud = true ;  
  }
  closeSec(){
    this.addStud = false
  }
}