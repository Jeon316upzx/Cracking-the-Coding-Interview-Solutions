// A Hashmap/Hashtable is a data structure that maps key/value pairs for highly efficient lookup.
// In Python, this data structure is regarded as a dictionary.
// It has a technique that involves using a Hash function to determine the index at which the key will be stored.


//a common usecase for a dictionary is:
//Finding the number of occurrences of a word in a sentence, chapter or a whole book.


//Javascript's implementation  of a Hashmap 
let hashmap = new Map([
    [1, "Orange"],
    [2, "Paw-paw"],
    [3, "Guava"],
    [4, "Tangerine"]
])

//Operations that can be performed on a hashmap includes:

//Set
 hashmap.set(5, "Lemon")
 console.log(hashmap)

//Get
console.log(hashmap.get(2))

//Has
console.log(hashmap.has(5))

//Delete
hashmap.delete(3)
console.log(hashmap)

//Size
console.log(hashmap.size)

//Clear
hashmap.clear()
console.log(hashmap)


// console.log(hashmap)

