const express = require('express')
const path = require('path')


const app= express()
const publicDirectoryPath=path.join(__dirname,'../public')//generated the path

//set view engine
app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))//provided path to static

app.get("",(req,res)=>{
    res.render('index')
})
/* app.get('/weather',(req,res)=>{
    res.send({
        forcast:"It is snowing",
        loaction:"Philandphia"
    })
}) */

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


/* const publicDirectoryPath=path.join(__dirname,'../public')//generated the path
app.use(express.static(publicDirectoryPath))//provided path to static
static->> page will not change it will remain same no matter how many time u refrace the page  */



