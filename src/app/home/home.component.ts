import { LessonsService } from './../shared/services/lessons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private lessonsService: LessonsService) { }

  currentLesson = null;

  // CHALLENGE
  // STEP 01: Create a LessonsService
  // hint: ng g shared/services/lessons -d
  // STEP 02: Add the lessons service to app.module
  // STEP 03: Inject lessons service into component
  // STEP 04: Move lessons to service and consume in component

  courseLessons = null;
  title = this.lessonsService.getTitle();

  ngOnInit(): void {
    this.courseLessons = this.lessonsService.getAll();
  }


  selectLesson(lesson: {}) {
    console.log('SELECT LESSON FIRED!', lesson);
    for (const theLesson of this.lessonsService.getAll()){
      this.currentLesson = theLesson.title;
    }
  }
}
