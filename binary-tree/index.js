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
        var newNode = new Node(data);
        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }


    traverse(node, factorLeft, factorRight) {
        if (!node.right || !node.left) {
            return;
        }
        console.log(node.data);
        console.log('/'.padStart(2 * (++factorRight), ' '));
        this.traverse(node.left, ++factorLeft, factorRight);
        this.traverse(node.right, factorLeft, ++factorRight);


    }

    insertNode(node, newNode) {
        if (!node.left) {
            node.left = newNode
            return;
        }
        if (!node.right) {
            node.right = newNode
            return;
        }
        if (newNode.data < node.data) {
            this.insertNode(node.left, newNode)
        }
        if (newNode.data > node.data) {
            this.insertNode(node.right, newNode)
        }
    }

    hasData(data, node) {
        if (!node) return false;
        if (node.data === data) {
            return true;
        }
        return this.hasData(data, node.left) || this.hasData(data, node.right);

    }

    findMin(node) {
        if (!node.left) {
            return node.data
        }
        return this.findMin(node.left)
    }

    findMax(node) {
        if (!node.right) {
            return node.data
        }
        return this.findMin(node.right)
    }

    traverseBFS(root) {
        let queue = [root]
        let res = []
        let i = 0;
        while (queue.length) {
            let curr = queue.shift()
            if (curr.data < (res[res.length - 1] && res[res.length - 1].data)) {
                i++;
            }
            res.push({ data: curr.data, level: i });
            if (curr.left) {
                queue.push(curr.left)
            }

            if (curr.right) {
                queue.push(curr.right)
            }

        }

        return res
    }

}

// invoke BinaryTree
const binaryTree = new BinaryTree();
binaryTree.add(8);
binaryTree.add(5);
binaryTree.add(10);
binaryTree.add(2);
binaryTree.add(6);
binaryTree.add(9);
binaryTree.add(15);
console.log(binaryTree);

console.log(binaryTree.traverseBFS(binaryTree.root));


