// fill 특정값으로 배열 채우기
arr = [1,2,3,4]
arr.fill(0); // 배열 자체를 수정
console.log(arr); // [0, 0]

arr.fill('s', 1, 3);
console.log(arr); // [ 0, 's', 's', 0 ]

arr.fill('a', 1); 
console.log(arr); // [ 0, 'a', 'a', 'a' ]

// join 배열을 문자열로 합치기
let text = arr.join();
console.log(text)
text = arr.join(' | ');
console.log(text);