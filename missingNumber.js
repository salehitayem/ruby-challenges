
//assuming the lowest value of the array is 1


//validation function
function arrayValidation(arr) {
    arr.sort((a,b) => (a - b)) // sorting the array
    if (arr[0] >= 1) { //check the starting value - it must be equal or greater than 1
        return true;
    }
    console.log("lowest value must be equal or grater than 1")
    return false;
    
}


function missingNumber(arr) {
    if (!arrayValidation(arr)) { //validation & sorting 
        return
    }
    let counter = 1;
    // length is the greatest number in the array
    let len = arr[arr.length - 1] 
    //looping from 1 to the highest value in the array
    for (let i = 1; i <= len; i++) {
        if (arr[counter - 1] != i) { //check if i not equal to (counter-1)th element in the array, 
            console.log(i) // print the missing number , and keep the (counter-1)th element the same
        }
        if (arr[counter - 1] == i) { //else we move to the next element in the array
            counter++;
        }
    }
};
let x = [2, 1, 5, 4, 6, 9, 7, 8, 10];

missingNumber(x);
