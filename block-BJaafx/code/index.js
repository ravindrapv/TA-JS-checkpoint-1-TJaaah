let max = 10;
function getEvenSum(max) {
    if (max %2 == 0) {
        alert("this is a even number")
    }else {
        alert("this is a odd number")
    }
}
getEvenSum(10);


// function getEvenSum(max) {
//   for(let i = 0; i<10; i++){
//     if (max %2 == 0) {
//         alert("this is a even number")
//     }else {
//         alert("this is a odd number")
//     }
//   }
// }

let number = +prompt("enter any number");
if(number >= 10) {
alert(`its true`)
} else {
alert(`the number is false`)
}