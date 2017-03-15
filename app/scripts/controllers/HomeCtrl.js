(function() {
     function HomeCtrl(Room, Message, $uibModal) {
       
         this.rooms = Room.all;
              
         this.openModal = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
         }
         
          this.loadRoom = function(room) {
              this.r1 = room;
//               console.log(this.r1.$id);
              this.messages = Message.getByRoomId(this.r1.$id);
             console.log(this.messages);
            
          }
         
         
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
 })();