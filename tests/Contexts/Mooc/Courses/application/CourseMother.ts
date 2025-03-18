import { CourseCreatorRequest } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreatorRequest';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseDuration } from '../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseDuration';
import { CourseId } from '../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseId';
import { CourseName } from '../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseName';

export class CourseMother {
  static fromRequest(request: CourseCreatorRequest): Course {
    return new Course({
      id: new CourseId(request.id),
      name: new CourseName(request.name),
      duration: new CourseDuration(request.duration)
    });
  }
}
