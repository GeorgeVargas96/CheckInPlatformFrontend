import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  start = new Date();
  end = new Date();

  classes: String[] | undefined;
  classrooms: String[] | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
