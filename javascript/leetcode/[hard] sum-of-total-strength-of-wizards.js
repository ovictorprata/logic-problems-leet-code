/*
Link do desafio: https://leetcode.com/problems/sum-of-total-strength-of-wizards/
NÃO PASSA PARA ESTE INPUT: [747,812,112,1230,1426,1477,1388,976,849,1431,1885,1845,1070,1980,280,1075,232,1330,1868,1696,1361,1822,524,1899,1904,538,731,985,279,1608,1558,930,1232,1497,875,1850,1173,805,1720,33,233,330,1429,1688,281,362,1963,927,1688,256,1594,1823,743,553,1633,1898,1101,1278,717,522,1926,1451,119,1283,1016,194,780,1436,1233,710,1608,523,874,1779,1822,134,1984]
*/

/**
 * @param {number[]} strength
 * @return {number}
 */
 var totalStrength = function(strength) {
  let todos_subconjuntos = []
  let n_elementos_subconjunto = []
  let weakest_subconjunto = null
  let sum_subconjunto = 0
  let total_strength = 0

  for(let i=1;i <= strength.length;i++){
      n_elementos_subconjunto.push(i)
  }

  for(el of n_elementos_subconjunto){
      qnt_de_conjuntos_para_cada_el = n_elementos_subconjunto.slice(-el)[0]
      subconjunto = []
      for(let i = 0; i < qnt_de_conjuntos_para_cada_el; i++){
          subconjunto = strength.slice(i,el+i)
          todos_subconjuntos.push(subconjunto)
      }
  }

  for(let el of todos_subconjuntos){
      sum_subconjunto = 0
      sum_subconjunto = el.reduce((a, b) => a + b, 0) 
      weakest_subconjunto = Math.min.apply(Math, el)
      strength_subconjunto = sum_subconjunto * weakest_subconjunto
      total_strength += strength_subconjunto
  }
  return total_strength
  
};