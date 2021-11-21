// 树

// function Node(value) {
//   this.value = value; // 节点中的数据
//   this.children = []; // 指向其他节点的数组
// }

// var a = new Node('A');
// var b = new Node('B');
// var c = new Node('C');
// var d = new Node('D');
// var e = new Node('E');
// var f = new Node('F');

// a.children.push(b, c)
// b.children.push(d, e, f)




// 二叉树
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var a = new Node('A'); 
var b = new Node('B'); 
var c = new Node('C'); 
var d = new Node('D'); 
var e = new Node('E'); 
var f = new Node('F'); 
var g = new Node('G');


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
d.left = g;

// console.log(a)
// 前序遍历
function DLR(node) {
  if (!node) {
    return;
  }
  console.log(node.value);
  DLR(node.left)
  DLR(node.right)
}
// DLR(a)

// 中序遍历
function LDR(node) {
  if (!node) {
    return;
  }
  LDR(node.left)
  console.log(node.value);
  LDR(node.right)
}

// 后序遍历
function LRD(node) {
  if (!node) {
    return;
  }
  LRD(node.left)
  LRD(node.right)
  console.log(node.value);
}

// 根据前序遍历和中序遍历的结果还原一个二叉树
function getTree(dlr, ldr) {
  if (dlr.length === 0 && ldr.length === 0) {
    return null;
  }
  // 通过前序遍历的第一个字符得到根节点value值
  var rootValue = dlr[0];
  var root = new Node(rootValue);
  var rootIndex = ldr.indexOf(rootValue); // 根节点在中序遍历中的位置
  
  var leftLDR = ldr.substring(0, rootIndex); // 左边的中序遍历(取不到rootIndex)
  var leftDLR = dlr.substring(1, leftLDR.length); // 左边的前序遍历

  var rightLDR = ldr.substring(rootIndex + 1); // 右边的中序
  var rightDLR = dlr.substring(leftDLR.length + 1); // 右边的前序

  root.left = getTree(leftDLR, leftLDR);
  root.right = getTree(rightDLR, rightLDR);

  return root;
}

// var node = getTree('ABDGECF', 'GDBEAFC');
// console.log(node);

// 计算树的深度
function getDeep(node) {
  if (!node) {
    return 0;
  }
  return 1 + Math.max(getDeep(node.left), getDeep(node.right))
}

// 深度优先搜索
function deepSearch(node, target) {
  if (!node) {
    return false;
  }
  if (node.value === target) {
    return true
  }
  return deepSearch(node.left, target) || deepSearch(node.right, target);
}

// 广度优先搜索
function breadthSearch(node, target) {
  function _breadthSearch(nodes) {
    if (nodes.length === 0) {
      return false;
    }
    var nextLayer = [];
    for (var i = 0; i < nodes.length; i ++) {
      if (nodes[i].value === target) {
        return true;
      }
      if (nodes[i].left) {
        nextLayer.push(nodes[i].left)
      }
      if (nodes[i].right) {
        nextLayer.push(nodes[i].right)
      }
    }
    return _breadthSearch(nextLayer);
  }
  return _breadthSearch([node]);
}

// 比较两颗二叉树，得到它们的差异结果(数组)
function diff(node1, node2) {
  var result = []
  if (!node1 && !node2) {
    return result;
  }
  if (!node1 && node2) {
    result.push({ type: '新增', from: null, to: node2 })
    return result
  }
  if (node1 && !node2) {
    result.push({ type: '删除', from: node1, to: null })
    return result
  }
  if (node1.value !== node2.value) {
    result.push({ type: '修改', from: node1, to: node2 })
  }
  var leftDiff = diff(node1.left, node2.left); // 左树的差异
  var rightDiff = diff(node1.right, node2.right); // 右树的差异

  return result.concat(leftDiff).concat(rightDiff); // 合并差异
}

var node1 = getTree('ABDGECF', 'GDBEAFC');
var node2 = getTree('AKDECFT', 'DKEAFCT');

var result = diff(node1, node2)

console.log(result);

