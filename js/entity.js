var Entity = (function(props){

    props = props || {}; 

    let obj = {
        age: props.age ? props.age : 0,
        generation: props.generation ? props.generation : 0,
        index: props.index ? props.index : 0,
        size: props.size ? props.size : 5,
        color: props.color ? props.color : getRandomColor(),
        position: props.position ? props.position : {x: 0, y: 0},
    };

    // obj.age = props.age ? props.age : 0;
    // obj.generation = props.generation ? props.generation : 0;
    // obj.index = props.index ? props.index : 0;
    // obj.size = props.size ? props.size : 5;
    // obj.color = props.color ? props.color : obj.getRandomColor();
    // obj.position = props.position ? props.position : {x: 0, y: 0};

    obj.move = function()
    {
        switch(getRandom(9))
        {
            case 1:
                obj.position.x--;
                obj.position.y++;
            break;
            case 2:
                obj.position.y++;
            break;
            case 3:
                obj.position.x++;
                obj.position.y++;
            break;
            case 4:
                obj.position.x--;
            break;
            case 5:
                //nothing
            break;
            case 6:
                obj.position.x++;
            break;
            case 7:
                obj.position.x--;
                obj.position.y--;
            break;
            case 8:
                obj.position.y--;
            break;
            case 9:
                obj.position.x++;
                obj.position.y--;
            break;
        }

        obj.age++;
    }

    obj.reproduce = function()
    {
        return getChild();
    }

    function getChild()
    {
        // let childObj = $.extend(true,{},obj);
        // let childObj = Object.assign({}, obj);
        // let childObj = JSON.parse(JSON.stringify(obj));
        // let childObj = iterationCopy(obj);

        let childObj = Object.assign({}, obj);
        childObj.color = Object.assign({}, childObj.color);
        childObj.position = Object.assign({}, childObj.position);
        childObj.color = childObj.generation % 10 != 0 ? childObj.color : getRandomColor();
        childObj.generation++;
        childObj.move();

        return childObj;
    }

    function getRandomColor()
    {
        return {
            r: getRandom(255),
            g: getRandom(255),
            b: getRandom(255)
        };
    }

    function getRandom(limit)
    {
        return Math.floor((Math.random() * limit) + 1);
    }

    // function iterationCopy(src) {
    //     let target = {};
    //     for (let prop in src) {
    //       if (src.hasOwnProperty(prop)) {
    //         target[prop] = src[prop];
    //       }
    //     }
    //     return target;
    //   }

    // obj.age = props.age ? props.age : 0;
    // obj.generation = props.generation ? props.generation : 0;
    // obj.index = props.index ? props.index : 0;
    // obj.size = props.size ? props.size : 5;
    // obj.color = props.color ? props.color : obj.getRandomColor();
    // obj.position = props.position ? props.position : {x: 0, y: 0};

    return obj;

 });