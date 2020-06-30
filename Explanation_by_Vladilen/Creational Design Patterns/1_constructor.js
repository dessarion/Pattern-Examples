//classical ES5 syntax for create class
function Server(name, ip, domen) {
    this.name = name;
    this.ip = ip;
    this.domen = domen
}

//adding methods in ES6 syntax

Server.prototype.getUrl = function () {
    return `https://www.${this.ip}.${this.name}.${this.domen}`
}

const aws = new Server('dessarion', '1.23.45.67.89', 'net')
console.group('constructor')
console.log(aws.getUrl()) // https://www.1.23.45.67.89.dessarion.net

//ES6 syntax for classes

class ServerES6 {
    constructor(name, ip, domen = 'net') {
        this.name = name,
            this.ip = ip,
            this.domen = domen
    }

    getUrl() {
        return `https://www.${this.ip}.${this.name}.${this.domen}`
    }
};

const awsES6 = new ServerES6('EcmaSix','99.88.77.88')

console.log(awsES6.getUrl()) //https://www.99.88.77.88.EcmaSix.net
console.groupEnd()