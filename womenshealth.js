// ==UserScript==
// @name         Women's Health Unblur Content
// @namespace    http://tampermonkey.net/
// @version      2025-03-22
// @description  Unblurs blurred content on Women's Health website
// @author       Bill in Kansas City, MO
// @match        https://www.womenshealthmag.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=womenshealthmag.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(()=>{
        document.querySelectorAll('[data-journey-content]:not([data-journey-unblur])')
            .forEach(el => el.setAttribute('data-journey-unblur', ''));
        console.log('Content unblurred. You\'re welcome.');
    }, 1000)
    // Your code here...
})();
