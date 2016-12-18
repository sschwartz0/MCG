/**
 * UserFactory belongs here
 */

 angular
  .module('Codesmith.UserFactory', [])
  .factory('UserFactory', UserFactory); 


function UserFactory() {

	console.log("working?")

	return {
		name: "Vinnie and Scott",
		age: 25
	}

}
