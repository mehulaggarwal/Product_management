const express=require('express');
const app=express();

app.use(express.static(__dirname+'/dist'));

app.listen(process.env.PORT||4200);

//PATH LOCATION STRATEGY

app.get('/*',function(req,res){
    res.sendFile(Path.JOIN(__dirname+'/dist/welcome.component.html'));
})
console.log('Console Listening!');