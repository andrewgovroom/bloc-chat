(function() {
  function Room($firebaseArray) {
      
    
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
     
     function addRoom($value){
        //rooms.$add({name: $value});
         console.log('executed addRoom function')
    };
      
      function open() {
            $uibModal.open({
                controller: 'ModalCtrl',
                templateUrl: '/templates/modal.html',
                //windowTemplateUrl: '/styles/ui-bootstrap-custom-2.5.0-csp.css'
                
            })
        }; 
      
    

    return {
      all: rooms,
      addRoom: addRoom
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', '$uibModal', Room]);
})();