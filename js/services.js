angular.module('GiphyServices', [])
.factory('Favorite', [function(){
  var favorites =["https://media4.giphy.com/media/RBBWIAfTzuHxS/200.gif", "https://media1.giphy.com/media/o0vwzuFwCGAFO/200.gif"];
  return {
    add: function(gifUrl){
      favorites.push(gifUrl);
    },
    get: function(){
      return favorites;
    },
    delete: function(index){
      favorites.splice(index, 1);
      return favorites;
    }
  };
}]);
