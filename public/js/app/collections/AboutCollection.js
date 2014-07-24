define(["jquery","backbone","models/AboutModel", "collections/Collection"],
	function($, Backbone, AboutModel, Collection) {
	
		//A Collection of data for the about slide out
		var AboutCollection = Collection.extend({
			model: AboutModel
		});

		return AboutCollection;
});