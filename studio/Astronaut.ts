import { Payload } from './Payload'
export class Astronaut implements Payload  {
    massKg: number;
    name: string;
    constructor(massKg: number, myName: string){
        this.massKg = massKg;
        this.name = myName;
    }
}