import { CoursesComponent } from './../../courses/courses.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements OnInit {
  @Input() title: string;
  @Input() currentLesson: any;
  @Input() courseLessons: any;

  @Output() selectedLesson = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }
}
