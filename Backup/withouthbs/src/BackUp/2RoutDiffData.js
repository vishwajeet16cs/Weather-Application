const express = require('express')
const app= express()
const path = require('path')
console.log(__dirname)

const publicDirectoryPath=path.join(__dirname,'../public')//generated the path
app.use(express.static(publicDirectoryPath))//provided path to static

app.get('/help',(req,res)=>{
    res.send([{
        name:"vishwajeet",
        age:23
    },{
        name:"Amarjeet",
        age:21
    },{
        name:"vishwajeet",
        age:23
    }])
})


app.get('/about',(req,res)=>{
    res.send('<h1>hello about!</h1>')
})

app.get('/weather',(req,res)=>{
    res.send({
        forcast:"It is snowing",
        loaction:"Philandphia"
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000.')
})

/*
both --dirname & __filename is provided by wrapup function
console.log(__filename) */

// console.log(path.join(__dirname,'../public'))// it will manuplate the path 


/* 
app.use(express.static(publicDirectoryPath))//provided path to static
app.get('',(req,res)=>{
    res.send('<h1>This is home page</h1><h1>This is home page</h1>')
})
it is no longer going to run 
*/