class Car  {
    constructor(model,price){
        this.model = model
        this.price = price
    }
}

class CarFactory  {
    constructor(){
        this.cars = [] //База потенциальных объектов
    }
    create(model,price){
        const candidate = this.getCar(model); //Поиск кандидата в массиве потенциальных объектов

        if(candidate){
            return candidate // сработает если есть объект
        };
        //если ретурн не сработал то создаем и добавляем объект
        const newCar = new Car(model,price)
        this.cars.push(newCar)
        return newCar

    }

    getCar(model){
        return this.cars.find(car => car.model === model) //Поиск переданой модели в массиве
    }
}
const carFactory = new CarFactory()

const bmwX3 = carFactory.create('bmw',10000);
const avdi = carFactory.create('audi',10300);
const bmwX6 = carFactory.create('bmw',17000);
console.group('FlyWeight')
console.log(bmwX3);
console.log(avdi);
console.log(bmwX6); // Car {model: "bmw", price: 10000} //Так как объект был закеширован паттерном
console.groupEnd()
