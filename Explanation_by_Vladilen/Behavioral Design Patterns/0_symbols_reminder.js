// Ето седьмой тип данных чтоб задавать ключи пришел к нам в ЕКМА СКРИПТ 6
const sym = Symbol('demo') //Ключевое слово new не нужно
const otherSym = Symbol('demo') //создаем с таким же описанием

console.log(sym); //Symbol(demo)
console.log(otherSym); //Symbol(demo) 
console.log(sym === otherSym); //false

const obj = {
    name: 'Dessarion',
    [sym]: 'meta'
}

console.log(obj[sym]); // 'meta'
console.log(obj[otherSym]); //undefined

for (let key in obj){
    console.log(obj[key]);
    
}
//данный цыкл символов не видит и выдаст толко Dessarion в данном примере




