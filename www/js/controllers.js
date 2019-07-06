angular.module('app.controllers', [])

    .controller('tab1Ctrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http) {
            $http.get("http://localhost:1337/event/all")
                .then(function (response) {
                    $scope.feeds = response.data;
                    // console.log(response.data);
                });

        }])

    .controller('tabEventDetailCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $ionicPopup) {
            $http.get("http://localhost:1337/event/all")
                .then(function (response) {
                    $scope.feed = response.data.filter(function (e) {
                        return e.id == $stateParams.id;
                    })[0] || null;
                    // console.log($scope.feed);
                });

            $scope.reg = function () {

                // A confirm dialog
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Register this event?',
                    template: 'Are you sure?'
                });

                confirmPopup.then(function (res) {
                    if (res) {
                        $http.post("http://localhost:1337/event/reg/" + $stateParams.id)
                            .then(function (response) {

                                var alertPopup = $ionicPopup.alert({
                                    title: '',
                                    template: 'Registered Successfully!'
                                });

                            });
                    } else {
                        var alertPopup = $ionicPopup.alert({
                            title: '',
                            template: 'Not enough quota.'
                        });
                    }
                });
            }

        }])

    .controller('tab2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('tabEventListCtrl', ['$scope', '$stateParams', '$ionicHistory', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $ionicHistory, $http) {
            if ($ionicHistory.backTitle() == 'Tab 4') {

                $http.get("http://localhost:1337/event/reg")
                    .then(function (response) {
                        $scope.feeds = response.data.registered;
                    });

            } else if ($ionicHistory.backTitle() == 'Tab 3') {

                $http.get("http://localhost:1337/event/all")
                    .then(function (response) {
                        $scope.feeds = response.data.filter(function (e) {
                            return e.venue == $stateParams.id;
                        }) || null;
                    });

            } else if ($ionicHistory.backTitle() == 'Tab 2') {
                $http.get("http://localhost:1337/event/all")
                    .then(function (response) {
                        $scope.feeds = response.data.filter(function (e) {
                            return e.org == $stateParams.id;
                        }) || null;
                    });
            }

        }])

    .controller('tab3Ctrl', ['$scope', '$stateParams', 'Venue', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, Venue) {
            $scope.venues = Venue.getAllVenue();

        }])

    .controller('tab4Ctrl', ['$scope', '$stateParams', '$http', '$ionicHistory', '$ionicPopup', 'Venue', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $ionicHistory, $ionicPopup, Venue) {

            $scope.$on("$ionicView.beforeEnter", function() {
                $scope.username = Venue.getUsername();
            });

            $scope.logout = function () {

                $http.get("http://localhost:1337/user/logout", $scope.data)
                    .then(function (response) {

                        Venue.setUsername('');

                        var alertPopup = $ionicPopup.alert({
                            title: response.data,
                            template: 'Good Bye!'
                        });

                        $ionicHistory.goBack();

                    }, function (response) {

                        var alertPopup = $ionicPopup.alert({
                            title: response.data,
                            template: 'Logout failed. Please try again.'
                        });
                    });

            }


        }])

    .controller('tabMapCtrl', ['$scope', '$stateParams', 'Venue', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, Venue) {

            var venue = Venue.getThisVenue($stateParams.vid);

            var lat = venue.Latitude || 22.341072;
            var long = venue.Longitude || 114.179645;

            var map = L.map('map').setView([lat, long], 17);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([lat, long]).addTo(map)
                .bindPopup(venue.VenueName);

        }])

    .controller('tabLoginCtrl', ['$scope', '$stateParams', '$http', '$ionicHistory', '$ionicPopup', 'Venue',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $ionicHistory, $ionicPopup, Venue) {

            $scope.data = {};

            $scope.login = function () {

                $http.post("http://localhost:1337/user/login", $scope.data)
                    .then(function (response) {

                        Venue.setUsername(response.config.data.username);

                        // A confirm dialog
                        var confirmPopup = $ionicPopup.confirm({
                            title: 'Welcome back!',
                            template: 'Go back to previous page?'
                        });

                        confirmPopup.then(function (res) {
                            if (res) {
                                $ionicHistory.goBack();
                            } else {
                                console.log('granted');
                                $state.go($state.current, {}, { reload: true });
                            }
                        });

                    }, function (response) {

                        var alertPopup = $ionicPopup.alert({
                            title: response.data,
                            template: 'Login failed. Please try again.'
                        });
                    });

            }

        }])
