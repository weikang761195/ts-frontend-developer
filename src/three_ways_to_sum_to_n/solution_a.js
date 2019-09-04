// Problem 1 A
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

//1 min

var sum_to_n = function(n) {
    // your code here
    var sum = 0;//define sum

    //using for loop to add all num from  1 to n
    for (var i = 1; i <= n; i++) {
    	sum = sum + i;
    }
    return sum;
};