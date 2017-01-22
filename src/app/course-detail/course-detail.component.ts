import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CoursesService } from '../shared/model/courses.service';
import {Lesson} from '../shared/model/lesson';
import {Course} from '../shared/model/course';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  lessons$: Observable<Lesson[]>;
  course$: Observable<Course>
  lessons: Lesson[];
  courseUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private coursesService: CoursesService) { }

  ngOnInit() {
    const courseUrl = this.route.snapshot.params['id'];
    this.course$ = this.coursesService.findCourseByUrl(courseUrl);
    this.lessons$ = this.coursesService.loadFirstLessonsPage(courseUrl, 3);
    this.lessons$.subscribe(lessons => this.lessons = lessons);
  }

  next() {
    this.coursesService.loadNextPage(
      this.courseUrl, 
      this.lessons[this.lessons.length - 1].$key,
      3
    ).subscribe(lessons => this.lessons = lessons);
  }

  previous() {
    this.coursesService.loadPreviousPage(
      this.courseUrl, 
      this.lessons[0].$key,
      3
    ).subscribe(lessons => this.lessons = lessons);

  }

  navigateToLesson(lesson: Lesson) {
    this.router.navigate(['lessons', lesson.url]);
  }

}
