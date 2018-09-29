var Utility = (function(){

    let obj = {};
    
    obj.getRandomColor = function()
    {
        return {
            r: obj.getRandom(255),
            g: obj.getRandom(255),
            b: obj.getRandom(255),
        };
    }

    obj.getRandom = function(limit)
    {
        return Math.floor((Math.random() * limit) + 1);
    }

    return obj;

 });