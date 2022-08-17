// Two stacks declared in the form of plain array
let stack1 = [];
let stack2 = [];

// Method that will perform our enqueue operation
function enqueue(element) {
    stack1.push(element);
    console.log("Stack-1 elements are enqueue: ", stack1);
}

// Method that will perform our dequeue operation
function dequeue() {
    if (stack2.length === 0) {
        if (stack1.length === 0) {
            console.log(
        "Dequeue not possible because queue is empty..");
        }
        while (stack1.length > 0) {
            let x = stack1.pop();
            stack2.push(x);
        }
    }
    console.log("Element after Dequeue: " + stack2.pop());
}

enqueue("a");
enqueue("b");
enqueue("c");
dequeue();
dequeue();