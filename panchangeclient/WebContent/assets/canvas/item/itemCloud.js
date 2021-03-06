
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.3 (Phaser v2.6.2)


/**
 * itemCloud
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function itemCloud(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'ItemCloud', aFrame == undefined || aFrame == null? 0 : aFrame);
	this.scale.setTo(0.1, 0.1);
	this.anchor.setTo(0.5, 0.5);
	var _anim_cloud = this.animations.add('cloud', [0, 1, 2, 3], 10, true);
	_anim_cloud.play();
	
	// fields
	
	this.fItemCloud = this;
	
	this.start();
	
}

/** @type Phaser.Sprite */
var itemCloud_proto = Object.create(Phaser.Sprite.prototype);
itemCloud.prototype = itemCloud_proto;
itemCloud.prototype.constructor = itemCloud;

/* --- end generated code --- */
// -- user code here --

itemCloud.prototype.start = function() {
	
	this.cloudTime = 3; //seconds (include shirink time = 0.3)
	this.game.time.events.add(Phaser.Timer.SECOND * (this.cloudTime - 0.3), this.shirinkCloud, this);
	
	this.grow = this.game.add.tween(this.fItemCloud.scale).to({x:1.0, y:1.0}, 300);
	this.grow.start();
	
	this.game.audioManager.playSfx('Card_it1');
};

itemCloud.prototype.shirinkCloud = function() {
	this.shirink = this.game.add.tween(this.fItemCloud.scale).to({x:0.0, y:0.0}, 300);
	this.shirink.onComplete.add(this.killIt, this);
	this.shirink.start();
};

itemCloud.prototype.killIt = function() {
	console.log("kill cloud");
	this.destroy();
};