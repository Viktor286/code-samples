# Basic lambda
square = lambda x: x ** 2
square(5)            # Output: 25

# Lambda with multiple arguments
add = lambda x, y: x + y
add(3, 7)            # Output: 10

# Lambda in map
numbers = [1, 2, 3, 4, 5]
list(map(lambda x: x * 2, numbers))  # Output: [2, 4, 6, 8, 10]

# Lambda in filter
list(filter(lambda x: x % 2 == 0, numbers))  # Output: [2, 4]

# Lambda in sorted
people = [("Alice", 30), ("Bob", 25), ("Charlie", 35)]
sorted(people, key=lambda x: x[1])  # Output: [('Bob', 25), ('Alice', 30), ('Charlie', 35)]

# Lambda with conditional
max_val = lambda a, b: a if a > b else b
max_val(5, 3)        # Output: 5