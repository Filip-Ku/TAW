import { Point, Rectangle, Square } from './rectangle';

const pointA = new Point(0, 0);
const pointB = new Point(4, 0);
const pointC = new Point(4, 3);
const pointD = new Point(0, 3);

const rectangle = new Rectangle(pointA, pointB, pointC, pointD);
console.log("Rectangle Area:", rectangle.getArea());
console.log("Rectangle Perimeter:", rectangle.getPerimeter());

rectangle.move(2, 2);
console.log("Moved Rectangle:", rectangle);


//Zly kwadrat
try {
    const square = new Square(
        new Point(1, 0),
        new Point(2, 0),
        new Point(2, 2),
        new Point(0, 2)
    );
    console.log("Square Area:", square.getArea());
} catch (error) {
    console.error(error.message);
}

//Dobry kwadrat
try {
    const square = new Square(
        new Point(0, 0),
        new Point(2, 0),
        new Point(2, 2),
        new Point(0, 2)
    );
    console.log("Square Area:", square.getArea());
    square.scale(1.5);
    console.log("Scaled Square:", square);
} catch (error) {
    console.error(error.message);
}



rectangle.rotate(90);
console.log("Rotated Rectangle:", rectangle);


try{
    const letter = new Point("a",5)
} catch (error) {
    console.error(error.message);
}