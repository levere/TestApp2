montageDefine("6a22cd0","ui/base/abstract-slider",{dependencies:["./abstract-control","../../composer/translate-composer","../../composer/key-composer","collections/dict"],factory:function(e,t){var n=e("./abstract-control").AbstractControl,r=e("../../composer/translate-composer").TranslateComposer,i=e("../../composer/key-composer").KeyComposer;e("collections/dict");var a=t.AbstractSlider=n.specialize({constructor:{value:function a(){if(this.constructor===a)throw Error("AbstractSlider cannot be instantiated.");n.constructor.call(this),this._propertyNamesUsed={},this.addOwnPropertyChangeListener("_sliderMagnitude",this),this.addOwnPropertyChangeListener("_min",this),this.addOwnPropertyChangeListener("_max",this),this.addOwnPropertyChangeListener("_value",this),this.addOwnPropertyChangeListener("_step",this),this.addOwnPropertyChangeListener("axis",this),this.axis="horizontal",this.defineBinding("classList.has('montage--disabled')",{"<-":"!enabled"}),this.defineBinding("classList.has('montage-Slider--active')",{"<-":"active"})}},enterDocument:{value:function(e){if(e){this._translateComposer=new r,this._translateComposer.identifier="thumb",this._translateComposer.axis=this.axis,this._translateComposer.hasMomentum=!1,this.addComposerForElement(this._translateComposer,this._sliderThumbElement),this._transform="webkitTransform"in this.element.style?"webkitTransform":"MozTransform"in this.element.style?"MozTransform":"oTransform"in this.element.style?"oTransform":"transform";var t=this._propertyNamesUsed;t._min||(this.min=this.element.getAttribute("min")||this._min),t._max||(this.max=this.element.getAttribute("max")||this._max),t._step||(this.step=this.element.getAttribute("step")||this._step),t._value||(this.value=this.element.getAttribute("value")||this._value),delete this._propertyNamesUsed,this.element.setAttribute("role","slider"),this.element.tabIndex="-1",this._upKeyComposer=i.createKey(this,"up","increase"),this._downKeyComposer=i.createKey(this,"down","decrease"),this._rightKeyComposer=i.createKey(this,"right","increase"),this._leftKeyComposer=i.createKey(this,"left","decrease")}}},prepareForActivationEvents:{value:function(){this._translateComposer.addEventListener("translateStart",this,!1),this._translateComposer.addEventListener("translate",this,!1),this._translateComposer.addEventListener("translateEnd",this,!1),this._sliderThumbElement.addEventListener("touchstart",this,!1),document.addEventListener("touchend",this,!1),this._sliderThumbElement.addEventListener("mousedown",this,!1),document.addEventListener("mouseup",this,!1),this._upKeyComposer.addEventListener("keyPress",this,!1),this._downKeyComposer.addEventListener("keyPress",this,!1),this._leftKeyComposer.addEventListener("keyPress",this,!1),this._rightKeyComposer.addEventListener("keyPress",this,!1)}},willDraw:{value:function(){this._sliderMagnitude=this._calculateSliderMagnitude()}},_previousPercentage:{value:null},draw:{value:function(){"vertical"===this.axis?this._isUpdatingTranslate?(this._sliderThumbElement.style[this._transform]="translate3d(0,"+.01*(this._previousPercentage-this._valuePercentage)*this._sliderMagnitude+"px,0)",this._isUpdatingTranslate=!1):(this._sliderThumbElement.style.top=100-this._valuePercentage+"%",this._sliderThumbElement.style.left=0,this._sliderThumbElement.style[this._transform]="translate3d(0,0,0)",this._previousPercentage=this._valuePercentage):this._isUpdatingTranslate?(this._sliderThumbElement.style[this._transform]="translate3d("+.01*(this._valuePercentage-this._previousPercentage)*this._sliderMagnitude+"px,0,0)",this._isUpdatingTranslate=!1):(this._sliderThumbElement.style.left=this._valuePercentage+"%",this._sliderThumbElement.style.top=0,this._sliderThumbElement.style[this._transform]="translate3d(0,0,0)",this._previousPercentage=this._valuePercentage),this.element.setAttribute("aria-valuemax",this.max),this.element.setAttribute("aria-valuemin",this.min),this.element.setAttribute("aria-valuenow",this.value)}},acceptsActiveTarget:{value:!0},handleTouchstart:{value:function(){this.active=!0,this.element.focus(),this._isUpdatingTranslate=!0}},handleTouchend:{value:function(){this.active=!1}},handleMousedown:{value:function(e){this.active=!0,this.element.focus(),e.preventDefault(),this._isUpdatingTranslate=!0}},handleMouseup:{value:function(){this.active=!1}},_isUpdatingTranslate:{value:!1},handleThumbTranslateStart:{value:function(e){this._startTranslate="vertical"===this.axis?e.translateY:e.translateX,this._startValue=this.value}},handleThumbTranslate:{value:function(e){this.value="vertical"===this.axis?this._startValue+(this._startTranslate-e.translateY)/this._sliderMagnitude*(this._max-this._min):this._startValue+(e.translateX-this._startTranslate)/this._sliderMagnitude*(this._max-this._min),this._isUpdatingTranslate=!0}},handleThumbTranslateEnd:{value:function(){this.active=!1,this._isUpdatingTranslate=!1}},_increase:{value:function(){var e="number"==typeof this.min?this.min:0,t=this.value-e,n=this.step|(this.max-this.min)/100;t%n?0>t?t-=t%n:t+=n-t%n:t+=n,this.value=t+e}},_decrease:{value:function(){var e="number"==typeof this.min?this.min:0,t=this.value-e,n=this.step|(this.max-this.min)/100;t-=t%n?t>0?t%n:n+t%n:n,this.value=t+e}},handleKeyPress:{value:function(e){this.enabled&&("increase"===e.identifier?this._increase():"decrease"===e.identifier&&this._decrease())}},surrenderPointer:{value:function(){return!1}},active:{value:!1},_min:{value:0},_max:{value:100},_step:{value:"any"},min:{get:function(){return this._min},set:function(e){isNaN(e=parseFloat(e))||this._min!==e&&(this._min=e)}},max:{get:function(){return this._max},set:function(e){isNaN(e=parseFloat(e))||this._max!==e&&(this._max=e)}},step:{get:function(){return this._step},set:function(e){!isNaN(e=parseFloat(e))&&e>=0&&this._step!==e&&(this._step=e)}},_value:{value:50},value:{get:function(){return this._value},set:function(e){isNaN(e=parseFloat(e))||(e>this._max?e=this._max:this._min>e&&(e=this._min),this._value!==e&&(this._value=e))}},enabled:{value:!0},axis:{value:null},_sliderThumbElement:{value:null},_translateComposer:{value:null},_transform:{value:null},_transition:{value:null},_sliderMagnitude:{value:null},_startTranslate:{value:null},_startValue:{value:null},_valuePercentage:{value:null},_calculateSliderMagnitude:{value:function(){var e=window.getComputedStyle(this._element);return"vertical"===this.axis?this._element.clientHeight-parseFloat(e.getPropertyValue("padding-top"))-parseFloat(e.getPropertyValue("padding-bottom")):this._element.clientWidth-parseFloat(e.getPropertyValue("padding-left"))-parseFloat(e.getPropertyValue("padding-right"))}},handleAxisChange:{value:function(){this._translateComposer&&(this._translateComposer.axis=this.axis),"vertical"===this.axis?(this.classList.add("montage-Slider--vertical"),this.classList.remove("montage-Slider--horizontal")):(this.classList.remove("montage-Slider--vertical"),this.classList.add("montage-Slider--horizontal"))}},_propertyRegex:{value:/_sliderMagnitude|_min|_max|_value|_step/},handlePropertyChange:{value:function(e,t){if(null!==t.match(this._propertyRegex)){if(this._propertyNamesUsed&&(this._propertyNamesUsed[t]=!0),this._value<=this._min)this._value=this._min;else{var n=this._value-this._min,r=n%this._step;if(r){var i=r>=.5*this._step&&this._value-r+this._step<=this._max;this._value=i?this._value-r+this._step:this._value-r}}this._value>this._max&&(this._value=this._max),this._valuePercentage=100*(this._value-this._min)/(this._max-this._min),this.needsDraw=!0}}}})}});