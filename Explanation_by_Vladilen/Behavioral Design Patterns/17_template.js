class Employee {
    constructor(name,sallary){
        this.name = name
        this.sallary = sallary
    }

    responsibilities(){
    }

    work(){
        return `${this.name} is responcible for ${this.responsibilities()}`
    }

    getPayed(){
        return `${this.name} has ${this.sallary} sallary`
    }
};

class Developer extends Employee{
    constructor(name,sallary){
        super(name,sallary)
    }

    responsibilities(){
        return `Developing programs`
    }
};

class Tester extends Employee{
    constructor(name,sallary){
        super(name,sallary)
    }

    responsibilities(){
        return `Tests programs maded by Developer`
    }
};

console.group('Template')
const developer = new Developer('Dessarion',15000)
console.log(developer.work());
console.log(developer.getPayed());
const tester = new Tester('Boris',5000);

console.log(tester.work());
console.log(tester.getPayed());

