define(['jquery', 'backbone', 'marionette', 'underscore'],
	function ($, Backbone, Marionette, _) {
		var App = new Backbone.Marionette.Application();

		//Organize Application into regions corresponding to DOM elements
		App.addRegions({
			slideContentRegion : ".slide-content",
			footerRegion       : "footer",
			mainRegion         : "#main",
			videoBGRegion      : ".video-bg",
			moviePlayerRegion  : ".movie-player-wrapper"
		});

		function isMobile() {
			var ua = (navigator.userAgent || navigator.vendor || window.opera, window, window.document);
			return (/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
		}

		App.static = {};

		App.static.mobile = isMobile();

		App.addInitializer(function (options) {
			Backbone.history.start();
		});

		return App;
	});