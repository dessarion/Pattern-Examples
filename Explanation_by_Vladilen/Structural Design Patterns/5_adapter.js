//К примеру ниже старый функционал
class Oldcalc {
    operations( t1 , t2 , operation ){
        switch (operation) {
            case 'add': return t1 + t2
            case 'sub': return t1 - t2
            default : NaN
        }
    }
}
//К примеру ниже новый функционал
class Newcalc {
    add(t1,t2){
        return t1 + t2
    }
    sub(t1,t2){
        return t1 - t2
    }
}
//класс адаптер применяет старый интерфейс к новому функционалу
class CalcAdapter {
    constructor() {
        this.calc = new Newcalc()
    }
    operations( t1 , t2 , operation ){
        switch (operation) {
            case 'add': return this.calc.add(t1,t2)
            case 'sub': return this.calc.sub(t1,t2)
            default : NaN
        }   
    }
}

console.group('Adapter')
const oldCalc = new Oldcalc()
console.log(oldCalc.operations(50,5,'add'));
const newCalc = new Newcalc()
console.log(newCalc.add(50,5));

const adapted = new CalcAdapter()

console.log(adapted.operations(60,5,'sub')); //старый интерфейс к новому функционалу

console.groupEnd()
