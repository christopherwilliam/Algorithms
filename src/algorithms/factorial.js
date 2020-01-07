export function factorial(x) {
  let answer = 1;
  for(let i = x; i > 0; i--) {
    answer = answer * i;
  }
  return answer;
}

export function recursiveFactorial(x) {
  if (x <= 1) {
    return 1;
  }
  return recursiveFactorial(x-1) * x;
}