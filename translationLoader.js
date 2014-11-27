(function(){
    'use strict';

    angular
        .module('myapp')
        .factory('translationLoader', translationLoader);

    translationLoader.$inject = ['$http', '$q','$ionicLoading'];
    function translationLoader($http, $q, $ionicLoading){
        return function (options) {
            var deferred = $q.defer();
            var url = "http://localhost:8080/translate/lang?id="+options.key;
            $http.get(url).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject(options.key);
                });
            return deferred.promise;
        };
    }
})();