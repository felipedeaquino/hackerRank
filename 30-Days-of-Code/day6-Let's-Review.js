function processData(input) {
    let arr = input.split('\n').slice(1);
    
    for (let i = 0; i < arr.length; i++) {
        let response = '';
        let rest = ' ';
        let word = arr[i]
        let arr1 = word.split('');
        for (let j = 0; j < arr1.length; j++) {
            if (j % 2 === 0) {
                response = response.concat(arr1[j])
            } else {
                rest = rest.concat(arr1[j])
            }
        }
        console.log(response + rest)
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
