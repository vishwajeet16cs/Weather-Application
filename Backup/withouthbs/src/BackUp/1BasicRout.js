const express = require('express')
const app= express()

app.get('',(req,res)=>{
    res.send('hello express!')
})
app.get('/help',(req,res)=>{
    res.send('hello help!')
})
app.get('/about',(req,res)=>{
    res.send('hello about!')
})
/* 
    Goal: Setup two new routes

    1> Setup an about and render a page title
    2> Setup a weather route and render a page title
    3> Test your work by visiting both in the browser
*/

app.get('/weather',(req,res)=>{
    res.send("this is weather page")
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000.')
})