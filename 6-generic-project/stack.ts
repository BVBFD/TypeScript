{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T> | undefined;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;
    // private capacity: number;

    constructor(private capacity: number) {}
    // constructor(capacity: number) {
    //   this.capacity = capacity;
    // }

    get size() {
      return this._size;
    }

    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error('Stack is full!');
      }
      const node = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): T {
      if (this.head == null) {
        // undefined면 null이어도 통과가 되기 때문에 에러 발생가능성 많음.. (엄연히 다른 타입)
        // null == undefined
        // null !== undefined
        throw new Error('Stack is empty!');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(10);
  stack.push('Ellie 1');
  stack.push('Bob 2');
  stack.push('Steve 3');

  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(10);
  stack2.push(1232);
  stack2.push(2123);
  stack2.push(3343);

  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
