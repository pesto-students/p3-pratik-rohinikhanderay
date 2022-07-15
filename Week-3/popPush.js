function createStack() {
    const items = []; 
    return {
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      },
    };
}

const stack = createStack();
stack.push(10);
stack.push(20);
stack.push(5);
stack.pop(); // => 5
stack.items; // =>  this should be displaying undefined
console.log("items = ", stack.items);


