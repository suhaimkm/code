calcAreaCircle = (r) => {
  let pi = 3.142;
  return pi * r * r;
};
printArea = (rad) => {
  let area = calcAreaCircle(rad);
  console.log(`Area of circle of radius: ${rad} = ${area}`);
};
let rad = 4.5;

printArea(rad);
