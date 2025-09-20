# Basic list comprehension
[x * 2 for x in range(5)]           # Output: [0, 2, 4, 6, 8]

# With condition
[x for x in range(10) if x % 2 == 0]  # Output: [0, 2, 4, 6, 8]

# Nested loops
[(x, y) for x in range(3) for y in range(2)]  # Output: [(0, 0), (0, 1), (1, 0), (1, 1), (2, 0), (2, 1)]

# With conditional expression
[x if x % 2 == 0 else -x for x in range(5)]  # Output: [0, -1, 2, -3, 4]

# Nested list comprehension
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
[[row[i] for row in matrix] for i in range(3)]  # Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]