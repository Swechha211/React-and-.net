let num = prompt("enter any one number: ")
let rem = num%2
let result

// if(rem == 0){
//     result = "EVEN"
// }else{
//     result = "ODD"
// }

//ternary operator

result = rem==0?"EVEN":"ODD"

document.getElementById('root').innerHTML = `<h1> The result is ${result}`