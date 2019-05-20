const Orientation = 'Orientation';

class Beeldscherm {
    //fields
    width:number;
    height:number;
    
    //constructor
    constructor(width:number,height:number){
        this.width = width;
        this.height = height;
    };

    getOrientation():Orientation{
        if (this.width > this.height) {
            return Orientation.LANDSCAPE
        }
        else if (this.height> this.width){
            return Orientation.PORTRAIT
        }
        else {
            throw Error ("Cant decide!");
        }

    };
 };

 var a = new Beeldscherm(20,10);
 var b = new Beeldscherm(5,10);
 var c = new Beeldscherm(10,10);
 console.log(a.getOrientation());
 console.log(b.getOrientation());
 console.log(c.getOrientation());