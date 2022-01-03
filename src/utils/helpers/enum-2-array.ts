export class Enum2Array {
  static transform<T>(enumerable: T): any[] {
    return Object.keys(enumerable)
      .filter((key) => isNaN(Number(key)))
      .map((key) => enumerable[key]);
  }
}
