import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

 private courses = [
    {
      id: 1,
      title: 'Angular 9',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript The Really REALLY HARD PARTS',
      description: 'Worship Will Sentance',
      percentComplete: 50,
      favorite: false
    }
  ];

  getAll(){
    return this.courses;
  }

  getOne(courseId: number){
    let theCourse = null;
    for (const eachCourse of this.courses){
      if (courseId === eachCourse.id){
       theCourse = eachCourse;
      }
    }
    return theCourse;
  }

  create(inputCourse: any){
    console.log('Create a new course:', inputCourse);
  }

  delete(courseId: number){
    console.log('Delete this course:', courseId);
    const deletedCourse = this.courses.filter( item => [courseId].includes(item.id));
    console.log('Delete this course details:', deletedCourse);
    return deletedCourse;
  }

  update(inputCourse: any){
    console.log('Update this course:', inputCourse);
  }

}
