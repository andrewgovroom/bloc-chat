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
              this.rid = room.$id;
              this.messages = Message.getByRoomId(this.rid);
            
            
          }
          
          this.sendMessage = function() {
              if ((this.newmessage === undefined) || (this.newmessage.content === "")) {
                  return;
                }
              Message.send(this.newmessage.content, this.rid);
              this.newmessage.content = "";
        };

         
         
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
 })();