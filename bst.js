const makeNode = (key) => {
  return {
    key,
    right: null,
    left: null,
  }
}

class BST {
  #root

  constructor() {
    this.#root = null;
  }

  show(type) {
    switch (type) {
      case 0:
        BST.preOrderTraversal(this.#root);
        break;
      case 1:
        BST.postOrderTraversal(this.#root);
        break;
      
      default:
        BST.inOrderTraversal(this.#root);
    }
  }

  insert(key) {
    if (!Number(key)) {
      console.log('Error! Invalid value inserted: Number Only.');
      return;
    }

    let node = makeNode(key);

    if (this.#root === null) {
      this.#root = node;
      console.log(`Key inserted: ${node.key}`);
      return;
    }
    
    for (let temp = this.#root; temp !== null; ) {
      if (node.key <= temp.key && temp.left === null) {
        temp.left = node;
        break;
      }
      else if(node.key > temp.key && temp.right === null) {
        temp.right = node;
        break;
      }
      else if(node.key <= temp.key) {
        temp = temp.left;
      } else {
        temp = temp.right;
      } 
    }

    console.log(`Key inserted: ${node.key}`);
  }

  search(key) {
    if (this._search(key, this.#root)) {
      console.log('Key found');
      return;
    }
    console.log('Not found');
  }

  _search(key, node) {
    if (node === null) {
      return false;
    }
    else if (key === node.key) {
      return true;
    }

    return (key > node.key) ? this._search(key, node.right) : 
    this._search(key, node.left);
  }

  peekRoot() {
    return this.#root.key;
  }

  static inOrderTraversal(node) {
    if (node === null) {
      return;
    }

    BST.inOrderTraversal(node.left);
    console.log(`${node.key} `);
    BST.inOrderTraversal(node.right);
  }

  static preOrderTraversal(node) {
    if (node === null) {
      return;
    }

    console.log(`${node.key} `);
    BST.preOrderTraversal(node.left);
    BST.preOrderTraversal(node.right);
  }

  static postOrderTraversal(node) {
    if (node === null) {
      return;
    }

    BST.postOrderTraversal(node.left);
    BST.postOrderTraversal(node.right);
    console.log(`${node.key} `);
  }
}

const arr = [2, -1, 25, 4, 18];

const tree = new BST();

for (let i of arr) {
  tree.insert(i);
}
console.log('All values have been inserted');

tree.search(4);