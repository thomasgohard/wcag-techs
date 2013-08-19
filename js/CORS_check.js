/*
 * Adapted for global.js in github.com/wet-boew/wet-boew-jekyll
 * Edited to remove the use of jQuery
 */
(function () {
	"use strict";

	// Test that browser supports CORS (uses test from prose/boot.js). Intended to reroute to fallback when Prose won't work. 
	if (!('withCredentials' in new XMLHttpRequest())) {
		var edit_button = document.getElementById('edit-button');

		if (edit_button !== null) {
			var edit_link = edit_button.getAttribute('href');

			edit_link = edit_link.replace(/^http:\/\/prose\.io\/#/, 'https://github.com/').replace(/\/edit\//, '/blob/')

			edit_button.setAttribute('href', edit_link);
		}
	}
}());
