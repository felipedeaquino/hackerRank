'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function response(n) {
  let binaryArr = [];

  function toBinary(n) {
    if (n === 1) {
      return binaryArr.push(1)
    } else {
      if (n % 2 === 0) {
        binaryArr.push(0)
      } else {
        binaryArr.push(1)
      }
      n = Math.floor(n / 2);
      toBinary(n)
    }
    return binaryArr;
  }

  toBinary(n)
  binaryArr = binaryArr.reverse();

  let occurrences = [];
  let max = 0;
  for (let i = 0; i < binaryArr.length; i++) {
    if (binaryArr[i] === 1) {
      max += 1;
    } else {
      occurrences.push(max)
      max = 0;
    }
  }
  occurrences.push(max)

  var consecutively = Math.max.apply(Math, occurrences);
  console.log(consecutively);
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    response(n);
    //Math.max(...Number(n).toString(2).split(/0+/).map(e => e.length)) another simplest way
}
