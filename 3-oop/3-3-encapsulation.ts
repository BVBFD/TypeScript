{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level
    // protected coffeeBeans: number = 0; CoffeeMaker를 상속한 다른 클래스에서는 접근이 가능함

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  //   const maker = new CoffeeMaker(32);
  const maker = CoffeeMaker.makeMachine(32);
  // maker.coffeeBeans = 3;
  // maker.coffeeBeans = -34;
  // private 때문에 이렇게 바꾸는 것 불가능
  maker.fillCoffeeBeans(32);
  // 기본적으로 public으로 선언되는 함수를 통해서 바꿈!

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        return;
      }
      // setter를 통해서 무분별하게 일어나는 변수 값 대입이 여러 곳에서,
      // 제한 없이 가능한 것을 접근 제한자로 막고, 잘못된 입력값에서는 기본 값을
      // 유지하는 return 또는 에러값 출력을 진행할 수 있다. (객체 지향 : 무분별한 접근 제한)

      // 그렇다면 getter는 왜 쓰는 것일까..
      // 이 User 객체를 가져다 쓸때 전체 객체 변수 값(firstName, lastName, age)
      // 객체를 생성해서 다 가져오는 것이 아니라 age만 가지고 오게 할수 있으므로,
      // 불필요한 객체 정보를 은닉할수 있음 (객체 지향 : 은닉성)
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.age);
  console.log(user.fullName);

  user.age = 6;
  console.log(user.age);
  console.log(user.fullName);
}
