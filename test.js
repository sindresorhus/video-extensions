import test from 'ava';
import videoExtensions from './video-extensions.json';

test('main', t => {
	t.true(Array.isArray(videoExtensions));
	t.true(videoExtensions.length > 0);
});
