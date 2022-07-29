function maxSubArraySum(a, size)
{
    var maxint = Math.pow(2, 53)
    var max_so_far = -maxint - 1
    var max_ending_here = 0
       
    for (var i = 0; i < size; i++)
    {
        max_ending_here = max_ending_here + a[i]
        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here
  
        if (max_ending_here < 0)
            max_ending_here = 0 
    }
    return max_so_far
}
   
// Driver code
var a = [ 1,2,3,4,-10 ]
console.log("Maximum contiguous sum is", 
               maxSubArraySum(a, a.length))
// https://leetcode.com/submissions/detail/759558113/