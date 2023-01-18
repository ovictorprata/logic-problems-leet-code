def calcula_solucao(nums, target):
  lista_de_somas = []
  for i in range(0, len(nums)):
    elemento = nums[i]
    print(elemento)
    copia_nums = nums
    print('copianum: ', copia_nums)
    pos_primeiro_el = ''
    pos_segundo_el = ''
    copia_nums.pop(elemento)
    print(copia_nums)
    # for el_cop in copia_nums:
    #   soma = el + el_cop
    #   if soma == target:
    #     pos_primeiro_el = nums.index(el)
    #     pos_segundo_el = nums.index(el_cop)
  
  print(pos_primeiro_el, pos_segundo_el)
    


nums = [2,7,11,15]
target = 9
calcula_solucao(nums, target) 