# Basic dict comprehension
{x: x**2 for x in range(5)} # Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# From two lists
keys = ['a', 'b', 'c']
values = [1, 2, 3]
{k: v for k, v in zip(keys, values)} # Output: {'a': 1, 'b': 2, 'c': 3}

# With condition
{x: x**2 for x in range(10) if x % 2 == 0} # Output: {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}

# Inverting a dictionary
original = {'a': 1, 'b': 2, 'c': 3}
{v: k for k, v in original.items()} # Output: {1: 'a', 2: 'b', 3: 'c'}