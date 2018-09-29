var Pixel = (function(){

    // Pointers

    let _index = 0;
    let _age = 0;
    let _generation = 0;
    let _size = 0;
    let _alive = false;

    // Properties

    let _color = {};
    let _position = {};

    // References

    let _world = {};
    let _parent = {};
    let _children = [];

    let obj = {};

    // Methods

    obj.born = function(props)
    {
        _index = props.world ? props.world.getPixels().length + 1 : 1;
        _age = props.age ? props.age : 0;
        _generation = props.parent ? props.parent.getGeneration() : 1;
        _size = props.size ? props.size : 2;
        _alive = props.alive ? props.alive : true;

        _color = props.color ? 
                 props.color : props.parent ?  
                 parent.getGeneration() % 10 != 0 ? 
                 parent.getColor() : obj.getRandomColor() : 
                 obj.getRandomColor();

        _position = props.position ? 
                    props.position : props.parent ? 
                    props.parent.getPosition() : {x:0, y:0};

        _world = props.world ? props.world : null;
        _parent = props.parent ? props.parent : null;
        _children = props.children ? props.children : [];
    }

    obj.grow = function()
    {
        switch(_age)
        {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                _size = 2;
            break;
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                _size = 4;
            break;
            default:
                _size = 6;
            break;
        }
    }

    obj.move = function()
    {
        switch(obj.getRandom(9))
        {
            case 1:
                _position.x--;
                _position.y++;
            break;
            case 2:
                _position.y++;
            break;
            case 3:
                _position.x++;
                _position.y++;
            break;
            case 4:
                _position.x--;
            break;
            case 5:
                //nothing
            break;
            case 6:
                _position.x++;
            break;
            case 7:
                _position.x--;
                _position.y--;
            break;
            case 8:
                _position.y--;
            break;
            case 9:
                _position.x++;
                _position.y--;
            break;
        }

        _age++;
    }

    obj.reproduce = function()
    {
        let child = new Pixel();

        child.born({
            world: _world, 
            parent: _parent, 
            position: _position 
        });

        _children.push(child);

        return child;
    }

    obj.die = function()
    {
        _alive = false;
    }

    // Utilities

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

    // Gets

    obj.getIndex = function(){
        return _index;
    }

    obj.getAge = function(){
        return _age;
    }

    obj.getGeneration = function(){
        return _generation;
    }

    obj.getSize = function(){
        return _size;
    }

    obj.isAlive = function(){
        return _alive;
    }

    obj.getColor = function(){
        return _color;
    }

    obj.getPosition = function(){
        return _position;
    }

    obj.getWorld = function(){
        return _world;
    }

    obj.getParent = function(){
        return _parent;
    }

    obj.getChildren = function(){
        return _children;
    }

    return obj;

 });