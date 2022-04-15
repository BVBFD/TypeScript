{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
    (한 가지의 심플한 데이터를 담을 수 있는 원시 타입!!)
   * Object: function, array .....
    (조금 더 복잡한 데이터를 담을 수 있는 오브젝트 타입!!)
   */

  // number
  const num: number = 1;

  // string
  const str: string = 'Hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: string | undefined;
  let age: number | undefined;
  name = undefined;
  age = 1;

  function find(): number | undefined {
    // return 1;
    return undefined;
  }

  // null
  let person: string | null;
  person = 'Seong Eun Lee';

  // unknown 되도록이면 쓰지 말것!!
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 되도록이면 쓰지 말것!!
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    // 아무것도 리턴하지 않는다면 void라는 타입이 됨.
    // 하지만 지정해주는 것이 좋다.
    // 보통은 변수 선언할 때 쓰지 않고,
    // 함수 선언할때 많이 쓰임.
    console.log('hello');
    return;
  }

  // never
  function throwError(message: string): never {
    // return을 할 수 없는 함수애 never를 쓴다. 변수에 쓰지 않음..
    // message -> server(log)
    throw new Error(message);
    // while(true) {
    // }
  }

  let obj: object;
  // primitive type이 아닌 모든 obj type을 할당할 수 있음.
  // 이것 역시 잘 쓰지 않는 것이 좋다.
  function acceptSomeObject(obj: object) {
    console.log(obj);
  }
  acceptSomeObject({ name: 'Lee Seong Eun' });
  acceptSomeObject({ animal: 'dog' });
}
