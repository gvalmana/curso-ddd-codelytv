import { CourseCreatorRequest } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreatorRequest';
import { CourseDuration } from '../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseDuration';
import { CourseId } from '../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseId';
import { CourseName } from '../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseName';
import { CourseDurationMother } from './CourseDurationMother';
import { CourseIdMother } from './CourseIdMother';
import { CourseNameMother } from './CourseNameMother';

export class CreateCourseRequestMothers {
  static create(id: CourseId, name: CourseName, duration: CourseDuration): CourseCreatorRequest {
    return {
      id: id.value,
      name: name.value,
      duration: duration.value
    };
  }

  static random(): CourseCreatorRequest {
    return this.create(CourseIdMother.random(), CourseNameMother.random(), CourseDurationMother.random());
  }

  static invalidRequest(): CourseCreatorRequest {
    return {
      id: CourseIdMother.random().value,
      name: CourseNameMother.invalidName(),
      duration: CourseDurationMother.random().value
    };
  }
}
