import { CoursesService } from './../shared/services/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  selectedCourse = null;
  courses = null;
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.courses = this.coursesService.getAll();
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };
    this.selectedCourse = emptyCourse;
  }

  selectCourse(course: any) {
    this.selectedCourse = course;
    console.log(`select course info ${course.title}`);
  }

  deleteCourse(courseId: number) {
    console.log('COURSE DELETED!', courseId);
    this.coursesService.delete(courseId);
  }

  saveCourse(inputCourse: any) {
    console.log('SAVE SOURCE!');
    if (inputCourse.title !== undefined){
      this.coursesService.update(inputCourse);
    } else {
      this.coursesService.create(inputCourse);
    }
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
