//  Variable : penampung data
/*
susunan variable ===> keywordVariable namaVariable = nilaiVariable;

keywordVariable : var, let, const;

namaVariable : harus berupa huruf atau diawali symbol "_" / "$"

nilaiVariable : tergantung tipe data ==> string, number, boolean, array, object, function
*/

// keyword var : Redeclare, Reassign
var nama;  // declare variable / deklarasi variable;
console.log(nama);
var nama = "Abdi";
console.log(nama);
var nama = "Justin"; // Redeclare ✅
console.log(nama);
nama = 'Brandon'; // Reassign ✅
console.log(nama);

// keyword let : Non-redeclare, Reassign
let usia = 10;
console.log(usia);
// let usia = 20; // Redeclare ❌
usia = 20;  // Reassign ✅
console.log(usia);

// keyword const : Non-redeclare, Non-reassign
const PI = 3.14;
const API_URL = 'https://localhost:2500';
// const PI = 22/7; // Redeclare ❌
// PI = 10; // Reassign ❌

const DataArray = [1, 2, 3];
console.log(DataArray);
// DataArray = [];
DataArray.push(4);
console.log(DataArray);

/////////////////////// Aturan Penulisan Nama Variable /////////////////////////
// 1. Harus diawali huruf
// let 1nama; ❌
let job = 'instructor';

// 2. Boleh diawali symbol ( _ atau $)
let _telp = '08565323265';
var $email = 'edo@mail.com';

// 3. Penamaan yang lebih dari 1 suku kata
let fullName = "Edo Tensei"; // camelCase
let full_name = "Edo Tensei"; // snake_case
// let angka A; ❌
// let angka-A; ❌

// Hoisting
angka = 2;
console.log(angka);
var angka;

huruf;
console.log(huruf);
var huruf

//////////////////////// STRING //////////////////////////
let namaToko = "'Es' \"Teh\" Indonesia";
console.log(namaToko);
namaToko = '\'Es\' "Teh" Indonesia';
console.log(namaToko);
namaToko = `'Es' "Teh" 
Indonesia`;
console.log(namaToko);
console.log(namaToko[7]); // mengakses character pada index yg dituju

///////////////////////// BUILD METHODE ////////////////////////
let message = "Hello, Purwadhika Student";

// typeof : cek tipe data
console.log("Output typeof : ==>", typeof message);
console.log("Output typeof : ==>", typeof 10);
console.log("Output typeof : ==>", typeof false);
console.log("Output typeof : ==>", typeof {});
console.log("Output typeof : ==>", typeof undefined);
console.log("Output typeof : ==>", typeof null);
console.log("Output typeof : ==>", typeof []);

// string.length : menghitung panjang string
console.log("Output length : ==>", message.length);

// string.slice(startIndex, limitIndex) : mengambil sebagian character pada data string
console.log("Output slice : ==>", message.slice(0, 5));
// console.log("Output slice : ==>", message.substr(0, 5));

// string.toLowerCase() / string.toUpperCase()
console.log("Output toLowerCase : ==>", message.toLowerCase());
console.log("Output toUpperCase : ==>", message.toUpperCase());

// string.charAt(indexCharacter) : mencari character berdasarkan index
console.log("Output charAt : ==>", message.charAt(1));

// string.includes()  : memeriksa value didalam string ada atau tidak
console.log("Output includes : ==>", message.includes("hello"));

////////////////////////////////// NUMBER //////////////////////////////////

let jarak = 1500; // Nilai INT
let berat = 90.24; // Nilai FLOAT
let saldoATM = 25e6; //
console.log(jarak, berat, saldoATM);

// Arithmetic : +, -, /, *, %
let jumlah = jarak + 500;
let kurang = jarak - 500;
let bagi = jarak / 500;
let kali = jarak * 500;

// Increment
console.log(jarak);
jarak++;
console.log(jarak);
jarak++;
console.log(jarak);
jarak += 2;
jarak += 2;
// jarak = jarak + 2
console.log(jarak);

// Decrement 
jarak--;
console.log(jarak);
jarak *= 2;
console.log(jarak);

// Math Object
const PI_MATH = Math.PI;
console.log(PI_MATH);

// Pembulatan
console.log(Math.round(2.5));
console.log(Math.round(2.4));
console.log(Math.ceil(2.1));
console.log(Math.floor(2.9));

let a = [1, 2, 3, 4, 5, 6]
console.log(Math.max(2, 3, 4, 112, 34, 5, 7));
console.log(Math.min(...a));


console.log(Math.random()); // 0. - 1
console.log(Math.random() * 10); // 0 - 10
console.log(Math.random() * (10 - 2) + 2); // 2 - 10
console.log(Math.random() * (10 - 3) + 3); // 3 - 10
console.log(Math.random() * (10 - 4) + 4); // 4 - 10
console.log(Math.random() * (10 - 5) + 5); // 5 - 10
console.log(Math.random() * (10 - 6) + 6); // 6 - 10
console.log(Math.random() * (10 - 7) + 7); // 7 - 10
console.log(Math.random() * (10 - 8) + 8); // 8 - 10
console.log(Math.random() * (10 - 9) + 9); // 9 - 10

// Parsing data number to string
console.log(jarak.toString());
console.log(jarak.toLocaleString());
console.log(jarak.toLocaleString('id', {
    style: 'currency',
    currency: 'idr'
}));

// Parsing string to number
let angkaB = "123.6";
console.log(typeof angkaB);
console.log(parseInt(angkaB));
console.log(parseFloat(angkaB));

let strNumb = "ABCDE";
let total = 0;
for (let index = 0; index < strNumb.length; index++) {
    // console.log(strNumb.charAt(index), typeof strNumb.charAt(index));
    // let temp = parseInt(strNumb.charAt(index));
    // console.log(temp, typeof temp);
    total += parseInt(strNumb[index]);
}

console.log(total);
// Output --> 15 NUMBER

// isNaN
console.log(isNaN(2));
console.log(isNaN("ABCD"));
console.log(isNaN("12"));
console.log(isNaN("12AA"));

///////////////////// Date /////////////////////
let date = new Date(); // mengambil date saat ini
console.log(date);
console.log(date.toLocaleString('id'));
let otherDate = new Date("03-10-2021"); // (year-month-date) or (month-date-year)
console.log(otherDate);
otherDate = new Date(2020, 10, 02); // (year-month-date) or (month-date-year)
console.log(otherDate);
// date.setFullYear(2019, 11, 02);
// console.log(date);

// GET
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getDate());
console.log(date.getMonth()); // range 0-11
console.log(date.getFullYear());
console.log(date.getTime());
console.log(Date.now());

////////////////////////////// BOOLEAN //////////////////////////
// Value TRUE or FALSE
// 1. Comparison : >, < >=, <=, ==, ===, !=, !==
console.log(12 > 11);
console.log(12 < 11);
console.log(12 <= 12);
console.log(12 >= 13);
console.log(12 === "12");
console.log(12 == "12");
console.log(true == Boolean("true"));

// 2. Logical Operator : &&, ||, !
//  AND : data harus true untuk menghasilkan true
//  OR : data salah satu true untuk menghasilkan true
//  NEGASI : membalikkan logika


console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(!true || false);

// 3. TRUTHLY and FALSY
// TRUTHLY : ' ', '0', true, 1, -1, {}, []
// Falsy : '', 0, null, undefined, NaN, false

let temp = null;
if(temp){
    console.log('TRUTHLY');
}else{
    console.log('FALSY');
}