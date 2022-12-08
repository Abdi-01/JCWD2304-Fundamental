// INPUT : parameter with array data type
// Examp : ['Toyota', 'Honda', 'Renault', 'BMW']

// PROSES :
const printData = (data) => {
    // 1. Sort data from parameter order Ascending ==> array.sort()
    data.sort();
    // console.log(data);
    // 2. Prepare variable string for print ==> let print = '';
    // Cara 1
    // let print = '';
    // Cara 2
    let tempArr = [];
    
    // 3. Iteration to print new array data to string variable ==> for...loop
    for (let i = 0; i < data.length; i++) {
        // Cara 1
        // print= print + `${i+1}. ${data[i]}\n`;
        // Cara 2
        // tempArr.push(i+1 + '. ' + data[i])
        tempArr.push(`${i + 1}. ${data[i]}`)
    }

    // 4. return string variable ==> return print;
    return tempArr;
}

console.log(printData(['Toyota', 'Honda', 'Renault', 'BMW']).join('\n'));
console.log(printData(['Martin', 'Daniel', 'Kevin', 'Jeffry']));
// OUTPUT :
/*
1. BMW 
2. Hond
3. Renault
4. Toyota
*/