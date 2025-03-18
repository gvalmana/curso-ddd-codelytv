import { MotherCreator } from './MotherCreator';

export class SelectMother {
  static random(options: string[]): string {
    return MotherCreator.random().helpers.randomize(options);
  }
}
