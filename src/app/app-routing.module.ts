import { AddCourseComponent } from './add-course/add-course.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component'

const routes: Routes = [
  {
    path: 'user',
    component: AddUserComponent

  },
  {
    path: 'class', component: AddCourseComponent
  },
  {
    path: '', component: MainContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
