import validate from 'uuid-validate';

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
}

export class InvalidArgumentError extends Error {
  constructor(message: string) {
    super(message);
  }
}
