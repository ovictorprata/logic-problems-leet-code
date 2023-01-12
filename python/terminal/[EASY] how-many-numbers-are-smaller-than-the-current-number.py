"""
Link do desafio: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
"""

def smallerNumbersThanCurrent(nums):
  maiores = []
  for i in nums:
    qnt_maiores = 0
    for el in nums:
      if i > el: qnt_maiores += 1
    maiores.append(qnt_maiores)
  return maiores


nums = [8,1,2,2,3]
print(smallerNumbersThanCurrent(nums))