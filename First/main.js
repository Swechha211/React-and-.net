// document.getElementById('root').innerHTML = "<h1>Welcome to before react</h1>"
// document.querySelector('#root').innerHTML = "<h1>Welcome to before react</h1>"




// let section = "Welcome to page section"
// let footer = "Welcome to footer section"

import header from "./header.js"
import section from "./section.js"
import footer from "./footer.js"
document.querySelector('#root').innerHTML = 
`
<h1>${header}</h1>
<h3>${section()}</h3>
<h2>${footer("Welcome to footer")}</h2>

`

