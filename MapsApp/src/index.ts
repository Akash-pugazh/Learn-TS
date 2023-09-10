import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";

const user1 = new User();

const company1 = new Company();

const map1 = new Map("map");

map1.addMarker(user1);
map1.addMarker(company1);
