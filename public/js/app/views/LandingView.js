define( [ 'App', 'marionette', 'text!templates/landing.html'],
	function( App, Marionette, template) {
		//ItemView provides some default rendering logic
		return Marionette.ItemView.extend( {

			className : "landing-wrapper",

			//Template HTML string
			template: _.template(template)

		});
	});