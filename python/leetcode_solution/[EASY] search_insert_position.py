"""
Link do desafio: https://leetcode.com/problems/search-insert-position/
"""

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        pos_greater = 0
        for i in nums:
            if i < target:
                pos_greater = nums.index(i)

        pos_greater += 1
        return pos_greater