
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

function Forme(color, thickness, coorBeg, coorEnd) {
    this.color = color;
    this.thickness = thickness;
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

Forme.prototype.update = function (coorEnd) {
    this.coorEnd = coorEnd;
};

function Rectangle(color, thickness, coorBeg, coorEnd) {
    Forme.call(this, color, thickness, coorBeg, coorEnd);
};
Rectangle.prototype.getInitX = function () {
    Forme.prototype.getInitX.call(this);
}
Rectangle.prototype.getInitY = function () {
    Forme.prototype.getInitY.call(this);
}
Rectangle.prototype.getFinalX = function () {
    Forme.prototype.getFinalX.call(this);
}
Rectangle.prototype.getFinalY = function () {
    Forme.prototype.getFinalY.call(this);
}

function Line(color, thickness, coorBeg, coorEnd) {
    Forme.call(this, color, thickness, coorBeg, coorEnd);
};
Line.prototype.update = function (coorEnd) {
    Forme.prototype.update.call(this, coorEnd);
}
Rectangle.prototype.update = function (coorEnd) {
    Forme.prototype.update.call(this, coorEnd);
}
Line.prototype.getInitX = function () {
    Forme.prototype.getInitX.call(this);
}
Line.prototype.getInitY = function () {
    Forme.prototype.getInitY.call(this);
}
Line.prototype.getFinalX = function () {
    Forme.prototype.getFinalX.call(this);
}
Line.prototype.getFinalY = function () {
    Forme.prototype.getFinalY.call(this);
}