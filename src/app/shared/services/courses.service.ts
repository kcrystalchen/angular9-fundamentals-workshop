import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private model = 'courses';

  constructor(private http: HttpClient) { }

  all() {
    // console.log('all=>', this.http.get(this.getUrl()));
    return this.http.get(this.getUrl());
  }

  find(courseId) {
    return this.http.get(this.getUrlById(courseId));
  }

  create(course) {
    // console.log('create=>', this.http.post(this.getUrl(), course));
    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    console.log('UPDATE COURSE', course);
    return this.http.put(this.getUrlById(course.id), course);
  }

  delete(courseId) {
    console.log('DLETE COURSE', courseId);
    return this.http.delete(this.getUrlById(courseId));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id: number){
    return `${this.getUrl()}/${id}`;
  }
}
