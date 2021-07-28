import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder:FormBuilder){}


  userProfileForm = this.formBuilder.group({
    firstName:[''],
    lastName:[''],
    year:[''],
    department:[''],
    section:[''],
    role:['']
  })

  saveForm(){
    console.log(this.userProfileForm.value)
  }


  ngOnInit(): void {
  }

}
