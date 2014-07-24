define([ 'App', 'marionette', 'text!templates/about.html'],
	function( App, Marionette, template) {
		//ItemView provides some default rendering logic
		return Marionette.ItemView.extend( {

			className : "about",

			initialize : function() {
				$('#slide-menu').trigger("open.mm");
				this.setupVent();
			},

			setupVent : function() {
				//When Movie is in play close				
				App.vent.on("closeSideContent", function() {
					$('#slide-menu').trigger("close.mm");
				});
			},

			//Template HTML string
			template: _.template(template),

			closePanel : function() {
				$('#slide-menu').trigger("close.mm");
			},

			// View Event Handlers
			events: {
				"click .close-btn"      : "closePanel",
				"touchstart .close-btn" : "closePanel"
			}
		});
	});