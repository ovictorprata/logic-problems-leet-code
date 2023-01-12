/*
Link do desafio: https://leetcode.com/problems/validate-stack-sequences/

não passa neste input: 
[0,2,1]
[0,1,2]
*/

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
  res_pushed_and_popped = []
  valid = true
  for(el of pushed){
      res_pushed_and_popped.push(el)
      if(el === popped[0]){
      res_pushed_and_popped.pop()
      popped.shift()
      }
  }
  popped.sort((a,b)=>a-b)

  for(el in popped){
      if(popped[el] > pushed[el]){
      valid = false
      }
  }
  return valid
};