import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit {
  selectedCourse;
  originalTitle;


@Output() saved = new EventEmitter();
@Output() cancelled = new EventEmitter();


@Input() set course(value){
  this.selectedCourse = Object.assign({}, value);
  this.originalTitle = this.course.title;
}

  constructor() { }

  ngOnInit(): void {
  }

}
