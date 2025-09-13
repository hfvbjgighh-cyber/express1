let express = require('express');
let app = express();


app.get('/',  (req, res)=> {
  res.send({status: 1, message: "Home Page api"});
});

app.get('/news',  (req, res)=> {
  res.send({status: 1, message: "News Page api"});
});
app.get('/about',  (req, res)=> {
  res.send({status: 1, message:"Hello from About Page"});
});




app.listen("8000")