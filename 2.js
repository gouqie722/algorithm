// 数组排序
// 排序不是比较大小
// 排序的本质是比较和交换
// 1. 冒泡排序
// 一般思路
var arr = [4, 1, 6, 9, 3, 2, 8, 7]

function getMin(arr) {
  if (arr == null || arr.length === 0) return 
  var index = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != null && arr[i] < arr[index] || arr[i] != null && index == -1) {
      index = i
    }
  }
  var result = arr[index]
  arr[index] = null
  return result
}

function sort(arr) {
  var newArr = new Array(arr.length)
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = getMin(arr)
  }
  return newArr
}

// console.log(sort(arr))

function compare(a, b) { // 比较之后需要得出是否需要交换
  return a < b
}

function exchange(arr, a, b) { // 将arr的ab位置进行交换 
  var temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}
// 冒泡排序
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length -1 - i; j ++) {
      if (compare(arr[j], arr[j + 1])) {
        exchange(arr, j, j + 1)
      }
    }
  }
  return arr
  // for (let i = 0; i < arr.length - 1; i++) {
  //   if (arr[i] > arr[i+1]) {
  //     var temp = arr[i]
  //     arr[i] = arr[i + 1]
  //     arr[i + 1] = temp
  //   }
  // }
  // return arr
}
// console.log(bubbleSort(arr))


// 选择排序: 内层循环，每一圈选出一个最大的，然后放后面
function choiceSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var maxIndex = 0
    for (let j = 0; j < arr.length - i; j++) {
      if (compare(arr[maxIndex], arr[j])) {
        maxIndex = j
      }
    }
    exchange(arr, maxIndex, arr.length - 1 - i)
  }
  return arr
}

// 任何一种排序算法没有优劣之分，只有是否适合的场景

// console.log(choiceSort(arr))


// 简单快速排序
function quickSort() {
  
}
