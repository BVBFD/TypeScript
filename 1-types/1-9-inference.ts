// Type Inference
// 타입스크립트가 굳이 타입을 작성하지 않아도 알아서 작성해주는 것은
// 절대 좋지 못하다고 생각한다.
// 그래서 항상 명시적으로 작성하는게 중요함!!
let text: string = `Hello`;
// 다만 이런 원시타입 같은 경우는 너무 뻔하기 때문에 생략해도 좋다..
// (그래도 이런 경우에도 되도록 명시적으로 작성을 하자)
function print(message: string): void {
  console.log(message);
}
print('Hello');

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);
