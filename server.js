import express from "express"


const app = express()

const PORT =   process.env.PORT || 5000



console.log("main branch")
console.log("first commit in main branch")
console.log("first commit in feature 2")

console.log("rebase ka commit is ke upper aay ga ")



app.listen(PORT ,()=>console.log(`server is running on ${PORT}`))