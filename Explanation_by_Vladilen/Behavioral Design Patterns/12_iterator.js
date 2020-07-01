class MyIterator {
    constructor(data){
        this.index = 0
        this.data = data
    }

    [Symbol.iterator](){
        return {
            next: () => { //Стрелочная функция чтоб контекст оставался класса итеротора
                if(this.index < this.data.length){ //У нас массив по этому можно упразнить проверку оставив только длинну массива
                   return {
                       value: this.data[this.index++],
                       done: false //значение в состоянии false так как данные ещё есть
                   }
                }else{ //если мы дошли до конца 
                        this.index = 0  //возвращаем индексу начальное значение
                        return {
                            done: true,
                            value: void 0 //undefined
                        }
                }
            }
        }
    }
};

function* generator(collection){
    let index = 0;
    while(index < collection.length){
        yield collection[index++]
    }
}

const iterator = new MyIterator(['This', 'is', 'iterator']);
console.group('Iterator');
for (const value of iterator){
    console.log('Value' , value);
};
const gen = generator(['This','is','generator'])

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); //undefined
 
console.groupEnd()