
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.3 (Phaser v2.6.2)


/**
 * Preloader.
 */
function Preloader() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Preloader_proto = Object.create(Phaser.State.prototype);
Preloader.prototype = Preloader_proto;
Preloader.prototype.constructor = Preloader;

Preloader.prototype.init = function () {
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	
};

Preloader.prototype.preload = function () {
	
	this.beforePreload();
	
	this.load.pack('preloader', 'assets/pack.json');
	
	this.afterPreload();
	
};

Preloader.prototype.create = function () {
	
	this.beforeCreate();
	
	this.afterCreate();
	
};

/* --- end generated code --- */
// -- user code here --
// 로딩 이미지 로드.
Preloader.prototype.beforePreload = function () {
	this.add.sprite(0.0, 0.0, 'LoadingBackImg');
	this.add.sprite(0.0, 0.0, 'GamesRated2');
	
	this.loadingTxtAni = new LoadingTxtV1(this.game, 512.0, 490.0);	
	this.add.existing(this.loadingTxtAni);
};
//로딩 이미지 플레이
Preloader.prototype.afterPreload = function () {
	this.loadingTxtAni.animations.play("PLAY");
	
//	this.soundManager = SoundManager.getInstance();
//	var fx = this.game.add.audioSprite('sfx');
//	this.soundManager.setSound(fx);
//	
//	var bgmfx = this.game.add.audioSprite('sBgmfx');
//	this.soundManager.setSoundBgm(bgmfx);
	
//	this.soundManager = SoundManager.getInstance(this);
//	for(var i = 0; i < this.soundManager.SoundNames.length; i++){
//		var name = this.soundManager.SoundNames[i];
//		var bgmfx = this.game.add.audio(name);
//		bgmfx.play();
//		this.soundManager.setSoundArray(bgmfx);
//	}
	
	//this.setWindowEvent();
	
	//setFriendVisitePopup();
	//setWindowEvent();
};
//사용할 싱글톤 스크립트 연결함
Preloader.prototype.createScript = function(){
	that = this;
	this.config = Config.getInstance();
	this.gameData = GameData.getInstance();
	this.soundManager = SoundManager.getInstance(this);
};
//Preloader.prototype.setWindowEvent = function(){
//	//event message Listener...	
//	var parentHomeDomain = this.config.getGameAPIURL().replace("/game/", "");
//	console.log("parentHomeDomain : " + parentHomeDomain);
//	
//	window.addEventListener('message', function (event) {
//		console.log("Preloader :: setWindowEvent -> event.data " + event.data);
//		if (event.origin === parentHomeDomain) {
//			if (event.data.message && event.data.message === 'returnSelectedChannel') {
//				this.gameData.gameURL = event.data.channel_dns;
//			}
//		}
//	});
//};
//프리로드전 생성할 부분
Preloader.prototype.beforeCreate = function () {
	this.createScript();
};
//프리로드후 생성할 부분
Preloader.prototype.afterCreate = function () {
	setFriendVisitePopup();	
	console.log("afterCreate...");	
	setTimeout(this.showGoGameMenuButton,1500);
	this.fGoGameStart = this.add.button(438.0, 465.0, 'PopupBtnGameStart', this.goGameMenu, this, 1, 0, 2, 3);
	this.fGoGameStart.visible = false;
};
//메뉴 버튼을 눌렀을때 처리.
Preloader.prototype.showGoGameMenuButton = function(){
	that.loadingTxtAni.visible = false;
	that.fGoGameStart.visible = true;
};
//메뉴로 가는 부분 처리.
Preloader.prototype.goGameMenu = function() {
	that.fGoGameStart.inputEnabled = false;	
	that.initVolumeDataLoad();
	that.soundManager.play(that.soundManager.SOUND_TYPE.Click);
	that.gameData.isGameHelp = false; 
	that.game.state.start("MenuV2");
};

Preloader.prototype.update = function() {
	
};
//친구 초대 팝업 셋팅
function setFriendVisitePopup() {
	console.log("Preloader::setFriendVisitePopup -> setFriendVisitePopup");

	var host = that.config.getParentsURL();
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', host + '/assets/javascripts/tt-sdk.js');
	script.onload = function() {
		ttsdk.onInit = function () {
			//로드가 될때 init이 된
			 if(that.gameData.isFriendVisitePopup === true){
				 return true; // 초대 펍업 열기				 
			 } else {
				 return false; // 초대 팝업 열지 않고 무시
			 }
		 }
		ttsdk.init(10000, {
			home: that.config.getParentsURL(),
			coin: that.config.getCoinURL(),
			pan: that.config.getPanURL()
		});
		console.log("Preloader::tt-sdk -> script.onload");
		//쿠키지우기..
		//document.cookie = "accepted_invitation=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.malangmalang.com; path=/";
		//delCookie(accepted_invitation, ".malangmalang.com");
	};
	document.getElementsByTagName('head')[0].appendChild(script);

	var stylesheet = document.createElement('link');
	stylesheet.setAttribute('rel', 'stylesheet');
	stylesheet.setAttribute('type', 'text/css');
	stylesheet.setAttribute('href', host + '/assets/stylesheets/tt-sdk.css');
	document.getElementsByTagName('head')[0].appendChild(stylesheet);
}

//불륨 읽기
var mPreDataConfigVolumeDatas = [ 0, 0, 50, 50 ]; // 로컬스토리지
Preloader.prototype.initVolumeDataLoad = function() {
	var restoredData = localStorage.getItem('configVolumeDatas');
	if (restoredData === null) {
		localStorage.setItem('configVolumeDatas', mPreDataConfigVolumeDatas);
		restoredData = localStorage.getItem('configVolumeDatas');
	}
	mPreDataConfigVolumeDatas = restoredData.split(',');
	
	if(mPreDataConfigVolumeDatas[0] === "1"){
		this.gameData.backgroundVolume = 0;				
	} else {
		this.gameData.backgroundVolume = mPreDataConfigVolumeDatas[2];
	}	
	if(mPreDataConfigVolumeDatas[1] === "1"){
		this.gameData.effectVolume = 0;		
	} else {
		this.gameData.effectVolume = mPreDataConfigVolumeDatas[3];
	}
};

//
//function setWindowEvent(){
//	 //event message Listener...
//	 //var parentHomeDomain = that.config.getGameAPIURL().replace("com/game/", "com");
//	 var configUrlType = that.config.getURLType();
//	 console.log("MenuV2 :: setWindowEvent -> configUrlType " + configUrlType);
//		
//	 if(configUrlType === that.config.URL_TYPE.DEV || configUrlType === that.config.URL_TYPE.LIVE || configUrlType === that.config.URL_TYPE.STG){
//		 var parentHomeDomain = that.config.getParentsURL();
//		 console.log("parentHomeDomain : " + parentHomeDomain);
//		 window.addEventListener('message', function (event) {
//			 console.log("MenuV2 :: setWindowEvent -> event.data " + event.data);
//			 if (event.origin === parentHomeDomain) {
//				 if (event.data.message && event.data.message === 'returnSelectedChannel') {
//				 that.gameData.gameURL = event.data.channel_dns;
//				 that.gameData.channelIndex = event.data.idx;
//				 console.log("MenuV2 :: setWindowEvent -> that.gameData.gameURL " +	 that.gameData.gameURL);
//				 console.log("MenuV2 :: setWindowEvent -> that.gameData.channelIndex " + that.gameData.channelIndex);
//				 }
//			 }
//		 });
//	 }
//}
