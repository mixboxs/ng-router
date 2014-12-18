var myApp=angular.module('myApp', ['ui.router'])
  .controller('Firstapp', ['$scope', function($scope) {
    
   


  }]);


  myApp.config(function($stateProvider,$urlRouterProvider){

     $urlRouterProvider.otherwise("/home");

     $stateProvider.state('first',{
       url : '/home',
       views :
       {
           'home':
           {
             templateUrl :'home.html'
           },

           'home1':
           {
             template :'home1'
           }
       }
       

     })
     .state('about',{
      url : '/kkk',
      views :
      {
        'about':
        {
          templateUrl:'about.html'
        }
      }
      
     });
     
  });