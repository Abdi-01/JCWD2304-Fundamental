// Exercise 1
let arrValue = [2, 1, 5, 18, 29, 0];
let getWithSort = (arr) => {
    let newArr = arr.sort((a, b) => a - b);
    console.log(newArr);
    let amount = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     amount += newArr[i];
    // }
    newArr.forEach(element => {
        amount += element;
    });
    return `Low = ${newArr[0]}, High = ${newArr[newArr.length - 1]}, Avg = ${(amount / newArr.length).toPrecision(3)}`
}
console.log(getWithSort(arrValue));
let getWithoutSort = (arr) => {
    let amount = 0; // 2 3 8 
    let low = arr[0]; // 2 1
    let high = arr[0]; // 2 5
    for (let i = 0; i < arr.length; i++) {
        amount += arr[i];
        if (low > arr[i]) {
            low = arr[i];
        } else {
            high = arr[i];
        }
    }
    return `Low = ${low}, High = ${high}, Avg = ${amount / arr.length}`
}
console.log(getWithoutSort(arrValue));

// Exercise 2
let generate = (arr) => {
    // let words = '';
    // for (let i = 0; i < arr.length; i++) {
    //     if (i == arr.length - 1) {
    //         words += `and ${arr[i]}`;
    //     } else if (i == arr.length - 2) {
    //         words += `${arr[i]} `;
    //     } else {
    //         words += `${arr[i]}, `;
    //     }
    // }

    // return words;
    return arr.slice(0, arr.length - 1).join(', ') + ` and ${arr[arr.length - 1]}`
}

console.log(generate(['Hiu', 'Paus', 'Ikan Pari', 'Buaya', 'Belut']));

// Exercise 3
let sumTwoArray = (arr1, arr2) => {
    let newArr = [];
    let length = arr1.length > arr2.length ? arr1.length : arr2.length;
    for (let i = 0; i < length; i++) {
        let numb1 = arr1[i] ? arr1[i] : 0;
        let numb2 = arr2[i] ? arr2[i] : 0;
        newArr.push(numb1 + numb2);
    }

    return newArr;
}

console.log(sumTwoArray([1, 2, 3], [3, 2, 1, 2]));

// Exercise 4
let value = [2, 1, 8, 9, 99];

let clonePush = (newData, array) => {
    let temp = null;
    for (let i = 0; i < array.length; i++) {
        if (newData == array[i]) {
            temp = array[i];
        }
    };

    if (temp) {
        return 'Data exist'
    } else {
        array[array.length] = newData;
        return array;
    }
}

console.log(clonePush(5, value));
console.log(clonePush(2, value));