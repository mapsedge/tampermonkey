// ==UserScript==
// @name         JSON Lint keyboard shortcuts
// @namespace    http://tampermonkey.net/
// @version      2025-06-05
// @description  try to take over the world!
// @author       Bill in Kansas City MO
// @match        https://jsonlint.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jsonlint.com
// @grant        none
// ==/UserScript==

(function () {
	"use strict";

	window.addEventListener("keydown", function (event) {
		// Check if the key pressed is F9
		if (event.key === "F9") {
			// Run your function here
			click_main_button();
		}
	});

	function click_main_button() {
		let button2 = document.querySelector(".primary-button");
		// Dispatch the event on the element
		button2.click();
	}
})();
