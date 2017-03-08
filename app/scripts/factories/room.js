(function() {
  function Room($firebaseArray) {
      
    var urlRef = 'https://bloc-chat-814ee.firebaseio.com';  
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      

    return {
      all: rooms
    };
  }


  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();