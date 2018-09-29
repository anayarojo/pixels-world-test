 var World = (function(){

    let _canvas = null; 
    let _context = null; 
    let _origin = {};
    let _pixels = [];

    let obj = {};

    obj.init = function()
    {
        _canvas = document.getElementById('world');
        _context = _canvas.getContext('2d');

        origin = {
            x: Math.floor(_canvas.width/2),
            y: Math.floor(_canvas.height/2),
        }

        _context.fillStyle = "#f1f1f1";
        _context.fillRect(0, 0, _canvas.width, _canvas.height);

        setInterval(function()
        {
            obj.update(obj.render());

        }, 100);
    }

    obj.update = function(callback)
    {
        if(_pixels.length > 0)
        {
            for(let i = 0; i < _pixels.length; i++)
            {
                if(_pixels[i].getAge() % 10 == 0 && _pixels.length < 10)
                {
                    _pixels.push(_pixels[i].reproduce());
                }
                else
                {
                    _pixels[i].move();
                    _pixels[i].grow();
                }
            }
        }
        else
        {
            let pixel = new Pixel();
            pixel.born({
                world: obj,
            });
            _pixels.push(pixel);
        }
        
        if(callback) callback();
    }

    obj.render = function(callback)
    {
        if(_pixels.length > 0)
        {
            _context.clearRect(0, 0, _canvas.width, _canvas.height);

            for(let i = 0; i<_pixels.length; i++)
            {
                let rectangle = new Path2D();

                let size = _pixels[i].getSize();
                let color = _pixels[i].getColor();
                let position = _pixels[i].getPosition();

                let x = Math.floor(origin.x + position.x - size/2);
                let y = Math.floor(origin.y + position.y - size/2);

                _context.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
                _context.fillRect(x, y, size, size);
            }
        }

        if(callback) callback();
    }

    obj.setOrigin = function(origin){
        _origin = origin;
    }

    obj.getOrigin = function(){
        return _origin;
    }

    obj.getPixels = function(){
        return _pixels;
    }

    return obj;

 });