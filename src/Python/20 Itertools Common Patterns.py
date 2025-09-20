from itertools import chain, cycle, islice, groupby, permutations, combinations

# Chain
list(chain([1, 2], [3, 4], [5, 6]))  # Output: [1, 2, 3, 4, 5, 6]

# Islice (like slicing but for iterators)
list(islice(range(10), 2, 7, 2))  # Output: [2, 4, 6]

# Groupby
data = [('a', 1), ('a', 2), ('b', 3), ('b', 4)]
{k: list(v) for k, v in groupby(data, key=lambda x: x[0])}
# Output: {'a': [('a', 1), ('a', 2)], 'b': [('b', 3), ('b', 4)]}

# Permutations and combinations
list(permutations([1, 2, 3], 2))  # Output: [(1, 2), (1, 3), (2, 1), (2, 3), (3, 1), (3, 2)]
list(combinations([1, 2, 3], 2))  # Output: [(1, 2), (1, 3), (2, 3)]