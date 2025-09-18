(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Движение_atlas_1", frames: [[0,1121,1280,743],[0,0,1280,1119],[1282,0,260,280]]},
		{name:"Движение_atlas_2", frames: [[0,0,1929,1497]]}
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



(lib._28550 = function() {
	this.initialize(img._28550);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4154,5296);


(lib.dy05_k786_140704Photoroom = function() {
	this.initialize(ss["Движение_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fish = function() {
	this.initialize(ss["Движение_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.shipPhotoroomPhotoroom = function() {
	this.initialize(ss["Движение_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sunpngfrompngfre15 = function() {
	this.initialize(ss["Движение_atlas_1"]);
	this.gotoAndStop(2);
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


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.fish();
	this.instance.setTransform(-75.1,-58.3,0.0779,0.0779);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.1,-58.3,150.3,116.6);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.fish();
	this.instance.setTransform(-75.1,-58.3,0.0779,0.0779);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.1,-58.3,150.3,116.6);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shipPhotoroomPhotoroom();
	this.instance.setTransform(-148.85,-130.15,0.2326,0.2326);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.8,-130.1,297.70000000000005,260.29999999999995);


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
	this.instance = new lib.sunpngfrompngfre15();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,260,280), null);


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
	this.instance = new lib.dy05_k786_140704Photoroom();
	this.instance.setTransform(0,0,0.1136,0.1136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,145.4,84.4), null);


// stage content:
(lib.Движение = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun
	this.instance = new lib.Symbol2();
	this.instance.setTransform(1113.05,149.05,0.05,0.05,0,0,0,130.1,140.1);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.BlurFilter(15, 15, 3)];
	this.instance.cache(-2,-2,264,284);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:130,regY:140,scaleX:0.1352,scaleY:0.1352,alpha:0.5655},0).wait(1).to({scaleX:0.2183,scaleY:0.2183,y:149,alpha:0.7694},0).wait(1).to({scaleX:0.2991,scaleY:0.2991,alpha:0.8013},0).wait(1).to({scaleX:0.3777,scaleY:0.3777,x:1113,y:149.05,alpha:0.8335},0).wait(1).to({scaleX:0.4541,scaleY:0.4541,y:149,alpha:0.8648},0).wait(1).to({scaleX:0.5283,scaleY:0.5283,alpha:0.8952},0).wait(1).to({scaleX:0.6003,scaleY:0.6003,alpha:0.9247},0).wait(1).to({scaleX:0.67,scaleY:0.67,alpha:0.9533},0).wait(1).to({scaleX:0.7376,scaleY:0.7376,alpha:0.9809},0).wait(1).to({scaleX:0.8029,scaleY:0.8029,x:1112.95,alpha:1},0).wait(1).to({scaleX:0.866,scaleY:0.866,x:1113},0).wait(1).to({scaleX:0.9269,scaleY:0.9269,y:148.95},0).wait(1).to({scaleX:0.9856,scaleY:0.9856,x:1112.95,y:149},0).wait(1).to({scaleX:1,scaleY:1,x:1113},0).wait(1).to({scaleX:0.9775,scaleY:0.9775,y:148.95},0).wait(1).to({scaleX:0.9556,scaleY:0.9556,x:1112.95,y:149},0).wait(1).to({scaleX:0.9345,scaleY:0.9345,x:1113},0).wait(1).to({scaleX:0.9144,scaleY:0.9144,x:1112.95,y:148.95},0).wait(1).to({scaleX:0.8952,scaleY:0.8952},0).wait(1).to({scaleX:0.8769,scaleY:0.8769,x:1113},0).wait(1).to({scaleX:0.8596,scaleY:0.8596,y:149},0).wait(1).to({scaleX:0.8432,scaleY:0.8432,x:1112.95},0).wait(1).to({scaleX:0.8278,scaleY:0.8278},0).wait(1).to({scaleX:0.8133,scaleY:0.8133,rotation:8.4376,x:1113,y:148.95},0).wait(1).to({scaleX:0.7997,scaleY:0.7997,rotation:16.8751,y:149},0).wait(1).to({scaleX:0.7871,scaleY:0.7871,rotation:25.3127,x:1113.05,y:148.95},0).wait(1).to({scaleX:0.7754,scaleY:0.7754,rotation:33.7503,x:1113},0).wait(1).to({scaleX:0.7646,scaleY:0.7646,rotation:42.1878},0).wait(1).to({scaleX:0.7548,scaleY:0.7548,rotation:50.6254,y:149},0).wait(1).to({scaleX:0.7459,scaleY:0.7459,rotation:59.0629,x:1113.05},0).wait(1).to({scaleX:0.7379,scaleY:0.7379,rotation:67.5005},0).wait(1).to({scaleX:0.7309,scaleY:0.7309,rotation:75.9381,y:148.95},0).wait(1).to({scaleX:0.7248,scaleY:0.7248,rotation:84.3756},0).wait(1).to({scaleX:0.7197,scaleY:0.7197,rotation:92.8132,y:149},0).wait(1).to({scaleX:0.7155,scaleY:0.7155,rotation:101.2508,y:148.95},0).wait(1).to({scaleX:0.7122,scaleY:0.7122,rotation:109.6883,x:1113.1,y:149},0).wait(1).to({scaleX:0.7098,scaleY:0.7098,rotation:118.1259,x:1113.05,y:149.05},0).wait(1).to({scaleX:0.7084,scaleY:0.7084,rotation:126.5634,x:1113.1,y:149},0).wait(1).to({scaleX:0.7079,scaleY:0.7079,rotation:135.001,x:1113.05,y:149.05},0).wait(1));

	// fish
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(374.35,591.4);

	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.setTransform(1017.45,621.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},39).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,guide:{path:[374.4,591.4,374.7,590.9,374.9,590.5,373.1,606,379.1,621,385.1,636,397,646.1,408.9,656.1,424.7,659.5,440.6,662.8,455.5,658.5,464.8,655.7,475.2,649.5,481.7,645.6,493.3,637.2,527.7,612.2,562.1,587.2,575,577.9,583,574,595.3,568,606.2,568.8,616.1,569.5,626.4,575.7,636.6,582,652.4,599.3,668.5,617,678.2,623.2,686.3,628.3,697.3,632,705.2,634.6,717.9,637.4,733.7,640.8,744.2,641.7,758.8,642.9,770.5,640.3,780.3,638.1,791.5,632.4,798.3,629,811.1,621.1,825.7,612.1,832.9,607.5,844.9,599.8,854.1,593.2,865.4,585.2,868.8,583.1,877.3,577.8,884.6,575.4,890.8,573.4,898.9,572.6,903.7,572.1,913.5,571.8,919.1,571.6,922.1,572,926.8,572.5,930.1,574.5,935.3,577.6,938.8,585.6,939.5,587.2,944.3,603.3,947.5,614,952.4,619.4,958.3,626.2,969.3,629.2,976.5,631.2,989.6,632.1,995.4,632.5,998.4,632.4,1003.3,632.3,1007,631,1011.3,629.4,1014.2,626.1,1016.1,623.9,1016.9,621.5]}},39).wait(1));

	// dolphin
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(224.7,398.4,1,1,0,0,0,72.7,42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:1.0238,scaleY:1.0238,rotation:0.3846,x:228.5,y:385.15},0).wait(1).to({scaleX:1.0475,scaleY:1.0475,rotation:0.7692,x:232.85,y:372.75},0).wait(1).to({scaleX:1.0712,scaleY:1.0712,rotation:1.1538,x:237.65,y:361.25},0).wait(1).to({scaleX:1.095,scaleY:1.095,rotation:1.5383,x:242.85,y:350.55},0).wait(1).to({scaleX:1.1187,scaleY:1.1187,rotation:1.9229,x:248.6,y:340.7},0).wait(1).to({scaleX:1.1425,scaleY:1.1425,rotation:2.3075,x:254.8,y:331.65},0).wait(1).to({scaleX:1.1661,scaleY:1.1661,rotation:2.6921,x:261.5,y:323.45},0).wait(1).to({scaleX:1.1899,scaleY:1.1899,rotation:3.0767,x:268.6,y:316.1},0).wait(1).to({scaleX:1.2136,scaleY:1.2136,rotation:3.4613,x:276.15,y:309.55},0).wait(1).to({scaleX:1.2374,scaleY:1.2374,rotation:3.8459,x:284.25,y:303.85},0).wait(1).to({scaleX:1.2611,scaleY:1.2611,rotation:4.2305,x:292.8,y:298.9},0).wait(1).to({scaleX:1.2849,scaleY:1.2849,rotation:4.615,x:301.8,y:294.9},0).wait(1).to({scaleX:1.3086,scaleY:1.3086,rotation:4.9996,x:311.25,y:291.65},0).wait(1).to({scaleX:1.3323,scaleY:1.3323,rotation:5.3842,x:321.2,y:289.3},0).wait(1).to({scaleX:1.3561,scaleY:1.3561,rotation:5.7688,x:331.65,y:287.7},0).wait(1).to({scaleX:1.3798,scaleY:1.3798,rotation:6.1534,x:342.5,y:287},0).wait(1).to({scaleX:1.4035,scaleY:1.4035,rotation:6.538,x:353.8,y:287.1},0).wait(1).to({scaleX:1.4273,scaleY:1.4273,rotation:6.9226,x:365.7,y:288.05},0).wait(1).to({scaleX:1.451,scaleY:1.451,rotation:7.3072,x:378.65},0).wait(1).to({scaleX:1.4748,scaleY:1.4748,rotation:7.6917,x:391.05,y:288.6},0).wait(1).to({scaleX:1.4985,scaleY:1.4985,rotation:8.0763,x:403,y:289.65},0).wait(1).to({scaleX:1.5222,scaleY:1.5222,rotation:8.4609,x:414.45,y:291.3},0).wait(1).to({scaleX:1.5459,scaleY:1.5459,rotation:8.8455,x:425.3,y:293.4},0).wait(1).to({scaleX:1.5697,scaleY:1.5697,rotation:9.2301,x:435.75,y:296.05},0).wait(1).to({scaleX:1.5934,scaleY:1.5934,rotation:9.6147,x:445.6,y:299.2},0).wait(1).to({scaleX:1.6172,scaleY:1.6172,rotation:9.9993,x:455,y:302.9},0).wait(1).to({scaleX:1.6409,scaleY:1.6409,rotation:10.3839,x:463.85,y:307.1},0).wait(1).to({scaleX:1.6646,scaleY:1.6646,rotation:10.7684,x:472.25,y:311.85},0).wait(1).to({scaleX:1.6884,scaleY:1.6884,rotation:11.153,x:480,y:317.15},0).wait(1).to({scaleX:1.7121,scaleY:1.7121,rotation:11.5376,x:487.35,y:322.95},0).wait(1).to({scaleX:1.7359,scaleY:1.7359,rotation:11.9222,x:494.1,y:329.2},0).wait(1).to({scaleX:1.7596,scaleY:1.7596,rotation:12.3068,x:500.45,y:336.05},0).wait(1).to({scaleX:1.7833,scaleY:1.7833,rotation:12.6914,x:506.25,y:343.4},0).wait(1).to({scaleX:1.8071,scaleY:1.8071,rotation:13.076,x:511.55,y:351.3},0).wait(1).to({scaleX:1.8308,scaleY:1.8308,rotation:13.4606,x:516.3,y:359.75},0).wait(1).to({scaleX:1.8545,scaleY:1.8545,rotation:13.8451,x:520.55,y:368.65},0).wait(1).to({scaleX:1.8783,scaleY:1.8783,rotation:14.2297,x:524.3,y:378.1},0).wait(1).to({scaleX:1.902,scaleY:1.902,rotation:14.6143,x:527.55,y:388.1},0).wait(1).to({scaleX:1.9257,scaleY:1.9257,rotation:14.9989,x:530.3,y:398.65},0).wait(1));

	// ship
	this.instance_4 = new lib.Tween1("synched",0);
	this.instance_4.setTransform(677.85,352.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-14.9983,x:784.5},9).to({rotation:21.4283,x:910.2},10).to({regX:0.1,regY:0.1,rotation:1.1883,x:1093.95,y:352.25},20).wait(1));

	// Layer_1
	this.instance_5 = new lib._28550();
	this.instance_5.setTransform(-15.75,-702,0.3093,0.385,0,-0.5404,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(624.3,-342,663.9000000000001,1679);
// library properties:
lib.properties = {
	id: 'C54AD346338F43BAB98B2E8D2AAA75B4',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_28550.jpg", id:"_28550"},
		{src:"images/Движение_atlas_1.png", id:"Движение_atlas_1"},
		{src:"images/Движение_atlas_2.png", id:"Движение_atlas_2"}
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
an.compositions['C54AD346338F43BAB98B2E8D2AAA75B4'] = {
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