/*
Link do desafio: https://leetcode.com/problems/sum-of-total-strength-of-wizards/
*/

function totalStrength(strength) {
  let n_elementos_subconjunto = []
  let weakest_subconjunto = null
  let sum_subconjunto = 0
  let total_strength = 0
  let max_stregth = 10**9+7
  let PROBLEMAO_QUE_SOMA = 1
  let PROBLEMAO_QUE_DIMINUI = strength.length

  n_elementos_subconjunto = Array.from({length: strength.length}, (_, i) => i + 1)
  
  console.log(n_elementos_subconjunto)
  for(el of n_elementos_subconjunto){
    qnt_de_conjuntos_para_cada_el = n_elementos_subconjunto.slice(-el)[0]

    subconjunto = []
    for(let i = 0; i < qnt_de_conjuntos_para_cada_el; i++){
      subconjunto = strength.slice(i,el+i)
      sum_subconjunto = 0
      sum_subconjunto = subconjunto.reduce((a, b) => a + b, 0) 
      weakest_subconjunto = Math.min.apply(Math, subconjunto)
      strength_subconjunto = sum_subconjunto * weakest_subconjunto
      total_strength += strength_subconjunto
    }
  }

  // for(let i = strength.length;i >0;i--){
  //   qnt_de_conjuntos_para_cada_el = n_elementos_subconjunto.slice(-el)[0]
  //   subconjunto = []
  //   for(let i = 0; i < qnt_de_conjuntos_para_cada_el; i++){
  //     subconjunto = strength.slice(i,el+i)
  //     sum_subconjunto = 0
  //     sum_subconjunto = subconjunto.reduce((a, b) => a + b, 0) 
  //     weakest_subconjunto = Math.min.apply(Math, subconjunto)
  //     strength_subconjunto = sum_subconjunto * weakest_subconjunto
  //     total_strength += strength_subconjunto
  //   }
  // }
  
  if(total_strength > max_stregth) {
    total_strength = total_strength % max_stregth
  }
  return total_strength
}

// strength = [747,812,112,1230,1426,1477,1388,976,849,1431,1885,1845,1070,1980,280,1075,232,1330,1868,1696,1361,1822,524,1899,1904,538,731,985,279,1608,1558,930,1232,1497,875,1850,1173,805,1720,33,233,330,1429,1688,281,362,1963,927,1688,256,1594,1823,743,553,1633,1898,1101,1278,717,522,1926,1451,119,1283,1016,194,780,1436,1233,710,1608,523,874,1779,1822,134,1984]

strength = [1,3,1,2]

console.log('soma final: ', totalStrength(strength))


