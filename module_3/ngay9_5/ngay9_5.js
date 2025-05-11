// enum City {HaNoi, DaNang, HoChiMinh}
// let city: City = City.HoChiMinh
//
// console.log(city);
// sử dụng và khai báo biến
// let width: number;
// let height: number;
// width = 10.5;
// height = 20;
// let area: number = width*height;
// console.log(`Diện tích hình chữ nhật: ${area}`);
//câu điêều kiện và vòng lặp
// let sum: number = 0;
// let count: number = 0;
// for (let i = 2; count < 30; i++) {
//     let isPrime: boolean = true;
//     if (i == 2) {
//         sum += i;
//         count++;
//         continue;
//     }
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if(!isPrime){
//         continue;
//     }
//     sum += i;
//     count++;
// }
// console.log(sum);
// // kiểm tra số nguyên tố
// function isPrime(number: number): boolean {
//     let isPrime = true;
//     if (number < 2) {
//         isPrime = false;
//     } else if (number > 2) {
//         for (let i = 2; i <= Math.sqrt(number); i++) {
//             if (number % i == 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }
//     return isPrime;
// }
// let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
// let sum = 0;
// for (let number of array) {
//     if (isPrime(number)) {
//         sum += number;
//     }
// }
// console.log("Tổng các số nguyên tố trong mảng trên là: " + sum);
// Xây dựng các đối tượng hình học
// export class Shape {
//     private _x: number;
//
//     private _y: number;
//
//     constructor(x: number, y: number) {
//         this._x = x;
//         this._y = y;
//     }
//
//     get y() {
//         return this._y;
//     }
//
//     set y(y: number) {
//         this._y = y;
//     }
//
//     get x() {
//         return this._x;
//     }
//
//     set x(x: number) {
//         this._x = x;
//     }
//
//     toString(): string {
//         return `(x: ${this._x}, y: ${this._y})`;
//     }
// }
// interface IArea {
//     area(): number;
// }
// export class Rectangle extends Shape implements IArea{
//     constructor(x: number, y: number, private _width: number, private _height: number) {
//         super(x, y);
//     }
//
//     area(): number {
//         return this._width*this._height;
//     }
//
//     get width() {
//         return this._width;
//     }
//
//     set width(width: number) {
//         this._width = width;
//     }
//
//     get height() {
//         return this._height;
//     }
//
//     set height(height: number) {
//         this._height = height;
//     }
// }
// const rectangle = new Rectangle(5, 5, 10, 20);
// console.log(rectangle.toString());
// console.log(rectangle.area());
//Promise
// let money = 10000;
// const buyACar = (car: any) => {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (money >= 10000) {
//                 resolve("can buy " + car);
//             } else {
//                 reject("Do not enough money");
//             }
//         }, 100);
//     }))
// }
//
// money = 1000001;
// const promise = buyACar("Vinfast").then(value => {
//     console.log(value);
// }, error => {
//     console.log(error);
// })
// fibonacci
// Hàm đệ quy tính số Fibonacci
// function fibonacci(n: number): number {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
//
// // Hàm hiển thị dãy Fibonacci và tính tổng
// function displayFibonacciSequence(limit: number): void {
//     let sum: number = 0;
//
//     console.log(`Dãy Fibonacci (đến ${limit} số):`);
//     for (let i = 0; i < limit; i++) {
//         const fibNumber: number = fibonacci(i);
//         console.log(fibNumber + " "); // Sử dụng console.log thay vì process.stdout.write
//         sum += fibNumber;
//     }
//
//     console.log(`Tổng các số Fibonacci: ${sum}`);
// }
//
// // Gọi hàm với số lượng số Fibonacci muốn hiển thị
// displayFibonacciSequence(10);
