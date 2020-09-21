
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.formes = new Array();
}

function Forme(color, thickness) {
    this.color = color;
    this.thickness = thickness;
};

function Rectangle(color, thickness, coorBeg, width, height) {
    Forme.call(this, color, thickness);
    this.coorBeg = coorBeg;
    this.width = width;
    this.height = height;

    this.getInitX = function (evt) {
        return this.coorBeg.x;
    }.bind(this);

    this.getInitY = function (evt) {
        return this.coorBeg.y;
    }.bind(this);

    this.getFinalX = function (evt) {
        return this.coorBeg.x + this.width;
    }.bind(this);
    
    this.getFinalY = function (evt) {
        return this.coorBeg.y + this.height;
    }.bind(this);
};

function Line(color, thickness, coorBeg, coorEnd) {
    Forme.call(this, color, thickness);
    this.coorBeg = coorBeg;
    this.coorEnd = coorEnd;

    this.getInitX = function (evt) {
        return this.coorBeg.x;
    }.bind(this);

    this.getInitY = function (evt) {
        return this.coorBeg.y;
    }.bind(this);

    this.getFinalX = function (evt) {
        return this.coorEnd.x;
    }.bind(this);
    
    this.getFinalY = function (evt) {
        return this.coorEnd.y;
    }.bind(this);
};



