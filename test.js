var 배열 = [6,3,40,7,2]
// 아 정렬하고 싶다 => sort
배열.sort()  // 정렬 완료 (문자열 기준)
console.log(배열)

// 숫자 정렬하고 싶으면 앞에꺼 뒤에꺼 비교해서
// 음수나오면 (앞에꺼가 작으면)a,b로 정렬
// 양수나오면 (뒤에꺼가 작으면) b,a로 정렬
배열.sort((a,b) => a-b)
console.log(배열)

// 문자열 정렬(한글순)
배열 = ['한글34','한글12','가나다라마','안녕하세요']
배열.sort()
console.log(배열)

객체배열 = [
  {'id':0, 'name' : '홍길동'},
  {'id':2, 'name' : '유관순'},
  {'id':1, 'name' : '김유신'},
  {'id':3, 'name' : '이순신'},
  {'id':4, 'name' : '윤동주'}
]
// 객체들 정렬
객체배열.sort((a,b)=>{
  return a['id']-b['id']
})
console.log(객체배열)

객체배열.sort((a,b)=>{
  return a['name'].localeCompare(b['name'])
})
console.log(객체배열)

//// filter : 내가원하는 값만 남겨라
// 아이디가 2이상인 객체만 남기자
var 새정렬 = 객체배열.filter((e)=>{
  return e['id'] >= 2
})

console.log(새정렬)

//// map : 일괄변경 (배열안에 들어있는 모든 요소를 return값으로 변경)
var 달러 = [1,2,3,4,5,6,7,8,9,10]
var 원화 = 달러.map(e =>{
  return parseFloat((e * 1344.60).toFixed(2))
})

console.log(달러)
console.log(원화)

//// forEach : 배열의 각 요소를 분리해주는 배열전용 반복문
달러.forEach((e)=>{
  console.log(e)
})
// git pull orgin master
// git add .
// git commit -m "메모"
// git push origin master
