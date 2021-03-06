
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * LoadingTxtV1
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function LoadingTxtV1(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'LoadingTxtSheet', aFrame == undefined || aFrame == null? 0 : aFrame);
	this.anchor.setTo(0.32, 0.5);
	this.animations.add('PLAY', [0, 1, 2, 3], 4, true);
	
}

/** @type Phaser.Sprite */
var LoadingTxtV1_proto = Object.create(Phaser.Sprite.prototype);
LoadingTxtV1.prototype = LoadingTxtV1_proto;
LoadingTxtV1.prototype.constructor = LoadingTxtV1;

/* --- end generated code --- */
// -- user code here --
