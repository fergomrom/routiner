angular.module('routinesRest').
  factory('Api', ['$resource',
      function($resource) {
          return {
              Routines: $resource('/api/routines/:id', {}, {update: {method: 'PUT'}}),
              Categories: $resource('/api/categories/:id', {}, {update: {method: 'PUT'}})
          };
    }
  ]);
