/*
Link do desafio: https://leetcode.com/problems/sort-the-matrix-diagonally/
*/

function intToRomain(num) {
  let unidade = 0
  let dezena = 0
  let centena = 0
  let milhar  = 0
  numero_em_lista = []

  unidade = num % 10
  num -= unidade
  dezena = num % 100
  num -= dezena
  centena = num % 1000
  num -= centena
  milhar = num % 10000

  if(unidade <= 3){
    unidade_em_romano = 'I'.repeat(unidade)
    numero_em_lista.push(unidade_em_romano)
  }
  
  console.log(unidade_em_romano)
}

n = 3313
intToRomain(n)