montageDefine("6a22cd0","composer/swipe-composer",{dependencies:["../core/core","./composer"],factory:function(e,t){var n=(e("../core/core").Montage,e("./composer").Composer);t.SwipeComposer=n.specialize({load:{value:function(){document.addEventListener("touchstart",this,!0)}},unload:{value:function(){document.removeEventListener("touchstart",this,!0)}},_startX:{enumerable:!1,value:0},_startY:{enumerable:!1,value:0},_deltaX:{enumerable:!1,value:0},_deltaY:{enumerable:!1,value:0},_threshold:{enumerable:!1,value:50},_thresholdSwipeAngle:{enumerable:!1,value:20},_startTimestamp:{enumerable:!1,value:0},captureTouchstart:{value:function(e){this._reset();var t=e.touches,n=t[0];this._startX=n.clientX,this._startY=n.clientY,this._startTimestamp=e.timeStamp,document.addEventListener("touchmove",this,!0),document.addEventListener("touchend",this,!0),document.addEventListener("touchcancel",this,!0)}},_reset:{enumerable:!1,value:function(){this._startX=0,this._startY=0,this._deltaX=0,this._deltaY=0,this._startSwipeAngle=null}},_startSwipeAngle:{enumerable:!1,value:null},captureTouchcancel:{value:function(){document.removeEventListener("touchmove",this,!0),document.removeEventListener("touchend",this,!0),document.removeEventListener("touchcancel",this,!0)}},captureTouchmove:{value:function(e){e.preventDefault();var t,n,s=e.changedTouches[0];this._deltaX=s.clientX-this._startX,this._deltaY=s.clientY-this._startY;var i=this._deltaX,a=this._deltaY,o=this._threshold,r=this._findSwipeAngle(i,a);null!=this._startSwipeAngle&&Math.abs(this._startSwipeAngle-r)>this._thresholdSwipeAngle&&(this._startSwipeAngle=null),null==this._startSwipeAngle&&(this._startSwipeAngle=r,this._startX=s.clientX,this._startY=s.clientY,this._deltaX=0,this._deltaY=0),i>o&&a>o?n="DIAGONAL":i>o&&o>a?n=this._deltaX>0?"RIGHT":"LEFT":o>i&&a>o&&(n=this._deltaY>0?"DOWN":"UP"),(0!=i||0!=a)&&(t=document.createEvent("CustomEvent"),t.initCustomEvent("swipemove",!0,!1,null),t.direction=n,t.angle=this._startSwipeAngle,t.velocity=this._findVelocity(e.timeStamp-this._startTimestamp),t.startX=this._startX,t.startY=this._startY,t.dX=this._deltaX,t.dY=this._deltaY,this.dispatchEvent(t))}},_findSwipeAngle:{enumerable:!1,value:function(e,t){var n=-1*(180*Math.atan2(t,e)/3.14);return n.toFixed(2)}},captureTouchend:{value:function(e){if(null!=e){var t,n,s=Math.abs(this._deltaX),i=Math.abs(this._deltaY),a=this._threshold;if(a>s&&a>i)return this.captureTouchcancel(),void 0;document.removeEventListener("touchmove",this,!0),s>a&&i>a?t="DIAGONAL":s>a&&a>i?t=this._deltaX>0?"RIGHT":"LEFT":a>s&&i>a&&(t=this._deltaY>0?"DOWN":"UP"),n=document.createEvent("CustomEvent"),n.initCustomEvent("swipe",!0,!1,null),n.direction=t,n.angle=this._startSwipeAngle,n.velocity=this._findVelocity(e.timeStamp-this._startTimestamp),n.startX=this._startX,n.startY=this._startY,n.dX=this._deltaX,n.dY=this._deltaY,this.dispatchEvent(n)}}},_findVelocity:{enumerable:!1,value:function(e){return Math.sqrt(this._deltaX*this._deltaX+this._deltaY*this._deltaY)/e}}})}});