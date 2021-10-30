// 二叉树
// 1. 没有子节点的节点叫做叶子节点
// 概念：
// 满二叉树：
// 1. 所有的叶子节点都在最底层
// 2. 每个节点都有两个子节点

// 完全二叉树：
// 国内定义: 
// 1. 叶子节点都在最后一层或者倒数第二层
// 2. 叶子节点都向左聚拢
// 国际定义:
// 1. 叶子节点都在最后一层或者倒数第二层
// 2. 如果有叶子节点，就必然有两个叶子节点

// 子数:
// 二叉树中，每一个节点或叶子节点，都是一颗子数的根节点

// 二叉树的遍历
// 前序遍历: (先根次序遍历) 先打印当前的，再打印左边的，再打印右边的
// 中序遍历: (中根次序遍历) 先打印左边的，再打印当前的，再打印右边的
// 后序遍历: (后根次序遍历) 先打印左边的，再打印右边的，在打印当前的


function Node(value) {
  this.value = value
  this.left = null
  this.right = null
}

var a = new Node('a')
var b = new Node('b')
var c = new Node('c')
var d = new Node('d')
var e = new Node('e')
var f = new Node('f')
var g = new Node('g')


a.left = c
a.right = b
c.left = f
c.right = g
b.left = d
b.right = e

// console.log(a)

/**
 * 前序遍历
 * @param {*} root 
 */
function preOrderTraversal(root) {
  if (root == null) return
  // console.log(root.value)
  preOrderTraversal(root.left)
  preOrderTraversal(root.right)
}

preOrderTraversal(a)


/**
 * 中序遍历
 * @param {*} root 
 */
function mediumOrderTraversal(root) {
  if (root == null) return
  mediumOrderTraversal(root.left)
  // console.log(root.value)
  mediumOrderTraversal(root.right)
}
mediumOrderTraversal(a)

/**
 * 后序遍历
 * @param {*} root 
 */
function postOrderTraversal(root) {
  if (root == null) return
  postOrderTraversal(root.left)
  postOrderTraversal(root.right)
  // console.log(root.value)
}

postOrderTraversal(a)

/**
 * 给出前序中序还原二叉树， 要求写出后序遍历
 */
var pre = ['a', 'c', 'f', 'g', 'b', 'd', 'e']
var mid = ['f', 'c', 'g', 'a', 'd', 'b', 'e']

function reductionTree(pre, mid) {
  if (pre == null || mid == null || pre.length === 0 || mid.length === 0 || pre.length != mid.length) return null
  // 先拿到根节点
  var root = new Node(pre[0])
  // 找出根节点在中序遍历中的位置
  var index = mid.indexOf(root.value)
  // 找到前序遍历的左子树
  var preLeft = pre.slice(1,  1 + index)
  // 找到前序遍历的右子树
  var preRight = pre.slice(1 + index, pre.length)
  // 找到中序遍历的左子树
  var midLeft = mid.slice(0, index)
  // 找到中序遍历的右子树
  var midRight = mid.slice(index + 1, mid.length)
  // 根据左子树的前序和中序还原左子树并赋值给root
  root.left = reductionTree(preLeft, midLeft)
  // 根据右子树的前序和中序还原右子树并赋值给root
  root.right = reductionTree(preRight, midRight)
  return root
}

console.log(reductionTree(pre, mid))

/**
 * 根据中序后序还原二叉树, 要求写出前序遍历
 */
var mid = ['f', 'c', 'g', 'a', 'd', 'b', 'e']
var after = ['f', 'g', 'c', 'd', 'e', 'b', 'a']
function reductionTreeAfter(mid, after) {
  if (after == null || mid == null || mid.length == 0 || after.length == 0 || mid.length != after.length) return
  var root = new Node(after[after.length - 1])
  var index = mid.indexOf(root.value)

  var leftMid = mid.slice(0, index)
  var rightMid = mid.slice(index + 1, mid.length)

  var leftAfter = after.slice(0, index)
  var rightAfter = after.slice(index, after.length - 1)
  root.left = reductionTreeAfter(leftMid, leftAfter)
  root.right = reductionTreeAfter(rightMid, rightAfter)
  return root
}

console.log(reductionTreeAfter(after, mid))
