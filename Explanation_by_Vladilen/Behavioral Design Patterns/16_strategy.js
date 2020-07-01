class Vehicle {
    travelTime() {
        return this.timeTaken
    }
};

class Bus extends Vehicle {
    constructor(){
        super()
        this.timeTaken = 10
    }
};

class Taxi extends Vehicle {
    constructor(){
        super()
        this.timeTaken = 5
    }
};

class Starship extends Vehicle {
    constructor(){
        super()
        this.timeTaken = 1
    }
};

class Commute {
    travel(transport){
        return transport.travelTime()
    }
}

const commute = new Commute();

console.group('Strategy')

console.log(commute.travel(new Taxi()));
console.log(commute.travel(new Starship()));
console.log(commute.travel(new Bus()));

console.groupEnd()
