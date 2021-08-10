import test from 'ava';
import mapcode from './index.js';

test('main', t => {
	t.true(Array.isArray(mapcode('')));

	t.deepEqual(
		mapcode('Foo BR-AM 4J.Q2 Hawaii ZSR.3J - FRA 4J.Q2 Baz'),
		[
			'BR-AM 4J.Q2',
			'Hawaii ZSR.3J',
			'FRA 4J.Q2',
		],
	);
});
