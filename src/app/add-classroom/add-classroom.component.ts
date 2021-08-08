import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Classroom } from '../classes/classroom';
import { Feature } from '../classes/feature';
import { ClassroomService } from '../services/classroom/classroom.service';
import { FeatureService } from '../services/feature/feature.service';

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.scss']
})
export class AddClassroomComponent implements OnInit {

  features: Feature[] | undefined;
  selectedFeatures: string[] | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private classroomService: ClassroomService,
    private featureService: FeatureService,
    private router: Router
  ) { }

  classroomForm = this.formBuilder.group({
    
    name:[''],
    location:[''],
    capacity:['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    features:[[]],
    otherFeature:['']
  })

  public addClassroom(classroomForm: FormGroup): void{
    if (classroomForm.valid){
      this.classroomService.addClassroom(classroomForm.value).subscribe(
        (response: Classroom) => {
          console.log(response);
          this.router.navigateByUrl('');
        },
        (error: HttpErrorResponse) =>{
          alert(error.message);
        }
      );
    }

  }

  public getFeatures(): void{
    this.featureService.getFeatures().subscribe(
      (response: Feature[]) => {
        this.features = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  ngOnInit(): void {
    this.getFeatures();
  }

}
