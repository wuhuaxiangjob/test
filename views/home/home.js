/**
 * Created by hxsd on 2016/9/29.
 */
myapp.controller("homeCtrl",function($scope,$http,$interval,$ionicTabsDelegate){
    $scope.products=[
        {style:'美式',desc:'108m²/现代/三居/12图',imgSrc:'./images/di08.jpg',imgSrc2:'./images/di08.jpg'},
        {style:'美式',desc:'98m²/现代/三居/12图',imgSrc:'./images/di16.jpg',imgSrc2:'./images/di16.jpg'},
        {style:'美式',desc:'128m²/现代/三居/12图',imgSrc:'./images/di17.jpg',imgSrc2:'./images/di17.jpg'}
    ];
    $scope.refresh=function(){
        $http.get('data/homeDataRefresh.json').success(function(data){
            $scope.products=data;
        }).finally(function(){
            $scope.$broadcast('scroll.refreshComplete')
        })
    };
    $scope.loadMore=function(){
        $http.get('data/homeData.json').success(function(data){
            Array.prototype.push.apply($scope.products,data);
        }).finally(function(){
//                    通知刷新完成
            $scope.$broadcast('scroll.infiniteScrollComplete');
        })
    };
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
    //var index=1;
    //$interval(function(){
    //    if(index==3)index=0;
    //    $ionicTabsDelegate.select(index);
    //    index++;
    //},2000)

});
