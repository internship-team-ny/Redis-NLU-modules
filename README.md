# Redis-NLU-modules
Redis module: stores and retrieves tweets and analysis

NLU module: performs analysis for given text using IBM's NLU service

(Currently working on expanding the modules with more functionalities)


***** **REDIS Module** *****:

(All functions should be passed the request id as the first parameter.)

(storeTweet) stores an entire tweet just as it is passed to it.

(storeTweets) stores a list of tweets.

(storeTweetsDetailed) stores only the given properties of a tweet, i.e. store a tweet's text and source only for example. The desired properties should be passed to the function as a list of strings with the name of the properties, e.g. ['text', 'source']. It thus takes as parameters a list of tweets and a list of properties.

(storeAnalysis) and (storeMultipleAnalysis) store a single analysis or multiple analysis respectively.

(retrieveTweets) and (retrieveAnalysis) functions each return a list of JSON objects each representing a tweet/analysis. They  need to be passed a callback function to handle the retrieved data.

(quit) ends the connection to the redis server.


An example call for storing only the text, ID, and source of tweets and then retrieving them:

```
var redis = require('redis_module.js');

var tweets = [TweetOne,TweetTwo];
var parameters = ['text', 'id_str', 'source'];
redis.storeTweetsDetailed('id', tweets, parameters);
redis.retrieveTweets('id', function(reply){
     var retrievedTweets = reply;
});
```

***** **NLU Module** *****:

there are two (analyze) functions in this module:

1. (analyze) takes two parameters: the text to be analyzed and a callback function to receive the analysis.
2. (analyze) takes same two parameters as well as a list of desired analysis features. Possible features are :(categories, concepts, entities, keywords)

An example call for performing analysis on a tweet's text with default parameters and storing it:

```
var nlu = require('NLU_module');

nlu.analyze(Tweet.text, function(response){
   redis.storeAnalysis('id', response);
});
 ``` 
 
 An example call for  analyzing a tweet's text entities and keywords only and storing the analysis:

```
var nlu = require('NLU_module');

nlu.analyze(Tweet.text, ['entities','keywords'], function(response){
   redis.storeAnalysis('id', response);
});
 ``` 
  
  ***An example of retrieving a user request's tweets, analyzing their texts, and then storing that analysis***:
  
```
var redis = require('redis_module.js');
var nlu = require('NLU_module');

redis.retrieveTweets('id', function(reply){
  for(i in reply){
    nlu.analyze(reply[i].text, function(response){
      redis.storeAnalysis('id', response);
    });
  }
});
```

-Ahmed Youssef
