"""
Link do desafio: https://leetcode.com/problems/maximum-gap/
"""

def numJewelsInStones(nums):
  nums.sort()
  max_difference = 0

  if len(nums) > 1:
    for i in range(len(nums)):
      if (i+1) != len(nums):
        difference = nums[i+1] - nums[i]
        if difference > max_difference:
          max_difference = difference
  return max_difference

#CASE 1
nums = [3,6,9,1]
print('CASE 1: ', numJewelsInStones(nums))

nums = [10]
print('CASE 2: ', numJewelsInStones(nums))
