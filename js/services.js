angular.module('GiphyServices', [])
.factory('Favorite', ["$window", function($window){
  // $window.localStorage["favorites"] = [];
  return {
    add: function(gifUrl){
      var arr = [];
      if($window.localStorage["favorites"]){
        arr = JSON.parse($window.localStorage["favorites"]);
      }

      arr.push(gifUrl);
      $window.localStorage["favorites"] = JSON.stringify(arr);
      return this.get();
    },
    get: function(){
      console.log("get local storage");
      if($window.localStorage["favorites"]){
        return JSON.parse($window.localStorage["favorites"]);
      } else {
        return [];
      }
    },
    delete: function(index){
      console.log("delete from local storage at index " + index);
      var arr = JSON.parse($window.localStorage["favorites"]);
      arr.splice(index, 1);
      $window.localStorage["favorites"] = JSON.stringify(arr)
      return this.get();
    }
  };
}]);
