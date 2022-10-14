from ctypes import sizeof
from dataclasses import replace
from re import A


arr=["asdf\nsdf//"]
arr2=["qwer\nqe"]
# h1 = arr[0].rstrip()
# name = arr[0] + arr2[0] + "hola" 
# name.rstrip("\n")


# for x in range(0,len(arr[0])-1):
#     if (arr[0][x] == "\n"):
#         my_list = list(arr[0])
#         my_list[x] = ' '
#         arr[0] = ''.join(my_list)



print(arr[0])
# print(name)

# newArr=arr.replace("\n","")
# newArr=arr.replace("/","")
arr1 = arr[0].replace("\n","")
arr1 = arr[0].replace("/","")
print(arr1)

# def sacarEnter(arr):
#     for x in range(0,len(arr[0])-1):
#         if (arr[0][x] == "\n"):
#             my_list = list(arr[0])
#             my_list[x] = ''
#             arr[0] = ''.join(my_list)
#     return arr


# print(sacarEnter(arr)[0])