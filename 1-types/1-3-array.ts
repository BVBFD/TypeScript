{
  // Array
  const fruits: String[] = ['사과', '레몬', '바나나'];
  const scores: Array<Number> = [1, 2, 4];
  console.log(fruits);
  console.log(scores);

  function printArray(fruits: readonly String[]): void {
    console.log(fruits);
  }

  // Tuple -> interface, type alias, class
  // 서로 다른 타입의 데이터를 담기 위해서 Tuple을 쓴다.
  let students: [string, number];
  students = ['Lee Seong Eun', 26];
  students[0];
  students[1];

  // 가독성이 떨어짐
  const [name, age] = students;
  console.log(`${name}: ${age}`);
}
