require.config({
	baseUrl:"./js/app",

	paths:{
		// Core Libraries
		"jquery":"../libs/jquery/dist/jquery-1.11.1.min",
		"underscore":"../libs/lodash/dist/lodash",
		"backbone":"../libs/backbone/backbone",
		"marionette":"../libs/marionette/lib/core/backbone.marionette.min",
		"foundation" : "../libs/foundation/js/foundation.min",

		// Plugins
		"text":"../libs/text/text",
		"jquery.mmenu":"../libs/jQuery.mmenu/src/js/jquery.mmenu.min",
		"backbone.wreqr" : "../libs/backbone.wreqr/lib/backbone.wreqr",
		"backbone.eventbinder" : "../libs/backbone.eventbinder/lib/backbone.eventbinder",
		"backbone.babysitter" : "../libs/backbone.babysitter/lib/backbone.babysitter"
	},

	shim:{
		"jquery" : {
			exports : "jQuery"
		},
		"underscore": {
			exports: "_"
		},
		"backbone":{
			"deps":["jquery", "underscore"],
			// Exports the global window.Backbone object
			"exports":"Backbone"
		},

		"marionette":{
			"deps":["backbone"]
		},
	
		"foundation" : {
			"deps" : ["jquery"]
		},

		"jquery.mmenu" : {
			"deps":["jquery"]
		}
	}
});


require(["jquery","App", "routers/AppRouter", "controllers/Controller", "jquery.mmenu"],
	function ($, App, AppRouter, Controller) {

	$(function() {

		//Setup Slide Out Menu, contains About views
		$(".slide-menu")
			.mmenu({
				slidingSubmenus : true,
				offCanvas: {
					position  : "right",
					zposition : "front"
				}
			})
			.on("closing.mm", function(){
				$("body").addClass("mm-closing");
				console.log("$(document)", $("body").hasClass('mm-closing'));
			})
			.on("closed.mm", function(){
				$("body").removeClass("mm-closing");
				App.vent.trigger("menuclosed");
			})
			.addClass('loaded'); //Add loaded class so views don't display before everything is loaded

		//Centralized Application model
		App.appRouter = new AppRouter({
			controller:new Controller()
		});

		App.start();

	});

});