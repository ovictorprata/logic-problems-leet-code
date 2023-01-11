function calculaPassos(n, posInitial, instructions) {
  total_linhas = n
  total_colunas = n
  linha_inicial = posInitial[0]
  coluna_inicial = posInitial[1]
  passos = []

  for(let i = 0; i < instructions.length(); i++){
    
  }

  for(i of instructions){
    if(i === 'R'){
      coluna_inicial += 1
    } 
    
    else if(i === 'L'){
      coluna_inicial -= 1
    } 
    
    else if(i === 'U'){
      linha_inicial -= 1
    } 
    
    else {
      linha_inicial += 1
    }
  }

  console.log(tabuleiro)
  return
}

n = 3
startPos = [0,1]
s = 'RRDDLU'

calculaPassos(n, startPos, s)