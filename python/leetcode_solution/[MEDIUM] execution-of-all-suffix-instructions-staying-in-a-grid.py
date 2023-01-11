"""
Link do desafio: https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/
"""

class Solution:
    def executeInstructions(self, n: int, startPos: List[int], s: str) -> List[int]:
        passos = []
        answer = []
        i = 0
        for i in range(0, len(s)):
            passos.append(s[i:])

        for passo in passos:
            passos_validos = 0
            linha_atual = startPos[0]
            coluna_atual = startPos[1]
            for movimento in passo:
                if(movimento == 'R'):
                    coluna_atual += 1
                
                elif(movimento == 'L'):
                    coluna_atual -= 1
                
                elif(movimento == 'U'):
                    linha_atual -= 1
                
                else:
                    linha_atual += 1

                passo_foi_valido = False
                posicao_real = n - 1
                if linha_atual > posicao_real or linha_atual < 0 or coluna_atual > posicao_real or coluna_atual < 0:
                    passo_foi_valido = False
                else:
                    passo_foi_valido = True
            #FIM DA FUNCAO
                if passo_foi_valido:
                    passos_validos += 1
                else:
                    break
            answer.append(passos_validos)

        return answer

        