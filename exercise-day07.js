// 1. Create a function to check if two objects are equal 

const similarObject = (objA, objB) => {
    let propA = Object.keys(objA).sort().join();
    let propB = Object.keys(objB).sort().join();
    console.log(propA);
    console.log(propB);
    // let length = propA.length > propB.length ? propA.length : propB.length;
    let same = true;
    // for (let i = 0; i < length; i++) {
    //     if (propA[i] != propB[i]) {
    //         same = false;
    //     }
    // }
    if (propA != propB) {
        same = false;
    }
    return same;
}

console.log(similarObject({ name: 'edo', age: 10 }, { age: 20, name: 'andrew', job:'instructor' }));

// 2. Create a function to get the intersection of two objects
const intersection = (objA, objB) => {
    let intr = {};
    for (const key in objA) {
        if (objA[key] === objB[key]) {
            console.log(intr);
            // Cara 1
            // intr = { ...intr, [key]: objA[key] }
            // Cara 2
            intr[key]= objA[key];
            console.log(intr);
        }
    }

    return intr;
}

console.log(intersection({ a: 1, d: 2, c: 2 }, { a: 1, c: 2, b: 2, d:3 }));

let intrTest = {};
let a = {a:1};
let b = {b:2}
intrTest = {...intrTest, ['a']:a.a}
intrTest={...intrTest, ['b']:b}
console.log(intrTest);