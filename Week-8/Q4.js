/** 
*TODO:check for path(check for each vertex connected to other two vertex)
*@input {Tree}
*@output {Boolean}
*/
//calling class from source
const MyGraph = require("./customGraph");
//function to check path between vertexes
const checkPath = (graph) => {
    //checking for size of element's list of connected vertex
    for(let element in graph){
        if(graph[element].size<2) return false;
    }
    return true;
};
try {
  const graph = new MyGraph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addEdge("A", "B");
  graph.addEdge("B", "C");
  graph.addEdge("C", "D");
  graph.addEdge("D", "E");
  graph.addEdge("E", "A");
  let list = graph.log;
  const validatedGraph = checkPath(list);
  console.log(validatedGraph)
} catch (e) {
  console.warn(e);
}