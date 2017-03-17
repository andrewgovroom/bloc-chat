(function() {
     function HomeCtrl(Room, Message, $uibModal, $cookies) {
       
         this.rooms = Room.all;
         this.currentUser = $cookies.get('blocChatCurrentUser');
              
         this.openModal = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
         }
         
          this.loadRoom = function(room) {
              this.r1 = room.name;
              this.messages = Message.getByRoomId(room.$id);
             console.log(this.messages);
            
          }
         
         
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
 })();