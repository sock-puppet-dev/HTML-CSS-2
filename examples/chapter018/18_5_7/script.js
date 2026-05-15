let mySet = new Set([1, 3, 5]);
mySet.add(7); // Added at the end
mySet.add(3); // Will not be added, already exists
mySet.add("some text"); // Add to the end

// Check
console.log(mySet.has(5)); // = true
console.log(mySet.has(9)); // = false
console.log(mySet.size); // = 5

// Iterate through a Set and output
for (let item of mySet) console.log(item);

// Delete element
mySet.delete(3);
mySet.delete("some text");
