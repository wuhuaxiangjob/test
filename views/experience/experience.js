/**
 * Created by hxsd on 2016/10/4.
 */

myapp.controller("experienceCtrl",function($scope){
    function initialize() {
        var myLatlng = new sogou.maps.LatLng(32.06,118.79);
        var myOptions = {
            'zoom': 17,
            'center': myLatlng,
            'mapTypeId': sogou.maps.MapTypeId.ROADMAP
        };
        var map = new sogou.maps.Map(document.getElementById("map_canvas"), myOptions);
    }
    //alert("asfdasfdasdf");
    initialize();
});