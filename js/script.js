$(document).ready(function(){

    var world = new World();
    world.init();

    setInterval(function()
    {
        world.update();
        world.render();

    }, 1000);

});