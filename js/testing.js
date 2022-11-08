
// -------------------------------------------------
// -------------------------------------------------
// THIS IS FOR TASK" NORMALIZE"
// -------------------------------------------------
// -------------------------------------------------

var inputName = prompt("Enter your name: ")

//function splitName ===> for splitting the given name
function splitName(nameIn) {

    let nameParts = nameIn.split(" ");
    let newNameParts = [];

    for (let i = 0; i < nameParts.length; i++) {
        newNameParts.push(nameParts[i])
    }

    return nameParts;
}
//testing workability of function splitName()
// console.log(splitName(inputName))

// function firstUp() ===> for capitalizing the first letters of the input
function firstUp(inpName) {

    let newName = splitName(inpName);

    let newNameParts = [];
    for (let i = 0; i < newName.length; i++) {
        let newUp = newName[i].slice(0, 1).toUpperCase();
        let rest = newName[i].slice(1);
        let newWordUp = newUp + rest;
        newNameParts.push(newWordUp)


    }
    // this is for joining the elements of array newNameParts
    //and returning a string for later use
    //    let newFullName = newNameParts.join(" ")
    //     return newFullName;

    return newNameParts;
}
//testing workability of function firstUp()
// console.log(firstUp(inputName))


function splitTwo(inpName) {

    let newName = firstUp(inpName);

    let newNameParts = [];
    var idkNew = [];
    // var joinedName = " ";
    for (let i = 0; i < newName.length; i++) {

        let myName = newName[i];

        for (let j = 0; j < myName.length;) {
            // when j is incremented function does not work properly
            let firstTwo = myName.slice(0, 2);

            myName = myName.slice(2);

            // calling the function firstUp() for making the first letter capital of each 2 letter word
            var myIte = firstUp(firstTwo)
            newNameParts.push(myIte)


        }
        //joining the 2letter words after the first word is fully iterated
        var nnnn = newNameParts.join("")
        idkNew.push(nnnn)
        //emptying the array where we push 2 letter words
        newNameParts = []

    }

    return idkNew.join(" ");
}
//testing splitTwo
console.log(splitTwo(inputName))
// splitTwo()


//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------



// //-------------------------------------------------
// //-------------------------------------------------
// //THIS IS FOR TASK "RANDOM NUMBERS IN RANGE"
// //-------------------------------------------------
// //-------------------------------------------------
// var a = parseInt(prompt("Enter start of range"))
// var b = parseInt(prompt("Enter end of range"))
// var c = parseInt(prompt("Enter number of elements"))




// function generateRandom(start_range,end_range,num_elements){
//     var randomNumbers = [];

//     for(let i=0; i<num_elements;i++){
    
//         randomNumbers.push(Math.floor(Math.random()*(end_range-start_range))+start_range)
    
//     }
    
//     return randomNumbers;
// }

// // console.log(generateRandom(a,b,c))


// function removeDuplicates(arr) {
//     return arr.filter((item,
//         index) => arr.indexOf(item) === index);
// }

// function countNum(start_range,end_range,num_elements){

//     var choosenNumbers = generateRandom(start_range,end_range,num_elements);

//     // var choosenNumbers = [45,50,55,45,75,50,60 , 65, 60]
//     var count = [];

//     for(let i=0;i<choosenNumbers.length;i++){

//         count.push(choosenNumbers[i]);

        
//     }

//     newChoosenNumbers = removeDuplicates(choosenNumbers);
//     newChoosenNumbers = newChoosenNumbers.sort()

//     var numRet = [];
//     for(let i=0;i<newChoosenNumbers.length;i++){
//         var counting = 0;

//         for(let j=0;j<count.length;j++){
//             if(newChoosenNumbers[i]==count[j]){
//                 counting++;
                
//             }
        


//         }

//         numRet.push(newChoosenNumbers[i] +" is repeated "+ counting + (counting==1?" time" : " times"))
//     }
//     return numRet;

//     // console.log("This is aa: "  + choosenNumbers)
// }
// console.log(countNum(a,b,c))



// //-------------------------------------------------
// //-------------------------------------------------
// //-------------------------------------------------
// //-------------------------------------------------





let person1 = {

    firstName : "Anar",
    lastName : "Abdurahmanov",
    fullname : function(){
        return this.firstName + " " + this.lastName;
    },

    dob : new Date(2001),   
   
    age : function(){
        return new Date().getFullYear() - this.dob.getTime()
    },

    toString : function(){
        return `${this.fullname()} is ${this.age()} years old.`

    }


}

console.log(person1.toString())