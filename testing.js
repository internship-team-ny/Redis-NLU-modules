var redis = require("/Users/Ahmed/src/redis_module.js");
var nlu = require("/Users/Ahmed/src/NLU_module");


var TwitterObject =
  {
    "created_at": "Mon Sep 24 03:35:21 +0000 2012",
    "id_str": "250075927172759552",
    "entities": {
      "urls": [

      ],
      "hashtags": [
        {
          "text": "freebandnames",
          "indices": [
            20,
            34
          ]
        }
      ],
      "user_mentions": [

      ]
    },
    "text": "Aggressive Ponytail #freebandnames",
    "metadata": {
      "iso_language_code": "en",
      "result_type": "recent"
    },
    "retweet_count": 0,
    "id": 250075927172759552,
    "user": {
      "name": "Sean Cummings",
      "location": "LA, CA",
      "id_str": "137238150",
      "profile_image_url_https": "https://si0.twimg.com/profile_images/2359746665/1v6zfgqo8g0d3mk7ii5s_normal.jpeg",
      "id": 137238150,
      "verified": false,
      "screen_name": "sean_cummings"
    },
    "in_reply_to_screen_name": null,
    "source": "Twitter for Mac",
    "in_reply_to_status_id": null
  }

  var Twitter =
  {
    "created_at": "Mon Sep 24 03:35:21 +0000 2012",
    "id_str": "999",
    "entities": {
      "urls": [

      ],
      "hashtags": [
        {
          "text": "freebandnames",
          "indices": [
            20,
            34
          ]
        }
      ],
      "user_mentions": [

      ]
    },
    "text": "An-Nasir Salah ad-Din Yusuf ibn Ayyub known as Salah ad-Din or Saladin (1137 – 4 March 1193), was the first sultan of Egypt and Syria[4] and the founder of tynasty. A Sunni Muslim of Kurdish ethnicity,[5][6][7] Saladin led the Muslim military campaign against the Crusader states in the Levant. At the height of his power, his sultanate included Egypt, Syria, Upper Mesopotamia, the Hejaz, Yemen and other parts of North Africa.'",
    "metadata": {
      "iso_language_code": "en",
      "result_type": "recent"
    },
    "retweet_count": 0,
    "id": 123,
    "user": {
      "name": "Sean Cummings",
      "location": "LA, CA",
      "id_str": "137238150",
      "profile_image_url_https": "https://si0.twimg.com/profile_images/2359746665/1v6zfgqo8g0d3mk7ii5s_normal.jpeg",
      "id": 137238150,
      "verified": false,
      "screen_name": "sean_cummings"
    },
    "in_reply_to_screen_name": null,
    "source": "dummy source for testing",
    "in_reply_to_status_id": null
  }



//  var tweets = [Twitter,TwitterObject];
//  var parameters = ['text','id_str'];
// // redis.storeTweetsDetailed('id', tweets, parameters);
// // redis.retrieveTweets('id',function(reply){
// //    console.log(reply[0].source);
// // });

textForNlu = 'An-Nasir Salah ad-Din Yusuf ibn Ayyub known as Salah ad-Din or Saladin (1137 – 4 March 1193), was the first sultan of Egypt and Syria[4] and the founder of tynasty. A Sunni Muslim of Kurdish ethnicity,[5][6][7] Saladin led the Muslim military campaign against the Crusader states in the Levant. At the height of his power, his sultanate included Egypt, Syria, Upper Mesopotamia, the Hejaz, Yemen and other parts of North Africa.'


// nlu.analyze(textForNlu,['entities','categories'],function(response){
//    redis.storeAnalysis('a',response);
//    redis.retrieveAnalysis('a',function(reply){
//    console.log(reply[i]);
//     redis.quit();
// });
//   });

redis.storeTweets('i99',[Twitter,Twitter],['text','source']);
redis.retrieveTweets('i99', function(reply){
    for(i in reply){
        nlu.analyze(reply[i].text, ['keywords'],function(response){
            redis.storeAnalysis('i99', response);
            redis.retrieveAnalysis('i99',function(reply){
                console.log(reply[i]);
               // redis.quit();
            });
        });
    }
});



// redis.retrieveTweets('id', function(reply){
//   for(i in reply){
//     nlu.analyze(reply[i].text,function(reply){
//       redis.storeAnalysis('id', response);
//     });
//     }
// });




//redis.quit();
