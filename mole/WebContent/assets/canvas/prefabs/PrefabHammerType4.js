
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * PrefabHammerType4
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function PrefabHammerType4(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'ShotType4Sheet', aFrame == undefined || aFrame == null? 0 : aFrame);
	this._PLAY = this.animations.add('PLAY', [0, 1, 2, 3, 4, 5], 14, false);
	
	this.visible = false;
}

/** @type Phaser.Sprite */
var PrefabHammerType4_proto = Object.create(Phaser.Sprite.prototype);
PrefabHammerType4.prototype = PrefabHammerType4_proto;
PrefabHammerType4.prototype.constructor = PrefabHammerType4;

/* --- end generated code --- */
// -- user code here --

var gFlag = false;

PrefabHammerType4.prototype.init = function(index) {
	this.index = index;
	this.visible = false;
	
	gFlag = false;
};

PrefabHammerType4.prototype.play = function() {
	var that = this;
	
	this.visible = true;
	this._PLAY.play()
	.onComplete.add( function() {
		var charType = hole[this.index];
		if (charType > 0) {
			gCharLayer[charType-1].children[this.index].hit();
		}
		gEffectLayer1.children[that.index].play(that.index);

		gScoreText.setText(gScore, true);

	});
};

PrefabHammerType4.prototype.fadeOut = function() {
	this.visible = false;
	gFlag = false;
};

PrefabHammerType4.prototype.update = function() {
	if (this.visible) {
		if (this._PLAY.currentFrame.index == 5) {
			if(!gFlag) {
				gFlag = true;
				gFullScreenEffLayer.children[0].show();
			}
		}
			
	}
	
};

