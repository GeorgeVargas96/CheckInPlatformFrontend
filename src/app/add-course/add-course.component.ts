import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(private formBuilder:FormBuilder){}


  courseForm = this.formBuilder.group({
    
    name:[''],
    year:[''],
    section:[''],
    teacher:[''],
    classroom:['']
  })

  saveForm(){
    console.log(this.courseForm.value)
  }

  ngOnInit(): void {
  }

}
