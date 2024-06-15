//creating an HTTP server using express

const express =require("express")

function calculateSum(n){
  let ans=0
    for(let i=0;i<n;i++){
        ans=ans+i;
    }
    return ans;
}
    

const app =express();
/* There are two ways through which user can send request to you is 
1. Query parameter (e.g. localhost:3000/?n=4)

Whatever we are writing after '?' it does't count as a route 
We use this method to send query to the server and if there are multiple input then  we send it as (e.g. localhost:3000/n=3&m=4)
*/ 
app.get("/",function(req,res){              // How I catch this query
    const n=req.query.n;                    //Ans. is like this 
    const sum=calculateSum(n);
    res.send('Sum of first '+n+' natural number is '+ sum);
})


app.listen(3000);