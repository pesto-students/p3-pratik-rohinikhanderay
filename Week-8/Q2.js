/** 
*TODO:validate the tree
*@input {Tree}
*@output {string}
*/
//calling class from source
const BinarySearchTree = require("./BinarySearchTree");
//function to validate tree is created
const validateTree = (tree) => {
  //necessary condition for input
  if (tree.root == null) throw "Empty Tree";
  // condition for one element in tree
  if (!tree.root.left && !tree.root.right) return "Tree is Validated";
  //starting pointer from root
  let current = tree.root;
  //traversing through each nodes
  while (current.left) {
    let currentValue = current.value;
    let leftNode = current.left;
    let leftValue = leftNode.value;
    //rule is broken for left side element then return 
    if (leftValue > currentValue) return "left Tree is not validated";
    current = current.left;
    if(current.right){
    //rule is broken for right side element then return 
        if(current.value > current.right.value) return 'left tree is not validated'
    }
  }
  current = tree.root;
  while (current.right) {
    let currentValue = current.value;
    let rightNode = current.right;
    let rightValue = rightNode.value;
    //rule is broken for right side element then return 
    if (rightValue < currentValue) return "right Tree is not validated";
    current = current.right;
    if(current.left){
    //rule is broken for left side element then return 
        if(current.value < current.left.value) return 'right tree is not validated'
    }
  }
  //break the loop when no nodes is there
  if (current.left == null && current.right == null) return "Tree is Validated";
};
try {
  let binaryTree = new BinarySearchTree();
  binaryTree.insert(30);
  binaryTree.insert(20);
  binaryTree.insert(10);
  binaryTree.insert(25);
  binaryTree.insert(40);
  binaryTree.insert(35);
  binaryTree.insert(45);
  binaryTree.insert(44);
  binaryTree.insert(50);
  let validate = validateTree(binaryTree);
  console.log(validate);
} catch (e) {
  console.warn(e);
}