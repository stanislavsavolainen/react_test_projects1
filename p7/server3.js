var express = require('express')
var app = express()
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//palvelin kuuntelee porttia eli localhost:portti/...
var portti = 8080

app.use(express.static('web_public'))

//----------------------------------------------------

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/moi', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   console.log("moi");
   res.send(JSON.stringify({ body: "moikka moi2" + new Date(), test: "test" }));
})

//----------------------------------------------------

app.post('/process_post', function (req, res) {
//app.post('/process_post', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");

    console.log("POST on suoritettu !", req.body);

    var response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };

   var p_first_name = response.first_name;
   var p_last_name = response.last_name;

   console.log(response);

    res.send("POST komento on suoritettu ! <br> Nimi on : "+p_first_name + "<br>  Sukunimi : "+p_last_name );


})


// ...................


app.listen(portti, function () {
  console.log('Example app listening on port !'+portti)
})
