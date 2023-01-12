"""
Link do desafio: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
"""

class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        maiores = []
        for i in nums:
            qnt_maiores = 0
            for el in nums:
                if i > el: qnt_maiores += 1
            maiores.append(qnt_maiores)
        return maiores