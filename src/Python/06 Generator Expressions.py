# Generator expression (note: output shows conversion to list for visibility)
gen = (x**2 for x in range(5))
list(gen)            # Output: [0, 1, 4, 9, 16]

# Memory efficient sum
sum(x**2 for x in range(1000000) if x % 2 == 0)  # Output: 166666166666500000

# Generator in any/all
any(x > 5 for x in range(10))       # Output: True
all(x < 10 for x in range(5))       # Output: True