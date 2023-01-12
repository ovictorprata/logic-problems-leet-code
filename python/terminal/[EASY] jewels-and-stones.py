"""
Link do desafio: https://leetcode.com/problems/jewels-and-stones/
"""

def numJewelsInStones(jewels, stones):
    jewel_in_stones = 0
    for i in stones:
        if i in jewels:
            jewel_in_stones += 1
    return jewel_in_stones

#CASE 1

print('CASE 1: ', numJewelsInStones('z', 'ZZ'))

#CASE 2
jewels = "aA"
stones = "aAAbbbb"
print('CASE 2: ', numJewelsInStones(jewels, stones))