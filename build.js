const swig = require('swig');
const fs = require('fs');

swig.setDefaults({
    cache: false,
    // definiedo variables globales
    locals: {
      "STATIC_URL": "static/"
    }
});

var build = swig.renderFile('./templates/index.swig')

fs.writeFile("./index.html", build, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("compilación completada!");
}); 