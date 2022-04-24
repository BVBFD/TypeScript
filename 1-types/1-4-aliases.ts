{
  // Type Aliases
  // 원하는 타입을 정의하는 것!
  type Text = string;
  const name: string = 'ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'ellie',
    age: 22,
  };

  // String Literal Types
  type Name = 'name';
  let elliename: Name;
  elliename = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  const isCat: Boal = true;
}
