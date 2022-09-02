/** 
*TODO:find the town judge
*@input {Tree}
*@output {string}
*/
//calling class from source
const directedGraph = require("./directedGraph");
//function to convert object to array 
const arrayConverter = list => {
    result = [];
    subarray = [];
    for(let i=1; i<= list.length-1; i++ ){
        let set = list[i]
        set.forEach(element => {
            subarray.push(i)
            subarray.push(element)
            if(subarray.length == 2){
                result.push(subarray);
                subarray = [];
            }   
        });
    }
    return result;
}
//function to find town judge
const findJudge = (trust,n) =>{
    const newArray = new Array(n+1).fill(0);
    for (let [i,j] of trust) {
        --newArray[i];
        ++newArray[j];
    }
    for (let i = 1; i < newArray.length; ++i) if (newArray[i] == n-1) return i;
    return -1;
}

try {
    const graph = new directedGraph();
    for(let i=1 ; i<4; i++) graph.addVertex(i);
    graph.addEdge(1, 3);
    graph.addEdge(2, 3);
    graph.addEdge(3, 1);
    graph.log
    let list = graph.list;
    const getArray = arrayConverter(list)
    console.log(getArray)
    const judge = findJudge(getArray,3);
    console.log(judge)
  } catch (e) {
    console.warn(e);
  }