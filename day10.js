///////////////////////// Big O ///////////////////////////
// Konstan O(1)
const penjumlahan = (arg1, arg2) => {
    return arg1 + arg2;
};

console.log((penjumlahan(200000, 350000000)));

// Logaritmik (O (log n))
// Binary search
let data = [3, 4, 10, 12, 35, 80];

const binarySearch = (array, target) => {
    let firstIndex = 0; // 5
    let lastIndex = array.length - 1; // 6

    while (firstIndex <= lastIndex) {

        console.log(firstIndex, lastIndex);
        let middleIndex = Math.floor((firstIndex + lastIndex) / 2);  // 2  3 

        if (array[middleIndex] == target) {
            return middleIndex;
        }

        if (target < array[middleIndex]) {
            lastIndex = middleIndex;
        } else {
            firstIndex = middleIndex; // 2 3 4
            firstIndex++;
        }
    }
    return -1
}

console.log(binarySearch(data, 100));

//  Linear (O (n))
const linearSearch = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
    return -1;
}

console.log(linearSearch([10,2,3,4,88,21],2));