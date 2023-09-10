// ! Classes

class Vehicle {
  vName: string = "FourWheeler";
  public drive(): void {
    console.log("This Vehicle can be drived");
  }
  honk(): void {
    console.log("Beep Beep");
  }
  private vehicleName(): void {
    console.log("This Vehicle Name " + this.vName);
  }
  protected printVehicleName(): void {
    this.vehicleName();
  }
}

class Car extends Vehicle {
  constructor(public carName: string) {
    super();
    this.carName = carName;
  }
  speedInfo(): void {
    console.log("Car can go speed of 200mph");
  }
  honk(): void {
    console.log("GRRRRRRRRRRR");
  }
  protected printCarName(): void {
    console.log("This car is a " + this.carName);
  }
  public getCarName(): void {
    this.printCarName();
  }
}

const lambo = new Car("Lambo");
lambo.drive();
lambo.honk();
lambo.speedInfo();
lambo.getCarName();
