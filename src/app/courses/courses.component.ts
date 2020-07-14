import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // CHALLENGE
  // STEP 01: Display courses using ngFor
  // STEP 02: Add event handler to select course
  // STEP 03: Display raw json of selected course

  selectCourse = null;
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript The Really REALLY HARD PARTS',
      description: 'Worship Will Sentance',
      percentComplete: 50,
      favorite: true
    }
  ];
  // logic inside the constructor will be immediately fired the logic
  constructor() { }
  // put initialization code for the component into lifecycle hooks
  ngOnInit(): void {
    // setting the emptyCourse to initialize it
   this.resetSelectedCourse();
  }

  courseSelection(clickCourse){
    this.selectCourse = clickCourse;
    console.log('select item', this.selectCourse);
  }

  deleteItem(currentCourseId){
    // console.log(currentCourseId);
    if (currentCourseId === this.selectCourse){
      console.log('delete id', currentCourseId);
    }
    return;
  }
  saveCourse(){
   console.log("save course from submit");
  }

  resetSelectedCourse(){
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };
    // ngModel is initialized it to an empty component in ngOnInit
    this.selectCourse = emptyCourse;
  }
  cancel(){
    this.resetSelectedCourse();
  }
}
