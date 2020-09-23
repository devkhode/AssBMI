/*ASSignment */
let Mark = {
    fullName: "Mark Wood",
    mass: 70,
    height: 164,
    bmi: function () {
        return Mark.mass / (Mark.height * Mark.height)

    }
}
let John = {
    fullName: "John Williams",
    mass: 65,
    height: 172,
    bmi: function () {
        return John.mass / (John.height * John.height)

    }
}
if (Mark.bmi() > John.bmi()) {
    document.querySelector("#result").textContent=Mark.fullName + ' ' + "This is Mark's BMI " + Mark.bmi()


} else {
    document.querySelector("#result").textContent=John.fullName + ' ' + "This is John's BMI " + John.bmi()
}
// let result = document.querySelector("#result")
// let Mark = {
//     fullName: "Mark Wood",
//     mass: prompt("Mark's mass"),
//     height: prompt("Mark's height"),
//     bmi: function () {
//         return Mark.mass / (Mark.height * Mark.height)

//     }
// }

// let John = {
//     fullName: "John Williams",
//     mass: prompt("John's mass"),
//     height: prompt("John's height"),
//     bmi: function () {
//         return John.mass / (John.height * John.height)

//     }
// }

// if (Mark.bmi() > John.bmi()) {
//     result.textContent=Mark.fullName +"  "+ Mark.bmi() 


// }else{
//     result.textContent=John.fullName  +"  "+ John.bmi() 

// }
