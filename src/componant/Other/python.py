from collections import Counter
import math
def reverse(s):
    revesed_s = ""
    for char in s:
        reversed_s = char+revesed_s
    return reversed_s
def prime(n):
    if n < 2:
        return False
    for i in range(2,int(math.sqrt(n))+1):
        if n % i == 0:
            return False
    return True
def first_char(s):
    freq = Counter(s)
    for char in s:
        if freq[char] == 1:
            return char
    return None
print(first_char("aabbcde"))