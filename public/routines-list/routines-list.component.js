angular.
    module('routinesList').
    component('routinesList', {
        templateUrl: 'routines-list/routines-list.template.html',
        controller: ['Api',
            function RoutinesListController(Api) {
                var self = this;

                self.routines = Api.Routines.query();
                self.categories= Api.Categories.query();

                self.createRoutine = function(categoryId) {
                    self.newRoutine.categoryId = categoryId;
                    Api.Routines.save(self.newRoutine);
                    self.newRoutine = {};
                    self.routines = Api.Routines.query();
                };

                self.createCategory = function() {
                    var str = self.newCategory.name.replace(/\s+/g, '');
                    console.log(str);
                    self.newCategory.urlName = str;
                    Api.Categories.save(self.newCategory);
                    self.newCategory = {};
                    self.categories = Api.Categories.query();
                };

                self.removeRoutine = function(routineId) {
                    Api.Routines.remove({'id': routineId});
                    self.routines = Api.Routines.query();
                };
 
                self.removeCategory = function(categoryId) {
                    Api.Categories.remove({'id': categoryId});
                    self.categories = Api.Categories.query();
                };
 
                self.modifyRoutine = function(routineId) {
                    Api.Routines.update({'id': routineId}, self.modifiedRoutine);
                    self.modifiedRoutine = {};
                    self.routines = Api.Routines.query();
                };
                
                self.checkRoutine = function(routineId, checked) {
                    Api.Routines.update({'id': routineId}, {'checked': checked});

                };
            }
        ]
    });
