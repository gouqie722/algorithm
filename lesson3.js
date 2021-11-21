// 图

function Node(value) {
  this.value = value;
  this.neighbors = [];
}

var a = new Node('a')
var b = new Node('b')
var c = new Node('c')
var d = new Node('d')
var e = new Node('e')
var f = new Node('f')

a.neighbors.push(b, c)
b.neighbors.push(a, d)
c.neighbors.push(a, d, e)
d.neighbors.push(b, c, f)
e.neighbors.push(c, f)
f.neighbors.push(d, e)

/**
 * 深度优先搜索
 * @param {*} node 
 * @param {*} target 
 */
function deepSearch(node, target) {
  var found = []; // 已经找过的节点
  function _deepSearch(node) {
    // 该节点已经找过
    if (found.includes(node)) {
      return false
    }
    if (node.value === target) {
      return true
    }
    found.push(node);
    for (var i = 0; i < node.neighbors.length; i ++) {
      var nextNode = node.neighbors[i]
      if (_deepSearch(nextNode)) {
        return true
      }
    }
    return false;
  }
  return _deepSearch(node)
}

/**
 * 广度优先搜索
 * @param {*} node 
 * @param {*} target 
 */
function breadthSearch(node, target) {
  var found = [];
  function _breadthSearch(nodes) {
    if (nodes.length === 0) {
      return false;
    }
    var next = []
    for (var i = 0; i < nodes.length; i ++) {
      var n = nodes[i]
      if (n.value === target) {
        return true;
      }
      found.push(n) // 这个节点已经找过了
      // n 不是 得把n的邻居加入下一层的节点数组中
      for (var j = 0; j < n.neighbors.length; j ++) {
        if (!next.includes(n.neighbors[i]) && !found.includes(n.neighbors[i])) {
          // 该判断是为了保证数组中没有重复的
          next.push(n.neighbors[i]) // 把n的邻居加入到下一层
        }
      }
    }
    // 这一层已经看完了， found已经更新了
    // 此时，再来去掉next中已经找过的节点
    for (var i = 0; i < next.length; i ++) {
      if (found.includes(next[i])) {
        next.splice(i, 1);
        i --;
      }
    }
    return _breadthSearch(next)
  }
  return _breadthSearch([node])
}


// 最小生成树
var nodes = [
  new Node('a'),
  new Node('b'),
  new Node('c'),
  new Node('d'),
  new Node('e'),
] // 节点数组

var slides = [
  [0, 8, 3, Infinity, 4],
  [8, 0, 4, 10, Infinity],
  [3, 4, 0, 3, Infinity],
  [Infinity, 10, 3, 0, 6],
  [4, Infinity, Infinity, 6, 0],
]

/**
 * 普利姆算法
 * @param {*} nodes 
 * @param {*} slides 
 */
function Prim(nodes, slides) {
  if (nodes.length <= 1) {
    return
  }
  var horde = [nodes[0]]
  // 
  while (horde.length < nodes.length) {
    
  }
}

/**
 * 贪心算法：当遇到一个求解全局最优解问题时，如果可以将全局问题切分为小的局部问题
 * 并寻求局部最优解，局部最优累计的结果即全局最优解
 */
