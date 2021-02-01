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


// Question 1.1:
//Implement an algorithm to determine if a string has all unique character. What if you cannot use additional data structures?


//Solution using a Map 
let CheckIfUnique = (str) => {

    let hashmap = new Map()

    let str_array = Array.from(str)

    let state = false;

    str_array.forEach(element => {
        
        if(!hashmap.has(element)){

            hashmap.set(element)
            state = true

        }else{
            state = false
        }
    })

    return state;

}

console.log(CheckIfUnique('ryu') + " using a Map" )


//Solution using a set 
let CheckIfUniqueSet = (str) => {
    let mySetSize = new Set(str).size
    
    if(mySetSize == str.length){
        return true
    }else{
        return false
    }

}


console.log(CheckIfUniqueSet('ryu') + " using a Set" )


