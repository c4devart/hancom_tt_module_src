
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * PrefabSlingshot
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function PrefabSlingshot(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'SlingshotSheet', aFrame == undefined || aFrame == null? 0 : aFrame);
	this._PLAY = this.animations.add('PLAY', [0, 0, 0, 0, 0, 1, 2, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 0], 20, false);
	this._PLAY.onComplete.add(this.hide, this);
	
	this.aGameObj = aGame;
	
	this.visible = false;
}

/** @type Phaser.Sprite */
var PrefabSlingshot_proto = Object.create(Phaser.Sprite.prototype);
PrefabSlingshot.prototype = PrefabSlingshot_proto;
PrefabSlingshot.prototype.constructor = PrefabSlingshot;

/* --- end generated code --- */
// -- user code here --

PrefabSlingshot.prototype.show = function() {
	var that = this;
	
	this.visible = true;
	this._PLAY.play();
	
	var tweenData = { x: 272, y: 801 };
	this.x = tweenData.x;
	this.y = tweenData.y;
	this.aGameObj.add.tween(this).to( { x: 272, y: 616 }, 150, Phaser.Easing.Linear.None)
	.start();
};


PrefabSlingshot.prototype.hide = function() {
	this.visible = false;
};