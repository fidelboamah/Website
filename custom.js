$(document).ready(function() {
    
    var userFeed = new Instafeed({
        get: 'user',
        userId: '7696377164',
        resolution: 'standard_resolution',
        accessToken: '7696377164.1677ed0.7918cb16a2734c27811991bfa4ca89ce',
        sortBy: 'most-recent',
        limit: 5,
        template:'<div id="instaimg> <a href="{{image}}" title="{{caption}}" target="_blank"><img class="instaphoto" src={{image}}> </a></div>'
        
    });
    userFeed.run();
});


