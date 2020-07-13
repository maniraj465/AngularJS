(function(){

    angular.module('MyApp', [])
    .controller('MyController', MyController);
  
    function MyController($scope){
        $scope.message = "";
        $scope.pattern = "";
        $scope.checkItem = function(){
            var str = $scope.items;
            var items = str.split(',')
            var count = 0;
            for(var i = 0; i < items.length; i++){
                if(items[i].length > 0){
                    count++;
                }
                else{
                    $scope.pattern = "you do NOT consider and empty item, i.e., `, ,` as an item towards to the count.";
                    $scope.message = "";
                    return;
                }
            }
            if(count == 0){
                $scope.message = "Please enter data first";
            }
            else if(count <= 3){
                $scope.message = "Enjoy!";
            }
            else if(count > 3){
                $scope.message = "Too much!";
            }
        }

        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
    }
})();
