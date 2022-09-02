let arr = [20,-10]
let n = 30
function find_target(arr,n){
  previous = new Set()
  for(value of arr){
    if(previous.has(value - n)){ 
      console.log(value, value-n)
    } else {
      previous.add(value)
    }
  }
  console.log(previous)
}


find_target(arr, n)