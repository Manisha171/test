const express=require ('express');
const app=express();
app.get('/',function(req,res){
res.send(" <h1> Name : Manisha Singh</h1><h1> Roll No : 229171</h1><h1> college: iacsd</h1><h1> address: pune</h1>")});
app.listen('7000',function(req,res){
    console.log("sever is running");
});