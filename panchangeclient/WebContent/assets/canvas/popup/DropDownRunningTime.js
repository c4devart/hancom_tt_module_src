
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.3 (Phaser v2.6.2)


/**
 * DropDownRunningTime.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function DropDownRunningTime(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	this.game.add.sprite(0.0, 0.0, 'BarS', null, this);
	
	var _panel = this.game.add.sprite(3.0, 20.0, 'PanelDropdownL5', null, this);
	
	var _BtnDropdown = this.game.add.button(71.0, 6.0, 'BtnDropdown', toggleDD_Time, this, 1, 0, null, null, this);
	
	var _txt_display = this.game.add.text(38.99462890625, 9.5, '3분', {"font":"18px Arial","fill":"#ffffff","align":"center"}, this);
	_txt_display.anchor.setTo(0.5, 0.0);
	
	var _group0 = this.game.add.group(this);
	
	this.game.add.button(12.0, 40.0, 'BtnDropListS', chooseItem_Time, this, 1, 0, null, null, _group0);
	
	this.game.add.text(20.0, 46.0, '1분', {"font":"18px Arial","fill":"#ffffff"}, _group0);
	
	var _group1 = this.game.add.group(this);
	_group1.position.setTo(0.0, 31.0);
	
	this.game.add.button(12.0, 40.0, 'BtnDropListS', chooseItem_Time, this, 1, 0, null, null, _group1);
	
	this.game.add.text(20.0, 46.0, '2분', {"font":"18px Arial","fill":"#ffffff"}, _group1);
	
	var _group2 = this.game.add.group(this);
	_group2.position.setTo(0.0, 62.0);
	
	this.game.add.button(12.0, 40.0, 'BtnDropListS', chooseItem_Time, this, 1, 0, null, null, _group2);
	
	this.game.add.text(20.0, 46.0, '3분', {"font":"18px Arial","fill":"#ffffff"}, _group2);
	
	var _group3 = this.game.add.group(this);
	_group3.position.setTo(0.0, 93.0);
	
	this.game.add.button(12.0, 40.0, 'BtnDropListS', chooseItem_Time, this, 1, 0, null, null, _group3);
	
	this.game.add.text(20.0, 46.0, '4분', {"font":"18px Arial","fill":"#ffffff"}, _group3);
	
	var _group4 = this.game.add.group(this);
	_group4.position.setTo(0.0, 124.0);
	
	this.game.add.button(12.0, 40.0, 'BtnDropListS', chooseItem_Time, this, 1, 0, null, null, _group4);
	
	this.game.add.text(20.0, 46.0, '5분', {"font":"18px Arial","fill":"#ffffff"}, _group4);
	
	
	
	// fields
	
	this.fPanel = _panel;
	this.fBtnDropdown = _BtnDropdown;
	this.fTxt_display = _txt_display;
	this.fGroup0 = _group0;
	this.fGroup1 = _group1;
	this.fGroup2 = _group2;
	this.fGroup3 = _group3;
	this.fGroup4 = _group4;
	
	this.isOpen = false;
	this.dDValue = 180;
		
	this.fPanel.visible = false;
	this.fGroup0.visible = false;
	this.fGroup1.visible = false;
	this.fGroup2.visible = false;
	this.fGroup3.visible = false;
	this.fGroup4.visible = false;
	
}

/** @type Phaser.Group */
var DropDownRunningTime_proto = Object.create(Phaser.Group.prototype);
DropDownRunningTime.prototype = DropDownRunningTime_proto;
DropDownRunningTime.prototype.constructor = DropDownRunningTime;

/* --- end generated code --- */
// -- user code here --
DropDownRunningTime.prototype.forceClose = function() {
	this.isOpen = false;
	this.fPanel.visible = false;
	this.fGroup0.visible = false;
	this.fGroup1.visible = false;
	this.fGroup2.visible = false;
	this.fGroup3.visible = false;
	this.fGroup4.visible = false;
	
	this.fBtnDropdown.setFrames(1, 0, null);
};

var chooseItem_Time = function(obj) {
	obj.parent.parent.fTxt_display.setText(obj.parent.children[1]._text);
	switch(obj.parent.children[1]._text) {
	case '1분': obj.parent.parent.dDValue = 60; break;
	case '2분': obj.parent.parent.dDValue = 120; break;
	case '3분': obj.parent.parent.dDValue = 180; break;
	case '4분': obj.parent.parent.dDValue = 240; break;
	case '5분': obj.parent.parent.dDValue = 300; break;
	}
	
	toggleDD_Time(obj.parent.parent.fBtnDropdown);
};

var toggleDD_Time = function(obj) {
	var origin = obj.parent.isOpen;
	obj.game.myPopup.closeOther();
	if(origin) {
		obj.parent.fPanel.visible = false;
		obj.parent.fGroup0.visible = false;
		obj.parent.fGroup1.visible = false;
		obj.parent.fGroup2.visible = false;
		obj.parent.fGroup3.visible = false;
		obj.parent.fGroup4.visible = false;
		
		obj.setFrames(1, 0, null);
	}
	else {
		obj.game.audioManager.playSfx("Click");
		obj.parent.fPanel.visible = true;
		obj.parent.fGroup0.visible = true;
		obj.parent.fGroup1.visible = true;
		obj.parent.fGroup2.visible = true;
		obj.parent.fGroup3.visible = true;
		obj.parent.fGroup4.visible = true;
		
		obj.setFrames(3, 2, null);
	}
	obj.parent.isOpen = !origin;
};
