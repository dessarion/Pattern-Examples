class Light {
    constructor(light){
        this.light = light
    }
};

class RedLight extends Light{
    constructor(){
        super('red')
    }

    sign(){
        return 'STOP'
    }
};

class YellowLight extends Light{
    constructor(){
        super('yellow')
    }

    sign(){
        return 'READY'
    }
};

class GreenLight extends Light{
    constructor(){
        super('green')
    }

    sign(){
        return 'GO!'
    }
};

class TrafficLight {
    constructor(){
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight()
        ]

        this.currentState = this.states[0]
    }

    change(){
        const total = this.states.length
        let index = this.states.findIndex( light => light === this.currentState)
        if(index + 1 < total){
            this.currentState = this.states[index + 1]
        } else {
            this.currentState = this.states[0]
        }
    }

    sign(){
        return this.currentState.sign()
    }
};

const traffic = new TrafficLight();

console.group('State');
console.log(traffic.sign());
traffic.change();
console.log(traffic.sign());
traffic.change();
console.log(traffic.sign());
traffic.change();
console.log(traffic.sign());
console.groupEnd()
