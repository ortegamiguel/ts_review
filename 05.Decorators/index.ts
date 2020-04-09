function SelfDriving(constructorFunction: Function){
    constructorFunction.prototype.SelfDriving = true;
}

function Wheels(numberOfWheels: number){
    return function(constructor: Function){
        constructor.prototype.wheels = numberOfWheels;
    } 
}

@SelfDriving
@Wheels(4)
class Car {
    private brand: String;
    constructor(brand: string){
      this.brand = brand;      
    }
}

const nissan: Car = new Car('Nissan');
console.log(nissan.SelfDriving);
console.log(nissan.wheels);
