"""
Link do desafio: https://leetcode.com/problems/remove-element/
"""

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        pos_to_remove = []  
        for i in range(0, len(nums)):
            if nums[i] == val:
                pos_to_remove.append(i)

        for i in reversed(pos_to_remove): #must be a reverse iteration because the positions change after remove an el. 
            del nums[i]
            nums.append('_')
        
        k = len(nums) - len(pos_to_remove)
        return k