class Node {
    constructor(data) {
        this.data = data
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    add(data) {
        if (!this.root) {
            this.root = new Node(data)
            return;
        }
        this.addItem(data, this.root)

    }

    print() {
        console.log(this.root)
    }

    addItem(data, node) {
        if (!node.right) {
            node.right = new Node(data);
            return;
        }
        if (!node.left) {
            node.left = new Node(data);
            return;
        }
        if (data < node.data) {
            this.addItem(data, node.left);
        }
        if (data >= node.data) {
            this.addItem(data, node.right);
        }
    }

    hasData(data, node) {
        if (!node) return false;
        if (node.data === data) {
            return true;
        }
        return this.hasData(data, node.left) || this.hasData(data, node.right);


    }

}

// invoke BinaryTree
const binaryTree = new BinaryTree();
binaryTree.add(5);
binaryTree.add(10);
binaryTree.add(3);
binaryTree.add(4);
binaryTree.add(2);

binaryTree.print();
console.log(binaryTree.hasData(55, binaryTree.root))




