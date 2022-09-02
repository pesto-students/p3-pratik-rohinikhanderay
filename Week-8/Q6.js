/** 
*TODO:to get all path
*@input {Tree}
*@output {string}
*/
//calling class from source
const directedGraph = require("./directedGraph");
//function to get path from graph
const getAllPath = (graph, end) => {
  const result = [];
  const path = [];
  //function to check nodes and neighbours
  search = (target) => {
    path.push(target);
    if (target === end) result.push([...path]);
    let nextVertex = graph[target];
    nextVertex.forEach((element) => {
      search(element);
    });
    path.pop();
  };
  search(0);
  return result;
};
try {
  const graph = new directedGraph();
  for(let i=0 ; i<5; i++) graph.addVertex(i);
  graph.addEdge(0, 1);
  graph.addEdge(0, 3);
  graph.addEdge(0, 4);
  graph.addEdge(1, 2);
  graph.addEdge(1, 3);
  graph.addEdge(2, 3);
  graph.addEdge(3, 4);
  graph.addEdge(1 ,4);
  graph.log
  let list = graph.list;
  const getPaths = getAllPath(list, 4);
  console.log(getPaths);
} catch (e) {
  console.warn(e);
}