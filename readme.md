# video-extensions [![Build Status](https://travis-ci.com/sindresorhus/video-extensions.svg?branch=master)](https://travis-ci.com/sindresorhus/video-extensions)

> List of [video file](https://en.wikipedia.org/wiki/Video_file_format) extensions

*The list is just a [JSON file](video-extensions.json) and can be used wherever.*

## Install

```
$ npm install video-extensions
```

## Usage

```js
const videoExtensions = require('video-extensions');

console.log(videoExtensions);
//=> […, 'webm', 'wmv']
```

## Related

- [is-video](https://github.com/sindresorhus/is-video) - Check if a filepath is a video file
