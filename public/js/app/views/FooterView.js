define( [ 'App', 'marionette', 'text!templates/footer.html'],
	function( App, Marionette, template) {
		
		return Marionette.ItemView.extend( {

			className : "columns",
			
			template: _.template(template)

		});
	});