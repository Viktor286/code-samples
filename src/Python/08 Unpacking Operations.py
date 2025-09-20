a, b, c = (1, 2, 3)
a, b, c # Output: (1, 2, 3)

# Extended unpacking
first, *middle, last = [1, 2, 3, 4, 5]
first, middle, last # Output: (1, [2, 3, 4], 5)

# Unpacking in function calls
def func(a, b, c):
 return a + b + c

args = [1, 2, 3]
func(*args) # Output: 6

kwargs = {'a': 1, 'b': 2, 'c': 3}
func(**kwargs) # Output: 6

# Multiple assignment
a, b = b, a = 5, 10
a, b # Output: (10, 5)