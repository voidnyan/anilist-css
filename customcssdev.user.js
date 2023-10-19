// ==UserScript==
// @name         CustomCssDev
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  refresh css automatically from locally hosted dev environment
// @author       voidnyan
// @match        https://anilist.co/*
// @grant        none
// ==/UserScript==

(function () {
	"use strict";

	let version = 0;
	async function updateStyle() {
		const styleTag = document.querySelector("#customCSS-automail-styles");
		const newStyleTag = document.createElement("style");
		newStyleTag.setAttribute("id", "customCSS-automail-styles");
		newStyleTag.innerHTML = `
@import url('http://localhost:3005/css/about.css?v=${version}');
@import url('http://localhost:3005/css/activity-feed.css?v=${version}');
@import url('http://localhost:3005/css/badges.css?v=${version}');
@import url('http://localhost:3005/css/favourites.css?v=${version}');
@import url('http://localhost:3005/css/misc.css?v=${version}');
@import url('http://localhost:3005/css/nav.css?v=${version}');
@import url('http://localhost:3005/css/stats-wrap.css?v=${version}');
@import url('http://localhost:3005/css/width-reset.css?v=${version}');
        `;
		version++;
		document.head.append(newStyleTag);
		setTimeout(() => {
			styleTag.remove();
		}, 500);
	}

	setInterval(() => {
		updateStyle();
	}, 1000);
})();
