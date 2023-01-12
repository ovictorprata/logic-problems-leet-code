"""
Link do desafio: https://leetcode.com/problems/first-missing-positive/
"""

def firstMissingPositive(nums):
    nums.sort()
    count = 1
    for i in nums:
        if(i<count): continue

        elif(count!=i): return count

        else: count+=1
        
    return count

nums = [1,2,0]
print(firstMissingPositive(nums))