import faker from "faker";
import { Mappable } from "./Map";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    latitude: number;
    longitude: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `CompanyName is ${this.companyName} CatchPhrase is ${this.catchPhrase}`;
  }
}
