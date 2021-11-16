
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * ParaChuteV1
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function ParaChuteV1(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'parachuteSheet', aFrame == undefined || aFrame == null? 0 : aFrame);
	this.anchor.setTo(0.29, 1.62);
	this.animations.add('PLAY', [0, 1, 2, 3, 4, 5], 8, false);
	
}

/** @type Phaser.Sprite */
var ParaChuteV1_proto = Object.create(Phaser.Sprite.prototype);
ParaChuteV1.prototype = ParaChuteV1_proto;
ParaChuteV1.prototype.constructor = ParaChuteV1;

/* --- end generated code --- */
// -- user code here --
ParaChuteV1.prototype.setPlay = function(aAnimaitonName, aIsTween) {
	var isTween = false;
	
	if(this === undefined || this.animations === undefined) { console.log("ParaChuteV1 SetPlay undefined!!!"); return;}
	if(aIsTween !== undefined && aIsTween !== null) { isTween = aIsTween; }
	if(this.visible === false) this.visible = true;
	if(this.alpha === 0) this.alpha = 1;
	
	switch(aAnimaitonName) {
		case  "PLAY" :
			this.animations.play("PLAY");			 
			break;
	}
};

ParaChuteV1.prototype.update = function () {
	//기존함수테스트
	this.gameProcess();	
};

ParaChuteV1.prototype.gameProcess = function() {
	this.animationOnComplete();
};

ParaChuteV1.prototype.animationOnComplete = function(){	
	if(this.animations.currentAnim.isFinished === false) return;	

	switch(this.animations.currentAnim.name) {
		case  "PLAY" :
			this.visible = false;			
			break;
	}
};