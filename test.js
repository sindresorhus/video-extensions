'use strict';
var test = require('ava');
var videoExtensions = require('./');

test(function (t) {
	t.assert(Array.isArray(videoExtensions));
	t.assert(videoExtensions.length > 0);
	t.end();
});
