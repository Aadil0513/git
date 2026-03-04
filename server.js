import express from "express"


const app = express()

const PORT =   process.env.PORT || 5000



console.log("main branch")



app.listen(PORT ,()=>console.log(`server is running on ${PORT}`))