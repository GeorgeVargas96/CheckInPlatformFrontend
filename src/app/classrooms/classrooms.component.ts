import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassroomDTO } from '../classes/classroomDTO';
import { ClassroomService } from '../services/classroom/classroom.service';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.scss']
})
export class ClassroomsComponent implements OnInit {

  classrooms: ClassroomDTO[] | undefined;

  constructor(
    private classroomService: ClassroomService,
    private router: Router) { }

  public getClassrooms(): void{
    this.classroomService.getClassrooms().subscribe(
      (response: ClassroomDTO[]) => {
        this.classrooms = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onDeleteClassroom(classroomId: number): void{
    this.classroomService.deleteClassroom(classroomId).subscribe(
      (response: void) => {
        console.log(response);
        this.getClassrooms();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onEditClassroom(classroomId: number): void{
    this.classroomService.setEditClassroomId(classroomId);
    this.router.navigateByUrl('edit-classroom');
  }

  public goToAddClassroom(){
    this.router.navigateByUrl('add-classroom');
  }

  ngOnInit(): void {
    this.getClassrooms();
  }

}
