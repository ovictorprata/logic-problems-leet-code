"""
Link do desafio: https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/
"""

def calculaPassos(n, posInitial, instructions):
  total_linhas = n
  total_colunas = n
  passos = []
  answer = []
  i = 0
  for i in range(0, len(instructions)):
    passos.append(instructions[i:])

  for passo in passos:
    passos_validos = 0
    linha_atual = posInitial[0]
    coluna_atual = posInitial[1]
    for movimento in passo:

      if(movimento == 'R'): coluna_atual += 1
      elif(movimento == 'L'): coluna_atual -= 1
      elif(movimento == 'U'): linha_atual -= 1
      else: linha_atual += 1

      passo_valido = compara_posicao(linha_atual, coluna_atual)

      if passo_valido: passos_validos += 1
      else: break

    answer.append(passos_validos)

  print(answer)

def compara_posicao(linha, coluna):
  passos_dado = 0
  posicao_real = n -1
  if linha > posicao_real or linha < 0 or coluna > posicao_real or coluna < 0:
    passos_dado = False
  else:
    passos_dado = True

  return passos_dado

n = 3
startPos = [0,1]
s = 'RRDDLU'

calculaPassos(n, startPos, s)