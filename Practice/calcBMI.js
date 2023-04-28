/* BMI
BMI = weight / height ** 2 = mass

-Data 1:
  Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
-Data 2: 
Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

Compare the datas and log "__ is higher than __"

*/

function calcBMI(weight, height) {
  return weight / height ** 2;
}

const markBMI = calcBMI(78, 1.69);
const johnBMI = calcBMI(92, 1.95);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI}).`);
} else {
  console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI}).`);
}
