const express = require('express');
const swig = require('swig');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

// agregando motor de template | Swig
swig.setDefaults({
  cache: false,
  // definiedo variables globales
  locals: {
    "STATIC_URL": "/static/",
    "STYLE_LINK": "<link rel=\"stylesheet\" href=\"/static/css/styles.css\">"
  }
});
app.engine("swig", swig.renderFile)
app.set('views', './templates')
app.set('view engine', 'swig')

// midleware
var requestContext = function (req, res, next) {
  console.log([new Date,], req.path)
  req.requestTime = Date.now();
  res.set("request-time", req.requestTime)
  next();
};
app.use(requestContext);

// serve static assets normally
app.use('/static', express.static(__dirname + '/static'))

// Enrutador
app.get('/atomos/*', function (request, response){
  response.render('.'+request.path)
})
app.get('/moleculas/*', function (request, response){
  response.render('.'+request.path)
})
app.get('/organismos/*', function (request, response){
  response.render('.'+request.path)
})
app.get('/', function (request, response){
  response.render('index', {"STYLE_LINK": ""})
})

app.listen(port)
console.log(`server started on http://127.0.0.1:${port}`)