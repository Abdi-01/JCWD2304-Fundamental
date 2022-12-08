// Object : data penampung seperti array, yang tidak harus berurutan posisi datanya. Dan pemberian alamatnya berdasarkan property

/**
 * let variableArray = [data1,data2,data3];
 * let variableObject = {
 *      namaProperty:data,
 *      namaProduct:'Sepatu Air Jordan',
 *      price:2500000,
 *      isReady:true,
 *      size:[31,32,33,34,35],
 *      total:(param)=>{block code}
 * }
 * */

// Mendeklarasikan object
// Cara 1 : Syntax object literal
let student = {
    name: "Abdi",
    batchClass: "JCWD2304",
    age: 30,
    materi: [
        "Fundamental", "Front-end", "Back-end"
    ]
}
student.address = 'Tebet'
console.log("Before =>", student);
delete student.materi;
console.log("After =>", student);
console.table(student)
console.log(student.name);
console.log(student['batchClass']);
student.name = 'Edo';
console.log(student.name);

// Cara 2 : Syntax Object keyword "new"
let fundamental = new Object();
fundamental.nilai = 95;
console.log(fundamental);

// Object Destructuring
let { name, age, batchClass } = student;
console.log(name);
console.log(age);
age = 25;
console.log(age);
student.age = 25;
console.log(student);

// Array Destructuring
let numb = [1, 2, 3, 4];
console.log(numb);
let [a, b, ...c] = numb;
console.log(a);
console.log(b);
console.log(c);

let objValue = Object.values(student);
console.log(objValue);
let objKey = Object.keys(student);
console.log(objKey);

// Looping Object
for (const property in student) {
    console.log(property);
}

// cloneObjValues(student); --> Output : ['Edo', 'JCWD2304', 25, 'Tebet']
// cloneObjKeys(student); --> Output : ['name', 'batchClass', 'age', 'address']

// Cara 3 : Create object by class

/**
 * class structure :
 * class ClassName{
 *      constructor(value1, value2...){
 *             this.propertyName = value1;
 *             this.propertyName = value2;
 *      }
 * }
 * */

class Human {
    // Private property
    #religion;
    constructor(_name, _birth, _gender, _religion) {
        this.name = _name;
        this.birth = _birth;
        this.gender = _gender;
        this.#religion = _religion;
    }


    getAge = () => {
        console.log(this.birth.split('-'));
        let birthYear = parseInt(this.birth.split('-')[2]);
        console.log(birthYear);
        let date = new Date();
        return date.getFullYear() - birthYear;
    }

    // Methode 
    introduce = () => {
        return `My name is ${this.name}, I born at ${this.birth}, my age ${this.getAge()}, religion ${this.#religion}`;
    }
}

let human01 = new Human('Abdi', '12-11-1980', 'Male', 'Islam');
console.log(human01);
console.log(new Human('Abdi', '12-11-1980', 'Male'));

// Inheritance = pewarisan data dari class utama agar bisa digunakan class turunannya

class Pekerjaan extends Human {
    constructor(_nama, _tglLahir, _gender, _posisi, _gaji) {
        super(_name, _tglLahir, _gender); // Menggunakan property dari class Human
        this.posisi = _posisi;
        this.gaji = _gaji;
    }
}

// ARRAY of OBJECT
let people = [
    new Human('Abdi', '12-11-1980', 'Male'),
    new Human('Ana', '12-01-1980', 'Female'),
    new Human('Zafran', '09-01-1985', 'Male')
];
console.log(people[1].gender);

let product = [
    {
        name: "Hoodie",
        stock: 12,
        price: 75000
    },
    {
        name: "Sepatu",
        stock: 10,
        price: 80000
    }
];

console.log(product);
