/*
Link do desafio: https://leetcode.com/problems/convert-the-temperature/
*/

function convertTempeture(celsius) {
  let kelvin = null
  let fahrenheit = null
  let ans = []
  
  kelvin = celsius + 273.15
  fahrenheit = celsius * 1.8 + 32.00

  ans.push(kelvin, fahrenheit)

  return ans
}

celsius_example = 36.50
console.log(convertTempeture(celsius_example))