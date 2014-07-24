define( [ 'App', 'marionette', 'text!templates/movieplayer.html'],
	function( App, Marionette, template) {
		
		return Marionette.ItemView.extend( {

			className : "movie-player",

			onShow : function() {
				App.vent.trigger("movieViewDisplayed");
				$('.movie-player-wrapper').css({
					"display" : "table"
				});
				$("body").addClass('movie-playing');
			},

			closeMovie : function() {
				$("body").removeClass('movie-playing');
				$('.movie-player-wrapper').hide();
				App.vent.trigger("movieViewHidden");
				App.appRouter.navigate("#", {trigger: true});
			},

			//Template HTML string
			template: _.template(template),

			// View Event Handlers
			events: {
				"click .close-btn"      : "closeMovie",
				"touchstart .close-btn" : "closeMovie"
			}
		});
	});