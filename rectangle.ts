class Point implements Movable{
    x: number;
    y: number;

    constructor(x: any,y: any) {
        if(typeof x!=='number' || typeof y!=='number'){
            throw new Error("Invalid data type. X and Y must be numbers.")
        }
        this.x=x;
        this.y=y;
    }

    public move(x=0,y=0) {
        this.x=this.x+x;
        this.y=this.y+y;
    }
}


class Rectangle implements Movable {
    protected A: Point;
    protected B: Point;
    protected C: Point;
    protected D: Point;

    constructor (A: Point,B: Point,C: Point,D: Point){
        this.A=A;
        this.B=B;
        this.C=C;
        this.D=D;
    }

    public move(x=0,y=0){
        this.A.move(x,y)
        this.B.move(x,y)
        this.C.move(x,y)
        this.D.move(x,y)
    }

    public getArea():number{
        let AB = Math.sqrt(Math.pow(this.A.x-this.B.x,2)+Math.pow(this.A.y-this.B.y,2))
        let BC = Math.sqrt(Math.pow(this.B.x-this.C.x,2)+Math.pow(this.B.y-this.C.y,2))
        return AB*BC;
    }

    public rotate(angle: number): void {
        const radians = (angle * Math.PI) / 180;
        const centerX = (this.A.x + this.C.x) / 2;
        const centerY = (this.A.y + this.C.y) / 2;

        const rotatePoint = (point: Point): Point => {
            const translatedX = point.x - centerX;
            const translatedY = point.y - centerY;

            const rotatedX =
                translatedX * Math.cos(radians) - translatedY * Math.sin(radians);
            const rotatedY =
                translatedX * Math.sin(radians) + translatedY * Math.cos(radians);

            return new Point(rotatedX + centerX, rotatedY + centerY);
        };

        this.A = rotatePoint(this.A);
        this.B = rotatePoint(this.B);
        this.C = rotatePoint(this.C);
        this.D = rotatePoint(this.D);
    }


    public scale(factor: number): void {
        const centerX = (this.A.x + this.C.x) / 2;
        const centerY = (this.A.y + this.C.y) / 2;

        const scalePoint = (point: Point): Point => {
            const translatedX = point.x - centerX;
            const translatedY = point.y - centerY;

            const scaledX = translatedX * factor;
            const scaledY = translatedY * factor;

            return new Point(scaledX + centerX, scaledY + centerY);
        };

        this.A = scalePoint(this.A);
        this.B = scalePoint(this.B);
        this.C = scalePoint(this.C);
        this.D = scalePoint(this.D);
    }

    public getPerimeter():number{
        let AB = Math.sqrt(Math.pow(this.A.x-this.B.x,2)+Math.pow(this.A.y-this.B.y,2))
        let BC = Math.sqrt(Math.pow(this.B.x-this.C.x,2)+Math.pow(this.B.y-this.C.y,2))
        let CD = Math.sqrt(Math.pow(this.C.x-this.D.x,2)+Math.pow(this.C.y-this.D.y,2))
        let AD = Math.sqrt(Math.pow(this.D.x-this.A.x,2)+Math.pow(this.D.y-this.A.y,2))
        return AB+BC+CD+AD;
    }
}

interface Movable {
    move(x: number,y:number): void;
}

class Square extends Rectangle{

    constructor(A: Point,B: Point,C: Point,D: Point) {
        super(A,B,C,D);
        this.checkShape()
    }

    private checkShape(){
        let AB = Math.sqrt(Math.pow(this.A.x-this.B.x,2)+Math.pow(this.A.y-this.B.y,2))
        let BC = Math.sqrt(Math.pow(this.B.x-this.C.x,2)+Math.pow(this.B.y-this.C.y,2))
        let CD = Math.sqrt(Math.pow(this.C.x-this.D.x,2)+Math.pow(this.C.y-this.D.y,2))
        let AD = Math.sqrt(Math.pow(this.D.x-this.A.x,2)+Math.pow(this.D.y-this.A.y,2))

        if(AB !== BC || BC !== CD || CD !== AD || AD !== AB) {
            throw new Error("Check length")
        }
    }
}

export {Point, Rectangle, Square}