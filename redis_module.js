//setting up connection to redis using default settings
var redis = require('redis');
var client = redis.createClient();

module.exports = {
	
  storeTweet: function(id, tweet) {
  	var listTitle = JSON.stringify(id+' tweets');
    client.rpush(listTitle,JSON.stringify(tweet.text));
  },

  storeTweets: function(id,tweets){
  	var listTitle = JSON.stringify(id+' tweets');
  	for(var i = 0; i < tweets.length; i++)
  		client.rpush(listTitle,JSON.stringify(tweets[i].text));
  },
       
  retrieveTweets: function(id) {
  	var listTitle = JSON.stringify(id+' tweets');
    return client.lrange(listTitle,0,-1);
  },

  storeAnalysis: function(id, analysis) {
  	var listTitle = JSON.stringify(id + ' analysis');
	client.rpush(listTitle,JSON.stringify(analysis));  
  },

  storeMultipleAnalysis: function(id, analysis){
  	 var listTitle = JSON.stringify(id + ' analysis');
  	 for(var i = 0; i < analysis.length; i++)
  		client.rpush(listTitle,JSON.stringify(analysis[i]));
  },
       
  retrieveAnalysis: function(id) {
  	var listTitle = JSON.stringify(id + ' analysis');
	return client.lrange(listTitle,0,-1);
  },

  quit: function(){
  	client.quit();
  }
};
