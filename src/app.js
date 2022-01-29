const express = require('express')
const path=require('path')
const hbs=require('hbs');
// const { rmSync } = require('fs');
// const { send } = require('process');
const forcast = require("./Utils/forcast")
const geocode =require("./Utils/geocode")

const app=express()

//define paths for Express config
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,"./template/views")//for changing views-to template or any other name
const partialsPath=path.join(__dirname,"./template/partials")

//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set("views",viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('/',(req,res)=>{
    res.render('index',{
        title:"Weather",
        name:"Vishwajeet"
    })
})
app.get("/about",(req,res)=>{
    res.render('about',{
        title:"About Me",
        name:"Vishwajeet Kumar"
    })
})

app.get("/help",(req,res)=>{
    res.render('help',{
        heplText:"This is some helpful text.",
        title:"Help",
        name:"vishwajeet Kumar singh"
    })
})

//after help url any wrong rout
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:404,
        name:'Vishwajeet Kumar Singh',
        errorMessage:'Help article not found!'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address)
    {
       return res.send({
            error:"You must provide an address!"
        })
    }
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return console.log({error})
        }
        // console.log("Data",data)
        forcast(longitude,latitude,(error,forcastData)=>{
            if(error){
                return console.log({error})
            }
            /* console.log(location)
            console.log('Data',forcastData) */
            res.send({
                forcast:forcastData,
                location,
                address:req.query.address
            })
        })
})

    /* res.send({
        forcast:'It is snowing',
        location:location,
        address:req.query.address
    }) */
})


app.get('/products',(req,res)=>{

    if(!req.query.search){
       return res.send({
            error:"you must provide a search term"
        })
    }
    console.log(req.query.search)
    res.send({  
        product:[]
    })
})

//to avoid unwanted routing
//*->wild Card char
/* it should be put always at the end
    else what ever below this it will not search route for that
*/
app.get('*',(req,res)=>{
    res.render("404",{
        title:'404',
        name:"vishwajeet Kumar",
        errorMessage:'Page not found'
    })
})


app.listen(3000,()=>{
    console.log("server is running on port no 3000")
})