function Ligne(Longueur){
    this.Longueur = Longueur;
}

Ligne.prototype.taille = function(){
    return "Long = " + this.Longueur;
};

function Rectangle(longueur, largeur){
    Ligne.call(this, longueur);
    this.Largeur = largeur;
}

Rectangle.prototype = Object.create(Ligne.prototype);
Rectangle.prototype.constructor = Rectangle;


function Parap(longueur, largeur, hauteur){
    Rectangle.call(this, longueur, largeur);
    this.hauteur = hauteur;
}

Parap.prototype = Object.create(Rectangle.prototype);
Parap.prototype.constructor = Parap;

p = new Parap(10, 2, 2);
p.taille();
