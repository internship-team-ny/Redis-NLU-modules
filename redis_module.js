//setting up connection to redis using default settings
var redis = require('redis');
var client = redis.createClient();

module.exports = {

  //stores tweet in a list
  storeTweet: function(id, tweet) {
    var listTitle = id + ' tweets';
    client.rpush(listTitle,JSON.stringify(tweet));
  },


  //stores tweet's text in a list, takes a list of tweets
  storeTweets: function(id,tweets){
    for(var i = 0; i < tweets.length; i++)
      this.storeTweet(id,tweets[i].text);
  },

  //stores given parameters of tweets
  storeTweetsDetailed: function(id, tweets, parameters) {
    for(var i = 0; i < tweets.length; i++){
      var currentTweet = tweets[i];
      for(property in currentTweet){
        if ( parameters.indexOf( property.toString() ) == -1 )
          delete currentTweet[property];  
      }
      this.storeTweet(id, currentTweet);
  }
  },
       
  //retrieve tweets for a given ID in a list
  retrieveTweets: function(id) {
    var listTitle = id + ' tweets';
    client.lrange(listTitle,0,-1, function(err, reply){
      return reply;
    });
  },

  storeAnalysis: function(id, analysis) {
    var listTitle = id + ' analysis';
    client.rpush(listTitle,JSON.stringify(analysis));
  },

  storeMultipleAnalysis: function(id, analysis){
     var listTitle = id + ' analysis';
     for(var i = 0; i < analysis.length; i++)
      this.storeAnalysis(id, analysis[i]);
  },
       
  retrieveAnalysis: function(id) {
    var listTitle = id + ' analysis';
    client.lrange(listTitle,0,-1, function(err, reply){
      return reply;
    });
  },

  quit: function(){
    client.quit();
  }
};
