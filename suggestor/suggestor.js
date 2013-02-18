//var myWords = new Array("apple", "angus", "ambush", "adam nordquist", "rebecca nordquist");
var myWords = new Array();
fs = require('fs');
fs.readFile('mywords.txt', 'utf-8', function(err, data){
	if (err) throw err;
	myWords = data.split(/\r?\n/);
	console.log("dictionary read. word count: " + myWords.length);
});

exports.suggest = function(s, token) {
	var myReg = s.split("").join(".*");
	console.log("myReg: " + myReg);
	
	return myWords.filter(function(str){
		return str.match(myReg);
	});
};

exports.usePhrase = function(s, token) {
	return true;
};
