# array
### 배열 생성 방법
```JavaScript
// 공간만 생성, 빈배열
let array = new Array(3); //  [ <3 empty items> ]
// of를 사용하여 데이터 추가
array = Array.of(3); // [ 3 ]
// 배열에 데이터 추가
array = new Array(1,2,3); // [ 1, 2, 3 ]
// from() 메서드는 유사 배열 객체 (array-like object), 반복 가능한 객체(iterable object)를 얕게 복사해서 새로운 객체 생성
const anotherArray = [1,2,3,4];
console.log('anotherArray',anotherArray) // anotherArray [ 1, 2, 3, 4 ]

array = Array.from(anotherArray);
console.log('array :',array); // array : [ 1, 2, 3, 4 ]

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

```

일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어함
하지만 자바스크립트에서의 배열은 연속적으로 이어져 있고
`오브젝트와 유사함!`
자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다!
이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Collections)

```JavaScript
array = Array.from({
  0: '안',
  1: '녕',
  length: 2,
});
console.log(array); // [ '안', '녕' ]
```

## array-method
```JavaScript
// 특정한 오프젝트가 배열인지 체크
const fruits = ['🍌', '🍎', '🍋'];
console.log(Array.isArray(fruits)) // true
console.log(Array.isArray({})) // false
// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🍎')); // 1
// 배열 안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍎')); // true

// 추가 - 제일 뒤 : push 메서드. 배열 끝에 요소 추가, 배열의 새로운 길이 반환
let length = fruits.push('🍑'); // 배열 자체를 수정 (업데이트)
console.log(fruits); // [ '🍌', '🍎', '🍋', '🍑' ]
console.log(length); // 4

// 추가 - 제일 앞 : unshift 메서드. 배열 제일 앞에 요소 추가, 배열의 새로운 길이 반환
length = fruits.unshift('🍓'); // 배열 자체를 수정(업데이트)
console.log(fruits); // [ '🍓', '🍌', '🍎', '🍋', '🍑' ]
console.log(length); // 5

// 제거 - 제일 뒤 : pop 메서드, 배열 제일 뒤 요소 제거, 제거된 요소 리턴
let lastItem = fruits.pop(); // 배열 자체를 수정(업데이트)
console.log(fruits); //[ '🍓', '🍌', '🍎', '🍋' ]
console.log(lastItem); // 🍑

// 제거 - 제일 앞 : shift 메서드, 배열 제일 앞 요소 제거, 제거된 요소 리턴
lastItem = fruits.shift(); // 배열 자체를 수정(업데이트)
console.log(fruits); // [ '🍌', '🍎', '🍋' ]
console.log(lastItem); // 🍓


// 중간에 추가 하거나 삭제 또는 교체 : splice 메서드 (인덱스, 0은추가 나머지제거), 인덱스 번호에 추가 또는 제거, 제거된 요소 리턴
fruits = [ '🍌', '🍈', '🍓', '🍎', '🍋' ]
const deleted = fruits.splice(1, 2); // 배열 자체를 수정(업데이트)
console.log(fruits); // [ '🍌', '🍎', '🍋' ]
console.log(deleted);// [ '🍈', '🍓' ]

fruits.splice(1, 0, '🍆', '🍒'); // 배열 자체를 수정(업데이트)
console.log(fruits); // [ '🍌', '🍆', '🍒', '🍎', '🍋' ]

// slice 새로운 배열 생성
fruits = [ '🍌', '🍈', '🍓', '🍎', '🍋' ]
let newArr = fruits.slice(0, 2);
console.log(newArr); //[ '🍌', '🍈' ]
console.log(fruits); // [ '🍌', '🍈', '🍓', '🍎', '🍋' ]
newArr = fruits.slice(-1);
console.log(newArr); // [ '🍋' ]

// concat 여러개 배열을 붙여줌
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]
// reverse 반대로 정렬
const arr4 = arr3.reverse();
console.log(arr4); // [ 6, 5, 4, 3, 2, 1 ]

// flat 중첩배열 한배열로 정리
let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];
console.log(arr);
console.log(arr.flat(3));

// fill 특정값으로 배열 채우기
arr = [1,2,3,4]
arr.fill(0); // 배열 자체를 수정
console.log(arr); // [ 0, 0, 0, 0 ]

arr.fill('s', 1, 3);
console.log(arr); // [ 0, 's', 's', 0 ]

arr.fill('a', 1); 
console.log(arr); // [ 0, 'a', 'a', 'a' ]

// join 배열을 문자열로 합치기
let text = arr.join();
console.log(text) // 0,a,a,a
text = arr.join(' | ');
console.log(text); // 0 | a | a | a
```