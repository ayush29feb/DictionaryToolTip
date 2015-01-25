var getDefination = function(word, callback) {
	$.getJSON("http://api.wordnik.com/v4/word.json/"+ word +"/definitions?limit=200&includeRelated=false&sourceDictionaries=wiktionary&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",function(data){
	   console.log(data);
	   callback(data[0]);
	});
};

getDefination("awesome", function(data){
	alert(data.text);
});