"""
Link do desafio: https://leetcode.com/problems/remove-element/
"""

def remove_element(nums, val):
  pos_to_remove = []  
  for i in range(0, len(nums)):
      if nums[i] == val:
          pos_to_remove.append(i)

  for i in reversed(pos_to_remove): #must be a reverse iteration because the positions change after remove an el. 
      del nums[i]
      nums.append('_')
  
  k = len(nums) - len(pos_to_remove)
  return k

#CASE 1
nums1 = [3,2,2,3]
val1 = 3
print('Resposta CASO 1: ',remove_element(nums1, val1))

#CASE 2
nums2 = [0,1,2,2,3,0,4,2]
val2 = 2
print('Resposta CASO 2: ', remove_element(nums2, val2))
