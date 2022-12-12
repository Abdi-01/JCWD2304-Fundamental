// PSEUDO CODE

// INPUT
// Parameter value height of pattern
//  INPUT : param height, variable print

// Proses
// 1. 
// 2.
// 3.

// Output
// 01
// 02 03
// 04 05 06

// ADD FUNCTION
// INPUT : Parameter numb1, numb2

// PROSES
const addFunc = (numb1, numb2) => numb1 + numb2;
// 1. Get value from parameter
// 2. Aritmatich process for numb1 + numb2
// return numb1 + numb2;
// 3. Send result to output

// return result
// }

// OUTPUT : result add

console.log(addFunc(10, 20));

// NESTED LOOP : Looping didalam Looping

let limit = 5;
let print = '';
for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
        print+= `# `; // # # # # #
    }
    print+='\n';
    // i = 0 --> print = # # # # # \n
    // i = 1 --> print = # # # # # \n# # # # # \n
}
console.log(print);