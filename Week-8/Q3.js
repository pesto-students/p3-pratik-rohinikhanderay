/** 
*TODO:Level Order Traversal
*@input {Tree}
*@output {list}
*/
//calling class from source
const MyQueue = require('./customQueue')
const BinarySearchTree = require('./BinarySearchTree')
//levelorder function created
const levelOrder = (tree) =>{
    //resultant list
    let result = [];
    //using queue to arrange removed element using dequeue to arrange it from beginning 
    let queue = new MyQueue();
    //pointer
    let current = tree.root;
    queue.enqueue(current);
    //loop to remove element from start of queue and add it to result
    while(queue.size){
        current = queue.dequeue();
        result.push(current.value);
        if(current.left){
            queue.enqueue(current.left);
        }
        if(current.right){
            queue.enqueue(current.right);
        }
    }
    return result;
}
try{
const binaryTree = new BinarySearchTree();
binaryTree.insert(30);
binaryTree.insert(20);
binaryTree.insert(10);
binaryTree.insert(25);
binaryTree.insert(40);
binaryTree.insert(35);
binaryTree.insert(45);
const getList = levelOrder(binaryTree)
console.log(getList)
}catch(e){
    console.warn(e);
}