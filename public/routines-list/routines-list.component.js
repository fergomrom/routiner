angular.
    module('routinesList').
    component('routinesList', {
        templateUrl: 'routines-list/routines-list.template.html',
        controller: ['Rest',
            function PhoneListController(Rest) {
                var self = this;

                self.routines = Rest.query();

                self.createRoutine = function() {
                    Rest.save(self.newRoutine);
                    self.newRoutine = {};
                    self.routines = Rest.query();
                };
                
                self.removeRoutine = function(routineId) {
                    Rest.remove({'routineId': routineId});
                    self.routines = Rest.query();
                };
 
                self.modifyRoutine = function(routineId) {
                    Rest.update({'routineId': routineId}, self.modifiedRoutine);
                    self.modifiedRoutine = {};
                    self.routines = Rest.query();
                };
                
                self.checkRoutine = function(routineId, checked) {
                    Rest.update({'routineId': routineId}, {'checked': checked});

                };
            }
        ]
    });
