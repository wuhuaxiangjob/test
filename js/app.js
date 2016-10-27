/**
 * Created by hxsd on 2016/9/28.
 */
var myapp=angular.module('myapp',['ionic']);
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('tour',{
        url:'/tour',
        templateUrl:'views/tour/tour.html',
        controller:'tourCtrl'
    }).state('start',{
        url:'/start',
        templateUrl:'views/start/start.html',
        controller:'startCtrl'
    }).state('tabs',{
        url:'/tabs',
        //abstract:true,
        controller:'tabsCtrl',
        templateUrl:'views/tabs/tabs.html'
    }).state('vip',{
        url:'/vip',
        //abstract:true,
        //controller:'tabsCtrl',
        templateUrl:'views/vip/vip.html'
    }).state('tabs.home',{
        url:'/home',
        views:{'tabs-home':{templateUrl:'views/home/home.html',controller:'homeCtrl'}}
    }).state('tabs.serve',{
        url:'/serve',
        views:{'tabs-serve':{templateUrl:'views/serve/serve.html',controller:'serveCtrl'}}
    }).state('tabs.find',{
        url:'/find',
        views:{'tabs-find':{templateUrl:'views/find/find.html',controller:'findCtrl'}}
    }).state('tabs.experience',{
            url:'/experience',
            views:{'tabs-find':{templateUrl:'views/experience/experience.html',controller:'experienceCtrl'}}
    }).state('tabs.user',{
        url:'/user',
        views:{'tabs-user':{templateUrl:'views/user/user.html',controller:'userCtrl'}}
    }).state('search',{
        url:'/search',
        //abstract:true,
        //controller:'tabsCtrl',
        templateUrl:'views/search/search.html'
    }).state('customization',{
        url:'/customization',
        //abstract:true,
        //controller:'tabsCtrl',
        templateUrl:'views/customization/customization.html'
    });

    $urlRouterProvider.otherwise('tour')
});
myapp.controller('myCtrl',function($scope){

});