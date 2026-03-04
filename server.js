import express from "express"


const app = express()

const PORT =   process.env.PORT || 5000



console.log("main branch")
console.log("first commit in main branch")
console.log("first commit in feature 2")



app.listen(PORT ,()=>console.log(`server is running on ${PORT}`))