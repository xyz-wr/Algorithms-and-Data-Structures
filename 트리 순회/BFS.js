class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true) {
            if (value === this.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(value) {
        if (this.root === null) return false;
        let current = this.root, found = false;
        while(current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.left;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
    BFS() {
        let node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
}

let tree = new BinarySearchTree();
tree.insert(13)
tree.insert(7)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.find(3)
tree.find(2)
tree.BFS()
