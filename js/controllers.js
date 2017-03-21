angular.module("GiphyControllers", ['GiphyServices'])
.controller('GiphyCtrl', ['$scope', '$http', '$window', 'Favorite', function($scope, $http, $window, Favorite){
  $scope.searchTerm = '';
  $scope.gifs = [];
  $scope.giphyBusy = false;
  $scope.after = '';
  $scope.copiedId = '';
  $scope.copiedUrl = '';
  $scope.show = false;
  $scope.favorites = Favorite.get();

  $scope.scrollToTop = function(){
    $window.scrollTo(0, 0);
  };

  $scope.onSuccess = function(e) {
    if(this.gif){
      $scope.copiedId = this.gif.id;
    } else if(this.gifUrl){
      $scope.copiedUrl = this.gifUrl;
    }
    e.clearSelection();
  };

  $scope.favorite = function(url){
    Favorite.add(url);
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
        var gifs = res.data.data;
        $scope.gifs = $scope.gifs.concat(gifs);
        $scope.giphyBusy = false;
      }.bind($scope));
    }
  };

}]);
