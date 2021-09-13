// 栈结构
// 特点: 先进后出
function Stack() {
  this.arr = []
  this.push = function (value) {
    this.arr.push(value)
  }
  this.pop = function () {
    return this.arr.pop()
  }
}

var stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.arr)
stack.pop()
console.log(stack.arr)

// 队列
// 特点：先进先出

function Queue() {
  this.arr = []
  this.push = function (value) {
    this.arr.push(value)
  }
  this.pop = function () {
    return this.arr.shift()
  }
}
var queue = new Queue()
queue.push(1)
queue.push(2)
queue.push(3)
console.log(queue.arr)
queue.pop()
console.log(queue.arr)