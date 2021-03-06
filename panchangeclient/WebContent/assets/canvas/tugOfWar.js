
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.3 (Phaser v2.6.2)


/**
 * tugOfWar.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function tugOfWar(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _CharJuldarigiB = this.game.add.sprite(-100.0, 0.0, 'CharJuldarigiB1', 0, this);
	_CharJuldarigiB.anchor.setTo(0.0, 0.5);
	_CharJuldarigiB.animations.add('julB', [0, 1, 2, 3], 5, true);
	
	var _CharJuldarigiR = this.game.add.sprite(20.0, 0.0, 'CharJuldarigiR1', 0, this);
	_CharJuldarigiR.anchor.setTo(1.0, 0.5);
	_CharJuldarigiR.animations.add('julR', [0, 1, 2, 3], 5, true);
	
	var _smokeR = this.game.add.sprite(-144.0, 17.0, 'CharSmogV1', 0, this);
	var _smokeR_walk = _smokeR.animations.add('walk', [0, 1, 2, 3], 5, true);
	_smokeR_walk.play();
	
	var _smokeB = this.game.add.sprite(4.0, 17.0, 'CharSmogV2', 0, this);
	var _smokeB_walk = _smokeB.animations.add('walk', [0, 1, 2, 3], 5, true);
	_smokeB_walk.play();
	
	var _ImgVS = this.game.add.sprite(0.0, 0.0, 'ImgVS', null, this);
	_ImgVS.anchor.setTo(0.5, 0.5);
	
	
	
	// fields
	
	this.fCharJuldarigiB = _CharJuldarigiB;
	this.fCharJuldarigiR = _CharJuldarigiR;
	this.fSmokeR = _smokeR;
	this.fSmokeB = _smokeB;
	
	this.boardCondition = 0.5;		//0.0 ~ 1.0
	
	this.afterCreate();
	
}

/** @type Phaser.Group */
var tugOfWar_proto = Object.create(Phaser.Group.prototype);
tugOfWar.prototype = tugOfWar_proto;
tugOfWar.prototype.constructor = tugOfWar;

/* --- end generated code --- */
// -- user code here --

var minRopeLength = 20;
var maxRopeLength = 100;

tugOfWar.prototype.afterCreate = function() {
	
	//mask
	this.blueMask = this.game.add.graphics(0, 0);
	this.blueMask.beginFill(0xffffff);
	this.blueMask.drawRect(this.game.world.centerX, 0, 400, 200);
	
	this.redMask = this.game.add.graphics(0, 0);
	this.redMask.beginFill(0xffffff);
	this.redMask.drawRect(this.game.world.centerX - 400, 0, 400, 200);
	
	this.fCharJuldarigiB.mask = this.blueMask;
	this.fCharJuldarigiR.mask = this.redMask;
	
	//visible
	this.fSmokeB.visible = false;
	this.fSmokeR.visible = false;
	
	//position
	this.redZeroX = this.fCharJuldarigiR.x;
	this.blueZeroX = this.fCharJuldarigiB.x;
	
	this.smokeRX = this.fSmokeR.x;
	this.smokeBX = this.fSmokeB.x;
	
	//center
	this.move(0.5);
};

tugOfWar.prototype.start = function() {
	//animation
	this.fCharJuldarigiB.animations.play('julB', 5, true);
	this.fCharJuldarigiR.animations.play('julR', 5, true);
	this.fSmokeB.animations.play('walk', 5, true);
	this.fSmokeR.animations.play('walk', 5, true);
};

tugOfWar.prototype.move = function(condition) {
	console.log("TOW move : " + condition);
	
	this.boardCondition = condition;
	
	//smoke & xPosition
	var xPosition = 0.5;
	if (condition > 0.5) {
		this.fSmokeB.visible = true;
		this.fSmokeR.visible = false;
		xPosition = 1.0;
	} else if (condition < 0.5) {
		this.fSmokeB.visible = false;
		this.fSmokeR.visible = true;
		xPosition = 0.0;
	} else {
		this.fSmokeB.visible = false;
		this.fSmokeR.visible = false;
	}
	
	//position
	//var xAmount = (maxRopeLength - minRopeLength) * this.boardCondition;
	var xAmount = (maxRopeLength - minRopeLength) * xPosition;
	this.fCharJuldarigiR.x = this.redZeroX + xAmount;
	this.fCharJuldarigiB.x = this.blueZeroX + xAmount;
	
	this.fSmokeR.x = this.smokeRX + xAmount;
	this.fSmokeB.x = this.smokeBX + xAmount;
	
};