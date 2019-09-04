// Problem 1 B
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

//2 mins

var sum_to_n = function(n) {
    // your code here
    var sum = 1; //define sum
    var i = 0; // define i

    //using while loop to add the num from 1 to n+1 when the i is less the n+1 
    while (i < n+1) {
	  sum = sum + i;
	  i++;
	} 

	return sum;
};