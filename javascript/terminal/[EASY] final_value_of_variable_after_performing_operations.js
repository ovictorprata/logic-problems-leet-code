/*
Link do desafio: https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
*/

function finalValue(operations){
  let initial = 0
  let cont = 0
  for(operation of operations){
    if(operation.includes('++')){
      cont++
    } else{
      cont--
    }
  }
  let final = initial + cont
  return final
}

let operations = ["--X","X++","X++"]
console.log(finalValue(operations))