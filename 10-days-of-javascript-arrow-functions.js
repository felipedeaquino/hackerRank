/*Complete the following function. It has one parameter: an array, 'nums'. It must iterate through the array performing one of the following actions on each element:

If the element is even, multiply the element by 2.
If the element is odd, multiply the element by 3.
The function must then return the modified array.*/

let nums = [1, 2, 3, 4, 5];

// first version:

function modifyArray(nums) {
    let modify = function(n) {
        if(n % 2 == 0)
            return n * 2;
        else
            return n * 3;
    }
    let response = nums.map(modify);
    return response;
    
}

// second version:
function modifyArray(nums) {
    let modify = function(n) {
        let number = (n % 2 == 0) ? n * 2 : n * 3;
        return number;
    }
    let response = nums.map(modify);
    return response;
}

// third version:
function modifyArray(nums) {
    let modify = n => n = (n % 2 == 0) ? n * 2 : n * 3;
    let response = nums.map(modify);
    return response;
}

// fourth version:
function modifyArray(nums) {
    var modify = nums.map(n => n = (n % 2 == 0) ? n * 2 : n * 3);
    return modify;
}


// fifth and final version: 
function modifyArray(nums) {
    let modify = nums.map(n => n = (n % 2 == 0) ? n * 2 : n * 3);
    return modify;
}

