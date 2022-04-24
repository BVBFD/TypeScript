{
  // Enum
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';

  enum Days {
    Monday = 1, // 1
    Tuesday, // 2
    Wednesday, // 3
    Thursday, // 4
    Friday, // 5
    Saturday, // 6
    Sunday, // 7
  }

  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Monday;
  day = 1;
  // TypeScript에서 enum 의 문제접은 타입을 지정해줬음에도 불구하고
  // 컴파일 에러가 발생 하지않고, 이렇게 변수 아무거나 대입하고 선언할 수 있다는 점..
  // 그래서 잘 쓰지 않는 것이 좋다. (타입이 보장되지 않음)
  console.log(day);

  let dayOfWeek: DaysOfWeek = 'Wednesday';
  // 그래서 왠만하면 enum 보다는 그냥 type으로 지정해주는게 더 better way 임.
  // dayOfWeek = 'ellie'; // 컴파일 에러가 생김
}
