class SimpleMembership {
    constructor(name){
        this.name = name,
        this.cost = 50
    }
};

class StandardMembership {
    constructor(name){
        this.name = name,
        this.cost = 150
    }
};

class PremiumMembership {
    constructor(name){
        this.name = name,
        this.cost = 450
    }
};

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    }

    create (name,type = 'simple'){
        const Membersip = MemberFactory.list[type] || MemberFactory.list.simple; // Получаем доступ к нужному инстансу
        const member = new Membersip(name);
        //так как в переменной member у нас конструктор его можно расширять внутри данного метода
        member.type = type;
        member.define = function(){
            console.log(`${this.name} (${this.type}) : ${this.cost}`)
        };

        return member
    }
};

const factory = new MemberFactory() //Создаем фабрику(запуск)

//создадим массив пользователей

const members = [
    factory.create('Solomia','simple'),
    factory.create('Jana','standard'),
    factory.create('Dessarion','premium'),
    factory.create('Qwerty')
]

console.group('Factory')
console.log(members)

members.forEach( memb => { // Так как members внутри имеет объект можно вызвать метод у каждого из елементов массива members
    memb.define()
});

console.groupEnd()