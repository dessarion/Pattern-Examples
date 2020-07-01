class Subject {
    constructor(){
        this.observers = [] //Тут будут наблюдатели
    }

    subscribe(listener){ //создадим метот который будет подписивать наблюдателя
        this.observers.push(listener)
    }

    unsubscribe(listener){ //Метод удаляющий наблюдателя
        this.observers = this.observers.filter( lis => lis !== listener)
        //отфильтровуем список наблюдателей исключа переданного наблюдателя
        //и записиваем их наново, по сути просто удаляя переданного наблюдателя
    }

    fire(changes){ //Триггерим изминения во всех наблюдателях
        this.observers.forEach( obsever => {
            obsever.update(changes) //так как obsever будет класс мы у него реализуем метод update
        })
    }
};

class Observer {
    constructor(state = 1){
        this.state = state
        this.initialState = state //для возможности вернутся к начальному значению
    }

    update(changes) {
        switch(changes.type){
            case 'INCREMENT' : this.state = ++this.state
            break;
            case 'DECREMENT': this.state = --this.state
            break;
            case 'ADD' : this.state += changes.payload
            break;
            default: this.state = this.initialState
        }
    }
};

const stream = new Subject();//Создадим поток для наблюдателей

const obs1 = new Observer();
const obs2 = new Observer(42);

stream.subscribe(obs1);
stream.subscribe(obs2);
stream.unsubscribe(obs2);

stream.fire({type : 'INCREMENT'});
stream.fire({
    type: 'ADD',
    payload: 40
});

console.group('Observer');

console.log(obs1.state);
console.log(obs2.state);

console.groupEnd()
