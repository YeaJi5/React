// Math 모듈

export function add(a, b) {
  return a+b;
}

export function sub(a, b) {
  return a-b;
}

// CJS
// module.exports = {
//   // 키와 밸류의 값이 같으면 이런식으로 작성 가능
//   add,
//   sub,
// };

// ESM
// export { add, sub };

export default function multiply(a, b){
  return a*b;
}