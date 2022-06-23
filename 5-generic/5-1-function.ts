{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  // 인자에 number, string, boolean .... 등등 타입마다 다 따로 함수 정의하는 건 비효율적

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123);
  // 그렇다고 인자의 타입을 any로 선언하는건 타입스크립트답지 않음.

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  // 그래서 generic을 이용하면 사용하는 사람이 어떤 타입인지 결정가능.
  // 유연하지만 타입을 보장받을 수 있음 (함수 타입마다 정의할 필요없음, any도 필요없음)
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
