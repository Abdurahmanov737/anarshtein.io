// alert("hello") //opens a window which shows the message
// document.write("H") //appends the text to the end of the webpage
// console.log("HEllo") //print the mesage in the console

// myH = document.getElementsByClassName(".jsText")
// myH.="H"


// newH = document.getElementById("jsText")
// newH.textContent = 'jjj'

// console.log("2"+5+4)


// var age = prompt()
// console.log(typeof(age))
// // ageInt= parseInt(age)

// if(age<20){
//     warning("H")
//     console.log("Young")
// }
// else{
//     console.log("Old")
// }




// let degree = parseInt(prompt("please enter the degree: "))

// let version = prompt("Please enter version: C or F")

// let newDeg=0;
// if(version == "C" || version =="c"){
//     newDeg = (degree*9)/5 +32
//     alert(degree + " of F is equal to: " + newDeg +" C")
// }
// else if(version =="F" || version =="f"){
//     degree = ((degree*32)/9)*5
//     alert(degree    )
// }


var myBtn = document.getElementById("myBtnJs");
var inputJs = document.getElementById("inputsJS");
var submitJs = document.getElementById("submitJs");
var outputJs = document.getElementById("spanJs");



myBtn.onclick = function () {
    inputJs.classList.add("visibleJS");


}


submitJs.onclick = function () {

    var degreeInp = document.getElementById("degree").value;
    var versionInp = document.getElementById("version").value;
    var temp = 0;
    degCalc = parseInt(degreeInp)

    if (versionInp == "C" || versionInp == "c") {
        temp = 1;
        degCalc = (degCalc * 9) / 5 + 32;
    } else if (versionInp == "F" || versionInp == "f") {
        degCalc = ((degCalc - 32) / 9) * 5;
    }

    // alert(degCalc   )
    // outputJs.value(degCalc)
    outputJs.textContent = degreeInp + " of " + (temp ? " C" : " F") + " is equal to " + degCalc + (temp ? " F" : " C");
    // var ouut = document.createElement('span');


}








var nameBtn = document.getElementById("nameBtn");
var inputsName = document.getElementById("inputsName");
var submitName = document.getElementById("submitName");
var outputGreet = document.getElementById("nameGreet")
var outputName = document.getElementById("spanName");


nameBtn.onclick = function () {
    inputsName.classList.add("visibleJS");


}



submitName.onclick = function () {
    var name = document.getElementById("name").value;
    var grade = document.getElementById("grade").value;

    outputGreet.textContent = "Hello " + name + " !";

    gradeCalc = parseInt(grade)

    if (gradeCalc < 60 && gradeCalc > 0) {
        outputName.textContent = "You failed!";

    } else if (gradeCalc >= 60 && gradeCalc <= 100) {
        outputName.textContent = "You passed!";

    }
    else{

        outputName.textContent = "NaN";
    }


    // if(versionInp=="C" || versionInp=="c"){
    //     temp=1;
    //     degCalc = (degCalc*9)/5 + 32;
    // }
    // else if(versionInp=="F" || versionInp=="f"){
    //     degCalc = ((degCalc-32)/9)*5;
    // }

    // alert(degCalc   )
    // outputJs.value(degCalc)
    // outputJs.textContent = degreeInp + " of " +(temp ? " C" : " F") + " is equal to " + degCalc + (temp ? " F" : " C");
    // var ouut = document.createElement('span');


}



// let newGrade = parseInt(prompt("Please enter your grade: "))


// function fact(n){
//     let f=1;
//     let i=n;

//     while(i>0){
//         f*=i
//         i--
//     }
//     return f;
// }

// console.log(fact(5))
// console.log(fibon(10))


// function fibon(numb){
//     let fi=[];
//     fi[0]=0;
//     fi[1]=1;
//     for(let i=2;i<=(numb-2);i++){
//         fi[i]=fi[i-1]+fi[i-2];
//     }
//     return fi
// }









// function nameFunc(fullName){

// let fullNameParts = fullName.split(" ");
// let newFullNameParts = [];

// for(let i=0;i<fullNameParts.length;i++){
//     let newFirstLetter = fullNameParts[i].slice(0,1).toUpperCase();
//     let rest = fullNameParts[i].slice(1);
//     let newWord = newFirstLetter + rest;

//     newFullNameParts.push(newWord)
// }
// alert(newFullNameParts.join(" "))

// }
// //calling first function
// // newName = "Nuraddin sadili"
// nameFunc(newName)
// splitName(newName)

// function splitName(nameSplit){

//     let fullNameParts = nameSplit.split(" ");
//     let newFullNameParts = [];
    
//     for(let i=0;i<fullNameParts.length;i++ ){
//         for(let j=0;i<fullNameParts[i];j++){
//             let newUpPart = fullNameParts[j].slice(0,2)
//             console.log(newUpPart)
//         }
//     }
// }


// //Nuraddin sadili ====> Nuraddin Sadili
// //Nuraddin Sadili ====> NuRaDdIn SaDiLi