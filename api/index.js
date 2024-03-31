import express from "express"

const app = express();
app.get("/*",(req,res)=>{
   res.json({status:"OK",message: "API SERVICE RUNNING"})
})
app.listen(5000)