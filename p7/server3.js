var express = require('express')
var app = express()
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // laadataan JSON parserointi ominaisuus , jolloin "body" muuttuja on JSON rakenne
//palvelin kuuntelee porttia eli localhost:portti/...
var portti = 8080

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}

app.use(express.static('web_public'))
app.use(allowCrossDomain);
//----------------------------------------------------

app.get('/index.htm', function (req, res) {
  res.sendFile(__dirname + "/" + "index.htm");
})

app.get('/moi', function (req, res) {
  console.log("moi");
  res.send(JSON.stringify({ body: "moikka moi2" + new Date(), test: "test" }));
})

//----------------------------------------------------

app.post('/process_post', function (req, res) {
  //app.post('/process_post', function (req, res) {

  //console.log("POST on suoritettu !", req.body);
  console.log("POST suoritettu : ", req.body.a);

  // req.body == "{a=1, b=2}"


  var p_first_name = req.body.a;
  var p_last_name = req.body.b;

 // console.log(response);

  var json_data_a = JSON.stringify({ n_firstname: p_first_name, n_last_name: p_last_name });
  console.log("Returning " + json_data_a);
  res.send("POST komento on suoritettu ! <br> Nimi on : " + p_first_name + "<br>  Sukunimi : " + p_last_name + "<br /> </br>" + json_data_a);


})


// ...................


app.listen(portti, function () {
  console.log('Example app listening on port !' + portti)
})
