
# The output will be 0

This has nothing to do with closures, and everything to do about numbers being immutable values. When we increment count we are assigning to the variable a new instance of a number with the value 1. message is still pointing to the old instance, so the log is going to print the same old value.

