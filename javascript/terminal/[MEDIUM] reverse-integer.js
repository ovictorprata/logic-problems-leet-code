/*
Link do desafio: https://leetcode.com/problems/reverse-integer/
*/

function reverse(x) {
  let negativo = null
  let minor_possible_number = -(2**31)
  let greater_possible_number = 2**31 -1

  x = String(x)
  if(x[0] === '-'){
    negativo = x[0]
    x = x.substring(1)
  }
  
  x = Number(x.split('').reverse().join(''))
  if (negativo) {
    x = negativo + x
  }
  
  if(x <= minor_possible_number || x >= greater_possible_number){
    x = 0
  }
  return x
}

x = 1534236469
    2147483647


console.log(reverse(x))