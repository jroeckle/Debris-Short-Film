define(['App', 'backbone', 'marionette', 'views/LandingView', 'views/FooterView', 'views/VideoBackgroundView', 'data/aboutData'],
	function (App, Backbone, Marionette, LandingView, FooterView, VideoBackgroundView, aboutData) {

	//Collection of the About View Data
	var aboutPageData = aboutData;

	return Backbone.Marionette.Controller.extend({
		initialize:function (options) {
			var that = this;

			//Setup default regions
			App.footerRegion.show(new FooterView());
			App.mainRegion.show(new LandingView());
			App.videoBGRegion.show(new VideoBackgroundView());

			//Setup Marionette Vents
			this.setupVentEvents();
		},

		setupVentEvents : function() {
			App.vent.on("menuclosed", function(){
				App.appRouter.navigate("#", {trigger: true});
			});

			App.vent.on("movieViewHidden", function(){
				App.moviePlayerRegion.empty();
			});
		},
		
		//gets mapped to in AppRouter's appRoutes
		index:function () {
			App.vent.trigger("closeSideContent"); //Ensure side content is closed
		},

		about:function(_slug) {

			requirejs(["models/AboutModel", "views/AboutView"], function(AboutModel, AboutView) {
				App.slideContentRegion.show(new AboutView({
					model : aboutPageData.get(_slug)
				}));
			});
		},

		watchmovie : function() {
			App.vent.trigger("closeSideContent");
			requirejs(["views/MovieView"], function(MovieView) {
				App.moviePlayerRegion.show(new MovieView());
			});
		}

	});
});