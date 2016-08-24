angular.module('myApp', ['ionic','myApp.controllers'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tab', {
    url: "/tab",
    abstract:true,
    templateUrl: "templates/tabs.html"
  })
  .state('tab.tab1', {
    url: '/tab1',
    views:{
        'tab-tab1':{
            templateUrl: "templates/tab-tab1.html",
            controller:'tab1Controller'

        }

    }

  })
  .state('tab.tab2', {
      url: '/tab2',
      views:{
          'tab-tab2':{
              templateUrl: "templates/tab-tab2.html",
              controller:'tab2Controller'
          }

      }

  })
  .state('tab.tab3', {
      url: '/tab3',
      views:{
          'tab-tab3':{
              templateUrl: "templates/tab-tab3.html",
              controller:'tab3Controller'
          }

      }

  })
  .state('tab.content1', {
      url: '/content1/:id',
      views:{
          'tab-tab1':{
              templateUrl: "templates/tab-content1.html",
              controller:'content1Controller'
          }

      }

  })
  .state('tab.news', {
         url: '/news',
         views:{
         	'tab-tab1':{
         		templateUrl: "templates/news.html"
         	}
         }
        

      })
  $urlRouterProvider.otherwise('/tab/tab1');

})
