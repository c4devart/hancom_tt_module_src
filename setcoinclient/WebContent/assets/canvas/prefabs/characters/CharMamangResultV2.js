
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * CharMamangResultV2
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function CharMamangResultV2(aGame, aX, aY, aKey, aFrame) {
	BaseCharacterResult.call(this, aGame, aX, aY, aKey || 'CharMamangSheet2_V2', aFrame == undefined || aFrame == null? 17 : aFrame);
	this.anchor.setTo(0.51, 0.94);
	this.animations.add('RESULT_WIN', [16, 16, 17, 17, 18, 18, 19, 19, 20, 21, 21, 21, 22, 23, 24, 21, 21, 22, 23, 24], 8, true);
	this.animations.add('RESULT_LOSE', [9, 10, 11, 12, 13, 14, 15, 12, 13, 14, 10], 8, true);
	this.animations.add('RESULT_DRAW', [0, 1, 2, 3, 3, 2, 1, 0, 4, 5, 6, 7, 7, 8, 8, 7, 7, 8, 8, 7, 7], 8, true);
	
}

/** @type BaseCharacterResult */
var CharMamangResultV2_proto = Object.create(BaseCharacterResult.prototype);
CharMamangResultV2.prototype = CharMamangResultV2_proto;
CharMamangResultV2.prototype.constructor = CharMamangResultV2;

/* --- end generated code --- */
// -- user code here --
