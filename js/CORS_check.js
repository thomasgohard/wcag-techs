/*
 * Adapted for global.js in github.com/wet-boew/wet-boew-jekyll
 * Edited to remove the use of jQuery
 */
(function () {
	"use strict";

	// Test that browser supports CORS (uses test from prose/boot.js). Intended to reroute to fallback when Prose won't work. 
	if (!('withCredentials' in new XMLHttpRequest())) {
		var edit_link = document.getElementById('edit-link');

		if (edit_link !== null) {
			var edit_href = edit_link.getAttribute('href');

			edit_href = edit_href.replace(/^http:\/\/prose\.io\/#/, 'https://github.com/').replace(/\/edit\//, '/blob/')

			edit_link.setAttribute('href', edit_href);
		}
	}
}());
