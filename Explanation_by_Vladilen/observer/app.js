class Subject {
    constructor(){
        this.observers = [] //Массив с observers которые мы будем добавлять для данного класса
    }

    subscribe(observer){ //Метод который будет добавлять нового наблюдателя
        this.observers.push(observer)
    }

    unsubscribe(observer){ //Удаляем переданного наблюдателя фильтром
        //фильтруя массив observers мы записиваем в него только тех наблюдателей
        //которые не равны переданному значению.
        this.observers = this.observers.filter(observ => observ !== observer)
    }

    fire(action){
        this.observers.forEach(observer => { //Пробегаемся по списку наблюдателей
            observer.update(action) // update Метот у наблюдателя для обновления
        }); 
    }
};

class Observer {
    constructor(state = 1) {
        this.state = state,
        this.initialState
    }

    update(action){
        switch (action.type) {
            case 'INCREMENT':
                this.state = ++this.state
                break;
            case 'DECREMENT':
                this.state = --this.state
                break;
            case 'ADD':
                this.state += action.payload //Наглядность дополнительного параметра payload
                break;
            default: 
                this.state = this.initialState    
        }
    }
};

const stream$ = new Subject () //Создаем объект со всеми методами для наблюдателей

const obs1 = new Observer() //Вызов класса без параметров для наглядности работы данных по умолчанию state = 1
const obs2 = new Observer(42)

stream$.subscribe(obs1); //Подписиваем наблюдателей
stream$.subscribe(obs2);

stream$.fire({type:'INCREMENT'}); //Вызиваем метот тригера для всех подписанных наблюдателей 
//и передаем в него объект с кейсом для обновления
stream$.fire({type:'INCREMENT'});
stream$.fire({type:'DECREMENT'}) //Проверка всех случаев для наглядности
stream$.fire({ //Для наглядности когда передаем несколько параметров
    type: 'ADD',
    payload: 100
})

console.log(obs1.state); //Вызваем свойство state и показиваем его на консоль 
console.log(obs2.state);