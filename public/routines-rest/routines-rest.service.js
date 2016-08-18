angular.module('routinesRest').
  factory('Rest', ['$resource',
    function($resource) {
        return $resource('/api/routines/:routineId', {}, {
            update: {
                method: 'PUT'
            }
        });
    }
  ]);
