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
    name:"Abdi",
    class:"JCWD2304",
    age:30,
    materi:[
        "Fundamental", "Front-end", "Back-end"
    ]
}
student.address = 'Tebet'
console.log("Before =>", student);
delete student.materi;
console.log("After =>",student);
console.table(student)
console.log(student.name);
console.log(student['class']);
student.name='Edo';
console.log(student.name);

// Cara 2 : Syntax Object keyword "new"
let fundamental = new Object();
fundamental.nilai = 95;
console.log(fundamental);