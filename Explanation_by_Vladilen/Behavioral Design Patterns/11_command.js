class MyMath {
    constructor(initialValue = 0){
        this.num = initialValue
    }

    square(){
        return this.num ** 2
    }

    cube(){
        return this.num ** 3
    }
};

class Command {
    constructor(subject){
        this.subject = subject
        this.commandsExecuted = [] //Здесь будем хранить список вызванных команд
    }

    execute(command){
        this.commandsExecuted.push(command) //добавляем в массив команд вызванную команду
        return this.subject[command]() //чтоб вызвать функцию мы находим ее в объекте subject по ключу command и тут же вызиваем
    }
};

const x = new Command(new MyMath(3));
const y = new Command(new MyMath(42));

console.group('Command');
console.log(x.execute('cube')); // 27
console.log(x.execute('square')); // 9
console.log(x.execute('square'));
//сохраняем лог с ссылками на выполненные команды
console.log(x.commandsExecuted); // ["cube", "square", "square"]
console.log(y.execute('cube')); // 74088
console.log(y.commandsExecuted); // ["cube"]
console.groupEnd()


