# Variable arguments
def func(*args, **kwargs):
 return f"args: {args}, kwargs: {kwargs}"

func(1, 2, 3, name="Alice", age=30)
# Output: "args: (1, 2, 3), kwargs: {'name': 'Alice', 'age': 30}"

# Forwarding arguments
def wrapper(*args, **kwargs):
 print(f"Called with {len(args)} args and {len(kwargs)} kwargs")
 return original_func(*args, **kwargs)

def original_func(a, b, c=10):
 return a + b + c

wrapper(1, 2, c=3) # Output: Called with 2 args and 1 kwargs
# Returns: 6