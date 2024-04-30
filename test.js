import test from 'ava';
import videoExtensions from './index.js';

test('main', t => {
	t.true(Array.isArray(videoExtensions));
	t.true(videoExtensions.length > 0);
});
