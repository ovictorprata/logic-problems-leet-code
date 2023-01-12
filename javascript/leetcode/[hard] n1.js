n=130
const int = parseInt;
function countDigitOne(n) {
  let res = 0;
  for (let x = 1; x <= n; x *= 10) {
    let t = int(n / x)
    rem = n % x;
    console.log('n:', n, '/ x: ',x, ' = t: ', t, ' rem=', rem)
    res += int((t + 8) / 10) * x;
    if (t % 10 == 1) res += rem + 1;
  }
  return res;
 };
console.log("N de 1's:", countDigitOne(n))