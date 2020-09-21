
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.


	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd) {
		drawing.addForme(new Rectangle(this.currColour, this.currLineWidth, dnd.posBeg, 50, 100))
	}.bind(this);

	this.onInteractionUpdate = function (dnd) {
		//drawing.addForme(new Rectangle(this.currColour, this.currLineWidth, dnd.posBeg))
	}.bind(this);

	this.onInteractionEnd = function (dnd) {
		drawing.paint(ctx);
	}.bind(this);
};


