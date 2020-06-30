//Базовый класс
class Server {
    constructor(ip,port){
        this.ip = ip
        this.port = port
    }

    get url(){
        return `https://${this.ip}:${this.port}`
    }
}

//Декораторы ниже модифицируют базовый класс

function aws(server) {
    server.isAWS = true
    server.info = function () {
        return server.url
    }

    return server //декоратор принимает инстанс класса но и возвращает его обратно
};

function azure(server){
    server.isAzure = true
    server.port += 500
    server.info = function () {
        return server.url
    }

    return server
}

console.group('Decorator')

const serverOne = aws(new Server('12.34.56.78',8080)) //Приминение доратора

console.log(serverOne.isAWS);
console.log(serverOne.info());

const serverTwo = azure(new Server('98.76.54.32',8888)) //Приминение доратора
console.log(serverTwo.isAzure);
console.log(serverTwo.url);
console.groupEnd()




