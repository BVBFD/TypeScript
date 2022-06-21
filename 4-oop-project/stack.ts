{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode | undefined;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;
    // private capacity: number;

    constructor(private capacity: number) {}
    // constructor(capacity: number) {
    //   this.capacity = capacity;
    // }

    get size() {
      return this._size;
    }

    push(value: string) {
      if (this.size === this.capacity) {
        throw new Error('Stack is full!');
      }
      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): string {
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

  const stack = new StackImpl(3);
  stack.push('Ellie 1');
  stack.push('Bob 2');
  stack.push('Steve 3');

  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
