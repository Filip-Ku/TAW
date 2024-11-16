"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rectangle_1 = require("./rectangle");
var pointA = new rectangle_1.Point(0, 0);
var pointB = new rectangle_1.Point(4, 0);
var pointC = new rectangle_1.Point(4, 3);
var pointD = new rectangle_1.Point(0, 3);
var rectangle = new rectangle_1.Rectangle(pointA, pointB, pointC, pointD);
console.log("Rectangle Area:", rectangle.getArea());
console.log("Rectangle Perimeter:", rectangle.getPerimeter());
rectangle.move(2, 2);
console.log("Moved Rectangle:", rectangle);
//Zly kwadrat
try {
    var square = new rectangle_1.Square(new rectangle_1.Point(1, 0), new rectangle_1.Point(2, 0), new rectangle_1.Point(2, 2), new rectangle_1.Point(0, 2));
    console.log("Square Area:", square.getArea());
}
catch (error) {
    console.error(error.message);
}
//Dobry kwadrat
try {
    var square = new rectangle_1.Square(new rectangle_1.Point(0, 0), new rectangle_1.Point(2, 0), new rectangle_1.Point(2, 2), new rectangle_1.Point(0, 2));
    console.log("Square Area:", square.getArea());
    square.scale(1.5);
    console.log("Scaled Square:", square);
}
catch (error) {
    console.error(error.message);
}
rectangle.rotate(90);
console.log("Rotated Rectangle:", rectangle);
try {
    var letter = new rectangle_1.Point("a", 5);
}
catch (error) {
    console.error(error.message);
}
