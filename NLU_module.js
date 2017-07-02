//setting up NLU, no need to hide credentials as this code is only accessed locally
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': '0025daef-697a-405f-b544-62b39830f9a8',
  'password': 'KP6iG4kZmKti',
  'version_date': '2017-02-27'
});

  module.exports = {

  //returns analysis with default features
  analyze: function(text, callback){

  var parameters = {
  	'text':text,
    'features':{
      'categories': {},
      'concepts': {
      'limit': 5
      },
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
	callback(response);
});
},

//returns analysis with only the passed features
analyze: function(text, features, callback){

  var parameters = {
  	'text':text,
    'features':{}
  }
  if(features.includes('categories'))
    parameters.features.categories = {};
  if(features.includes('concepts'))
      parameters.features.concepts = {
      'limit': 5
      };
  if(features.includes('entities'))
      parameters.features.entities = {
        'emotion': true,
        'sentiment': true,
        'limit': 10
      };
   if(features.includes('keywords'))
      parameters.features.keywords = {
        'emotion':true,
        'sentiment':true,
        'limit':10
      };

  natural_language_understanding.analyze(parameters, function(err, response) {
  if (err)
    console.log('error:', err);
  else
	callback(response);
});
}

}
