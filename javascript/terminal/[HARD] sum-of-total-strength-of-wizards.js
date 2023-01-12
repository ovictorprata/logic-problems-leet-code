/*
Link do desafio: https://leetcode.com/problems/sum-of-total-strength-of-wizards/
*/

function totalStrength(strength) {
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
}

strength = [5,4,6]
console.log('soma final: ', totalStrength(strength))
