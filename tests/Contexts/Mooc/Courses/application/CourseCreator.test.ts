import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseRepository } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseRepository';

describe('CourseCreator', () => {
  it('should create a valid course', async () => {
    const repository: CourseRepository = {
      save: jest.fn()
    };
    const sut = new CourseCreator(repository);
    const id = 'some-id';
    const name = 'some-name';
    const duration = 'some-duration';
    const course = new Course({ id, name, duration });

    await sut.run(id, name, duration);

    expect(repository.save).toHaveBeenCalledWith(course);
  });
});
