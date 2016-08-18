angular.module('routinesList').
  factory('Rest', ['$resource',
    function($resource) {
      return $resource('/api/routines/:routineId', {}, {
        query: {
          method: 'GET',
          params: {routineId: 'routines'},
          isArray: true
        }
      });
    }
  ]);
