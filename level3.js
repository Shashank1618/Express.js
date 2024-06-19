//GET
//POST
//PUT
//DELETE
//using Postman you can send any request

const express=require("express");
const app=express();
const user=[{
    name: "John",
    kidney:[{
        healthy:false
    }]
}];

app.use(express.json()); //mandatory for post req

app.get("/",function(req,res){
    const johnKidneys=user[0].kidney;
    const numberOfKidneys=johnKidneys.length;
    let noOfHealthyKidneys=0;
    for(let i=0;i<numberOfKidneys;i++){
    if(johnKidneys[i].healthy){
    noOfHealthyKidneys++;
    } 
}
    const noOfUnhealthyKidneys=numberOfKidneys-noOfHealthyKidneys

    
    res.json({
    numberOfKidneys,noOfUnhealthyKidneys,noOfHealthyKidneys
    })
});

//input healthy and unhealthy kidney 
app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    user[0].kidney.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
});

//making all the unhealthy kidney to healthy kidney
app.put("/",function(req,res){
    for(let i=0;i<user[0].kidney.length;i++){
        user[0].kidney[i].healthy=true;
    }
    res.json({});
})


//removing all the unhealthy kidneys
app.delete("/",function(req,res){
    if(isThereAtLeastOneUnhealthyKidney()){
    const newKidney=[]
    for(let i=0;i<user[0].kidney.length;i++){
        if(user[0].kidney[i].healthy){
            newKidney.push({
                healthy:true
            })
        }
    }
    user[0].kidney=newKidney;
    res.json({})
}
else{
    res.status(411).json({
        msg:"You don't have unhealthy kidney"
    })
}
})

function isThereAtLeastOneUnhealthyKidney(){
    let atLeastOneUnhealthyKidney=false
    for(let i=0;i<user[0].kidney.length;i++){
        if(!user[0].kidney[i].healthy){
            atLeastOneUnhealthyKidney=true
    }
}
return atLeastOneUnhealthyKidney
}
app.listen(3000);