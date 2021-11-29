"use strict";
exports.__esModule = true;
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var SpaceLocation_1 = require("./SpaceLocation");
// // Part 1: Declare (5) Variables With Type
// let spacecraftName: string = 'Determination';
// let speedMph: number = 17500;
var kilometersToMars = 225000000;
var kilometersToMoon = 34400;
// let milesPerKilometer: number = 0.621;
// // Part 2: Print Days to Mars
// let milesToMars: number = kilometersToMars * milesPerKilometer;
// let hoursToMars: number = milesToMars / speedMph;
// let daysToMars: number = hoursToMars / 24;
// console.log(daysToMars);
// Code an output statement here (use a template literal):
// console.log(`${spacecraftName} will take ${daysToMars} days to reach Mars`);
// // Part 3: Create a Function ("getDaysToLocation")
// let getDaysToLocation = function(kilometersAway:number, speed:number = speedMph): number {
//     let milesAway: number = kilometersAway / milesPerKilometer;
//     let hoursToLocation: number = milesAway / speed;
//     let daysToLocation: number = hoursToLocation / 24;
//     return daysToLocation;
// };
// // Move your output statement from part 2 here. Update the template literal to call
// // the function and print the outputs for a Mars trip and a moon trip.
// console.log(`${spacecraftName} will take ${getDaysToLocation(kilometersToMars)} days to reach Mars.`);
// console.log(`${spacecraftName} will take ${getDaysToLocation(kilometersToMoon)} days to reach the moon.`);
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(shipName, speed) {
        this.getDaysToLocation = function (kilometersAway, speed) {
            if (speed === void 0) { speed = this.speedMph; }
            var milesAway = kilometersAway / this.milesPerKilometer;
            var hoursToLocation = milesAway / speed;
            var daysToLocation = hoursToLocation / 24;
            return daysToLocation;
        };
        this.name = shipName;
        this.milesPerKilometer = 0.621;
        this.speedMph = speed;
    }
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToMoon));
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// console.log(`${spaceShuttle.name} will take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to reach Mars.`)
// console.log(`${spaceShuttle.name} will take ${spaceShuttle.getDaysToLocation(kilometersToMoon)} days to reach Mars.`)
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
