// Exercise 1
class Student {
    constructor(name, email, birth, score) {
        let date = new Date(birth)
        let dateNow = new Date()
        console.log(date);
        this.name = name;
        this.email = email;
        this.birth = date;
        this.age = dateNow.getFullYear() - date.getFullYear();
        this.score = score;
    }
}

console.log(new Student("Edo", "edo@mail.com", "1997-04-25", 85));
let dbStudent = [];
dbStudent.push(new Student("Edo", "edo@mail.com", "1997-04-25", 85));
dbStudent.push(new Student("Andrew", "and@mail.com", "1998-11-12", 65));
dbStudent.push(new Student("Zafran", "zaf@mail.com", "1992-02-01", 80));
dbStudent.push(new Student("Budi", "budi@mail.com", "1996-11-11", 75));
console.log(dbStudent);

// let tempScore = [{
//     score: 70
// }, {
//     score: 40
// },
// {
//     score: 50
// }];
// tempScore.sort((a, b) => a.score - b.score);
console.log(tempScore);
let calculateStudent = (arr) => {
    let scrTotal = 0, ageTotal = 0;
    let scores = [...arr.sort((a, b) => a.score - b.score)];
    let ages = [...arr.sort((a, b) => a.age - b.age)];

    for (let i = 0; i < arr.length; i++) {
        scrTotal += arr[i].score;
        ageTotal += arr[i].age;
    }
    return {
        score: {
            highest: scores[arr.length - 1],
            lowest: scores[0],
            average: scrTotal / scores.length
        },
        age: {
            highest: ages[arr.length - 1],
            lowest: ages[0],
            average: ageTotal / arr.length
        }
    }
}
console.log(calculateStudent(dbStudent));

// Exercise 2
class Product {
    constructor(_name, _price) {
        this.name = _name;
        this.price = _price;
    }
}

let dbProduct = [
    new Product("Apel", 5000),
    new Product("Lemon", 10000)
]

class Transaction {
    constructor() {
        this.cart = [];
        this.total = 0;
    }

    addToCart = (product = null, qty = 1) => {
        let amount = 0;
        this.cart.push({
            product: { ...product, qty },
            subTotal: qty * product?.price
        })
        this.cart.forEach(val => amount += val.subTotal);
        this.total = amount;
    }

    show = () => {
        return 'Your total trasaction Rp.' + this.total.toLocaleString('id');
    }

    checkout = () => {
        let print = '';
        this.cart.forEach((val, idx) => {
            print += `${idx + 1}. ${val.product.name}, ${val.product.price.toLocaleString('id', { style: "currency", currency: "IDR" })}, Qty: ${val.product.qty}, ${val.subTotal.toLocaleString('id', { style: "currency", currency: "IDR" })}\n`;
        })
        print += `Total payment : ${this.total.toLocaleString('id', { style: "currency", currency: "IDR" })}`

        this.cart = [];
        return print;
    }
}
let transaction = new Transaction()
transaction.addToCart(dbProduct[0], 3);
transaction.addToCart(dbProduct[1], 1);
console.log(transaction.checkout());


let a = [1, 2, 3, 4];
console.log(a);
let b = [...a];
console.log(b);
b[0] = 10;
console.log(a);
console.log(b);

// let c = [...a,...b]
let c = a.concat(b)
console.log(c);