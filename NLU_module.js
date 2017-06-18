//setting up NLU 
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': 'enter your IBM bluemix username',
  'password': 'enter your bluemix password',
  'version_date': '2017-02-27'
});

  //only one function in this module
  module.exports = {

  analyze: function(text){

  var parameters = {
  	'text':text,
    'features':{
      'entities':{
        'emotion': true,
        'sentiment': true,
        'limit': 10
      },
      'keywords':{
        'emotion':true,
        'sentiment':true,
        'limit':10
      }
    }
  }

  natural_language_understanding.analyze(parameters, function(err, response) {
  if (err)
    console.log('error:', err);
  else
	return JSON.stringify(response,null,2);
});
}

}
