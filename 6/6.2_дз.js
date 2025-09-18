(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.морковь = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAlpoQABAAACABAB9ojQAfAqAbBBQBNC1AAEBQAAEAhNC2QhLC1hsAAQhrAAhMi1QhMi2AAkAQAAkBBMi1QARgpATgg");
	this.shape.setTransform(57.4,93.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("Ai3G0QhMi2AAkAQAAkBBMi2QARgoATggIAsAIQBsAOAeg0QAHgMACgNQAEAGAEAGQAYAXAxgOQAgAqAbBAQBMC2AAEBQAAEAhMC2QhMC1hsAAQhqAAhNi1gAAlpoIADABIgBADIgCgEg");
	this.shape_1.setTransform(57.4,93.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009933").s().p("AgRDTIgsgHQhagVhjg5Qh9hIhDhXQhChYAeg0QAegzBtAOQBtANB9BIQB7BIBCBXQAcAkALAeIACAFIABgEQADgSAJgVQAchGBGhFQBFhGBGgcQAdgMAWgCQAfgDAQARQAeAdgdBGIgNAcQgdA2g4A4QhFBGhGAcIgaAJQgyAOgXgXQgFgFgDgGQgCAMgHAMQgYAphKAAQgTAAgVgDg");
	this.shape_2.setTransform(48.8315,21.4145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.морковь, new cjs.Rectangle(0,0,97.7,155.9), null);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AldJfQiChLAMjnQALjmCRj6QAnhEArg7QBzieCNhcQC1h1B9A7IARAIQCCBLgLDmQgCAngGAnQgcDDh5DQQiRD7jAB9IgUANQhuBChZAAQg5AAgwgcgAh9hJQhiBAhLCAQhKCBgHB2QgHB2BAAlQBBAmBihCQBjhBBJiBQBLiBAHh1QAHh1hBglQgXgOgbAAQgxAAg/Aqg");
	this.shape.setTransform(46.9462,63.4633);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,93.9,127), null);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbIsQjBh8iRj8QgnhEgehCQhPizgJioQgKjXBxhQIAQgKQCBhLDCB+QAgAUAeAZQCbB5B5DSQCRD6AMDmIABAYQADDSh7BIQgwAcg6AAQhgAAh5hPgAhFhTQhAAmAHB0QAHB2BKCCQBKCBBiBAQBjBBBAgkQBBgmgIh2QgHh2hKiAQhLiChihAQg+gpgxAAQgcAAgXANg");
	this.shape.setTransform(46.9852,63.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,94,126.9), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("AAREcQhhhBhLiBQhKiAgHh2QgHh1BAgmQBBglBiBBQBhBBBLCBQBKCAAHB2QAIB2hBAlQgYANgbAAQgxAAg/gpg");
	this.shape.setTransform(23.7793,32.5467);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,47.6,65.1), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(12,1,1).p("ABkAAQAABJgdAyQgeA0gpAAQgpAAgdg0QgdgyAAhJQAAhIAdgzQAdgzApAAQApAAAeAzQAdAzAABIg");
	this.shape.setTransform(280.3,52.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhGB8QgdgzAAhJQAAhIAdgzQAdgzApAAQApAAAdAzQAeAzAABIQAABJgeAzQgdAzgpAAQgpAAgdgzg");
	this.shape_1.setTransform(10,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,296.3,76), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhGB8QgdgzAAhJQAAhIAdgzQAdgzApAAQApAAAdAzQAeAzAABIQAABJgeAzQgdAzgpAAQgpAAgdgzg");
	this.shape.setTransform(10,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,20,35), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("AizE4QhAglAHh2QAHh2BKiAQBLiBBhhBQBjhBBAAlQBBAmgIB1QgHB2hKCAQhLCBhhBBQg/ApgxAAQgcAAgXgNg");
	this.shape.setTransform(23.8,32.5366);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,47.6,65.1), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AULAAQAAHVl6FLQi7CjjfBTQjoBVkPAAQlUAAkWiHQidhMiJh4Ql6lLAAnVQAAnTF6lLQF6lMIWAAQIWAAF7FMQF6FLAAHTg");
	this.shape.setTransform(129.05,113.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AppPkQiehNiJh4Ql6lKAAnVQAAnUF6lKQF6lMIWAAQIWAAF7FMQF6FKAAHUQAAHVl6FKQi6CkjhBTQjnBUkPAAQlUABkViHg");
	this.shape_1.setTransform(129.05,113.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1,-1,260.1,228.1), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHEPQjcg6iHh5QiHh5AehxQAfhwCyglIABgBIA0gJQCcgSC6AxQDVA5CFB0IAJAHQA9A4AbA0QAWArgBAqQAAAUgFATQgeBxixAlQhFAPhLAAQh2AAiGgkg");
	this.shape.setTransform(53.7294,30.6889);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,107.5,61.4), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak4EmIgMgCQhQgRgyghQgpgagVglQgJgRgGgUQgehwCGh4QCGh5Ddg7QDbg7CxAmQCyAmAeBwQAeBwiIB4IgBABQgTARgWARQh9Bei7AzQiEAkh2AAQhGAAhAgNg");
	this.shape.setTransform(53.7392,30.6815);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,107.5,61.4), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkQG2QgxgDgkgVQgRgKgOgPQhThSA4isQA4irChihQChihCrg4QCtg4BTBSQBSBSg5CtIAAABIgTAyQg+CPiICKQicCcilA5IgLADQhGAXg3AAIgNAAg");
	this.shape.setTransform(43.8116,43.7796);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,87.7,87.6), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXG0QiXhihxjFQhzjFgJi0QgJi2Bkg6QBlg7CYBkIABABIArAfQB7BhBhCnQBvC+AMCwIAAALQAFBTgTA4QgPAugeAeQgOANgSALQglAWgsAAQhLAAhgg/g");
	this.shape.setTransform(36.682,49.8569);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,73.4,99.7), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArfMMQkwlmgBn4QABn6EwllQBihyBuhOQEVCHFUAAQEPAADnhVQBLA+BEBQQEyFlgBH6QABH4kyFmQkwFlmvABQmugBkxllg");
	this.shape.setTransform(104.05,113.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,208.1,227.5), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.морковь();
	this.instance.setTransform(915.3,502.4,0.9999,0.9999,-14.9993,0,0,49.1,77.6);

	this.instance_1 = new lib.морковь();
	this.instance_1.setTransform(1049.7,344.85,0.9999,0.9999,14.9999,0,0,49.1,77.5);

	this.instance_2 = new lib.морковь();
	this.instance_2.setTransform(894.1,221.7,0.9999,0.9999,-14.9978,0,0,49,77.5);

	this.instance_3 = new lib.морковь();
	this.instance_3.setTransform(1063.35,91.6,0.9999,0.9999,30.0014,0,0,49,77.5);

	this.instance_4 = new lib.морковь();
	this.instance_4.setTransform(247.15,91.6,0.9999,0.9999,30.0014,0,0,49,77.5);

	this.instance_5 = new lib.морковь();
	this.instance_5.setTransform(81.1,519.6,1,1,-14.9982,0,0,49,77.5);

	this.instance_6 = new lib.морковь();
	this.instance_6.setTransform(201.55,375.95,1,1,30.0008,0,0,48.9,77.5);

	this.instance_7 = new lib.морковь();
	this.instance_7.setTransform(67.2,225.7,1,1,-14.9983,0,0,48.8,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,1144.2,607.1), null);


// stage content:
(lib._62_дз = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_15
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AGwjaQBeBFAABZQAAByiiBSQihBTjjAAQh3AAhlgXAlJCtQgsgQgogVQhIgkgogs");
	this.shape.setTransform(519.6125,486.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF99CC").s().p("AhfArQgpgSAAgZQAAgYApgSQAogRA3AAQA4AAAoARQAoASABAYQgBAZgoASQgoARg4AAQg3AAgogRg");
	this.shape_1.setTransform(572.05,300.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},49).wait(1));

	// Layer_14
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACJAAQAAAZgoASQgoARg5AAQg3AAgogRQgogSAAgZQAAgYAogSQAogRA3AAQA5AAAoARQAoASAAAYg");
	this.shape_2.setTransform(705.55,300.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF99CC").s().p("AhgArQgogSABgZQgBgYAogSQAogRA4AAQA5AAAoARQAoASgBAYQABAZgoASQgoARg5AAQg4AAgogRg");
	this.shape_3.setTransform(705.55,300.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[]},49).wait(1));

	// Layer_13
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0)").ss(12,1,1).p("ACKAaQAfAWggASQgyAchGAAQhGAAgygcQgxgcAAgmQAAgoAxgcQAigTArgG");
	this.shape_4.setTransform(623.4418,307.6875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AADBFIgygQQh1gmgCgZQgBgbAGgMQALgXAnAFQAnAFBGAEQBFADA1gEQA0gEgGAoQgGAmhAAXIhOAbIgPAEIAAAAg");
	this.shape_5.setTransform(636.9815,303.3405);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[]},49).wait(1));

	// Layer_12
	this.instance = new lib.Symbol8();
	this.instance.setTransform(682.45,262.55,1,1,0,0,0,10,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:681.15},0).wait(1).to({x:679.9},0).wait(1).to({x:678.6},0).wait(1).to({x:677.35},0).wait(1).to({x:676.05},0).wait(1).to({x:674.8},0).wait(1).to({x:673.5},0).wait(1).to({x:672.25},0).wait(1).to({x:670.95},0).wait(1).to({x:669.7},0).wait(1).to({x:672,y:262.75},0).wait(1).to({x:674.3,y:262.95},0).wait(1).to({x:676.65,y:263.2},0).wait(1).to({x:678.95,y:263.4},0).wait(1).to({x:681.25,y:263.65},0).wait(1).to({x:683.6,y:263.85},0).wait(1).to({x:685.9,y:264.1},0).wait(1).to({x:688.2,y:264.3},0).wait(1).to({x:690.55,y:264.55},0).wait(29).to({_off:true},1).wait(1));

	// Layer_11
	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(731.05,283.05,1,1,0,0,0,148.2,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:729.25},0).wait(1).to({x:727.45},0).wait(1).to({x:725.65},0).wait(1).to({x:723.85},0).wait(1).to({x:722.05},0).wait(1).to({x:720.25},0).wait(1).to({x:718.45},0).wait(1).to({x:716.65},0).wait(1).to({x:714.85},0).wait(1).to({x:713.05},0).wait(1).to({x:715.35,y:283.25},0).wait(1).to({x:717.65,y:283.45},0).wait(1).to({x:720,y:283.7},0).wait(1).to({x:722.3,y:283.9},0).wait(1).to({x:724.6,y:284.15},0).wait(1).to({x:726.95,y:284.35},0).wait(1).to({x:729.25,y:284.6},0).wait(1).to({x:731.55,y:284.8},0).wait(1).to({x:733.9,y:285.05},0).wait(29).to({_off:true},1).wait(1));

	// Layer_6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0)").ss(12,1,1).p("ARhszQCBBLBBBjQBBBiglBAQgmBBh2gHQh1gIiBhKQiBhLhChiQhAhiAlhBQAlhAB2AHQB2AHCBBKgAqqBCQBHAeBHAqQD7CRB9DCQB9DBhLCCQgqBKhcAcAxLJvQhshdhGhrQh9jCBLiCQBAhtCzgI");
	this.shape_6.setTransform(607.7765,66.9359);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},49).wait(1));

	// Layer_5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0)").ss(12,1,1).p("AScKKQAACVg1BqQg0BphLAAQhKAAg1hpQg1hqAAiVQAAiVA1hpQA1hqBKAAQBLAAA0BqQA1BpAACVgAybomQAaiMA7hzQBkjCCMgKQAHgBAIAAQAHAAAHABQB3AIBbCOAnnnUQAIBMAABTQAAEihpDMQhqDNiVAAQhVAAhHhC");
	this.shape_7.setTransform(834.2375,149.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).to({_off:true},49).wait(1));

	// Layer_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0)").ss(12,1,1).p("AlOgoQAHj8Bbi3QAPgeARgbQBYiMB0AAQAuAAApAWAFPAvQgID4haC0QhiDGiLAAQgrAAgpgV");
	this.shape_8.setTransform(734.6875,101.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AJRw/QBKA+BEBQQExFmAAH5QAAH5kxFlQkwFmmvAAQmuAAkxlmQkxllAAn5QAAn5ExlmQBhhyBuhO");
	this.shape_9.setTransform(628.2,480.4375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[]},49).wait(1));

	// Layer_19
	this.instance_2 = new lib.Symbol10();
	this.instance_2.setTransform(632.35,304.55,1,1,0,0,0,572.1,303.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:303.8,y:275.55},0).wait(1).to({y:246.25},0).wait(1).to({y:216.95},0).wait(1).to({y:187.65},0).wait(1).to({y:158.35},0).wait(1).to({y:129.05},0).wait(1).to({y:99.75},0).wait(1).to({y:70.45},0).wait(1).to({y:41.15},0).wait(1).to({y:11.85},0).wait(1).to({y:33.9},0).wait(1).to({y:55.9},0).wait(1).to({y:77.9},0).wait(1).to({y:99.9},0).wait(1).to({y:121.9},0).wait(1).to({y:143.9},0).wait(1).to({y:165.9},0).wait(1).to({y:187.9},0).wait(1).to({y:209.9},0).wait(1).to({y:231.95},0).wait(1).to({y:253.95},0).wait(1).to({y:275.95},0).wait(1).to({y:297.95},0).wait(1).to({y:319.9},0).wait(1).to({y:341.9},0).wait(1).to({y:363.9},0).wait(1).to({y:385.9},0).wait(1).to({y:407.9},0).wait(1).to({y:429.95},0).wait(1).to({y:451.95},0).wait(1).to({y:473.95},0).wait(1).to({y:495.95},0).wait(1).to({y:517.95},0).wait(1).to({y:539.95},0).wait(1).to({y:561.95},0).wait(1).to({y:583.95},0).wait(1).to({y:605.95},0).wait(1).to({y:628},0).wait(1).to({y:650},0).wait(1).to({y:672},0).wait(1).to({y:694},0).wait(1).to({y:716},0).wait(1).to({y:738},0).wait(1).to({y:760},0).wait(1).to({y:782},0).wait(1).to({y:804},0).wait(1).to({y:826.05},0).wait(1).to({_off:true},1).wait(1));

	// Armature_5
	this.ikNode_26 = new lib.Symbol17();
	this.ikNode_26.name = "ikNode_26";
	this.ikNode_26.setTransform(748.85,113.05,1,1,0,0,0,56.5,51.9);

	this.ikNode_24 = new lib.Symbol16();
	this.ikNode_24.name = "ikNode_24";
	this.ikNode_24.setTransform(523.1,115,1,1,0,0,0,34.2,53.8);

	this.ikNode_22 = new lib.Symbol15();
	this.ikNode_22.name = "ikNode_22";
	this.ikNode_22.setTransform(557.1,162.05,1,1,0,0,0,34,47.1);

	this.ikNode_20 = new lib.Symbol7();
	this.ikNode_20.name = "ikNode_20";
	this.ikNode_20.setTransform(726.2,166.55,1,1,0,0,0,25,53.5);

	this.ikNode_16 = new lib.Symbol5();
	this.ikNode_16.name = "ikNode_16";
	this.ikNode_16.setTransform(687.7,572.45,1,1,0,0,0,34.1,20.3);

	this.ikNode_14 = new lib.Symbol4();
	this.ikNode_14.name = "ikNode_14";
	this.ikNode_14.setTransform(563,567.3,1,1,0,0,0,77.8,16.6);

	this.ikNode_12 = new lib.Symbol3();
	this.ikNode_12.name = "ikNode_12";
	this.ikNode_12.setTransform(525.05,455.5,1,1,0,0,0,42.1,39.6);

	this.ikNode_10 = new lib.Symbol2();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.setTransform(730.5,456.35,1,1,0,0,0,35.7,38.2);

	this.ikNode_9 = new lib.Symbol1();
	this.ikNode_9.name = "ikNode_9";
	this.ikNode_9.setTransform(632.15,442.1,1,1,0,0,0,109,75.4);

	this.ikNode_18 = new lib.Symbol6();
	this.ikNode_18.name = "ikNode_18";
	this.ikNode_18.setTransform(627.15,366.75,1,1,0,0,0,119,212.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_18,p:{x:627.15,y:366.75}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:0,x:730.5,y:456.35,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:0,x:525.05,y:455.5}},{t:this.ikNode_14,p:{rotation:0,x:563,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:0,x:726.2,y:166.55,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:0,x:557.1,y:162.05,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:0,x:523.1,y:115,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:0,x:748.85,y:113.05,regY:51.9,regX:56.5}}]}).to({state:[{t:this.ikNode_18,p:{x:627.1,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-0.3244,x:730.55,y:455.7,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:0.8096,x:524.8,y:454}},{t:this.ikNode_14,p:{rotation:0,x:563,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:0.3917,x:725.7,y:166.3,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-0.6076,x:557,y:162,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-0.6076,x:522.45,y:115.35,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:0.3917,x:748.7,y:112.95,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.1,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-0.6496,x:730.65,y:455.15,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:1.6194,x:524.65,y:452.5}},{t:this.ikNode_14,p:{rotation:0,x:563,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:0.7825,x:725.2,y:166.1,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-1.2153,x:556.9,y:162.05,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-1.2153,x:521.95,y:115.7,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:0.7825,x:748.6,y:112.9,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.1,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-0.974,x:730.7,y:454.6,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:2.4294,x:524.45,y:450.95}},{t:this.ikNode_14,p:{rotation:0,x:563,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:1.1742,x:724.75,y:165.85,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-1.8232,x:556.85,y:162,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-1.8232,x:521.35,y:115.95,regY:53.7,regX:34.2}},{t:this.ikNode_26,p:{rotation:1.1742,x:748.55,y:112.85,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.1,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-1.2993,x:730.75,y:454.05,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:3.2391,x:524.4,y:449.45}},{t:this.ikNode_14,p:{rotation:0,x:563,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:1.566,x:724.35,y:165.8,regY:53.6,regX:25}},{t:this.ikNode_22,p:{rotation:-2.4303,x:556.7,y:162.05,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-2.4303,x:520.75,y:116.5,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:1.566,x:748.45,y:112.9,regY:52,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.1,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-1.6237,x:730.95,y:453.6,regX:35.8,regY:38.3}},{t:this.ikNode_12,p:{rotation:4.0486,x:524.3,y:447.85}},{t:this.ikNode_14,p:{rotation:0,x:563,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:1.9579,x:723.85,y:165.4,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-3.0387,x:556.65,y:162.1,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-3.0387,x:520.2,y:116.9,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:1.9579,x:748.35,y:112.7,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.1,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-1.9491,x:730.9,y:453.05,regX:35.7,regY:38.3}},{t:this.ikNode_12,p:{rotation:4.8589,x:524.2,y:446.35}},{t:this.ikNode_14,p:{rotation:0,x:563,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:2.3498,x:723.4,y:165.25,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-3.6464,x:556.7,y:162.15,regX:34.1,regY:47.1}},{t:this.ikNode_24,p:{rotation:-3.6464,x:519.6,y:117.35,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:2.3498,x:748.2,y:112.65,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.1,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-2.2737,x:730.85,y:452.35,regX:35.6,regY:38.2}},{t:this.ikNode_12,p:{rotation:5.6684,x:524.15,y:444.8}},{t:this.ikNode_14,p:{rotation:0,x:563,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:2.741,x:722.95,y:165,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-4.2546,x:556.45,y:162.05,regX:34,regY:47}},{t:this.ikNode_24,p:{rotation:-4.2546,x:519.05,y:117.75,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:2.741,x:748.15,y:112.65,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.1,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-2.5984,x:731,y:451.8,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:6.479,x:524.15,y:443.3}},{t:this.ikNode_14,p:{rotation:0,x:563,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:3.1332,x:722.5,y:164.75,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-4.8624,x:556.5,y:162.2,regX:34.1,regY:47.1}},{t:this.ikNode_24,p:{rotation:-4.8624,x:518.5,y:118.15,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:3.1332,x:747.9,y:112.55,regY:51.9,regX:56.4}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.1,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-2.924,x:731.05,y:451.2,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:7.2883,x:524.1,y:441.8}},{t:this.ikNode_14,p:{rotation:0,x:563,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:3.5246,x:722,y:164.6,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-5.4699,x:556.3,y:162.2,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-5.4699,x:518,y:118.6,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:3.5246,x:747.95,y:112.5,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.1,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-3.2488,x:731.1,y:450.75,regX:35.7,regY:38.3}},{t:this.ikNode_12,p:{rotation:8.0982,x:524.1,y:440.25}},{t:this.ikNode_14,p:{rotation:0,x:563,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:3.9163,x:721.6,y:164.35,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-6.078,x:556.2,y:162.25,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-6.078,x:517.4,y:119.05,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:3.9163,x:747.8,y:112.5,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.1,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-3.5737,x:731.3,y:450.05,regX:35.8,regY:38.2}},{t:this.ikNode_12,p:{rotation:8.9079,x:524.15,y:438.65}},{t:this.ikNode_14,p:{rotation:0,x:563,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:4.3081,x:721.25,y:164.15,regY:53.5,regX:25.1}},{t:this.ikNode_22,p:{rotation:-6.685,x:556.15,y:162.3,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-6.685,x:516.85,y:119.45,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:4.3081,x:747.75,y:112.45,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.1,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-3.8979,x:731.2,y:449.45,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:9.7186,x:524.2,y:437.2}},{t:this.ikNode_14,p:{rotation:0,x:563,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:4.6992,x:720.55,y:163.9,regY:53.5,regX:24.9}},{t:this.ikNode_22,p:{rotation:-7.2936,x:556.05,y:162.25,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-7.2936,x:516.15,y:119.8,regY:53.7,regX:34.1}},{t:this.ikNode_26,p:{rotation:4.6992,x:747.6,y:112.45,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.1,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-4.223,x:731.25,y:448.9,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:10.5277,x:524.3,y:435.7}},{t:this.ikNode_14,p:{rotation:0,x:563,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:5.0915,x:720.2,y:163.7,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-7.9014,x:555.95,y:162.3,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-7.9014,x:515.75,y:120.4,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:5.0915,x:747.55,y:112.4,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.1,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-4.5484,x:731.45,y:448.4,regX:35.8,regY:38.2}},{t:this.ikNode_12,p:{rotation:11.3381,x:524.4,y:434.2}},{t:this.ikNode_14,p:{rotation:0,x:563,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:5.483,x:719.9,y:163.55,regY:53.5,regX:25.1}},{t:this.ikNode_22,p:{rotation:-8.5091,x:555.85,y:162.35,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-8.5091,x:515.15,y:120.85,regY:53.8,regX:34.1}},{t:this.ikNode_26,p:{rotation:5.483,x:747.45,y:112.4,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.65}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-4.8729,x:731.3,y:447.8,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:11.0047,x:524.3,y:434.75}},{t:this.ikNode_14,p:{rotation:2.3472,x:562.95,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:5.8749,x:719.15,y:163.3,regY:53.5,regX:24.9}},{t:this.ikNode_22,p:{rotation:-9.1168,x:555.75,y:162.35,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-9.1168,x:514.6,y:121.3,regY:53.8,regX:34.1}},{t:this.ikNode_26,p:{rotation:5.8749,x:747.3,y:112.5,regY:52,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.65}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-5.1977,x:731.35,y:447.25,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:10.6709,x:524.25,y:435.4}},{t:this.ikNode_14,p:{rotation:4.6948,x:562.95,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:6.2661,x:718.8,y:163.25,regY:53.6,regX:25}},{t:this.ikNode_22,p:{rotation:-9.7248,x:555.7,y:162.35,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-9.7248,x:514.2,y:121.75,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:6.2661,x:747.2,y:112.35,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.65}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-5.5226,x:731.5,y:446.65,regX:35.8,regY:38.2}},{t:this.ikNode_12,p:{rotation:10.3374,x:524.25,y:436}},{t:this.ikNode_14,p:{rotation:7.0425,x:562.8,regX:77.7,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:6.6577,x:718.4,y:162.9,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-10.3321,x:555.6,y:162.4,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-10.3321,x:513.7,y:122.2,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:6.6577,x:747.05,y:112.35,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.65}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-5.8477,x:731.4,y:446.1,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:10.0035,x:524.2,y:436.65}},{t:this.ikNode_14,p:{rotation:9.3897,x:562.95,regX:77.8,y:567.35}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:7.0494,x:717.9,y:162.7,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-10.9397,x:555.65,y:162.45,regX:34.1,regY:47.1}},{t:this.ikNode_24,p:{rotation:-10.9397,x:513.2,y:122.55,regY:53.7,regX:34.2}},{t:this.ikNode_26,p:{rotation:7.0494,x:746.95,y:112.35,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.65}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-6.173,x:731.4,y:445.55,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:9.6699,x:524.15,y:437.25}},{t:this.ikNode_14,p:{rotation:11.7377,x:562.8,regX:77.7,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:7.4408,x:717.4,y:162.5,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-11.5476,x:555.45,y:162.45,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-11.5476,x:512.65,y:123.15,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:7.4408,x:746.8,y:112.3,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.65}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-6.4976,x:731.4,y:444.95,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:9.3366,x:524.15,y:437.9}},{t:this.ikNode_14,p:{rotation:14.0852,x:562.85,regX:77.7,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:7.8325,x:716.85,y:162.3,regY:53.5,regX:24.9}},{t:this.ikNode_22,p:{rotation:-12.1559,x:555.35,y:162.5,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-12.1559,x:512.2,y:123.65,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:7.8325,x:746.7,y:112.3,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.65}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-6.8224,x:731.45,y:444.4,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:9.0027,x:524.15,y:438.5}},{t:this.ikNode_14,p:{rotation:16.4326,x:562.85,regX:77.7,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:8.2246,x:716.5,y:162.1,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-12.763,x:555.25,y:162.55,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-12.763,x:511.7,y:124.1,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:8.2246,x:746.6,y:112.35,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.65}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-7.1474,x:731.35,y:443.8,regX:35.6,regY:38.2}},{t:this.ikNode_12,p:{rotation:8.6691,x:524.1,y:439.15}},{t:this.ikNode_14,p:{rotation:18.7808,x:562.95,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:8.616,x:716.05,y:161.9,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-13.3715,x:555.25,y:162.5,regX:34.1,regY:47.1}},{t:this.ikNode_24,p:{rotation:-13.3715,x:511.15,y:124.65,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:8.616,x:746.35,y:112.3,regY:51.9,regX:56.4}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.65}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-7.4726,x:731.45,y:443.2,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:8.3358,x:524.05,y:439.8}},{t:this.ikNode_14,p:{rotation:21.1276,x:562.9,regX:77.7,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:9.008,x:715.55,y:161.7,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-13.9788,x:555.05,y:162.45,regX:34,regY:47}},{t:this.ikNode_24,p:{rotation:-13.9788,x:510.7,y:125.15,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:9.008,x:746.2,y:112.35,regY:51.9,regX:56.4}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-7.7971,x:731.45,y:442.65,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:8.002,x:524.05,y:440.35}},{t:this.ikNode_14,p:{rotation:23.4759,x:562.95,regX:77.8,y:567.35}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:9.3992,x:715.05,y:161.6,regY:53.6,regX:25}},{t:this.ikNode_22,p:{rotation:-14.5869,x:554.95,y:162.6,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-14.5869,x:510.2,y:125.6,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:9.3992,x:746.15,y:112.35,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-8.1221,x:731.5,y:442.1,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:7.6684,x:524,y:441}},{t:this.ikNode_14,p:{rotation:20.7253,x:566.85,regX:77.8,y:569.45}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:9.7913,x:714.65,y:161.25,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-15.1949,x:554.9,y:162.6,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-15.1949,x:509.75,y:126.1,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:9.7913,x:746.05,y:112.35,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-8.4471,x:731.35,y:441.55,regX:35.6,regY:38.2}},{t:this.ikNode_12,p:{rotation:7.3351,x:524,y:441.6}},{t:this.ikNode_14,p:{rotation:17.9746,x:570.85,regX:77.8,y:571.35}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:10.1829,x:714.15,y:161.05,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-15.8018,x:554.8,y:162.6,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-15.8018,x:509.25,y:126.6,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:10.1829,x:745.8,y:112.5,regY:52,regX:56.4}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-8.7717,x:731.6,y:440.95,regX:35.8,regY:38.2}},{t:this.ikNode_12,p:{rotation:7.0011,x:524,y:442.3}},{t:this.ikNode_14,p:{rotation:15.224,x:574.8,regX:77.8,y:573.2}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:10.5749,x:713.8,y:160.9,regY:53.5,regX:25.1}},{t:this.ikNode_22,p:{rotation:-16.4097,x:554.7,y:162.65,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-16.4097,x:508.8,y:127.15,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:10.5749,x:745.8,y:112.4,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-9.0965,x:731.45,y:440.35,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:6.6674,x:524,y:442.95}},{t:this.ikNode_14,p:{rotation:12.4737,x:578.75,regX:77.7,y:574.9}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:10.9663,x:713.2,y:160.65,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-17.0176,x:554.65,y:162.65,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-17.0176,x:508.35,y:127.65,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:10.9663,x:745.65,y:112.45,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-9.4216,x:731.3,y:439.8,regX:35.6,regY:38.2}},{t:this.ikNode_12,p:{rotation:6.3339,x:524,y:443.5}},{t:this.ikNode_14,p:{rotation:9.7239,x:583,regX:77.8,y:576.45}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:11.3576,x:712.6,y:160.45,regY:53.5,regX:24.9}},{t:this.ikNode_22,p:{rotation:-17.6257,x:554.5,y:162.65,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-17.6257,x:507.9,y:128.1,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:11.3576,x:745.5,y:112.5,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-9.7471,x:731.55,y:439.25,regX:35.8,regY:38.2}},{t:this.ikNode_12,p:{rotation:6.0006,x:524,y:444.15}},{t:this.ikNode_14,p:{rotation:9.2117,x:581.9,regX:77.8,y:576.1}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:7.4021,x:712.15,y:160.25,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-18.2331,x:554.5,y:162.7,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-18.2331,x:507.5,y:128.7,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:7.4021,x:741.55,y:110.1,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-10.0719,x:731.45,y:438.7,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:5.6667,x:524.05,y:444.75}},{t:this.ikNode_14,p:{rotation:8.6992,x:580.85,regX:77.8,y:575.65}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:3.4458,x:711.65,y:160,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-18.8416,x:554.4,y:162.75,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-18.8416,x:507,y:129.1,regY:53.7,regX:34.2}},{t:this.ikNode_26,p:{rotation:3.4458,x:737.5,y:107.95,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-10.397,x:731.4,y:438.1,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:5.3337,x:524,y:445.4}},{t:this.ikNode_14,p:{rotation:8.1875,x:579.75,regX:77.8,y:575.25}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:-0.5097,x:711.05,y:159.9,regY:53.6,regX:25}},{t:this.ikNode_22,p:{rotation:-19.4488,x:554.25,y:162.7,regX:34,regY:47}},{t:this.ikNode_24,p:{rotation:-19.4488,x:506.6,y:129.75,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:-0.5097,x:733.2,y:106.05,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-10.7225,x:731.4,y:437.6,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:5.0002,x:524.1,y:446.05}},{t:this.ikNode_14,p:{rotation:7.6762,x:578.7,regX:77.8,y:574.8}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:-4.4659,x:710.3,y:159.5,regY:53.5,regX:24.9}},{t:this.ikNode_22,p:{rotation:-20.0572,x:554.35,y:162.8,regX:34.1,regY:47.1}},{t:this.ikNode_24,p:{rotation:-20.0572,x:506.2,y:130.3,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:-4.4659,x:728.9,y:104.35,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-11.0474,x:731.45,y:437.05,regX:35.8,regY:38.2}},{t:this.ikNode_12,p:{rotation:4.6668,x:524.1,y:446.65}},{t:this.ikNode_14,p:{rotation:7.1639,x:577.6,regX:77.8,y:574.35}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:-8.4215,x:710,y:159.2,regY:53.5,regX:25.1}},{t:this.ikNode_22,p:{rotation:-20.6652,x:554.1,y:162.85,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-20.6652,x:505.65,y:130.9,regY:53.8,regX:34.1}},{t:this.ikNode_26,p:{rotation:-8.4215,x:724.45,y:103.1,regY:52,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-11.3727,x:731.35,y:436.5,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:4.3335,x:524.15,y:447.35}},{t:this.ikNode_14,p:{rotation:6.6524,x:576.55,regX:77.8,y:573.9}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:-12.3778,x:709.15,y:159,regY:53.5,regX:24.9}},{t:this.ikNode_22,p:{rotation:-21.273,x:554.1,y:162.9,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-21.273,x:505.25,y:131.5,regY:53.8,regX:34.1}},{t:this.ikNode_26,p:{rotation:-12.3778,x:719.95,y:101.9,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-11.6976,x:731.3,y:435.9,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:4.0004,x:524.2,y:447.95}},{t:this.ikNode_14,p:{rotation:6.1404,x:575.3,regX:77.7,y:573.4}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:-16.3341,x:708.7,y:158.75,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-21.8813,x:554,y:162.95,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-21.8813,x:504.9,y:131.95,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:-16.3341,x:715.35,y:101.05,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-12.0227,x:731.15,y:435.4,regX:35.6,regY:38.2}},{t:this.ikNode_12,p:{rotation:3.6666,x:524.2,y:448.55}},{t:this.ikNode_14,p:{rotation:5.6289,x:574.25,regX:77.7,y:572.95}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:-20.2901,x:708.15,y:158.65,regY:53.6,regX:25}},{t:this.ikNode_22,p:{rotation:-22.4891,x:553.85,y:163,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-22.4891,x:504.5,y:132.4,regY:53.7,regX:34.2}},{t:this.ikNode_26,p:{rotation:-20.2901,x:710.8,y:100.5,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-12.3483,x:731.2,y:434.8,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:3.3337,x:524.3,y:449.2}},{t:this.ikNode_14,p:{rotation:5.1169,x:573.3,regX:77.8,y:572.55}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:-24.2466,x:707.45,y:158.4,regY:53.6,regX:24.9}},{t:this.ikNode_22,p:{rotation:-23.0972,x:553.8,y:163,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-23.0972,x:504.1,y:133.15,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:-24.2466,x:706.15,y:100.2,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-12.6733,x:731.3,y:434.25,regX:35.8,regY:38.2}},{t:this.ikNode_12,p:{rotation:3.0001,x:524.35,y:449.85}},{t:this.ikNode_14,p:{rotation:4.6054,x:572.25,regX:77.8,y:572.05}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:-28.2023,x:707,y:158.2,regY:53.6,regX:25}},{t:this.ikNode_22,p:{rotation:-23.705,x:553.8,y:163.1,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-23.705,x:503.7,y:133.65,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:-28.2023,x:701.6,y:100.25,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-12.998,x:731.15,y:433.7,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:2.6666,x:524.35,y:450.45}},{t:this.ikNode_14,p:{rotation:4.0933,x:571.2,regX:77.8,y:571.5}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:-32.1584,x:706.25,y:157.85,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-24.3128,x:553.7,y:163.1,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-24.3128,x:503.3,y:134.25,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:-32.1584,x:696.95,y:100.55,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-13.3229,x:731.1,y:433.1,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:2.3332,x:524.45,y:451.05}},{t:this.ikNode_14,p:{rotation:3.5816,x:570.15,regX:77.8,y:571}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:-36.1141,x:705.8,y:157.55,regY:53.5,regX:25.1}},{t:this.ikNode_22,p:{rotation:-24.9215,x:553.65,y:163.1,regX:34.1,regY:47.1}},{t:this.ikNode_24,p:{rotation:-24.9215,x:502.9,y:134.85,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:-36.1141,x:692.5,y:101.15,regY:52,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-13.6484,x:731.15,y:432.55,regX:35.8,regY:38.2}},{t:this.ikNode_12,p:{rotation:1.9998,x:524.45,y:451.7}},{t:this.ikNode_14,p:{rotation:3.0702,x:569.1,regX:77.8,y:570.5}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:-40.0705,x:705.15,y:157.4,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-25.5293,x:553.6,y:163.15,regX:34.1,regY:47.1}},{t:this.ikNode_24,p:{rotation:-25.5293,x:502.55,y:135.4,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:-40.0705,x:688,y:101.9,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-13.9735,x:731,y:432.05,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:1.6666,x:524.55,y:452.35}},{t:this.ikNode_14,p:{rotation:2.5581,x:567.95,regX:77.7,y:570}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:-44.0263,x:704.65,y:157.2,regY:53.6,regX:25.1}},{t:this.ikNode_22,p:{rotation:-26.1373,x:553.4,y:163.2,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-26.1373,x:502.2,y:136,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:-44.0263,x:683.55,y:102.95,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-14.299,x:730.95,y:431.5,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:1.3334,x:524.65,y:453}},{t:this.ikNode_14,p:{rotation:2.0462,x:567,regX:77.8,y:569.5}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:-47.983,x:703.95,y:157,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-26.7449,x:553.35,y:163.25,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-26.7449,x:501.8,y:136.55,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:-47.983,x:679.3,y:104.35,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-14.624,x:730.9,y:430.95,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:0.9993,x:524.7,y:453.6}},{t:this.ikNode_14,p:{rotation:1.5345,x:565.85,regX:77.7,y:568.95}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:-51.9384,x:703.3,y:156.75,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-27.3533,x:553.3,y:163.35,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-27.3533,x:501.45,y:137.2,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:-51.9384,x:675.15,y:105.9,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-14.9487,x:730.8,y:430.4,regX:35.7,regY:38.2}},{t:this.ikNode_12,p:{rotation:0.6662,x:524.8,y:454.25}},{t:this.ikNode_14,p:{rotation:1.023,x:565,regX:77.8,y:568.4}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:-55.8946,x:702.7,y:156.55,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-27.9614,x:553.2,y:163.35,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-27.9614,x:501.05,y:137.65,regY:53.7,regX:34.2}},{t:this.ikNode_26,p:{rotation:-55.8946,x:671.1,y:107.75,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.05,y:366.7}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-15.2738,x:730.85,y:429.8,regX:35.8,regY:38.2}},{t:this.ikNode_12,p:{rotation:0.3331,x:524.85,y:454.85}},{t:this.ikNode_14,p:{rotation:0.5115,x:563.95,regX:77.8,y:567.85}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:-59.8512,x:702.1,y:156.3,regY:53.5,regX:25}},{t:this.ikNode_22,p:{rotation:-28.5689,x:553.1,y:163.35,regX:34,regY:47}},{t:this.ikNode_24,p:{rotation:-28.5689,x:500.8,y:138.35,regY:53.8,regX:34.2}},{t:this.ikNode_26,p:{rotation:-59.8512,x:667.3,y:109.85,regY:51.9,regX:56.5}}]},1).to({state:[{t:this.ikNode_18,p:{x:627.1,y:366.75}},{t:this.ikNode_9},{t:this.ikNode_10,p:{rotation:-15.5994,x:730.8,y:429.25,regX:35.8,regY:38.2}},{t:this.ikNode_12,p:{rotation:0,x:525,y:455.5}},{t:this.ikNode_14,p:{rotation:0,x:563,regX:77.8,y:567.3}},{t:this.ikNode_16},{t:this.ikNode_20,p:{rotation:-63.8072,x:701.6,y:156,regY:53.5,regX:25.1}},{t:this.ikNode_22,p:{rotation:-29.177,x:553.05,y:163.45,regX:34,regY:47.1}},{t:this.ikNode_24,p:{rotation:-29.177,x:500.3,y:139,regY:53.8,regX:34.1}},{t:this.ikNode_26,p:{rotation:-63.8072,x:663.5,y:112.15,regY:51.9,regX:56.5}}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1204.5,1115.9);
// library properties:
lib.properties = {
	id: '1FB4FC7B765B4A64B3995463B6904332',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#CCFFCC",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1FB4FC7B765B4A64B3995463B6904332'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;