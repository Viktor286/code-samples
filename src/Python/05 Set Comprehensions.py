# Basic set comprehension
{x % 3 for x in range(10)}          # Output: {0, 1, 2}

# With condition
{x for x in range(20) if x % 2 == 0 and x % 3 == 0}  # Output: {0, 6, 12, 18}