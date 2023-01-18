"""
Link do desafio: https://leetcode.com/problems/number-of-good-pairs/
"""

def good_pairs(nums):
    n_unicos = []
    for i in nums:
        try: 
            n_unicos.index(i)
            a=0
        except ValueError:
            n_unicos.append(i)
    return n_unicos

#CASE 1
case1_nums = [1,2,3,1,1,3]
print(good_pairs(case1_nums))