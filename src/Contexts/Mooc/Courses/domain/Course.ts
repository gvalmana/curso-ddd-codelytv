import { Uuid } from '../../../Shared/domain/value-object/Uuid';
import { CourseId } from '../../Shared/domain/Courses/CourseId';
import { CourseName } from '../../Shared/domain/Courses/CourseName';
import { CourseDuration } from '../../Shared/domain/Courses/CourseDuration';

export class Course {
  readonly id: CourseId;
  readonly name: CourseName;
  readonly duration: CourseDuration;

  constructor({ id, name, duration }: { id: Uuid; name: CourseName; duration: CourseDuration }) {
    this.id = id;
    this.name = name;
    this.duration = duration;
  }
}
