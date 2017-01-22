import {Lesson} from './lesson';
import {Observable} from 'rxjs/Rx';

export class Course {
  constructor(
    public $key: string,
    public url: string,
    public description: string,
    public iconUrl: string,
    public courseListIcon: string,
    public longDescription: string
  ) {}

  static fromJsonArray(json: any[]): Course[] {
    return json.map(Course.fromJson);
  }

  static fromJson({$key, url, description, iconUrl, courseListIcon, longDescription}):Course {
    return new Course (
      $key,
      url,
      description,
      iconUrl,
      courseListIcon,
      longDescription,
    );
  }
}
