import { Course } from '../domain/Course';
import { CourseRepository } from '../domain/CourseRepository';
import { CourseCreatorRequest } from './CourseCreatorRequest';
import { CourseId } from '../../Shared/domain/Courses/CourseId';
import { CourseDuration } from '../domain/CourseDuration';
import { CourseName } from '../domain/CourseName';

export class CourseCreator {
  private readonly repository: CourseRepository;

  constructor(repository: CourseRepository) {
    this.repository = repository;
  }

  async run(request: CourseCreatorRequest): Promise<void> {
    const id = new CourseId(request.id);
    const name = new CourseName(request.name);
    const duration = new CourseDuration(request.duration);
    const course = new Course(id, name, duration);

    await this.repository.save(course);
  }
}
