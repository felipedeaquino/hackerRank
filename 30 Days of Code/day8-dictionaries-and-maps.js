function processData(input) {
    let arrOfInput = input.split('\n')
    let myMap = new Map();
    for (let i = 0; i < arrOfInput[0]; i++) {
        let contact = (arrOfInput[i+1]).split(' ');
        myMap.set(contact[0], contact[1]);
    }
    for (let j = parseInt((arrOfInput[0]), 10) + 1; j < arrOfInput.length; j++) {
        let response = myMap.get(arrOfInput[j]);
        if (response === undefined) {
          console.log('Not found');
        } else {
          console.log(arrOfInput[j]+"="+response);
        }
    }  
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
