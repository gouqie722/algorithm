// 线性数据结构
// 线性的数据结构强调存储和顺序

// 1. 线性数据结构之数组
// 数组特性：
//   1. 数组在物理空间上是连续的
//   2. 底层的数组长度是不可变的
//   3. 数组的变量，指向了数组第一个元素的位置
// 优点：查询性能好

function Node(value) {
  this.value = value
  this.next = null
}


var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)
var node5 = new Node(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

/**
 * 递归遍历链表
 * @param {*} root 
 * @returns 
 */
function bianLink(root) {
  if (root == null) return
  console.log(root.value)
  bianLink(root.next)
}

// bianLink(node1)

// 链表反转
// 1. 首先查找到链表的最后一个节点
// if (root.next != null) return nizhi(root.next)
// else return root
function nizhi(root) {
  if (root.next.next == null) { // 代表当前节点是倒数第二个节点
    root.next.next = root // 让最后一个节点指向自己
    return root.next
  } else {
    var result = nizhi(root.next)
    root.next.next = root
    root.next = null
    return result
  }

}

console.log(nizhi(node1))