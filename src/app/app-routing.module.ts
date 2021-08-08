import { AddEventComponent } from './add-event/add-event.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component'
import { AddClassroomComponent } from './add-classroom/add-classroom.component';
import { AddFeatureComponent } from './add-feature/add-feature.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [

  {
    path: 'user',
    component: AddUserComponent

  },
  {
    path: 'add-course', component: AddCourseComponent
  },
  {
    path: 'courses', component: CoursesComponent
  },
  {
    path: '', component: MainContentComponent
  },
  {
    path: 'add-event', component: AddEventComponent
  },
  {
    path: 'classroom', component: AddClassroomComponent
  },
  {
    path: 'feature', component: AddFeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
