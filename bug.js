```javascript
// Incorrect use of $inc operator with non-numeric values
db.collection.updateOne({name: "John"}, {$inc: {age: "ten"}});
```