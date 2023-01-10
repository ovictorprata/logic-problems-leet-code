"""
Link do desafio: https://leetcode.com/problems/merge-two-sorted-lists/
"""

def merge_list(list1, list2):
  merged_list = list1 + list2
  merged_list.sort()

  return merged_list

case1_list1 = [1,2,4]
case1_list2 = [1,3,4]
print(merge_list(case1_list1, case1_list2))

case1_list1 = []
case1_list2 = []
print(merge_list(case1_list1, case1_list2))

case1_list1 = []
case1_list2 = [0]
print(merge_list(case1_list1, case1_list2))