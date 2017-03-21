angular.module('GiphyServices', [])
.factory('Favorite', [function(){
  var favorites =[];
  return {
    add: function(gifUrl){
      favorites.push(gifUrl);
    },
    get: function(){
      return favorites;
    }
  };
}]);
