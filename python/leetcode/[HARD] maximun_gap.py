"""
Link do desafio: https://leetcode.com/problems/maximum-gap/
"""

class Solution:
    def maximumGap(self, nums: List[int]) -> int:
        nums.sort()
        max_difference = 0

        if len(nums) > 1:
            for i in range(len(nums)):
                if (i+1) != len(nums):
                    difference = nums[i+1] - nums[i]
                    if difference > max_difference:
                        max_difference = difference
        return max_difference
