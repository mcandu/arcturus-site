var dzrevapi;
var dzQuery =jQuery;
function dz_rev_slider_1(){
	if(dzQuery("#welcome").revolution == undefined){
		revslider_showDoubleJqueryError("#welcome");
	}else{
		dzrevapi = dzQuery("#welcome").show().revolution({
			sliderType:"standard",
			jsFileLocation:"revolution/js/",
			sliderLayout:"fullscreen",
			dottedOverlay:"none",
			delay:9000,
			particles: {startSlide: "first", endSlide: "last", zIndex: "1",
				particles: {
					number: {value: 25}, color: {value: "#ffffff"},
					shape: {
						type: "circle", stroke: {width: 0, color: "#ffffff", opacity: 1},
						image: {src: ""}
					},
					opacity: {value: 1, random: true, min: 0.25, anim: {enable: true, speed: 3, opacity_min: 0, sync: false}},
					size: {value: 2, random: true, min: 0.5, anim: {enable: true, speed: 5, size_min: 1, sync: false}},
					line_linked: {enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1},
					move: {enable: true, speed: 2, direction: "none", random: true, min_speed: 1, straight: false, out_mode: "out"}},
				interactivity: {
					events: {onhover: {enable: false, mode: "bubble"}, onclick: {enable: false, mode: "repulse"}},
					modes: {grab: {distance: 400, line_linked: {opacity: 0.5}}, bubble: {distance: 400, size: 40, opacity: 0.5}, repulse: {distance: 200}}
				}
			},
			revealer: {
				direction: "open_horizontal",
				color: "#ffffff",
				duration: "1500",
				delay: "0",
				easing: "Power2.easeInOut",
				overlay_enabled: true,
				overlay_color: "#000000",
				overlay_duration: "1500",
				overlay_delay: "0",
				overlay_easing: "Power2.easeInOut",
				spinner: "1",
				spinnerColor: "#006dd2",
			},
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
				onHoverStop:"off",
				arrows: {
					style:"uranus",
					enable:true,
					hide_onmobile:false,
					hide_onleave:false,
					tmp:'',
					left: {
						h_align:"left",
						v_align:"center",
						h_offset:10,
						v_offset:0
					},
					right: {
						h_align:"right",
						v_align:"center",
						h_offset:10,
						v_offset:0
					}
				}
			},
			viewPort: {
				enable:true,
				outof:"wait",
				visible_area:"80%",
				presize:true
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[868,768,960,720],
			lazyType:"single",
			parallax: {
				type:"scroll",
				origo:"slidercenter",
				speed:400,
				speedbg:0,
				speedls:0,
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"spinner2",
			stopLoop:"on",
			stopAfterLoops:0,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
		
	}
}
function dz_rev_slider_2(){
	if(dzQuery("#rev_slider_1071_1").revolution == undefined){
	revslider_showDoubleJqueryError("#rev_slider_1071_1");
	}else{
	dzrevapi = dzQuery("#rev_slider_1071_1").show().revolution({
		sliderType:"hero",
	jsFileLocation:"revolution/js/",
			sliderLayout:"",
			dottedOverlay:"none",
			delay:20000,
			navigation: {
			},
			responsiveLevels:[1240],
			visibilityLevels:[1240],
			gridwidth:[1240],
			gridheight:[700],
			lazyType:"none",
			parallax: {
				type:"mouse",
				origo:"slidercenter",
				speed:2000,
				levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
				type:"mouse",
			},
			shadow:0,
			spinner:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "60px",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				disableFocusListener:false,
			}
		});
	// CHANGE THE API REFERENCE, AND THE ELEMENTS YOU WISH TO BLUR / UNBLUR
	// SET START BLUR FACTOR, END BLUR FACTOR AND 

	var api = dzrevapi,
	ElementsToBlur = api.find('.toblur.tp-caption'),
	ElementsToUnBlur = api.find('.tounblur.tp-caption'),
	UnBlurFactor = 2,
	UnBlurStart = 3,
	UnBlurEnd = 0,
	BlurStart = 0,
	BlurEnd = 5,
	BlurFactor = 2,
	blurCall = new Object();


	// SOME CODE FOR BLUR AND UNBLUR ELEMENTS
	// EXTEND THE REVOLUTION SLIDER FUNCTION
	// CHANGE ONLY IF YOU KNOW WHAT YOU DO

	blurCall.inmodule = "parallax";
	blurCall.atposition = "start";
	blurCall.callback = function() { 
	var proc = api.revgetparallaxproc(),
	blur = UnBlurStart+(proc*UnBlurStart*UnBlurFactor)+UnBlurEnd,
	nblur = Math.abs(proc*BlurEnd*BlurFactor)+BlurStart;

	blur = blur<UnBlurEnd?UnBlurEnd:blur;
	nblur = nblur>BlurEnd?BlurEnd:nblur;

	ElementsToUnBlur = jQuery(ElementsToUnBlur.selector);               
	punchgs.TweenLite.set(ElementsToUnBlur,{'-webkit-filter':'blur('+(blur)+'px)', 'filter':'blur('+(blur)+'px)'});		
	punchgs.TweenLite.set(ElementsToBlur,{'-webkit-filter':'blur('+(nblur)+'px)', 'filter':'blur('+(nblur)+'px)'});		
	}

	api.bind("revolution.slide.layeraction",function (e) {
	blurCall.callback();
	});

	api.bind("revolution.slide.onloaded",function (e) {
	dzrevapi.revaddcallback(blurCall);
	});				
	}
}
function dz_rev_slider_3(){
	if(dzQuery("#rev_slider_1080_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_1080_1");
	}else{
		dzrevapi = dzQuery("#rev_slider_1080_1").show().revolution({
			sliderType:"carousel",
		jsFileLocation:"revolution/js/",
			sliderLayout:"auto",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				onHoverStop:"off",
			},
			carousel: {
				horizontal_align: "center",
				vertical_align: "center",
				fadeout: "on",
				vary_fade: "off",
				maxVisibleItems: 3,
				infinity: "on",
				space: 0,
				stretch: "off"
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1000,800,700,480],
			gridheight:[800,700,600,500],
			lazyType:"none",
			shadow:0,
			spinner:"off",
			stopLoop:"on",
			stopAfterLoops:0,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
}
function dz_rev_slider_4(){
	if(dzQuery("#rev_slider_14_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_14_1");
	}else{
		dzrevapi = dzQuery("#rev_slider_14_1").show().revolution({
			sliderType:"hero",
			jsFileLocation:"revolution/js/",
			sliderLayout:"fullscreen",
			dottedOverlay:"none",
			delay:9000,
			particles: {startSlide: "first", endSlide: "last", zIndex: "6",
				particles: {
					number: {value: 100}, color: {value: "#ffffff"},
					shape: {
						type: "circle", stroke: {width: 0, color: "#ffffff", opacity: 1},
						image: {src: ""}
					},
					opacity: {value: 1, random: true, min: 0.25, anim: {enable: false, speed: 3, opacity_min: 0, sync: false}},
					size: {value: 3, random: true, min: 0.5, anim: {enable: false, speed: 40, size_min: 1, sync: false}},
					line_linked: {enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1},
					move: {enable: true, speed: 1, direction: "top", random: true, min_speed: 1, straight: false, out_mode: "out"}},
				interactivity: {
					events: {onhover: {enable: true, mode: "bubble"}, onclick: {enable: false, mode: "repulse"}},
					modes: {grab: {distance: 400, line_linked: {opacity: 0.5}}, bubble: {distance: 400, size: 0, opacity: 0.01}, repulse: {distance: 200}}
				}
			},
			navigation: {
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[868,768,960,720],
			lazyType:"none",
			parallax: {
				type:"mouse",
				origo:"slidercenter",
				speed:400,
				levels:[1,2,3,4,5,10,15,20,25,46,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				disableFocusListener:false,
			}
		});
	}
}
function dz_rev_slider_6(){
	if(dzQuery("#rev_slider_14_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_14_1");
	}else{
		dzrevapi = dzQuery("#rev_slider_14_1").show().revolution({
			sliderType:"hero",
			jsFileLocation:"revolution/js/",
			sliderLayout:"fullscreen",
			dottedOverlay:"none",
			delay:9000,
			particles: {startSlide: "first", endSlide: "last", zIndex: "6",
				particles: {
					number: {value: 100}, color: {value: "#ffffff"},
					shape: {
						type: "circle", stroke: {width: 0, color: "#ffffff", opacity: 1},
						image: {src: ""}
					},
					opacity: {value: 1, random: true, min: 0.25, anim: {enable: false, speed: 3, opacity_min: 0, sync: false}},
					size: {value: 3, random: true, min: 0.5, anim: {enable: false, speed: 40, size_min: 1, sync: false}},
					line_linked: {enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1},
					move: {enable: true, speed: 1, direction: "top", random: true, min_speed: 1, straight: false, out_mode: "out"}},
				interactivity: {
					events: {onhover: {enable: true, mode: "bubble"}, onclick: {enable: false, mode: "repulse"}},
					modes: {grab: {distance: 400, line_linked: {opacity: 0.5}}, bubble: {distance: 400, size: 0, opacity: 0.01}, repulse: {distance: 200}}
				}
			},
			navigation: {
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[768,768,960,720],
			lazyType:"none",
			parallax: {
				type:"mouse",
				origo:"slidercenter",
				speed:400,
				levels:[1,2,3,4,5,10,15,20,25,46,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				disableFocusListener:false,
			}
		});
	}
}
function dz_rev_slider_5(){
	if(dzQuery("#rev_slider_265_1").revolution == undefined){
	  revslider_showDoubleJqueryError("#rev_slider_265_1");
	}else{
	  dzrevapi = dzQuery("#rev_slider_265_1").show().revolution({
		sliderType:"standard",
		sliderLayout:"fullwidth",
		dottedOverlay:"none",
		delay:9000,
		navigation: {
			keyboardNavigation: "on",
			keyboard_direction: "horizontal",
			mouseScrollNavigation: "off",
			onHoverStop: "off",
			touch: {
				touchenabled: "on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			arrows: {
				style: "gyges",
				enable: true,
				hide_onmobile: false,
				hide_onleave: false,
				tmp: '',
				left: {
					h_align: "left",
					v_align: "center",
					h_offset: 10,
					v_offset: 0
				},
				right: {
					h_align: "right",
					v_align: "center",
					h_offset: 10,
					v_offset: 0
				}
			},
		},
		visibilityLevels:[1240,1024,778,480],
		gridwidth:1920,
		gridheight:766,
		lazyType:"none",
		shadow:0,
		spinner:"spinner0",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		disableProgressBar:"on",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
		  simplifyAll:"off",
		  nextSlideOnWindowFocus:"off",
		  disableFocusListener:false,
		}
	  });
	}
}
function dz_rev_slider_7(){
	if(dzQuery("#welcome").revolution == undefined){
		revslider_showDoubleJqueryError("#welcome");
	}else{
		dzrevapi = dzQuery("#welcome").show().revolution({
			sliderType:"standard",
			jsFileLocation:"revolution/js/",
			sliderLayout:"fullwidth",
			dottedOverlay:"none",
			delay:9000,
			particles: {startSlide: "first", endSlide: "last", zIndex: "1",
				particles: {
					number: {value: 25}, color: {value: "#ffffff"},
					shape: {
						type: "circle", stroke: {width: 0, color: "#ffffff", opacity: 1},
						image: {src: ""}
					},
					opacity: {value: 1, random: true, min: 0.25, anim: {enable: true, speed: 3, opacity_min: 0, sync: false}},
					size: {value: 2, random: true, min: 0.5, anim: {enable: true, speed: 5, size_min: 1, sync: false}},
					line_linked: {enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1},
					move: {enable: true, speed: 2, direction: "none", random: true, min_speed: 1, straight: false, out_mode: "out"}},
				interactivity: {
					events: {onhover: {enable: false, mode: "bubble"}, onclick: {enable: false, mode: "repulse"}},
					modes: {grab: {distance: 400, line_linked: {opacity: 0.5}}, bubble: {distance: 400, size: 40, opacity: 0.5}, repulse: {distance: 200}}
				}
			},
			revealer: {
				direction: "open_horizontal",
				color: "#ffffff",
				duration: "1500",
				delay: "0",
				easing: "Power2.easeInOut",
				overlay_enabled: true,
				overlay_color: "#000000",
				overlay_duration: "1500",
				overlay_delay: "0",
				overlay_easing: "Power2.easeInOut",
				spinner: "1",
				spinnerColor: "#006dd2",
			},
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
				onHoverStop:"off",
				arrows: {
					style:"uranus",
					enable:true,
					hide_onmobile:false,
					hide_onleave:false,
					tmp:'',
					left: {
						h_align:"left",
						v_align:"center",
						h_offset:10,
						v_offset:0
					},
					right: {
						h_align:"right",
						v_align:"center",
						h_offset:10,
						v_offset:0
					}
				}
			},
			viewPort: {
				enable:true,
				outof:"wait",
				visible_area:"80%",
				presize:true
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[868,768,960,720],
			lazyType:"single",
			parallax: {
				type:"scroll",
				origo:"slidercenter",
				speed:400,
				speedbg:0,
				speedls:0,
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"spinner2",
			stopLoop:"on",
			stopAfterLoops:0,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
		
	}
}