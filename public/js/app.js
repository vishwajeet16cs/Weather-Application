console.log("clinte side java script file is loaded!")


//check output in console of browser



const weatherform =document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')



//listener --list event for hover scroll on change 
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value

    messageOne.textContent='loading..........'
    messageTwo.textContent=''

    fetch(`/weather?address=${location}`)
.then((responce)=>{
    responce.json().then((data)=>{
        if(data.error){
            messageOne.textContent=data.error
        }
        else{
            messageOne.textContent=`${data.location}  ${data.address}`
            messageTwo.textContent=data.forcast
            /* console.log("Weather")
            console.log("data location ->",data.location)
            console.log("data forcast ->",data.forcast)
            console.log("address ->",data.address) */
        }
    })
})
})




//featch api only run in clint side 
// can't run on nodejs server side

//api will give ranom puzzle
/* fetch('https://puzzle.mead.io/puzzle').then((responce)=>{
    // console.log(responce)
    responce.json().then((data)=>{
        console.log(data)
    })
}) */