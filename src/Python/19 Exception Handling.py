# Try-except-else-finally
try:
 result = 10 / 2
except ZeroDivisionError:
 print("Division by zero!")
else:
 print(f"Result: {result}")
finally:
 print("Cleanup")
# Output:
# Result: 5.0
# Cleanup

# Multiple exceptions
try:
 value = int("abc")
except (ValueError, TypeError) as e:
 print(f"Error: {e}")
# Output: Error: invalid literal for int() with base 10: 'abc'

# Raise with custom message
def validate_age(age):
 if age < 0:
 raise ValueError(f"Age cannot be negative: {age}")
 return age

# Re-raising exception
try:
 validate_age(-5)
except ValueError:
 print("Caught error, re-raising...")
 raise
# Output: Caught error, re-raising...
# Then raises: ValueError: Age cannot be negative: -5