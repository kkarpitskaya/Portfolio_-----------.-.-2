(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"задание3_atlas_1", frames: [[0,0,1380,2000],[1382,0,211,234],[1382,236,187,187],[1382,564,142,133],[1382,425,178,137]]}
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



(lib._73c1_c6ul_220918 = function() {
	this.initialize(img._73c1_c6ul_220918);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5909,3761);


(lib.colorfulhotairballoonsky = function() {
	this.initialize(ss["задание3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pillar = function() {
	this.initialize(ss["задание3_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.wheel = function() {
	this.initialize(ss["задание3_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.крыло = function() {
	this.initialize(ss["задание3_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.тело = function() {
	this.initialize(ss["задание3_atlas_1"]);
	this.gotoAndStop(4);
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
	this.instance = new lib.colorfulhotairballoonsky();
	this.instance.setTransform(0,0,0.0417,0.0417);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,57.5,83.3), null);


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
	this.instance = new lib.wheel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,187,187), null);


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
	this.instance = new lib.крыло();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,142,133), null);


(lib.крыло_л = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol1();
	this.instance.setTransform(71,66.5,1,1,0,0,0,71,66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0001,scaleY:0.9872},0).wait(1).to({scaleY:0.9743},0).wait(1).to({scaleX:1.0002,scaleY:0.9615},0).wait(1).to({scaleX:1.0003,scaleY:0.9487},0).wait(1).to({scaleY:0.9358},0).wait(1).to({scaleX:1.0004,scaleY:0.923,x:71.05},0).wait(1).to({scaleX:1.0005,scaleY:0.9101,y:66.45},0).wait(1).to({scaleY:0.8973},0).wait(1).to({scaleX:1.0006,scaleY:0.8845},0).wait(1).to({scaleY:0.8716},0).wait(1).to({scaleX:1.0007,scaleY:0.8588,x:71},0).wait(1).to({scaleX:1.0008,scaleY:0.846},0).wait(1).to({scaleY:0.8331},0).wait(1).to({scaleX:1.0009,scaleY:0.8203,y:66.5},0).wait(1).to({scaleX:0.9955,scaleY:0.8373},0).wait(1).to({scaleX:0.9901,scaleY:0.8542,y:66.45},0).wait(1).to({scaleX:0.9847,scaleY:0.8712,x:70.95,y:66.5},0).wait(1).to({scaleX:0.9793,scaleY:0.8881,x:71,y:66.45},0).wait(1).to({scaleX:0.974,scaleY:0.9051,x:70.95,y:66.5},0).wait(1).to({scaleX:0.9686,scaleY:0.9221,y:66.45},0).wait(1).to({scaleX:0.9632,scaleY:0.939,x:71,y:66.5},0).wait(1).to({scaleX:0.9578,scaleY:0.956,x:70.95,y:66.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142.1,133);


(lib.wheel_s = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol2();
	this.instance.setTransform(93.5,93.5,1,1,0,0,0,93.5,93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:2.7273,y:93.55},0).wait(1).to({rotation:5.4545},0).wait(1).to({rotation:8.1818,y:93.5},0).wait(1).to({rotation:10.9091,x:93.45},0).wait(1).to({rotation:13.6364},0).wait(1).to({rotation:16.3636},0).wait(1).to({rotation:19.0909,y:93.55},0).wait(1).to({rotation:21.8182,y:93.5},0).wait(1).to({rotation:24.5455,y:93.55},0).wait(1).to({rotation:27.2727,y:93.5},0).wait(1).to({rotation:30},0).wait(1).to({rotation:32.7273},0).wait(1).to({rotation:35.4545,y:93.55},0).wait(1).to({rotation:38.1818,x:93.5},0).wait(1).to({rotation:40.9091,x:93.45},0).wait(1).to({rotation:43.6364,x:93.5,y:93.5},0).wait(1).to({rotation:46.3636,x:93.45},0).wait(1).to({rotation:49.0909,x:93.5,y:93.55},0).wait(1).to({rotation:51.8182,x:93.45},0).wait(1).to({rotation:54.5455,x:93.5},0).wait(1).to({rotation:57.2727,y:93.5},0).wait(1).to({rotation:60},0).wait(1).to({rotation:62.7273},0).wait(1).to({rotation:65.4545,y:93.55},0).wait(1).to({rotation:68.1818,y:93.5},0).wait(1).to({rotation:70.9091,y:93.55},0).wait(1).to({rotation:73.6364,y:93.5},0).wait(1).to({rotation:76.3636},0).wait(1).to({rotation:79.0909},0).wait(1).to({rotation:81.8182,x:93.45},0).wait(1).to({rotation:84.5455,y:93.55},0).wait(1).to({rotation:87.2727},0).wait(1).to({rotation:90,x:93.5,y:93.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.7,-38.6,264.5,264.40000000000003);


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
	this.instance = new lib.крыло_л();
	this.instance.setTransform(71,66.5,1,1,0,0,0,71,66.5);

	this.instance_1 = new lib.тело();
	this.instance_1.setTransform(30.05,36.35);

	this.instance_2 = new lib.крыло_л();
	this.instance_2.setTransform(131.9,66.5,1,1,0,0,0,71,66.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,208.1,173.4), null);


(lib.bird = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol3();
	this.instance.setTransform(-275.05,1.2,1,1,0,0,0,104,86.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-263.4,y:2},0).wait(1).to({x:-251.75,y:2.75},0).wait(1).to({x:-240.1,y:3.55},0).wait(1).to({x:-228.45,y:4.3},0).wait(1).to({x:-216.8,y:5.1},0).wait(1).to({x:-205.2,y:5.85},0).wait(1).to({x:-193.55,y:6.65},0).wait(1).to({x:-181.9,y:7.4},0).wait(1).to({x:-170.25,y:8.2},0).wait(1).to({x:-158.6,y:8.95},0).wait(1).to({x:-146.95,y:9.75},0).wait(1).to({x:-135.35,y:10.5},0).wait(1).to({x:-123.7,y:11.3},0).wait(1).to({x:-112.05,y:12.05},0).wait(1).to({x:-100.4,y:12.85},0).wait(1).to({x:-88.75,y:13.6},0).wait(1).to({x:-77.1,y:14.4},0).wait(1).to({x:-65.5,y:15.15},0).wait(1).to({x:-51.65,y:13.05},0).wait(1).to({x:-37.8,y:10.95},0).wait(1).to({x:-23.95,y:8.8},0).wait(1).to({x:-10.1,y:6.7},0).wait(1).to({x:3.75,y:4.55},0).wait(1).to({x:17.6,y:2.45},0).wait(1).to({x:31.45,y:0.35},0).wait(1).to({x:45.25,y:-1.8},0).wait(1).to({x:59.1,y:-3.9},0).wait(1).to({x:72.95,y:-6.05},0).wait(1).to({x:86.8,y:-8.15},0).wait(1).to({x:100.65,y:-10.25},0).wait(1).to({x:114.45,y:-12.4},0).wait(1).to({x:128.3,y:-14.5},0).wait(1).to({x:142.15,y:-16.65},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-379,-103.3,625.2,205.1);


(lib.balloon = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol4();
	this.instance.setTransform(28.8,73.75,1,1,0,0,0,28.8,41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:28.7,regY:41.7,scaleX:1.0628,scaleY:1.0628,x:40.4,y:75.65},0).wait(1).to({scaleX:1.1256,scaleY:1.1256,x:52.1,y:77.5},0).wait(1).to({scaleX:1.1884,scaleY:1.1884,x:63.8,y:79.3},0).wait(1).to({scaleX:1.2512,scaleY:1.2512,x:75.5,y:81.1},0).wait(1).to({scaleX:1.314,scaleY:1.314,x:87.2,y:82.95},0).wait(1).to({scaleX:1.3768,scaleY:1.3768,x:98.9,y:84.75},0).wait(1).to({scaleX:1.4396,scaleY:1.4396,x:110.6,y:86.6},0).wait(1).to({scaleX:1.5024,scaleY:1.5024,x:122.3,y:88.4},0).wait(1).to({scaleX:1.5652,scaleY:1.5652,x:134,y:90.2},0).wait(1).to({scaleX:1.628,scaleY:1.628,x:145.7,y:92.05},0).wait(1).to({scaleX:1.6908,scaleY:1.6908,x:157.45,y:93.85},0).wait(1).to({scaleX:1.7536,scaleY:1.7536,x:169.15,y:95.7},0).wait(1).to({scaleX:1.8164,scaleY:1.8164,x:180.9,y:97.5},0).wait(1).to({scaleX:1.8792,scaleY:1.8792,x:192.6,y:99.3},0).wait(1).to({scaleX:1.942,scaleY:1.942,x:204.3,y:101.15},0).wait(1).to({scaleX:2.0048,scaleY:2.0048,x:216,y:102.95},0).wait(1).to({scaleX:1.9458,scaleY:1.9458,x:225.5,y:101.25},0).wait(1).to({scaleX:1.8868,scaleY:1.8868,x:235,y:99.55},0).wait(1).to({scaleX:1.8279,scaleY:1.8279,x:244.5,y:97.8},0).wait(1).to({scaleX:1.7689,scaleY:1.7689,x:254.05,y:96.1},0).wait(1).to({scaleX:1.7099,scaleY:1.7099,x:263.55,y:94.4},0).wait(1).to({scaleX:1.6509,scaleY:1.6509,x:273.1,y:92.7},0).wait(1).to({scaleX:1.5919,scaleY:1.5919,x:282.6,y:91},0).wait(1).to({scaleX:1.5329,scaleY:1.5329,x:292.15,y:89.25},0).wait(1).to({scaleX:1.474,scaleY:1.474,x:301.65,y:87.55},0).wait(1).to({scaleX:1.415,scaleY:1.415,x:311.15,y:85.85},0).wait(1).to({scaleX:1.356,scaleY:1.356,x:320.65,y:84.15},0).wait(1).to({scaleX:1.297,scaleY:1.297,x:330.2,y:82.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,19.4,367.6,167);


// stage content:
(lib.задание3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// крыло_л
	this.instance = new lib.bird();
	this.instance.setTransform(304.75,348.65,0.5078,0.5078,0,0,0,104,86.7);

	this.instance_1 = new lib.bird();
	this.instance_1.setTransform(935.95,504.7,0.7711,0.7711,0,0,0,104,86.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// colorful_hot_air_balloon_sky_png
	this.instance_2 = new lib.balloon();
	this.instance_2.setTransform(136.8,115.6,1,1,0,0,0,28.8,41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// pillar_png
	this.instance_3 = new lib.pillar();
	this.instance_3.setTransform(501,106,1.4012,1.4012);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// wheel_png
	this.instance_4 = new lib.wheel_s();
	this.instance_4.setTransform(650.15,237.25,1.4012,1.4012,0,0,0,93.5,93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer_5
	this.instance_5 = new lib._73c1_c6ul_220918();
	this.instance_5.setTransform(-230.35,-19.75,0.2688,0.2688,-0.774);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(409.7,318.8,962,672.4000000000001);
// library properties:
lib.properties = {
	id: '477DCF98F559414B92FA7F3C67AA8AE0',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_73c1_c6ul_220918.jpg", id:"_73c1_c6ul_220918"},
		{src:"images/задание3_atlas_1.png", id:"задание3_atlas_1"}
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
an.compositions['477DCF98F559414B92FA7F3C67AA8AE0'] = {
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