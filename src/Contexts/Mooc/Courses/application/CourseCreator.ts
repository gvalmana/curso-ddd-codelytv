import { Course } from '../domain/Course';
import { CourseRepository } from '../domain/CourseRepository';
import { CourseCreatorRequest } from './CourseCreatorRequest';
import { Uuid } from '../../../Shared/domain/value-object/Uuid';
export class CourseCreator {
  private readonly repository: CourseRepository;

  constructor(repository: CourseRepository) {
    this.repository = repository;
  }

  async run(request: CourseCreatorRequest): Promise<void> {
    const name = request.name;
    const duration = request.duration;
    const course = new Course(new Uuid(request.id), name, duration);

    return this.repository.save(course);
  }
}
