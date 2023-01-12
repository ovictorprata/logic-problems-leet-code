/*
Link do desafio: https://leetcode.com/problems/validate-stack-sequences/
*/

function validateStackSequences(pushed, popped) {
  res_pushed_and_popped = []
  valid = true
  for(el of pushed){
    res_pushed_and_popped.push(el)
    if(el === popped[0]){
      res_pushed_and_popped.pop()
      popped.shift()
    }
  }
  popped.sort()

  for(el in popped){
    if(popped[el] > pushed[el]){
      valid = false
    }
  }
  return valid
}

pushed = [1,2,3,4,5]
popped = [4,3,5,1,2]

console.log(validateStackSequences(pushed, popped))