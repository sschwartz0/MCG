 angular
  .module('Codesmith.MessageFactory', [])
  .factory('MessageFactory', function($http) { 

  	console.log("button clicks?");
  	return {
  		  postingUp: function(name, message) {return $http.post('http://slack-server.elasticbeanstalk.com/messages', {message: message, created_by: name})},
          fetch: function() {return $http.get('http://slack-server.elasticbeanstalk.com/messages')}
    }      
});



 // Add a post method to your factory which will make a post request to messages. This should also return the promise.
 // Add a text input to this page which will be used to post a new message to the API. When submitted, have the HomeController get the new message from this input and call the post method passing the new message as an argument. (Don't forget to send the name too).
 // Be sure to add your new message to the messages property and update the page with your message.