class User {
    constructor(name) {
        this.userName = name
        this.room = null
    }

    send(message, to){
        this.room.send(message,this,to)
    }

    receive(message,from){ //from ето объект пользователя
        console.log(`${from.userName} to ${this.userName} : ${message}`); //контекст this это собственно созданый объект пользователя
    }
};

class ChatRoom {
    constructor(){
        this.users = {} //При создании комнаты у нас будет пустой список пользователей
    }

    register(user){ //Метод регистрации пользователя
        this.users[user.userName] = user
        user.room = this //присваеваем пользователю комнату ChatRoom это и есть медиатор связка
    }

    send(message,from,to){ //метод вызванный в классе User
        if(to){
            to.receive(message,from)
        } else { //если мы отправляем сообщение без адреса
            Object.keys(this.users).forEach( user => {
                if(this.users[user] !== from){ //Проверка если это не текущий пользователь => тогда
                    this.users[user].receive(message,from) //мы принимаем сообщение
                }
            })
        }
    }
};

// Создадим пользователей

const joel = new User('Joel Miller');
const elly = new User('Elly');
const abby = new User('Abby');
const elon = new User('Elon Musk');
// Создадим чат комнату

const thisWillBeFunny = new ChatRoom();

// Зарагестрируем пользователей в комнату

thisWillBeFunny.register(joel);
thisWillBeFunny.register(elly);
thisWillBeFunny.register(abby);
thisWillBeFunny.register(elon);

console.group('Mediator')
joel.send('Hello ewerybody!');
abby.send('Here you are!',joel);
joel.send('Ohh. probably U gonna kill me', abby);
joel.send('Dont go here, run!',elly);
elly.send('Joel!!!');
elon.send('WTF is going here?')

console.groupEnd()

