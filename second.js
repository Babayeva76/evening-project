let a0 = 45; // array[0]
let a1 = 78; // array[1]
let a2 = calculatePartOfFormula; // array[2]
let a3 = 223; // array[3]
let a4 = 8764;
let a5 = 56;
let a6 = 1;
let a7 = 8;
let a8 = 78;
let a9 = 89;


const array = [45, '78', calculatePartOfFormula, { id: 42, name: 'John Doe' }, [1, 'qwerty', true], 56, 1, 8, 78, 89];
array.push('some new value');
console.log(array.length);
console.log(array[3]);
console.log(array[4][1]);


const result = array[2](1 , 5);
console.log(result);


function calculatePartOfFormula(a, b) {
  return 5 * a + b * b;
}