const request = require("request");

const forcast=(latitude,longitude,callback)=>{
    // const url=`http://api.weatherstack.com/current?access_key=d26e512a76ebeddf4826255526a4a70e&query=${latitude},${longitude}&units=f`;
    const url=`http://api.weatherstack.com/current?access_key=d26e512a76ebeddf4826255526a4a70e&query=${latitude},${longitude}&units=f`;
    // console.log(latitude,longitude)
    request({url,json:true},(error,{body})=>{
        if(error){
            callback("Unable to find location. Try another search.",undefined)
        }
        else if(body.error){
            callback("Unable to find location bro",undefined)
        }
        else{
            const temp=body.current.temperature;
            const feelsLike=body.current.feelslike;
            const weather_descriptions1=body.current.weather_descriptions[0];
            
            callback(undefined,`${weather_descriptions1}. It is currently ${temp} f out. It feels like ${feelsLike} f out.`)
        }
    })

}
module.exports=forcast;


// {
//     temp:responce.body.current.temperature,
//     feelsLike1:responce.body.current.feelslike,
//     weather_descriptions1:responce.body.current.weather_descriptions[0],
// // console.log(`${weather_descriptions1}. It is currently ${temp} f out. It feels like ${feelsLike1} f out.`)
// }