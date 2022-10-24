//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class car extends Vehicle { 
    constructor (maxPass, passenger, numberOfWheels, maxSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage);
        this.maxPass = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;  

    }
    
    loadPassenger (num){
        if (num + this.passenger < this.maxPass) {
           console.log("Avaliable Room!") 
        } 
    }

    start () {
        if (this.fuel > 0) {
            return start = true;
        }
    }

    scheduleService (mileage) {
        if (this.milage > 30000) {
            return this.scheduleService = true;
        }
    }

    }

 let myCar= new car('mercury', 'rad_sedan', '2002', 'white', 50000)

 myCar.loadPassenger(1)
 myCar.start()
 myCar.scheduleService()