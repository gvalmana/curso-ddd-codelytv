import { v4 as uuidv4 } from 'uuid';
import validate from 'uuid-validate';

import { InvalidArgumentError } from '../exceptions/InvalidArgumentError';

export class Uuid {
  readonly value: string;

  constructor(value: string) {
    this.ensureIsValidUuid(value);
    this.value = value;
  }

  toString(): string {
    return this.value;
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>.`);
    }
  }

  static random(): Uuid {
    return new Uuid(uuidv4());
  }
}
