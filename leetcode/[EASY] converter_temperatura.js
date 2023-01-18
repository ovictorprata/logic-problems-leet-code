/*
Link do desafio: https://leetcode.com/problems/convert-the-temperature/
*/

/**
 * @param {number} celsius
 * @return {number[]}
 */
 var convertTemperature = function(celsius) {
  let kelvin = null
  let fahrenheit = null
  let ans = []
  
  kelvin = celsius + 273.15
  fahrenheit = celsius * 1.8 + 32.00

  ans.push(kelvin, fahrenheit)

  return ans
};