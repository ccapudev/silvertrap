const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()


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

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)