import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses;
  constructor() { }

  ngOnInit() {
  }

  loadCourses(){
    this.courses = [
      {id:1, name:"course1"},
      {id:2, name:"course2"},
      {id:3, name:"course3"},
      {id:4, name:"course4"},
      {id:5, name:"course5"}
    ];
  }
  trackCourse(index, course){
    return course ? course.id : undefined;
  }
}
