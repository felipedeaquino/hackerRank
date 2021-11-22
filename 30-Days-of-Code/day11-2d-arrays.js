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

function hourglass(arr) {
    let arrayOfSums = [];
    for (let i = 0; i < arr.length - 2; i++) {
      for (let j = 0; j < arr.length - 2; j++) {
        let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
        arrayOfSums.push(sum)
      }
    }
    arrayOfSums.sort(function(a, b){return b-a});
    console.log(arrayOfSums[0]);
}


function main() {

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    hourglass(arr);
}
