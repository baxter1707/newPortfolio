const mustacheExpress = require('mustache-express');
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const bodyParser = require('body-parser');

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port',(process.env.PORT || 8000))



// __HOME PAGE ROUTES__//
app.get('/', (req,res) => {
  res.render('home')
})

app.get('/home', (req,res) => {
  res.render('home')
})




app.listen(app.get('port'), function(){
  console.log("we are live on port ", app.get('port'));
});
