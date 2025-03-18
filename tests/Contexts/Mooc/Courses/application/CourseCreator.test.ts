import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { Uuid } from '../../../../../src/Contexts/Shared/domain/value-object/Uuid';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';

describe('CourseCreator', () => {
  let repository: CourseRepositoryMock;

  beforeEach(() => {
    repository = new CourseRepositoryMock();
  });

  it('should create a valid course', async () => {
    const sut = new CourseCreator(repository);
    const id = new Uuid('123e4567-e89b-12d3-a456-426614174000');
    const name = 'name';
    const duration = '5 hours';
    const expectedCourse = new Course({ id, name, duration });

    await sut.run({ id: id.value, name, duration });

    repository.assertSaveHaveBeenCalledWith(expectedCourse);
  });
});
