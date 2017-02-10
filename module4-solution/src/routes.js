(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/MenuApp/templates/home.template.html'
  })

  // Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/MenuApp/templates/categories.template.html',
    controller: 'CategoriesController as catCtrl',
    resolve: {
      catData: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories()
               .then( function (response) {
                   return response.data;
                });
      }]
    }
  })

  .state('menuItems', {
    url: '/menu-items/{category}/{shortName}',
    //url: '/menu-items/:shortName',
    templateUrl: 'src/MenuApp/templates/menu-items.template.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      category: ['$stateParams', function ($stateParams) { return $stateParams.category;}],
      itemsData: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.shortName)
                     .then( function (response) {
                         return response.data;
                      });
        }]
    }
  });
}

})();
