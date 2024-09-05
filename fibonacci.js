
// for faster aprouch lets solve it recursivly using memoization. buy saving the calculated values in a array so we dont have to calcualted it again, 
let n = 100;
// validation input
function validationNumber(n) {
    if (typeof n !== 'number') {
        console.log("the input must be a number") //check if the input is a number, 
        return false;
    } else if(n < 0) {
        console.log("the input must a positive number") //check if the input is positve number
        return false;
    }
    return true;
}

function fib(n) {
    if (!validationNumber(n)) { //calling the validation 
        return
    }
    let m = []; //create an array to remember the calculated values

    function fib(n, m = []) {
        
        if (n <= 1) return n; //breaking point
        
        // check if the value is already calculated 
        if (m[n] !== undefined) {
            return m[n];
        }
        // calculate and store the result in the m array by calling the function by the role , fib 10 = fib 9 + fib 8
        m[n] = fib(n - 1, m) + fib(n - 2, m);
        return m[n]; // return the new value 
        
    }
    console.log(fib(n, m = [])) // print the finial result 
};

fib(n) 