define( [ 'App', 'marionette', 'text!templates/videoBG.html'],
	function( App, Marionette, template) {
		
		return Marionette.ItemView.extend( {
			
			browserHasHTML5Video : false, //flag if browser has html5 video capabilities

			initialize : function() {
				this.setupVent();

				//Modernzr HTML5 video check
				this.browserHasHTML5Video = ($("html").hasClass("video"));
			},

			setupVent : function() {

				var that = this;

				App.vent.on("movieViewDisplayed", function(){
					that.stopVideo();
				});

				App.vent.on("movieViewHidden", function(){
					that.startVideo();
				});
			},

			stopVideo : function() {
				if(this.browserHasHTML5Video) this.$el.find('.debrisbg')[0].pause();
			},

			startVideo : function() {
				if(this.browserHasHTML5Video) this.$el.find('.debrisbg')[0].play();
			},

			onShow : function() {
				this.startVideo();
			},

			//Template HTML string
			template: _.template(template),
		});
	});