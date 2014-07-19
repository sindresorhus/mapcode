'use strict';
var test = require('ava');
var mapcode = require('./');

test('find mapcodes', function (t) {
	var actual = mapcode('Foo BR-AM 4J.Q2 Hawaii ZSR.3J Bar FRA 4J.Q2 Baz');
	t.assert(actual[0] === 'BR-AM 4J.Q2');
	t.assert(actual[1] === 'Hawaii ZSR.3J');
	t.assert(actual[2] === 'FRA 4J.Q2');
});

test('always return an array', function (t) {
	t.assert(Array.isArray(mapcode('')));
});
