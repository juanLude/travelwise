const arr = [[1, 2]];

// const peto = arr.map((el) => el);
function transposeArray(array) {
  return array[0].map((col, i) => array.map((row) => row[i]));
}
const transpArr = transposeArray(arr);
console.log(transpArr);

const array = [];

for (let i = 0; i < transpArr.length; i++) {
  let sum = 0;

  for (let j = 0; j < transpArr[i].length; j++) {
    console.log(transpArr[i][j]);
    if (transpArr[i][j] > transpArr[i][j + 1]) {
      console.log("transpArr[i][j]", transpArr[i][j]);
      console.log("transpArr[i][j+1]", transpArr[i][j + 1]);
      transpArr[i][j + 1] = transpArr[i][j] + transpArr[i][j + 1];
      console.log("transpArr[i][j+1]", transpArr[i][j + 1]);
      // if (j == 0) {
      //   transpArr[i][j + 1] = transpArr[i][j] + transpArr[i][j + 1];
      // } else {
      //   sum += transpArr[i][j];
      // }
      sum = transpArr[i][j + 1];
      console.log("sum: ", sum);
    } else {
      console.log("sum: ", sum);
    }
  }
  if (sum <= transpArr[i][transpArr[i].length - 1]) {
    array.push(transpArr[i][transpArr[i].length - 1]);
  } else {
    array.push(sum);
  }

  console.log("array: ", array);
}
const example = [
  [2, 0, 3],
  [1, 5, 1],
  [4, 2, 2],
];
console.log(example.length);
function crashBoxes(boxes) {
  // Iterate through each row from top to bottom
  for (let i = 0; i < boxes.length - 1; i++) {
    console.log("i", i);
    // Iterate through each column in the current row
    for (let j = 0; j < boxes[i].length; j++) {
      // Check if the current box is heavier than the one below it
      if (boxes[i][j] > boxes[i + 1][j]) {
        // Crash the boxes by adding their weights
        boxes[i + 1][j] += boxes[i][j];
      }
    }
  }

  // Return the bottom row after all crashings are complete
  return boxes[boxes.length - 1];
}

// Example usage:
const inputBoxes = [
  [2, 0, 3],
  [1, 5, 1],
  [4, 2, 2],
];

const result = crashBoxes(inputBoxes);
console.log(result);
