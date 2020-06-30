//Идея в том что в приложении может быть только один инстанс данного класса

class DataBase {
    constructor(data){
        //для создания паттерна добавляем проверку в конструкторе
        if(DataBase.exists){ 
            return DataBase.instance //В случае если инстанс был создан мы его возвращаем
            //и конструктор далее не будет выполнятся
        }
        DataBase.instance = this
        DataBase.exists = true
        this.data = data
    }

    getData(){
        return this.data
    }
}

const dataBase = new DataBase('Wery important data!')
console.group('SingleTon')
console.log(dataBase.getData()); //'Wery important data!'

const mySql = new DataBase ('Sneaky Data to crush this code!');

console.log(mySql.getData()) //'Wery important data!'
