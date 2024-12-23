# Incorrect Use of $inc Operator in MongoDB

This example demonstrates an error that can occur when using the `$inc` operator in MongoDB updates.  The `$inc` operator is designed to increment numeric fields; using it with non-numeric values will cause an error.

The `bug.js` file contains the erroneous code, while `bugSolution.js` shows the corrected approach.

## Bug:
Incorrectly attempts to increment the 'age' field with a string value.  This will result in a MongoDB error.

## Solution:
Ensures that the value used with `$inc` is a number.  The correct way to achieve this is shown in `bugSolution.js`.