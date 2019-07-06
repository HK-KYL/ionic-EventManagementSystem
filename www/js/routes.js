angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.tab1', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/tab1.html',
        controller: 'tab1Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.tabEventDetail'
      2) Using $state.go programatically:
        $state.go('tabsController.tabEventDetail');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page7
      /page1/tab2/page7
      /page1/tab3/page7
      /page1/tab5/page7
  */
  .state('tabsController.tabEventDetail', {
    url: '/page7/:id',
    views: {
      'tab1': {
        templateUrl: 'templates/tabEventDetail.html',
        controller: 'tabEventDetailCtrl'
      },
      'tab2': {
        templateUrl: 'templates/tabEventDetail.html',
        controller: 'tabEventDetailCtrl'
      },
      'tab3': {
        templateUrl: 'templates/tabEventDetail.html',
        controller: 'tabEventDetailCtrl'
      },
      'tab5': {
        templateUrl: 'templates/tabEventDetail.html',
        controller: 'tabEventDetailCtrl'
      }
    }
  })

  .state('tabsController.tab2', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/tab2.html',
        controller: 'tab2Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.tabEventList'
      2) Using $state.go programatically:
        $state.go('tabsController.tabEventList');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page6
      /page1/tab3/page6
      /page1/tab5/page6
  */
  .state('tabsController.tabEventList', {
    url: '/page6/:id',
    views: {
      'tab2': {
        templateUrl: 'templates/tabEventList.html',
        controller: 'tabEventListCtrl'
      },
      'tab3': {
        templateUrl: 'templates/tabEventList.html',
        controller: 'tabEventListCtrl'
      },
      'tab5': {
        templateUrl: 'templates/tabEventList.html',
        controller: 'tabEventListCtrl'
      }
    }
  })

  .state('tabsController.tab3', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/tab3.html',
        controller: 'tab3Ctrl'
      }
    }
  })

  .state('tabsController.tab4', {
    url: '/page5',
    views: {
      'tab5': {
        templateUrl: 'templates/tab4.html',
        controller: 'tab4Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.tabMap'
      2) Using $state.go programatically:
        $state.go('tabsController.tabMap');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page8
      /page1/tab2/page8
      /page1/tab3/page8
      /page1/tab5/page8
  */
  .state('tabsController.tabMap', {
    url: '/page8/:vid',
    views: {
      'tab1': {
        templateUrl: 'templates/tabMap.html',
        controller: 'tabMapCtrl'
      },
      'tab2': {
        templateUrl: 'templates/tabMap.html',
        controller: 'tabMapCtrl'
      },
      'tab3': {
        templateUrl: 'templates/tabMap.html',
        controller: 'tabMapCtrl'
      },
      'tab5': {
        templateUrl: 'templates/tabMap.html',
        controller: 'tabMapCtrl'
      }
    }
  })

  .state('tabsController.tabLogin', {
    url: '/page9',
    views: {
      'tab5': {
        templateUrl: 'templates/tabLogin.html',
        controller: 'tabLoginCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')


});