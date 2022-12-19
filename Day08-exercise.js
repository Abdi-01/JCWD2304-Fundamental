// Exercise - Employee Salary, Specifications :
// Create a program to calculate total salary based on employee type
// There are two types of employee : full-time & part-time
// Salary for full-time employee : 
// IDR 100.000 / hour
// IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
// Salary for part-time employee : 
// IDR 50.000 / hour
// IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
// Requirements :
// Create an Employee as a parent class
// Create a Fulltime Employee and ParttimeEmployee as a child of Employee class
// Create a method in that class to add working hour per day
// Create a method in that class to calculate total salary
// Use inheritance concept

class Employee {
    constructor(_name) {
        this.name = _name;
    }
}

class FullTime extends Employee {
    constructor(_name) {
        super(_name);
        this.working = [];
        this.fullTime = {
            salaryA: 100000,
            salaryB: 75000
        }
    }

    addWorking = (_checkIn, _checkOut) => {
        console.log(parseInt(_checkIn.split(':')[0]));
        console.log(parseInt(_checkOut.split(':')[0]));
        console.log(parseInt(_checkOut.split(':')[0]) - parseInt(_checkIn.split(':')[0]));
        let dayliHour = (parseInt(_checkOut.split(":")[0]) - parseInt(_checkIn.split(":")[0])) + (parseInt(_checkIn.split(":")[1]) + parseInt(_checkOut.split(":")[1])) / 60;
        let overtime = dayliHour - 6;
        console.log(overtime);
        let mainSalary = overtime > 0 ? 6 * this.fullTime.salaryA : dayliHour * this.fullTime.salaryA;
        console.log(mainSalary);
        let overSalary = overtime > 0 ? overtime * this.fullTime.salaryB : 0;
        console.log(overSalary);
        this.working.push({
            name: this.name,
            dayliHour,
            dayliSalary: mainSalary + overSalary
        })
        console.log(this.working);
    }

    totalSalary = () => {
        let amount = 0;
        console.log(this.working);
        this.working.forEach(val => amount += val.dayliSalary)
        return amount;
    }

}

class PartTime extends Employee {
    constructor(_name) {
        super(_name);
        this.working = [];
        this.partTime = {
            salaryA: 50000,
            salaryB: 30000
        }
    }

    addWorking = (_checkIn, _checkOut) => {
        let dayliHour = (parseInt(_checkOut.split(":")[0]) - parseInt(_checkIn.split(":")[0])) + (parseInt(_checkIn.split(":")[1]) + parseInt(_checkOut.split(":")[1])) / 60;
        let overtime = dayliHour - 6;
        let mainSalary = overtime > 0 ? 6 * this.partTime.salaryA : dayliHour * this.partTime.salaryA;
        let overSalary = overtime > 0 ? overtime * this.partTime.salaryB : 0
        this.working.push({
            name: this.name,
            dayliHour,
            dayliSalary: mainSalary + overSalary
        })
        console.log(this.working);
    }

    totalSalary = () => {
        let amount = 0;
        this.working.forEach(val => amount += val.dayliSalary)
        return amount;
    }

}

let attendanceFT = new FullTime("Ade");
let attendancePT = new PartTime("Edo");
attendanceFT.addWorking("09:00", "16:00"); // day01
attendanceFT.addWorking("09:00", "15:00"); // day02
attendancePT.addWorking("09:00", "18:00"); // day01-part-time
attendancePT.addWorking("09:00", "18:00"); // day02-part-time
attendancePT.addWorking("09:00", "18:00"); // day03-part-time
attendancePT.addWorking("09:00", "18:00"); // day04-part-time
attendancePT.addWorking("09:00", "18:00"); // day05-part-time
console.log(attendanceFT.working);
console.log(attendanceFT.totalSalary().toLocaleString('id', { style: "currency", currency: "IDR" }));
console.log(attendancePT.working);
console.log(attendancePT.totalSalary().toLocaleString('id', { style: "currency", currency: "IDR" }));
let printWorking = attendancePT.working.map((val,idx)=>`Day-${idx+1} ${val.name} working ${val.dayliHour}hr and dayli salary ${val.dayliSalary}`)
console.log(printWorking.join('\n'));
