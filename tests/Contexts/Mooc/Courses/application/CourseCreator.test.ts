import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseDuration } from '../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseDuration';
import { CourseId } from '../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseId';
import { CourseName } from '../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseName';
import { CourseNameLengthExceeded } from '../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseNameLengthExceeded';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';

describe('CourseCreator', () => {
  let repository: CourseRepositoryMock;
  let creator: CourseCreator;
  beforeEach(() => {
    repository = new CourseRepositoryMock();
    creator = new CourseCreator(repository);
  });

  it('should create a valid course', async () => {
    const id = new CourseId('123e4567-e89b-12d3-a456-426614174000');
    const name = new CourseName('name');
    const duration = new CourseDuration('5 hours');
    const expectedCourse = new Course({ id, name, duration });

    await creator.run({ id: id.value, name: name.value, duration: duration.value });

    repository.assertSaveHaveBeenCalledWith(expectedCourse);
  });

  it('should throw an error if the course name is too long', async () => {
    const id = '123e4567-e89b-12d3-a456-426614174000';
    const name = 'x'.repeat(31);
    const duration = '5 hours';

    expect(() => {
      const course = new Course({
        id: new CourseId(id),
        name: new CourseName(name),
        duration: new CourseDuration(duration)
      });
      creator.run({ id, name, duration });
      repository.assertSaveHaveBeenCalledWith(course);
    }).toThrow(CourseNameLengthExceeded);
  });
});
