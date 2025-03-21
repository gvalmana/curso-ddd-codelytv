import { CourseName } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseName';
import { WordMother } from '../../../Shared/domain/WordMother';

export class CourseNameMother {
  static create(value: string): CourseName {
    return new CourseName(value);
  }

  static random(): CourseName {
    const value = WordMother.random({ maxLength: 30 });
    return this.create(value);
  }

  static invalidName(): string {
    return 'X'.repeat(31);
  }
}
