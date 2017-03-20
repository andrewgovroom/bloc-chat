(function() {
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);  
      
    return {
        
      getByRoomId: function (roomId) {
        // Filter the messages by their room ID.

        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        },
        // Send method logic
         send: function(newMessage, roomID) {
             
             var date = new Date();
                messages.$add({
                    username: $cookies.get('blocChatCurrentUser'),
                    content: newMessage,
                    sentAt: date.toGMTString(),
                    roomId: roomID
                });    
             
         }
    }
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', 'Room', Message]);
})();