/**
 * Created by hxsd on 2016/9/28.
 */
myapp.controller("serveCtrl",function($scope,$http){
    $scope.samples={"left":[
        {"imgSrc":"./images/dz01.jpg","desc":"地中海时尚风公寓"},
        {"imgSrc":"./images/mei01.jpg","desc":"简约风二居"},
        {"imgSrc":"./images/dz02.jpg","desc":"地中海时尚风公寓"},
        {"imgSrc":"./images/mei02.jpg","desc":"简约风二居"},
        {"imgSrc":"./images/dz03.jpg","desc":"地中海时尚风公寓"},
        {"imgSrc":"./images/mei03.jpg","desc":"简约风二居"},
        {"imgSrc":"./images/dz04.jpg","desc":"地中海时尚风公寓"},
        {"imgSrc":"./images/dz10.jpg","desc":"地中海时尚风公寓"},
        {"imgSrc":"./images/mei10.jpg","desc":"简约风二居"},
        {"imgSrc":"./images/dz11.jpg","desc":"地中海时尚风公寓"},
        {"imgSrc":"./images/mei11.jpg","desc":"简约风二居"},
        {"imgSrc":"./images/dz12.jpg","desc":"地中海时尚风公寓"},
        {"imgSrc":"./images/mei12.jpg","desc":"简约风二居"},
        {"imgSrc":"./images/dz13.jpg","desc":"地中海时尚风公寓"}
    ],
    "right":[
        {"imgSrc":"./images/mei04.jpg","desc":"现代格调三居室"},
        {"imgSrc":"./images/ou01.jpg","desc":"简欧轻奢三居室"},
        {"imgSrc":"./images/mei05.jpg","desc":"现代格调三居室"},
        {"imgSrc":"./images/ou02.jpg","desc":"简欧轻奢三居室"},
        {"imgSrc":"./images/mei06.jpg","desc":"现代格调三居室"},
        {"imgSrc":"./images/ou03.jpg","desc":"简欧轻奢三居室"},
        {"imgSrc":"./images/mei07.jpg","desc":"现代格调三居室"},
        {"imgSrc":"./images/mei08.jpg","desc":"现代格调三居室"},
        {"imgSrc":"./images/ou04.jpg","desc":"简欧轻奢三居室"},
        {"imgSrc":"./images/mei09.jpg","desc":"现代格调三居室"},
        {"imgSrc":"./images/ou05.jpg","desc":"简欧轻奢三居室"},
        {"imgSrc":"./images/mei16.jpg","desc":"现代格调三居室"},
        {"imgSrc":"./images/ou06.jpg","desc":"简欧轻奢三居室"},
        {"imgSrc":"./images/mei17.jpg","desc":"现代格调三居室"}
    ]};
    $scope.sampleLeft=$scope.samples.left;
    $scope.sampleRight=$scope.samples.right;
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
    $scope.filterStyle=function(){
        if($scope.style=="美式"){
            return {"desc":"地中海时尚风公寓"}
        }else if($scope.style=="现代"){
            return {"desc":"现代格调三居室"}
        }else if($scope.style=="欧式"){
            return {"desc":"简欧轻奢三居室"}
        }
    }
});