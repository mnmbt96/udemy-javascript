/*
Steps to create a hollow pyramid star pattern are:
-Run 2 nested loops, 1st for 'n' times and there are 2 internal loops one to print the first series of spaces and the other to print star and space series
-Print star for first and last position in each row and space in between
-The print star at each position in the last row

    *
   * *
  *   *
 *     *
*********


ij                      
11         5                
22       4   6               
33     3       7       
44   2           8      
5  1 2 3 4 5 6 7 8 9

 k 0 1 2 3 4 5 6 7 8 


*/

// let n = 5;
// let string = "";

// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     if (i === 1 || i === n) {
//       string += "*";
//     } else {
//       if (k === 0 || k === 2 * i - 2) {
//         string += "*";
//       } else {
//         string += " ";
//       }
//     }
//   // }
//   string += "\n";
// }
// console.log(string);
