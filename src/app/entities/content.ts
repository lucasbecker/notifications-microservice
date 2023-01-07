export class Content {
  constructor(content: string) {
    const isTypeValid = this.validateType(content);
    if (!isTypeValid) throw new Error('Content type error.');

    const isLengthValid = this.validateLength(content);
    if (!isLengthValid) throw new Error('Content length error.');

    this.content = content;
  }

  private readonly content: string;

  public get value(): string {
    return this.content;
  }

  private validateType(value: string): boolean {
    return typeof value === 'string';
  }

  private validateLength(value: string): boolean {
    return value.length >= 5 && value.length <= 240;
  }
}
