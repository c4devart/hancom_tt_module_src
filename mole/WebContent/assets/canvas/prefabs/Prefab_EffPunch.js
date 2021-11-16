
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * Prefab_EffPunch
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function Prefab_EffPunch(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'Eff_Punch', aFrame == undefined || aFrame == null? 0 : aFrame);
	this.anchor.setTo(0.52, 0.51);
	this._PLAY = this.animations.add('PLAY', [0, 1, 2, 3, 4], 10, false);
	this._PLAY.onComplete.add(this.fadeOut, this);
	
	this.visible = false;
	
}

/** @type Phaser.Sprite */
var Prefab_EffPunch_proto = Object.create(Phaser.Sprite.prototype);
Prefab_EffPunch.prototype = Prefab_EffPunch_proto;
Prefab_EffPunch.prototype.constructor = Prefab_EffPunch;

/* --- end generated code --- */
// -- user code here --


Prefab_EffPunch.prototype.play = function(index) {
	if (mEffectMute == false) {
		esHit.play();
	}
	this.index = index
	this.visible = true;
	this._PLAY.play();
};

Prefab_EffPunch.prototype.fadeOut = function() {
	this.visible = false;
	this._PLAY.stop();

	var charType = hole[this.index];
	if (charType > 0) {
		gCharLayer[charType-1].children[this.index].hitDown();
	}
	
	gHammerLayer.children[this.index].fadeOut();
};

