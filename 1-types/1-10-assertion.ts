{
  // Type Assertion
  // 좋은 건 아님..\
  // 내가 정말 정말 확신할때에만 싸야만 자주 쓰는건 좋지 않음
  function jsStrFun(): any {
    return 'hello';
  }
  const result = jsStrFun();
  const length = (result as string).length;
  console.log(length);
  // const wrong: any = 5;
  // console.log((wrong as Array<number>).push(1));
  // 이렇게 쓰면 안됨.

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers!.push(2);
  // undefined 일수도 있는데 이렇게 쓰면 컴파일 에러 일어남
  // 하지만 위와같이 ! 붙여서 값이 분명히 있을경우,
  // 강제할수 있음

  const button = document.querySelector('class');
  button?.nodeValue;
  button!.nodeValue;
}
