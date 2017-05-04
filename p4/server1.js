
//Node_js palvelin , static express 
//npm install express -S (päivittää package.json parametreja ja asentaa "static express" moduulin)

var express = require('express')
var app = express()

//palvelin kuuntelee porttia eli localhost:portti/...
var portti = 8080

//avaa julkisen kansion src/client projektin kansiosta (eli kaikki sen kansion tiedostot näkyvät palvelimella), 
//projektin src/client hakemistoon voi laittaa html-tiedostoja esim. myprofile1.html -----> http://localhost:8080/myprofile1.html
app.use(express.static('src/client'))


//----------------------------------------
//jos käyttäjää siirtyy localhost:portti/moi ----> suorita tämä funktio
app.get("/moi", () => {
    
    var kentta_a = "123"
    
    //get ja post muuttujien käsittely palvelimella nodejs avulla
    //sivujen päivitykset

    console.log("tieto :"+kentta_a)
} )

//----------------------------------------
//jos käyttäjää siirtyy localhost:portti/data1 ----> suorita tämä funktio
app.get("/data1" , () =>{  

   console.log("Kayttäjä kävi data 1 sivulla ")

})

//-----------------------------------------

app.get("/data2" , () =>{  

   console.log("Kayttäjä kävi data 2 sivulla ")

})

//-------------------------------------------
// * kaikki sivut , sivua ei löytynyt, anna viesti käyttäjälle
app.get("*" , (req, res ) =>{  

   console.log("Profiili viesti. ")

   res.send("<div align='right'><font color='red'><h1>404 : sivua ei löytynyt</h1></font></div>");

})


app.listen(portti, function () {
  console.log('Example app listening on port !'+portti)
})



