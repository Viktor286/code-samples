# Basic f-string
name = "Alice"
age = 30
f"My name is {name} and I'm {age} years old"  # Output: "My name is Alice and I'm 30 years old"

# Expressions in f-strings
f"2 + 2 = {2 + 2}"   # Output: "2 + 2 = 4"

# Format specifications
value = 3.14159
f"{value:.2f}"       # Output: "3.14"
f"{value:10.2f}"     # Output: "      3.14"
f"{42:04d}"          # Output: "0042"
f"{1000000:,}"       # Output: "1,000,000"

# Debug format
variable = 42
f"{variable=}"       # Output: "variable=42"

# Nested braces
data = {'key': 'value'}
f"{data['key']}"     # Output: "value"