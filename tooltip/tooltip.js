function getDefination(word, callback) {
	$.getJSON("http://api.wordnik.com/v4/word.json/"+ word +"/definitions?limit=200&includeRelated=false&sourceDictionaries=wiktionary&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",function(data){
	   callback(data);
	});
};

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

$(document).keypress(function(e){
	if(e.keyCode == 96){
		console.log(getSelectionText());
		getDefination(getSelectionText(), function(data){
			console.log(data[0].text);
		});
	}
});