class OfficialDealer {
    constructor() {
        this.customers = []
    }

    orderAuto(customer,auto,info){
        debugger
        const name = customer.getName(); //Контекст вызова клиента

        console.log(`Order name : ${name}, Order auto is ${auto}`);
        console.log(`Additional info : ${info}`);
        this.addToCustomersList(name)
    }

    addToCustomersList(name){
        this.customers.push(name)
    }

    getCustomerList(){
        return this.customers
    }
}

class Customer {
    constructor(name,dealerMediator){
        this.name = name
        this.dealerMediator = dealerMediator //факт привязки
    }

    getName(){
        return this.name
    }

    makeOrder(auto,info){
        this.dealerMediator.orderAuto(this,auto,info) //Метод внутри медиатора
    }
}

const mediator = new OfficialDealer()

const dessarion = new Customer('Dessarion',mediator);
const pavlo = new Customer('HolyNightmare',mediator);

dessarion.makeOrder('Tesla','Model X');
pavlo.makeOrder('Ford','Van for family')
console.log(mediator.getCustomerList());
