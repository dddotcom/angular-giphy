var app = angular.module('GiphyApp', ['infinite-scroll', 'ngclipboard']);

app.controller('GiphyCtrl', ['$scope', '$http', '$window', function($scope, $http, $window){
  $scope.searchTerm = '';
  $scope.gifs = [];
  $scope.giphyBusy = false;
  $scope.after = '';
  $scope.copiedId = '';
  $scope.show = false;

  $scope.scrollToTop = function(){
    $window.scrollTo(0, 0);
  };

  $scope.onSuccess = function(e) {
    $scope.copiedId = this.gif.id;
    // console.log($scope.copiedId);
    // console.info('Action:', e.action);
    // console.info('Text:', e.text);
    // console.info('Trigger:', e.trigger);
    e.clearSelection();
};

  $scope.search = function(){
    $scope.gifs = [];
    var req = {
      url: 'https://api.giphy.com/v1/gifs/search?',
      method: 'GET',
      params: {
        q: $scope.searchTerm,
        api_key: 'dc6zaTOxFJmzC'
      }
    };

    $http(req).then(function success(res){
      // console.log(res);
      $scope.gifs = res.data.data;
    }, function error(res){
      console.log("error", res);
    });
  };

  $scope.giphyNextPage = function(){
    if($scope.searchTerm){
      $scope.giphyBusy = true;
      var req = {
        url: 'https://api.giphy.com/v1/gifs/search?',
        method: 'GET',
        params: {
          q: $scope.searchTerm,
          offset: $scope.gifs.length,
          api_key: 'dc6zaTOxFJmzC',
        }
      };

      $http(req).then(function success(res){
        // console.log(res);
        var gifs = res.data.data;
        $scope.gifs = $scope.gifs.concat(gifs);
        $scope.giphyBusy = false;
      }.bind($scope));
    }
  };

}]);
