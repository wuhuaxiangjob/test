/**
 * Created by hxsd on 2016/9/28.
 */
myapp.controller("findCtrl",function($scope){
    var n=0;
    $scope.plusClick=function(){
        n++;
        $scope.showOrHide=n%2;
        console.log($scope.showOrHide);
        $scope.num=0;
        $scope.numClick=function(){
            n++;
            $scope.num=1;
        }
    };
});