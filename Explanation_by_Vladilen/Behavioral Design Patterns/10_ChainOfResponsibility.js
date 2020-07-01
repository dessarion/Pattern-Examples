class MySumm {
    constructor(initialValue = 42){
        this.sum = initialValue
    }

    add(value){
        this.sum += value
        return this // так как мы вернули сам контекст то можем вызивать методы в цепочке
    }
};

const sum1 = new MySumm();

console.group('Chain Of Responsibility');
console.log(sum1.add(8).add(10).add(-10).add(-8).sum); //42

const sum2 = new MySumm(0);

console.log(sum2.add(1).add(2).add(3).add(4).sum); //10

console.groupEnd()
