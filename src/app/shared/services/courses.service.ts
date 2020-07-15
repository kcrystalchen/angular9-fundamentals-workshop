import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  // endpoint for courses data model
  private coursesDataModel = '/courses';

  constructor(private http: HttpClient) { }

  // it is making a http call and return an observable(a promise, except getting one value, it gets many values)
  all() {
    return this.http.get(this.getURL());
  }

  find(courseId) {
  }

  // the second parameter is the payload
  create(course) {
    console.log('CREATE COURSE', course);
    return this.http.post(this.getURL(), course);
  }

  update(course) {
    console.log('UDDATE COURSE', course);
  }

  delete(courseId) {
    console.log('DLETE COURSE', courseId);
  }

  private getURL(){
    return `${BASE_URL}${this.coursesDataModel}`;
  }
}
