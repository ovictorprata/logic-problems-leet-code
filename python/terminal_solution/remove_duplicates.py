"""
Link do desafio: https://leetcode.com/problems/remove-element/
"""

def remove_duplicates(nums):
    unique_values = []
    for i in nums:
        try:
            if unique_values.index(i):
                unique_values.append(i)  
        except Exception:
            pass
    return unique_values

#CASE 1
nums1 = [1,1,2]
print('Resposta CASO 1: ',remove_duplicates(nums1))


