(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"6.1_дз_atlas_1", frames: [[0,0,1200,701],[1202,245,154,125],[1202,372,56,35],[1202,454,55,35],[1202,409,45,43],[1249,409,32,43],[1202,0,172,243]]}
];


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



(lib._1196 = function() {
	this.initialize(img._1196);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,3000);


(lib._27885886_nhyw_7tsl_220428 = function() {
	this.initialize(ss["6.1_дз_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.голова = function() {
	this.initialize(ss["6.1_дз_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.нога1 = function() {
	this.initialize(ss["6.1_дз_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.нога2 = function() {
	this.initialize(ss["6.1_дз_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.рука1 = function() {
	this.initialize(ss["6.1_дз_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.рука2 = function() {
	this.initialize(ss["6.1_дз_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.тело = function() {
	this.initialize(ss["6.1_дз_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
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


(lib.тело_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.тело();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.тело_1, new cjs.Rectangle(0,0,172,243), null);


(lib.рука2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.рука2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.рука2_1, new cjs.Rectangle(0,0,32,43), null);


(lib.рука1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.рука1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.рука1_1, new cjs.Rectangle(0,0,45,43), null);


(lib.нога2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.нога2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.нога2_1, new cjs.Rectangle(0,0,55,35), null);


(lib.нога1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.нога1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.нога1_1, new cjs.Rectangle(0,0,56,35), null);


(lib.голова_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.голова();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.голова_1, new cjs.Rectangle(0,0,154,125), null);


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
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AEtAAQAAB9hZBXQhXBZh9AAQh8AAhYhZQhYhXAAh9QAAh8BYhYQBYhYB8AAQB9AABXBYQBZBYAAB8gAjLgwQAQgzApgpQBFhFBgAAQAuAAAoAQ");
	this.shape.setTransform(30.05,30.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,102,51,0)").ss(1,1,1).p("ADxAAQAABkhHBHQhGBGhkAAQhjAAhHhGQhGhHAAhkQAAgrAOgnQARgxAngmQBHhHBjAAQAsAAAlANQAxASAoAoQBHBGAABjg");
	this.shape_1.setTransform(32.35,33.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCCCC").s().p("AipCrQhHhHAAhkQAAgrAOgnQASgxAngmQBGhHBjAAQAsAAAlANQAyASAoAoQBGBGAABjQAABkhGBHQhHBGhkAAQhjAAhGhGg");
	this.shape_2.setTransform(32.35,33.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9966").s().p("AjTDUQhZhYAAh8QAAh8BZhXQBXhZB8AAQB8AABYBZQBZBXAAB8QAAB8hZBYQhYBZh8AAQh8AAhXhZgAjLgwQgOAmAAArQAABlBHBGQBGBHBjAAQBkAABHhHQBGhGAAhlQAAhihGhHQgogogxgRQgogQguAAQhgAAhFBFQgpApgQAzIAAAAgAiSiMQBFhFBgAAQAuAAAoAQQgmgOgsAAQhjAAhGBHQgnAngSAxQAQgzApgpg");
	this.shape_3.setTransform(30.05,30.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,62.1,62.1), null);


// stage content:
(lib._61_дз = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Armature_1
	this.ikNode_2 = new lib.рука2_1();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(854.25,451.3,1,1,0,0,0,16,21.5);

	this.ikNode_4 = new lib.рука1_1();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(693.75,319.3,1,1,0,0,0,22.5,21.5);

	this.ikNode_6 = new lib.нога2_1();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(825.5,557.75,1,1,0,0,0,37.5,7.2);

	this.ikNode_8 = new lib.нога1_1();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.setTransform(753.35,559.85,1,1,0,0,0,37.1,9.3);

	this.ikNode_10 = new lib.голова_1();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.setTransform(768.85,295.75,1,1,0,0,0,60.6,89.5);

	this.ikNode_1 = new lib.тело_1();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(776.25,440.3,1,1,0,0,0,86,121.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_1},{t:this.ikNode_10,p:{rotation:0,x:768.85,y:295.75,regX:60.6}},{t:this.ikNode_8,p:{rotation:0,x:753.35,y:559.85,regY:9.3}},{t:this.ikNode_6,p:{rotation:0,x:825.5,y:557.75}},{t:this.ikNode_4,p:{rotation:0,x:693.75,y:319.3,regY:21.5,regX:22.5}},{t:this.ikNode_2,p:{rotation:0,x:854.25,y:451.3,regY:21.5,regX:16}}]}).to({state:[{t:this.ikNode_1},{t:this.ikNode_10,p:{rotation:0.8559,x:768.9,y:295.7,regX:60.6}},{t:this.ikNode_8,p:{rotation:-0.0883,x:753.5,y:559.8,regY:9.3}},{t:this.ikNode_6,p:{rotation:-0.0551,x:825.6,y:557.6}},{t:this.ikNode_4,p:{rotation:0.1364,x:693.65,y:319.3,regY:21.5,regX:22.5}},{t:this.ikNode_2,p:{rotation:-0.2527,x:854.3,y:450.9,regY:21.5,regX:16}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_10,p:{rotation:1.7121,x:769,y:295.7,regX:60.6}},{t:this.ikNode_8,p:{rotation:-0.1766,x:753.7,y:559.85,regY:9.3}},{t:this.ikNode_6,p:{rotation:-0.1102,x:825.7,y:557.6}},{t:this.ikNode_4,p:{rotation:0.2728,x:693.6,y:319.3,regY:21.5,regX:22.5}},{t:this.ikNode_2,p:{rotation:-0.5062,x:854.35,y:450.55,regY:21.5,regX:16}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_10,p:{rotation:2.5677,x:769.15,y:295.7,regX:60.6}},{t:this.ikNode_8,p:{rotation:-0.2658,x:753.9,y:559.9,regY:9.3}},{t:this.ikNode_6,p:{rotation:-0.1652,x:825.8,y:557.55}},{t:this.ikNode_4,p:{rotation:0.41,x:693.55,y:319.35,regY:21.5,regX:22.5}},{t:this.ikNode_2,p:{rotation:-0.7589,x:854.4,y:450.2,regY:21.5,regX:16}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_10,p:{rotation:3.424,x:769.25,y:295.7,regX:60.6}},{t:this.ikNode_8,p:{rotation:-0.3541,x:754.05,y:559.9,regY:9.3}},{t:this.ikNode_6,p:{rotation:-0.2203,x:825.95,y:557.5}},{t:this.ikNode_4,p:{rotation:0.5464,x:693.5,y:319.35,regY:21.5,regX:22.5}},{t:this.ikNode_2,p:{rotation:-1.0125,x:854.45,y:449.85,regY:21.5,regX:16}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_10,p:{rotation:4.2809,x:769.35,y:295.65,regX:60.6}},{t:this.ikNode_8,p:{rotation:-0.4433,x:754.25,y:559.95,regY:9.3}},{t:this.ikNode_6,p:{rotation:-0.2754,x:826.05,y:557.4}},{t:this.ikNode_4,p:{rotation:0.6828,x:693.45,y:319.35,regY:21.5,regX:22.5}},{t:this.ikNode_2,p:{rotation:-1.2652,x:854.45,y:449.5,regY:21.5,regX:16}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_10,p:{rotation:5.1371,x:769.45,y:295.7,regX:60.6}},{t:this.ikNode_8,p:{rotation:-0.5316,x:754.45,y:560,regY:9.3}},{t:this.ikNode_6,p:{rotation:-0.3305,x:826.15,y:557.4}},{t:this.ikNode_4,p:{rotation:0.8201,x:693.45,y:319.4,regY:21.5,regX:22.5}},{t:this.ikNode_2,p:{rotation:-1.5188,x:854.45,y:449.3,regY:21.6,regX:16}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_10,p:{rotation:5.9927,x:769.55,y:295.7,regX:60.6}},{t:this.ikNode_8,p:{rotation:-0.6207,x:754.6,y:560,regY:9.3}},{t:this.ikNode_6,p:{rotation:-0.3856,x:826.25,y:557.35}},{t:this.ikNode_4,p:{rotation:0.9565,x:693.4,y:319.55,regY:21.6,regX:22.5}},{t:this.ikNode_2,p:{rotation:-1.7716,x:854.5,y:448.8,regY:21.5,regX:16}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_10,p:{rotation:6.8487,x:769.7,y:295.7,regX:60.6}},{t:this.ikNode_8,p:{rotation:-0.7091,x:754.8,y:560.05,regY:9.3}},{t:this.ikNode_6,p:{rotation:-0.4406,x:826.35,y:557.3}},{t:this.ikNode_4,p:{rotation:1.0938,x:693.35,y:319.45,regY:21.5,regX:22.5}},{t:this.ikNode_2,p:{rotation:-2.0252,x:854.55,y:448.6,regY:21.6,regX:16}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_10,p:{rotation:7.7054,x:769.8,y:295.7,regX:60.6}},{t:this.ikNode_8,p:{rotation:-0.7974,x:755,y:560.1,regY:9.3}},{t:this.ikNode_6,p:{rotation:-0.4957,x:826.5,y:557.25}},{t:this.ikNode_4,p:{rotation:1.2302,x:693.3,y:319.5,regY:21.5,regX:22.5}},{t:this.ikNode_2,p:{rotation:-2.2781,x:854.6,y:448.1,regY:21.5,regX:16}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_10,p:{rotation:8.5612,x:769.9,y:295.65,regX:60.6}},{t:this.ikNode_8,p:{rotation:-0.8865,x:755.2,y:560.25,regY:9.4}},{t:this.ikNode_6,p:{rotation:-0.5508,x:826.6,y:557.2}},{t:this.ikNode_4,p:{rotation:1.3666,x:693.25,y:319.5,regY:21.5,regX:22.5}},{t:this.ikNode_2,p:{rotation:-2.5318,x:854.65,y:447.9,regY:21.6,regX:16}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_10,p:{rotation:9.4181,x:770.05,y:295.65,regX:60.6}},{t:this.ikNode_8,p:{rotation:-0.9749,x:755.35,y:560.15,regY:9.3}},{t:this.ikNode_6,p:{rotation:-0.6059,x:826.75,y:557.15}},{t:this.ikNode_4,p:{rotation:1.5039,x:693.25,y:319.5,regY:21.5,regX:22.5}},{t:this.ikNode_2,p:{rotation:-2.7848,x:854.8,y:447.25,regY:21.4,regX:16.1}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_10,p:{rotation:10.2734,x:770.25,y:295.7,regX:60.7}},{t:this.ikNode_8,p:{rotation:-1.0641,x:755.55,y:560.15,regY:9.3}},{t:this.ikNode_6,p:{rotation:-0.661,x:826.85,y:557.1}},{t:this.ikNode_4,p:{rotation:1.6403,x:693.3,y:319.55,regY:21.5,regX:22.6}},{t:this.ikNode_2,p:{rotation:-3.0378,x:854.85,y:447.05,regY:21.5,regX:16.1}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_10,p:{rotation:11.1302,x:770.2,y:295.65,regX:60.6}},{t:this.ikNode_8,p:{rotation:-1.1524,x:755.75,y:560.2,regY:9.3}},{t:this.ikNode_6,p:{rotation:-0.7161,x:826.95,y:557.05}},{t:this.ikNode_4,p:{rotation:1.7768,x:693.25,y:319.55,regY:21.5,regX:22.6}},{t:this.ikNode_2,p:{rotation:-3.2908,x:854.7,y:446.75,regY:21.5,regX:16}}]},1).to({state:[{t:this.ikNode_1},{t:this.ikNode_10,p:{rotation:11.986,x:770.35,y:295.65,regX:60.6}},{t:this.ikNode_8,p:{rotation:-1.2416,x:755.95,y:560.25,regY:9.3}},{t:this.ikNode_6,p:{rotation:-0.7711,x:827.05,y:557}},{t:this.ikNode_4,p:{rotation:1.9141,x:693.2,y:319.6,regY:21.5,regX:22.6}},{t:this.ikNode_2,p:{rotation:-3.5439,x:854.75,y:446.35,regY:21.5,regX:16}}]},1).wait(1));

	// Layer_4
	this.instance = new lib.Symbol1();
	this.instance.setTransform(779.1,663,1,1,0,0,0,30.1,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:793.75,y:652.7},0).wait(1).to({x:808.45,y:642.45},0).wait(1).to({x:823.1,y:632.15},0).wait(1).to({x:837.8,y:621.9},0).wait(1).to({x:851.1,y:628.7},0).wait(1).to({x:864.45,y:635.5},0).wait(1).to({x:877.75,y:642.3},0).wait(1).to({x:891.1,y:649.1},0).wait(1).to({x:904.45,y:655.9},0).wait(1).to({x:916.85},0).wait(1).to({x:929.25},0).wait(1).to({x:941.7},0).wait(1).to({x:954.1},0).wait(1).to({x:966.55},0).wait(1));

	// Layer_3
	this.instance_1 = new lib._27885886_nhyw_7tsl_220428();
	this.instance_1.setTransform(47,309,0.5201,0.5201);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// Layer_2
	this.instance_2 = new lib._1196();
	this.instance_2.setTransform(-594,-326,0.3363,0.3611);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(46,34,1378,723.3);
// library properties:
lib.properties = {
	id: '35DA81FFDF7E491699B38D9A28FFA032',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#6633CC",
	opacity: 1.00,
	manifest: [
		{src:"images/_1196.jpg", id:"_1196"},
		{src:"images/6.1_дз_atlas_1.png", id:"6.1_дз_atlas_1"}
	],
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
an.compositions['35DA81FFDF7E491699B38D9A28FFA032'] = {
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