// const cities = [
//     ['HN', 'SG', 'DN'],
//     ['Tokyo', ' NY'],
//     ['BangKok']
// ];
// console.log(Array.isArray(cities[0]));
// console.log(Array.isArray(cities[1]));
// console.log(Array.isArray(cities[2]));
// console.log(cities);
// for ( let i = 0 ; i < cities.length ; i++ ) {
//     for (let j = 0 ; j < cities.length; j++) {
//         console.log(cities[i][j]);
//     }
// }

/*--------------------------------------   */
// sử dụng từ khóa new
const numbers = new Array(5);
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = new Array(5).fill();
}
const table = document.getElementById("table");
let row = "";

for (let i = 0 ; i < numbers.length; i++) {
    row += "<tr>";
    for (let j = 0; j < numbers[i].length; j++) {
        numbers[i][j] = Math.floor(Math.random() * 100) + 1;
        row += `<td>${numbers[i][j]}</td>`;
    }
    row += "</tr>";
}
table.innerHTML = row;
console.log(numbers);
