# Enumerate
fruits = ['apple', 'banana', 'orange']
list(enumerate(fruits))  # Output: [(0, 'apple'), (1, 'banana'), (2, 'orange')]
list(enumerate(fruits, start=1))  # Output: [(1, 'apple'), (2, 'banana'), (3, 'orange')]

# Using enumerate in loop
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
# Output:
# 0: apple
# 1: banana
# 2: orange

# Zip
names = ['Alice', 'Bob', 'Charlie']
ages = [30, 25, 35]
list(zip(names, ages))  # Output: [('Alice', 30), ('Bob', 25), ('Charlie', 35)]

# Zip with different lengths
list(zip([1, 2, 3], ['a', 'b']))  # Output: [(1, 'a'), (2, 'b')]

# Unzip
pairs = [(1, 'a'), (2, 'b'), (3, 'c')]
numbers, letters = zip(*pairs)
numbers, letters     # Output: ((1, 2, 3), ('a', 'b', 'c'))