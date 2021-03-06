
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * CoinEffectComboV1
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function CoinEffectComboV1(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'sheet_coinCombo_eff', aFrame == undefined || aFrame == null? 0 : aFrame);
	this.anchor.setTo(0.5, 0.83);
	this.animations.add('PLAY', [0, 1, 2, 3, 4], 12, false);
	
}

/** @type Phaser.Sprite */
var CoinEffectComboV1_proto = Object.create(Phaser.Sprite.prototype);
CoinEffectComboV1.prototype = CoinEffectComboV1_proto;
CoinEffectComboV1.prototype.constructor = CoinEffectComboV1;

/* --- end generated code --- */
// -- user code here --
CoinEffectComboV1.prototype.setPlay = function(aAnimaitonName, aIsTween) {
	var isTween = false;
	
	if(this === undefined || this.animations === undefined) { console.log("CoinEffectComboV1 SetPlay undefined!!!"); return;}
	if(aIsTween !== undefined && aIsTween !== null) { isTween = aIsTween; }
	if(this.visible === false) this.visible = true;
	if(this.alpha === 0) this.alpha = 1;
	
	switch(aAnimaitonName) {
		case  "PLAY" :
			this.animations.play("PLAY");			 
			break;
	}
};

CoinEffectComboV1.prototype.update = function () {
	//기존함수테스트
	this.gameProcess();	
};

CoinEffectComboV1.prototype.gameProcess = function() {
	this.animationOnComplete();
};

CoinEffectComboV1.prototype.animationOnComplete = function(){	
	if(this.animations.currentAnim.isFinished === false) return;	

	switch(this.animations.currentAnim.name) {
		case  "PLAY" :
			this.visible = false;			
			break;
	}
};