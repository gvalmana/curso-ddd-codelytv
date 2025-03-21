import { CourseDuration } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration';
import { SelectMother } from '../../../Shared/domain/SelectMother';

export class CourseDurationMother {
  static random(): CourseDuration {
    return new CourseDuration(SelectMother.random(['1 hour', '2 hours', '3 hours']));
  }
}
