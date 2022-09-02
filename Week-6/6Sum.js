function find3Numbers(arr, arr_size, sum)
  {
    let l, r;

    arr.sort((a,b) => a-b);

    for (let i = 0; i < arr_size - 2; i++) {

      l = i + 1;

      r = arr_size - 1;
      while (l < r) {
        if (arr[i] + arr[l] + arr[r] == sum)
        {
        console.log("Triplet is " + arr[i] + ", "
          + arr[l] + ", " + arr[r]);
          return true;
        }
        else if (arr[i] + arr[l] + arr[r] < sum)
          l++;
        else 
          r--;
      }
    }

    return false;
  }
  
  
    let arr = [ 1, 4, 45, 6, 10, 8 ];
    let sum = 22;
    let arr_size = arr.length;
  
    find3Numbers(arr, arr_size, sum);
  