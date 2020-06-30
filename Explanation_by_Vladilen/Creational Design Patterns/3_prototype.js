const car = {
    wheels: 4,

    init(){
        console.log(`I hawe ${this.wheels} wheels, my owner is ${this.owner}`) //Данной переменной у нас ещё нет
    }
};

const carWithOwner = Object.create(car,{ //Первым параметром передаем объект прототип
    owner: {
        value: 'Dmitriy'
    }
})

console.group('prototype')
carWithOwner.init() //Метод будет вызван из прототипа (I hawe 4 wheels, my owner is Dmitriy)

console.log(carWithOwner.__proto__ === car) //true