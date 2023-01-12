/*
Link do desafio: https://leetcode.com/problems/validate-stack-sequences/
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
  popped.sort()

  for(el in popped){
      if(popped[el] > pushed[el]){
      valid = false
      }
  }
  return valid
};