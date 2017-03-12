(function() {
     function HomeCtrl(Room, $uibModal) {
         this.rooms = Room.all;
         
         this.openModal = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
         }
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
 })();