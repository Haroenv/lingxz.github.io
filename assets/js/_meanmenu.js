/*!
* jQuery meanMenu v2.0.8
* @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
*
*/
/*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT
* HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR
* FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE
* OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS,
* COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.COPYRIGHT HOLDERS WILL NOT
* BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL
* DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION.
*
* You should have received a copy of the GNU General Public License
* along with this program. If not, see <http://gnu.org/licenses/>.
*
* Find more information at http://www.meanthemes.com/plugins/meanmenu/
*
*/

$(document).ready(function(){
	// get browser width
	var currentWidth = window.innerWidth || document.documentElement.clientWidth;
	var $btn = $('nav.greedy-nav button');
	var $vlinks = $('nav.greedy-nav .visible-links');
	var $hlinks = $('nav.greedy-nav .hidden-links');
	var meanScreenWidth = 480;
	$vlinks.children().clone().prependTo($hlinks);


  	$btn.on('click', function() {
		if ($hlinks.hasClass('hidden')) {
		  $hlinks.slideToggle(300, function(){
		  });
		  $hlinks.toggleClass('hidden');
		} else {
		  $hlinks.slideToggle(300, function(){
		    $hlinks.toggleClass('hidden');
		  });
		}
		$btn.toggleClass('is-active');
		// clearTimeout(timer);
	});

	// $hlinks.on('mouseleave', function() {
	// 	// Mouse has left, start the timer
	// 	timer = setTimeout(function() {
	// 	  $hlinks.addClass('hidden');
	// 	  $btn.toggleClass('is-active');
	// 	}, closingTime);
	// 	}).on('mouseenter', function() {
	// 	// Mouse is back, cancel the timer
	// 	clearTimeout(timer);
	// })

	//detect known mobile/tablet usage
	var isMobile = false;
	if ( (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i)) ) {
			isMobile = true;
	}

	if ( (navigator.userAgent.match(/MSIE 8/i)) || (navigator.userAgent.match(/MSIE 7/i)) ) {
		// add scrollbar for IE7 & 8 to stop breaking resize function on small content sites
			jQuery('html').css("overflow-y" , "scroll");
	}
	
	var showMeanMenu = function() {
		if (currentWidth <= meanScreenWidth) {
			$vlinks.addClass("hidden");
			$btn.removeClass('hidden');
		} else {
			meanOriginal();
		}
	}

	var meanOriginal = function() {
		$vlinks.removeClass("hidden");
		$btn.addClass("hidden");
	}

	if (!isMobile) {
		// reset menu on resize above meanScreenWidth
		jQuery(window).resize(function () {
				currentWidth = window.innerWidth || document.documentElement.clientWidth;
				if (currentWidth > meanScreenWidth) {
						meanOriginal();
				} else {
					meanOriginal();
				}
				if (currentWidth <= meanScreenWidth) {
						showMeanMenu();
				} else {
					meanOriginal();
				}
		});
	}
	jQuery(window).resize(function () {
			// get browser width
			currentWidth = window.innerWidth || document.documentElement.clientWidth;

			if (!isMobile) {
					meanOriginal();
					if (currentWidth <= meanScreenWidth) {
							showMeanMenu();
					}
			} else {
					if (currentWidth <= meanScreenWidth) {
						showMeanMenu();
					} else {
						meanOriginal()
					}
			}
	});

	// run main menuMenu function on load
	showMeanMenu();

});
