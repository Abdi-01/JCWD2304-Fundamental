// Data Structure

////////////////////////////// STACK ////////////////////////////////
//  Struktur data yang memanfaatkan konsep LIFO (Last In, First Out)
let stack = [];

const push = data => {
    stack[stack.length] = data;
};

push('Edo');
push('Budi');
push('Zafran');
console.log(stack);
push('Aldo');
console.log(stack);

const pop = () => {
    if (stack.length > 0) return stack.pop();
    // if (stack.length > 0) return stack[stack.length-1];
}

console.log(pop());

//////////////////////// QUEUE /////////////////////////////
// Struktur data yang memanfaatkan konsep FIFO (First In, First Out)/antrian

let queue = [];

const enqueue = data => {
    queue.push(data);
}

enqueue(12);
enqueue(20);
console.log(queue);

const dequeue = () => {
    if (queue.length > 0) return queue.shift();
}

dequeue();
console.log(queue);