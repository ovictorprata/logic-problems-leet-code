/*
Link do desafio: https://leetcode.com/problems/merge-nodes-in-between-zeros/
*/

function mergeNodes(lista) {
  lista = head
  zero_aberto = false 
  soma = 0
  head = []
  for(i of lista){
    if (i === 0){
        zero_aberto = !zero_aberto
        if (!zero_aberto) {
          head.push(soma)
          zero_aberto = true
          soma = 0
        } 
      } else {
        soma += i
      }
    }
    return head 
  }

head = [0,3,1,0,4,5,2,0]
console.log(mergeNodes(head))