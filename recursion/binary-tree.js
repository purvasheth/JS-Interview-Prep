function Node(value) {
  this.val = value
  this.left = null
  this.right = null
}

function BinaryTree(root) {
  this.root = root

  function traverseTree(root, callback) {
    if (root) {
      callback(root)
      traverseTree(root.left, callback)
      traverseTree(root.right, callback)
    }
  }

  this.searchNode = function (value) {
    let node
    traverseTree(this.root, (root) => {
      if (root.val === value) {
        node = root
      }
    })
    return node
  }
  this.insertNode = function (val, parentVal, side) {
    //search for the parent and and add node on the side
    const parent = this.searchNode(parentVal)
    parent[side] = new Node(val)
  }

  this.printTree = function () {
    traverseTree(this.root, (root) => {
      console.log(root.val)
    })
  }
}

const root = new Node(1)
const binaryTree = new BinaryTree(root)
binaryTree.insertNode(2, 1, 'left')
binaryTree.insertNode(3, 1, 'right')
binaryTree.insertNode(4, 3, 'right')
binaryTree.insertNode(5, 3, 'left')
binaryTree.insertNode(6, 5, 'left')
console.log(binaryTree.searchNode(5))
