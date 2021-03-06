
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * PrefabCharMamangV2
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function PrefabCharMamangV2(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'CharMamangSheetV2', aFrame == undefined || aFrame == null? 6 : aFrame);
	
	this.anchor.setTo(0.5, 0.76);
	this._UP = this.animations.add('UP', [0, 1, 2, 3, 4, 5, 6], 10, false);
	this._UP.onComplete.add(this.animComplete, this);
	
	this._IDLE = this.animations.add('IDLE', [6, 7, 8, 9, 9, 8, 7, 10, 11, 11, 10, 6, 6, 6, 6], 10, true);
	
	this._DOWN = this.animations.add('DOWN', [12, 13, 14, 15, 16, 17, 18], 10, false);
	this._DOWN.onComplete.add(this.animHideComplete, this);
	
	this._HIT = this.animations.add('HIT', [21], 3, false);
	this._HIT_DOWN = this.animations.add('HIT_DOWN', [21, 22, 23], 10, false);
	this._HIT_DOWN.onComplete.add(this.fadeOut, this);
	this._HIT_FEAR = this.animations.add('HIT_FEAR', [19, 20], 5, true);
	
	this.visible = false;
	
	this.charWord = "";
	
	// 190313 add
	this.isIdle = false;	// 캐릭터 idle상태 체크
	
	this.that = aGame;
}

/** @type Phaser.Sprite */
var PrefabCharMamangV2_proto = Object.create(Phaser.Sprite.prototype);
PrefabCharMamangV2.prototype = PrefabCharMamangV2_proto;
PrefabCharMamangV2.prototype.constructor = PrefabCharMamangV2;

/* --- end generated code --- */
// -- user code here --
PrefabCharMamangV2.prototype.charUp = function(_idx, _showTime) {
	if (mEffectMute == false) {
		esIn.play();
	}
	this.visible = true;
	this._UP.play();
	
	this.idx = _idx;

	// 190313 add
	// 상태 변경 추가
	this.isIdle = false;
	
	// 등장해서 존재할 시간 셋팅
	var _rnd;
	if (_showTime.min != _showTime.max) {
		_rnd = this.game.rnd.integerInRange(_showTime.min, _showTime.max);
	}
	else {
		_rnd = _showTime.max;
	}
	
	// 몇초 후 사라질지 이벤트 등록
	this.charEvent = this.game.time.events.repeat(_rnd*1000, 1, this.hide, this);	
	
};

PrefabCharMamangV2.prototype.hitFear = function() {
	this.visible = true;
	this._IDLE.stop();
	this._HIT_FEAR.play();
	
	// 2017-07-08 delete
	// 190313 add
	// 상태 변경 추가
//	this.isIdle = false;
	
	this.game.state.getCurrentState().wordPanel.children[this.idx].hide();
};

PrefabCharMamangV2.prototype.hit = function() {
	this.visible = true;
	this._HIT_FEAR.stop();
	this._HIT.play();
};

PrefabCharMamangV2.prototype.hitDown = function() {
	this.visible = true;
	this._HIT.stop();
	this._HIT_DOWN.play();
};

PrefabCharMamangV2.prototype.fadeOut = function() {
	hole[this.idx] = 0;
	this.visible = false;
	
	// 2017-07-08 add
	this.isIdle = false;
};

PrefabCharMamangV2.prototype.showWordBox = function() {
	this.game.state.getCurrentState().wordPanel.children[this.idx].show(this.charWord);
	
	this._UP.stop();
	this._IDLE.play();
	
	// 190313 add
	// 상태 변경 추가
	this.isIdle = true;
};

PrefabCharMamangV2.prototype.animComplete = function() {
	this.showWordBox();
};

PrefabCharMamangV2.prototype.hide = function() {
	if (mEffectMute == false) {
		esOut.play();
	}
	
	if(itemSpawnTable[this.idx] != 0) {
		gCorrectIndex = this.idx;
		gState = 3; 
	}
	
	this.game.state.getCurrentState().wordPanel.children[this.idx].hide();
	this._IDLE.stop();
	this._DOWN.play();
	
	// 190313 add
	// 상태 변경 추가
	this.isIdle = false;
	
	// 190323 add
	correctWordList[this.idx] = "";
};

PrefabCharMamangV2.prototype.animHideComplete = function() {
	this.game.time.events.remove(this.charEvent);
	
	hole[this.idx] = 0;
	this.visible = false;
};

PrefabCharMamangV2.prototype.cancelEvent = function() {
	if (this._IDLE.isPlaying) {
		this._IDLE.stop();
		
		// 2017-07-08 delete
		// 190313 add
		// 상태 변경 추가
//		this.isIdle = false;
	}
	
	this.game.time.events.remove(this.charEvent);	// ok	
	this._HIT_DOWN.play();
};

PrefabCharMamangV2.prototype.setCharInfo = function(_word) {
	this.charWord = _word;
};