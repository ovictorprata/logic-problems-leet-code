"""
Link do desafio: https://leetcode.com/problems/jewels-and-stones/
"""

class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        jewel_in_stones = 0
        for i in stones:
            if i in jewels:
                jewel_in_stones += 1
        return jewel_in_stones