import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { CourseNameLengthExceeded } from '../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseNameLengthExceeded';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';
import { CourseMother } from '../domain/CourseMother';
import { CreateCourseRequestMothers } from './CreateCourseRequestMothers';

describe('CourseCreator', () => {
  let repository: CourseRepositoryMock;
  let creator: CourseCreator;
  beforeEach(() => {
    repository = new CourseRepositoryMock();
    creator = new CourseCreator(repository);
  });

  it('should create a valid course', async () => {
    const request = CreateCourseRequestMothers.random();
    const course = CourseMother.fromRequest(request);
    await creator.run(request);

    repository.assertSaveHaveBeenCalledWith(course);
  });

  it('should throw an error if the course name is too long', async () => {
    expect(() => {
      const request = CreateCourseRequestMothers.invalidRequest();
      const course = CourseMother.fromRequest(request);
      creator.run(request);

      repository.assertSaveHaveBeenCalledWith(course);
    }).toThrow(CourseNameLengthExceeded);
  });
});
