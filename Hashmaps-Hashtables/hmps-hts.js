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



// Question 1.2:
//Implement a function that reverses a null terminated string in Javascript?

let reverse = (str) => {

    let reversedstr = ''

    if(!str || typeof str != 'string'){

       return "Enter a string";

    }else if (str.length < 2){

         return str;

    }

    for( let count = str.length ; count >= 0 ; count--){
        
        reversedstr += str[count]

    }

    return reversedstr


}


console.log(reverse(45))



// Question 1.3:
//Given two strings, write a method to determine if one is a permutation of the other?


let checkIfPermute = ( str1 , str2 ) => {

    if(typeof str1 != 'string' || typeof str2 != 'string' || !str1 || !str2 ){

        return "Enter a string";

    }else if( str1.length < 2 || str2.length < 2 && str1 !== str2 ){

        return "Not a permutation of one another";

    }else{

        return `${str1} is a permutation of the ${str2}`;

    }


    let permute_arr = []





    return permute_arr

}


