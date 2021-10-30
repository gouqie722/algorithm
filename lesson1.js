// 袁进
function Node(value) {
  this.value = value
  this.next = null
}


var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)

node1.next = node2
node2.next = node3
node3.next = node4

// 获取链表的长度
function getLength(node) {
  if(!node) return 0;
  return 1 + getLength(node.next)
}

// 通过下标获取链表中的某个数据
function getValue(node, index) {
  // 根据当前节点和当前下标, 得到对应的值
  function _getValue(curNode, curIndex) {
    if (!curNode) { // 没有找到节点
      return null;
    } else if (curIndex !== index) {
      return _getValue(curNode.next, curIndex + 1)
    } else {
      // 下标相等
      return curNode.value
    }
  }
  return _getValue(node, 0)
}
// console.log(getValue(node1, 2))
// console.log(getLength(node1))

// 通过下标设置链表中的某个数据
function setValue(node, index, value) {
  // 设置当前节点的值
  function _setValue(curNode, curIndex) {
    if (!curNode) {
      return null; // 节点没了直接停止
    } else if (curIndex === index) {
      // 找到对应节点
      curNode.value = value
    } else {
      _setValue(curNode.next, curIndex + 1)
    }
  }
  _setValue(node, 0)
}

// setValue(node1, 1, 'k')
// console.log(node1)

// 在链表末尾添加一个新的节点
function add(node, newValue) {
  if (node.next) {
    // 当前节点还不是最后一个
    add(node.next, newValue)
  } else {
    var newNode = new Node(newValue)
    node.next = newNode
  }
}
// add(node3, '000')
// console.log(node3)


// 在链表某一个节点之后加入一个新节点
function insert(node, insertVal, newValue) {
  if (node.value === insertVal) {
    // 在当前节点之后要加入新的节点
    var newNode = new Node(newValue)
    newNode.next = node.next
    node.next = newNode
  } else if (!node.next) {
    // 当前节点也不是，同时已经到了末尾
    var newNode = new Node(newValue)
    node.next = newNode
  } else {
    insert(node.next, insertVal, newValue)
  }
}

// 删除链表中指定值的节点，不考虑链表中有重复的值
function remove(node, value) {
  if (!node) {
    return null
  }
  // 有节点
  if (node.value === value) {
    // 这个节点需要被删除
    return node.next
  } else {
    // 这个节点不需要被删除
    node.next = remove(node.next, value)
    return node
  }
}



// 排序
var arr1 = [3, 2, 46, 23, 8, 0, 9, 21, 34, 90]

// 交换数组两个下标的值
function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// 选择排序 循环找出最小值 一轮循环结束后把最小值放到当前循环开始的那一位
function selectionSort(arr) {
  for (var i = 0; i < arr.length - 1; i ++) {


    // 在 i ~ arr.length - 1 范围内找到最小值所在的下标
    var min = Infinity
    var index
    for (var j = i; j < arr.length; j ++) {
      if (arr[j] < min) {
        min = arr[j]
        index = j
      }
    }
    // 现在，找到了最小值的位置，保存到了变量index中
    swap(arr, i, index)



  }
}
// selectionSort(arr)
// console.log(arr)

// 冒泡排序 相邻的进行比较，大的往后靠
function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i ++) {
    // 依次看 0 ~ arr.length - 2 - i 的范围内的数据，只要它比后面大，就交换
    for (var j = 0; j <= arr.length - 2 - i; j ++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
}
// bubbleSort(arr1)
// console.log(arr1)

// 快速排序
// 选择一个数(比如系列的最后一位)作为基准数，将整个系列排列成两部分，一部分比该数小，
// 另一部分比该数大，基准数在中间，然后对剩余的序列做同样的事情，直到排序完成
function quickSort(arr) {
  // 在指定的下标范围内，做这种操作(以一个数为基准，小的靠左，大的靠右)
  function _quickSort(start, end) {
    if (start >= end || start < 0 || end > arr.length - 1) {
      // 范围有问题
      return;
    }
    var low = start, // 低位游标
      high = end, // 高位游标
      key = arr[end]; // 基准值
    while (low < high) {
      // 1. 低位向高位移动
      while (low < high && arr[low] <= key) {
        low ++;
      }
      arr[high] = arr[low]
      // 2. 高位向低位移动
      while (low < high && arr[high] >= key) {
        high --;
      }
      arr[low] = arr[high]
    }
    arr[low] = key
    // 对左边的范围重来一次
    _quickSort(start, low - 1)
    // 对右边的范围重来一次
    _quickSort(low + 1, end)
  }
  _quickSort(0, arr.length - 1)
}
quickSort(arr1)
console.log(arr1)