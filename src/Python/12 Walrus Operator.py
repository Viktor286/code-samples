# Assignment expression in condition
if (n := len([1, 2, 3, 4, 5])) > 3:
 print(f"List has {n} items") # Output: "List has 5 items"

# In list comprehension
data = [1, 2, 3, 4, 5]
[y for x in data if (y := x * 2) > 4] # Output: [6, 8, 10]

# In while loop
import random
while (value := random.randint(1, 6)) != 6:
 print(f"Got {value}, rolling again...")
# Output varies, ends when 6 is rolled