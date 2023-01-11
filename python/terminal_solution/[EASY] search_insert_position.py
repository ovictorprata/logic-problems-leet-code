"""
Link do desafio: https://leetcode.com/problems/search-insert-position/
"""

def searchInsert(nums, target):
    pos_greater = 0
    for i in nums:
        if i < target:
            pos_greater = nums.index(i)

    pos_greater += 1
    return pos_greater

#CASE 1
case1_nums = [1,3,5,6]
case1_target = 5
print(searchInsert(case1_nums, case1_target))