
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * BackObjPelicanV1
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function BackObjPelicanV1(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'Pelican', aFrame == undefined || aFrame == null? 0 : aFrame);
	this.scale.setTo(0.5, 0.5);
	this.anchor.setTo(0.5, 0.6);
	this.animations.add('PLAY', [0, 1, 2, 3], 10, true);
	
}

/** @type Phaser.Sprite */
var BackObjPelicanV1_proto = Object.create(Phaser.Sprite.prototype);
BackObjPelicanV1.prototype = BackObjPelicanV1_proto;
BackObjPelicanV1.prototype.constructor = BackObjPelicanV1;

/* --- end generated code --- */
// -- user code here --
BackObjPelicanV1.prototype.beforeCreate = function(){
	
};

BackObjPelicanV1.prototype.afterCreate = function() {	
	this.tweenA = null;
	this.isTween = false;
	this.dir = -1;
	
	this.nowCnt = 0;
};

BackObjPelicanV1.prototype.setPlay = function(aAnimaitonName, aIsTween, aDir) {	
	if(this === undefined || this.animations === undefined) { console.log("EffComboAttFlyV1 SetPlay undefined!!!"); return;}
	if(aIsTween !== undefined && aIsTween !== null) { this.isTween = aIsTween; }	
	if(this.visible === false) this.visible = true;
	if(this.alpha === 0) this.alpha = 1;	
	
	switch(aAnimaitonName) {
		case  "PLAY" :					
			this.nowCnt = 0;
			this.dir = aDir;
			this.animations.play("PLAY");
			if(this.isTween) this.playTweenBasic();
		break;
	}			
	//console.log("BackObjPelicanV1 aAnimaitonName is " + aAnimaitonName);
};

BackObjPelicanV1.prototype.update = function () {
	//기존함수테스트
	this.gameProcess();	
};

BackObjPelicanV1.prototype.gameProcess = function(){	
	this.processCharacter();
	this.animationOnComplete();
};

BackObjPelicanV1.prototype.processCharacter = function(){	
	this.nowCnt++;
	if(this.nowCnt % 20 === 0)	{
		this.y += (Math.round(Math.random() * 6) - 3);
	}
};

BackObjPelicanV1.prototype.animationOnComplete = function(){	
	if(this.animations.currentAnim.isFinished === false) return;	

	switch(this.animations.currentAnim.name) {
		case  "PLAY" :
			//this.setPlay("PLAY", true, this.initX, this.initY, this.targetX, this.targetY);
			break;
	}
};

//트윈은 있는 동작만 추가한다.
BackObjPelicanV1.prototype.playTweenBasic = function(){
	this.tweenA = this.game.add.tween(this).to({ x: this.x + this.dir * 500 }, 5000, "Linear");	
	this.tweenA.start();
	this.tweenA.onComplete.add(this.endTweenPlay, this);
};

BackObjPelicanV1.prototype.endTweenPlay = function(){	
	
	this.x = 400;
	this.y = 245;
	
	this.visible = false;
	this.game.time.events.add(Phaser.Timer.SECOND * 5, function(){this.setPlay("PLAY", true, -1); this.visible = true;}, this);
	
	//this.setPlay("PILE");
	//this.alpha = 0;
	//this.visible = false;
};