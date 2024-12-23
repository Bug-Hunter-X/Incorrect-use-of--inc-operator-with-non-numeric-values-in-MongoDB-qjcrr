```javascript
// Correct use of $inc operator with numeric values
db.collection.updateOne({name: "John"}, {$inc: {age: 10}});
```