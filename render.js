var fs = require('fs');
var info = JSON.parse(fs.readFileSync('./info.json', 'utf8'));
var theme = require("./index.js");

fs.writeFile("./index.html", render(), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("index.html written to build folder.");
    }
}); 

function render() {
    try {
        return theme.render(info);
    } catch (e) {
        console.log(e.message);
        return "";
    }
}
