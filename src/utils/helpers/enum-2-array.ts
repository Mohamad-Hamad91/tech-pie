export class Enum2Array {
  static transform<T>(enumerable: T): string[] {
    return Object.keys(enumerable)
      .filter((key) => isNaN(Number(key)))
      .map((key) => enumerable[key]);
  }
}
