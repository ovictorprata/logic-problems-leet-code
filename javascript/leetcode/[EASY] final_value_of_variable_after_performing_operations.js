/*
Link do desafio: https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
*/

/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
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
};