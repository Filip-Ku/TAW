"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = exports.Rectangle = exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            throw new Error("Invalid data type. X and Y must be numbers.");
        }
        this.x = x;
        this.y = y;
    }
    Point.prototype.move = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = this.x + x;
        this.y = this.y + y;
    };
    return Point;
}());
exports.Point = Point;
var Rectangle = /** @class */ (function () {
    function Rectangle(A, B, C, D) {
        this.A = A;
        this.B = B;
        this.C = C;
        this.D = D;
    }
    Rectangle.prototype.move = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.A.move(x, y);
        this.B.move(x, y);
        this.C.move(x, y);
        this.D.move(x, y);
    };
    Rectangle.prototype.getArea = function () {
        var AB = Math.sqrt(Math.pow(this.A.x - this.B.x, 2) + Math.pow(this.A.y - this.B.y, 2));
        var BC = Math.sqrt(Math.pow(this.B.x - this.C.x, 2) + Math.pow(this.B.y - this.C.y, 2));
        return AB * BC;
    };
    Rectangle.prototype.rotate = function (angle) {
        var radians = (angle * Math.PI) / 180;
        var centerX = (this.A.x + this.C.x) / 2;
        var centerY = (this.A.y + this.C.y) / 2;
        var rotatePoint = function (point) {
            var translatedX = point.x - centerX;
            var translatedY = point.y - centerY;
            var rotatedX = translatedX * Math.cos(radians) - translatedY * Math.sin(radians);
            var rotatedY = translatedX * Math.sin(radians) + translatedY * Math.cos(radians);
            return new Point(rotatedX + centerX, rotatedY + centerY);
        };
        this.A = rotatePoint(this.A);
        this.B = rotatePoint(this.B);
        this.C = rotatePoint(this.C);
        this.D = rotatePoint(this.D);
    };
    Rectangle.prototype.scale = function (factor) {
        var centerX = (this.A.x + this.C.x) / 2;
        var centerY = (this.A.y + this.C.y) / 2;
        var scalePoint = function (point) {
            var translatedX = point.x - centerX;
            var translatedY = point.y - centerY;
            var scaledX = translatedX * factor;
            var scaledY = translatedY * factor;
            return new Point(scaledX + centerX, scaledY + centerY);
        };
        this.A = scalePoint(this.A);
        this.B = scalePoint(this.B);
        this.C = scalePoint(this.C);
        this.D = scalePoint(this.D);
    };
    Rectangle.prototype.getPerimeter = function () {
        var AB = Math.sqrt(Math.pow(this.A.x - this.B.x, 2) + Math.pow(this.A.y - this.B.y, 2));
        var BC = Math.sqrt(Math.pow(this.B.x - this.C.x, 2) + Math.pow(this.B.y - this.C.y, 2));
        var CD = Math.sqrt(Math.pow(this.C.x - this.D.x, 2) + Math.pow(this.C.y - this.D.y, 2));
        var AD = Math.sqrt(Math.pow(this.D.x - this.A.x, 2) + Math.pow(this.D.y - this.A.y, 2));
        return AB + BC + CD + AD;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(A, B, C, D) {
        var _this = _super.call(this, A, B, C, D) || this;
        _this.checkShape();
        return _this;
    }
    Square.prototype.checkShape = function () {
        var AB = Math.sqrt(Math.pow(this.A.x - this.B.x, 2) + Math.pow(this.A.y - this.B.y, 2));
        var BC = Math.sqrt(Math.pow(this.B.x - this.C.x, 2) + Math.pow(this.B.y - this.C.y, 2));
        var CD = Math.sqrt(Math.pow(this.C.x - this.D.x, 2) + Math.pow(this.C.y - this.D.y, 2));
        var AD = Math.sqrt(Math.pow(this.D.x - this.A.x, 2) + Math.pow(this.D.y - this.A.y, 2));
        if (AB !== BC || BC !== CD || CD !== AD || AD !== AB) {
            throw new Error("Check length");
        }
    };
    return Square;
}(Rectangle));
exports.Square = Square;
