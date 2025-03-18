import { CourseName } from '../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseName';
import { WordMother } from '../../../../../src/Contexts/Shared/domain/value-object/WordMother';

export class CourseNameMother {
  static create(value: string): CourseName {
    return new CourseName(value);
  }

  static random(): CourseName {
    return this.create(WordMother.random({ maxLength: 30 }));
  }

  static invalidName(): string {
    return 'X'.repeat(31);
  }
}
