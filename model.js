
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.formes = new Array();

    this.addForme = function (forme) {
        this.formes.push(forme);
    }.bind(this);

    this.getForms = function(){
        return this.formes;
    }
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

    this.getInitX = function () {
        return this.coorBeg.x;
    }.bind(this);

    this.getInitY = function () {
        return this.coorBeg.y;
    }.bind(this);

    this.getFinalX = function () {
        return this.coorBeg.x + this.width;
    }.bind(this);
    
    this.getFinalY = function () {
        return this.coorBeg.y + this.height;
    }.bind(this);
};

function Line(color, thickness, coorBeg, coorEnd) {
    Forme.call(this, color, thickness);
    this.coorBeg = coorBeg;
    this.coorEnd = coorEnd;

    this.getInitX = function () {
        return this.coorBeg.x;
    }.bind(this);

    this.getInitY = function () {
        return this.coorBeg.y;
    }.bind(this);

    this.getFinalX = function () {
        return this.coorEnd.x;
    }.bind(this);
    
    this.getFinalY = function () {
        return this.coorEnd.y;
    }.bind(this);
};



