class Vector {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  	Object.defineProperty(Vector, "x", {
            
        writable: false,
    });
    Object.defineProperty(Vector, "y", {
            writable: false,
     });
  }
  
  	add = function(v){
    	return new Vector(Vectorbase.x + v.x, Vectorbase.y + v.y);
	}

  	sub = function(v){
    	return new Vector(Vectorbase.x / v.x, Vectorbase.y / v.y);
    }

    mult = function(k){
    	return new Vector(Vectorbase.x * k, Vectorbase.y * k);
	}
}

