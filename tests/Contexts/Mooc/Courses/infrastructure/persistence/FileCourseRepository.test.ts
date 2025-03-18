import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository';
import { Uuid } from '../../../../../../src/Contexts/Shared/domain/value-object/Uuid';

describe('FileCourseRepository', () => {
  it('should save a course', async () => {
    const id = new Uuid('123e4567-e89b-12d3-a456-426614174000');
    const name = 'Course 1';
    const duration = '1 hour';
    const expectedCourse = new Course({ id, name, duration });
    const repository = new FileCourseRepository();
    await repository.save(expectedCourse);
    const course = await repository.search(id.value);
    expect(expectedCourse).toEqual(course);
  });
});
