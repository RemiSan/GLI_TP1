
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.rect;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.


	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd) {
		if (this.currEditingMode === editingMode.rect) {
			this.currentShape = new Rectangle(this.currColour, this.currLineWidth, dnd.posBeg, dnd.posBeg);
		}else if (this.currEditingMode === editingMode.line){
			this.currentShape = new Line(this.currColour, this.currLineWidth, dnd.posBeg, dnd.posBeg);
		}
	}.bind(this);

	this.onInteractionUpdate = function (dnd) {
		this.currentShape.update(dnd.posEnd);
	}.bind(this);

	this.onInteractionEnd = function (dnd) {
		drawing.addForme(this.currentShape);
		drawing.paint(ctx);
	}.bind(this);
};


