"use strict";
class Car{
    constructor(brand){
        this._carName = brand;
    }
    present(name){
        return name+ ': I have a '+this.carName;
    }
    static hello(name){
        return 'Hello!'+' '+name;
    }
    get cname(){
        return this.carName;
    }
    set cname(cname){
        this.carName = cname;
    }
}

class Model extends Car {
    constructor(brand,model){
        super(brand);
        this.model = model;
    }
    show(name){
        return this.present(name) +' and, it is a '+this.model;
    }
}
myCar = new Model('Ford','Mustang');
console.log(myCar);
console.log(myCar.present('Krishna'));
console.log(Car.hello('Varshant'));
console.log(myCar.show('Krishna'));
console.log(myCar.cname);