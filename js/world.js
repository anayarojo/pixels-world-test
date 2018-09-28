 var World = (function(){

    let obj = {};
    let canvas = null; 
    let context = null; 
    let origin = {};
    let items = [];

    obj.init = function()
    {
        canvas = document.getElementById('world');
        context = canvas.getContext('2d');

        origin = {
            x: Math.floor(canvas.width/2),
            y: Math.floor(canvas.height/2),
        }

        // canvas.setAttribute('width', window.innerWidth);
        // canvas.setAttribute('height', window.innerHeight);
        
        context.fillStyle = "#f1f1f1";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    obj.update = function()
    {
        if(items.length > 0)
        {
            for(let i = 0; i < items.length; i++)
            {
                // if(items.length < 10)
                // {
                //     items.push(new Entity());
                // }

                // items[i].move();

                if(items[i].age % 10 == 0 && items.length < 10)
                {
                    items.push(items[i].reproduce());
                }
                else
                {
                    items[i].move();
                }
            }
        }
        else
        {
            items.push(new Entity());
        }

        console.log("Update:");
        console.log(items);
    }

    obj.render = function()
    {
        if(items.length > 0)
        {
            console.log("Render:");
            context.clearRect(0, 0, canvas.width, canvas.height);

            for(let i = 0; i<items.length; i++)
            {
                var rectangle = new Path2D();

                var size = items[i].size;
                var color = items[i].color;
                var position = items[i].position;

                var x = Math.floor(origin.x + position.x - size/2);
                var y = Math.floor(origin.y + position.y - size/2);

                console.log(`Item: ${i}; x: ${x}; y: ${y}; size: ${size}`);
                
                context.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
                context.fillRect(x, y, size, size);

                // rectangle.rect(x, y, size, size);
                // context.fill(rectangle);
            }
        }
    }

    return obj;

 });