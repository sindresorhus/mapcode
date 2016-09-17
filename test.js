import test from 'ava';
import m from './';

test(t => {
	t.true(Array.isArray(m('')));
	t.deepEqual(
		m('Foo BR-AM 4J.Q2 Hawaii ZSR.3J - FRA 4J.Q2 Baz'),
		['BR-AM 4J.Q2', 'Hawaii ZSR.3J', 'FRA 4J.Q2']
	);
});
