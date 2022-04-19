class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
        return this;
    }
}
class BinaryTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(val<current.val){
                if(!current.left){
                    current.left = newNode;
                    break;
                }else{
                    current = current.left;
                }
                
            }else{
                if(!current.right){
                    current.right = newNode;
                    break;
                }else{
                    current = current.right;
                }
            }
        }
        return this;
    }
    lookUp(val){
        let currentNode = this.root;
        while(currentNode){
            if(val<currentNode.val){
                currentNode = currentNode.left;
            }else if(val > currentNode.val){
                currentNode = currentNode.right;
            }
            else {
				return currentNode;
			}
        }
        return false;
    }
    remove(val){
        if (!this.root) {
			return false;
		}
		let currentNode = this.root;
		let parentNode = null;
		while (currentNode) {
			if (val < currentNode.val) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (val > currentNode.val) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if (currentNode.val === val) {
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					} else {
						//if parent > current val, make current left child a child of parent
						if (currentNode.val < parentNode.val) {
							parentNode.left = currentNode.left;
							//if parent < current val, make left child a right child of parent
						} else if (currentNode.val > parentNode.val) {
							parentNode.right = currentNode.left;
						}
					}

					//Option 2: Right child which doesnt have a left child
				} else if (currentNode.right.left === null) {
					currentNode.right.left = currentNode.left;
					if (parentNode === null) {
						this.root = currentNode.right;
					} else {
						//if parent > current, make right child of the left the parent
						if (currentNode.val < parentNode.val) {
							parentNode.left = currentNode.right;

							//if parent < current, make right child a right child of the parent
						} else if (currentNode.val > parentNode.val) {
							parentNode.right = currentNode.right;
						}
					}

					//Option 3: Right child that has a left child
				} else {
					//find the Right child's left most child
					let leftmost = currentNode.right.left;
					let leftmostParent = currentNode.right;
					while (leftmost.left !== null) {
						leftmostParent = leftmost;
						leftmost = leftmost.left;
					}

					//Parent's left subtree is now leftmost's right subtree
					leftmostParent.left = leftmost.right;
					leftmost.left = currentNode.left;
					leftmost.right = currentNode.right;

					if (parentNode === null) {
						this.root = leftmost;
					} else {
						if (currentNode.val < parentNode.val) {
							parentNode.left = leftmost;
						} else if (currentNode.val > parentNode.val) {
							parentNode.right = leftmost;
						}
					}
				}
				return true;
			}
		}
    }
}
let nodeTree = new BinaryTree();
nodeTree.insert(100);
nodeTree.insert(80);
nodeTree.insert(200);
nodeTree.insert(300);
nodeTree.insert(120)
nodeTree.insert(70);
nodeTree.insert(90)

// nodeTree.remove(120);
// nodeTree.remove(100);
// nodeTree.remove(200);
// nodeTree.remove(300);
// nodeTree.remove(90);
// nodeTree.remove(80);
// nodeTree.remove(70);
console.log(nodeTree);