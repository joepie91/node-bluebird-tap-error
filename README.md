# bluebird-tap-error

Like `.tap` in Bluebird, but for errors. Sees errors, but doesn't catch them. Handy when you want to peek at errors, but want to do the actual error handling elsewhere.

<a href="https://gratipay.com/joepie9"><img src="//img.shields.io/gratipay/joepie91.svg"></a>

## License

[WTFPL](http://www.wtfpl.net/txt/copying/) or [CC0](https://creativecommons.org/publicdomain/zero/1.0/), whichever you prefer. A donation and/or attribution are appreciated, but not required.

## Donate

My income consists entirely of donations for my projects. If this module is useful to you, consider [making a donation](http://cryto.net/~joepie91/donate.html)!

You can donate using Bitcoin, PayPal, Gratipay, Flattr, cash-in-mail, SEPA transfers, and pretty much anything else.

## Contributing

Pull requests welcome. Please make sure your modifications are in line with the overall code style, and ensure that you're editing the `.coffee` files, not the `.js` files.

Build tool of choice is `gulp`; simply run `gulp` while developing, and it will watch for changes.

Be aware that by making a pull request, you agree to release your modifications under the licenses stated above.

## Usage

A simple example:

```javascript
var Promise = require("bluebird");
var tapError = require("bluebird-tap-error");

Promise.try(function() {
	return someBrokenAsyncThing();
}).catch(tapError(function(err) {
	console.log("We saw an error!", err);
})).catch(function(err) {
	/* The actual error handling goes here. */
})
```

## API

### tapError(func)

Wrap an error handling function in this function to make it tap into errors.

If an error occurred, it will be received by `func` (like it would happen for a normal `.catch`). The error is passed through as-is so that it can be handled elsewhere.

Any return value from this callback is ignored - including when the return value is a rejected Promise. You can *only* look at the error, and nothing else.

* __func__: The callback to use.
