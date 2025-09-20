# Dictionary get with default
d = {'a': 1, 'b': 2}
d.get('c', 0) # Output: 0
d.get('a', 0) # Output: 1

# setdefault
d.setdefault('c', 3) # Output: 3
d # Output: {'a': 1, 'b': 2, 'c': 3}

# Dictionary merge (Python 3.9+)
d1 = {'a': 1, 'b': 2}
d2 = {'b': 3, 'c': 4}
d1 | d2 # Output: {'a': 1, 'b': 3, 'c': 4}

# Update with |=
d1 |= d2
d1 # Output: {'a': 1, 'b': 3, 'c': 4}

# Dictionary unpacking
{**d1, **d2, 'd': 5} # Output: {'a': 1, 'b': 3, 'c': 4, 'd': 5}