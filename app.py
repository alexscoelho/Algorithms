# return true if consecutives nums on a list when added equals a target number

# def consecutive_sum(num_list,target):
#     accum = 0

#     for x in range(len(num_list)):
#         if accum != target:
#             accum = 0
#         for i in range(x, len(num_list)):
#             if accum == target:
#                 break
#             if accum < target:
#                 accum += num_list[i]
#             if accum > target:
#                 accum = 0
#             # print("iteration",x,accum)
#     if accum == target:
#         print(True)
#     else:
#         print(False)
    
# consecutive_sum([1,1,1,3,5,4], 15)


# last in first out
# stack = []

# stack.append('a')
# stack.append('b')
# stack.append('c')
# print('Initial Stack', stack)

# print(stack.pop())
# print(stack.pop())
# print(stack.pop())

# print(stack)

# first in first out
# queue = []
# queue.append('a')
# queue.append('b')
# queue.append('c')
# queue.pop(0)
# queue.pop(0)



# print(queue)

