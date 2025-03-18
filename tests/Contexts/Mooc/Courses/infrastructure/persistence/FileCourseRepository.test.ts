import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository';
import { CourseDuration } from '../../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseDuration';
import { CourseId } from '../../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseId';
import { CourseName } from '../../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseName';

describe('FileCourseRepository', () => {
  it('should save a course', async () => {
    const id = new CourseId('123e4567-e89b-12d3-a456-426614174000');
    const name = new CourseName('Course 1');
    const duration = new CourseDuration('1 hour');
    const expectedCourse = new Course({ id, name, duration });
    const repository = new FileCourseRepository();
    await repository.save(expectedCourse);
    const course = await repository.search(id.value);
    expect(expectedCourse).toEqual(course);
  });
});
