let BinarySearchTree = require("./BinarySearchTree");
function maxDepth(root) {
    if (root === null) return 0;

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

};

let bst = new BinarySearchTree();
bst.insert(20);
bst.insert(15);
bst.insert(12);
bst.insert(17);
bst.insert(25);
bst.insert(22);
bst.insert(27);


console.log( 'maximum depth of BST', maxDepth(bst.root));