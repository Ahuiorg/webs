console.log('hello world');


function A() {
	console.log('in A');
	this.b = 'hello';
	this.c = function () {
		console.log('hello world');
	}
}

var obj = new A;

// new出来的实例是没有prototype属性的
console.log(obj.prototype);
console.log(A.prototype);

A.prototype.c = function () {
	console.log('world');
}

// prototype有两个属性：
// constructor，就是函数的构造器，其实也就是原来对象的本身
A.prototype.constructor();

obj.c();

// __proto__: 原型链接
console.log(obj.__proto__);
console.log(A.prototype);
console.log(A.prototype === obj.__proto__);  // true


// 基础算法练习

// 判断一个单词是否回文
function isHuiWen (str) {
	return str == str.split('').reverse().join('');
}

console.log(isHuiWen('adcda'));
console.log(isHuiWen('adcde'));

// 数组去重
function unique (array) {
	let tempHash = {};
	let tempArray = [];
	for (var i = 0; i < array.length; i++) {
		if (!tempHash[array[i]]) {
			tempHash[array[i]] = true;
			tempArray.push(array[i]);
		}
	}
	return tempArray;
}
var A = [1,1,2,3,3,3,4];
console.log(unique(A));
// console.log(unique([1,1,2,3,3,3,4]));

// 统计一个字符串出现最多的字母
function countNumber (str) {
 let charObj = {};
 for (let i = 0; i < str.length; i++) {
 	if (!charObj[str[i]]) {
 		charObj[str[i]] = 1;
 	} else {
 		charObj[str[i]] += 1;
 	}
 }
 console.log(charObj);
 let maxChar = '';
 let maxValue = 1;
 for (let key in charObj) {
 	console.log(charObj[key]);
 	if (charObj[key] >= maxValue) {
 		maxValue = charObj[key];
 		maxChar = key
 	}
 }
 console.log(maxValue, maxChar);
}
countNumber('abcedhudjijijijjikkkkk');


// 排序
// 冒泡排序
function bubbleSort(arr) {
	let temp;
	for (let i = 0, l = arr.length; i < l - 1; i++) {
		for (let j = i + 1; j < l; j++) {
			if (arr[i] > arr[j]) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	console.log(arr, 'bubble');
}
bubbleSort([1,2,4,3,4,8,7,8,9,3,2,1]);

// 优化之后的冒泡排序
function swap (i, j, array) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}
function popSort(array) {
	let len = array.length, isSwap = false;
	for (let i = 0; i < len; i++) {
		isSwap = false;
		for (let j = 0; j < len - i - 1; j++) {
			(array[j] > array[j + 1]) && (isSwap = true) && (swap(j, j+1, array));
		}
		if (!isSwap) {
			break;
		}
	}
	console.log(array, 'pop');
}

popSort([1,2,4,3,4,8,7,8,9,3,2,1]);

// 选择排序
function selectSort(array) {
	let len = array.length, min;
	for (let i = 0; i < len; i++) {
		min = i;
		for (let j = i + 1; j < len; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}
		if (min !== i) {
			swap(i, min, array);
		}

	}
	console.log(array, 'select');
}
selectSort([1,2,4,3,4,8,7,8,9,3,2,1]);


// 快速排序
function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	let leftArr = [];
	let rightArr = [];
	let baseIdx = Math.floor(arr.length/2);
	let q = arr.splice(baseIdx, 1)[0];

	for (let i = 0, l = arr.length; i < l; i++) {
		if (arr[i] > q) {
			rightArr.push(arr[i]);
		} else {
			leftArr.push(arr[i]);
		}
	}

	return [].concat(quickSort(leftArr), [q], quickSort(rightArr));
}

console.log(quickSort([1,2,4,3,4,8,7,8,9,3,2,1]));

// 不借助临时变量，进行两个整数的交换
function swop (a, b) {
	b = b - a;
	a = b + a;
	b = a - b;

	console.log(a, b);
}
swop(10, 20);

// 斐波那契数列
function fibo(n) {
	var fiboArr = [];
	var i = 0;
	while(i < n) {
		if (i <= 1) {
			fiboArr.push(i);
		} else {
			fiboArr.push(fiboArr[i - 1] + fiboArr[i - 2]);
		}
		i++;
	}
	return fiboArr;
}
function getFibo (n) {
	if (n < 0) {
		return 0;
	}
	if (n <= 2) {
		return 1;
	}

	return getFibo(n-1) + getFibo(n-2);
}
console.log(fibo(15));
console.log(getFibo(3));


function deepClone(obj) {
	if (typeof obj === "object") {
		var resert = obj instanceof Array ? [] : {};
		for (var i in obj) {
			var attr = obj[i];
			resert[i] = deepClone(attr);
		}
		return resert;
	} else {
		return obj;
	}
}

var obj = {
	friends: ['Ammy', 'Lee'],
	name: 'lipenghui',
	age: '26',
	job: {
		name: 'fe',
		gs: 'mt'
	},
	speak: function () {
		console.log('angelee');
	}
}

console.log(deepClone(obj));
var obj2 = deepClone(obj);
obj2.speak();


(function () {
	var a = b = 5;
	console.log(typeof a);
	console.log(typeof b);
})()
console.log(typeof a);
console.log(typeof b);


var iNum = 0;
for (var i = 1; i < 10; i++) {
	if (i % 5 == 0) {
		continue;
	}
	iNum++;
}
console.log(iNum);


