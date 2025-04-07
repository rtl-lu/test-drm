# THEOplayer

THEOplayer is the universal video player solution created by THEO Technologies. It enables you to quickly deliver cross-platform content playback.

## Prerequisites

- A valid THEOplayer license. Request yours via our [THEOportal](https://portal.theoplayer.com).

## Included features

The THEOplayer SDK consists of modular features. This package includes the following features: `hls`, `dash`, `ui`, `texttrackstyle-ui`, `webaudio`, `chromecast`, `airplay`, `ads`, `cache`, `mediatailor`, `multiview`, `hbbtv`

If you need a different set of features, you can install a different variant of this package:

- [theoplayer](https://www.npmjs.com/package/theoplayer)
- [@theoplayer/basic-hesp](https://www.npmjs.com/package/@theoplayer/basic-hesp)
- [@theoplayer/basic-hls](https://www.npmjs.com/package/@theoplayer/basic-hls)
- [@theoplayer/basic-dash](https://www.npmjs.com/package/@theoplayer/basic-dash)
- [@theoplayer/basic-hls-dash](https://www.npmjs.com/package/@theoplayer/basic-hls-dash)
- [@theoplayer/extended](https://www.npmjs.com/package/@theoplayer/extended)
- [@theoplayer/theoads](https://www.npmjs.com/package/@theoplayer/theoads)

(You should only install _one_ of the above-mentioned variants at a time.)

## Installation

Install using your favorite package manager for Node (such as `npm` or `yarn`):

```bash
npm install @theoplayer/extended
```

You can also install a specific version instead:

```bash
npm install @theoplayer/extended@6.0.0
```

Note that versions earlier than 2.82.0 are not available on the public npm registry.
Earlier versions are available through our [THEOportal](https://portal.theoplayer.com).

## Usage

Add the THEOplayer library to your JavaScript web app:

```javascript
import * as THEOplayer from '@theoplayer/extended';

// or if you only need the chromeless version (without UI):
import * as THEOplayer from '@theoplayer/extended/chromeless';
```

> **Note**
> Starting with THEOplayer 6.0, this will import a JavaScript module targeting modern browsers, using modern JavaScript syntax such as `async`/`await`.
> If you need to support older browsers (such as older smart TVs), see the section below on legacy browser support.

Add the CSS stylesheet for the THEOplayer UI to your HTML page:

```html
<link rel="stylesheet" href="/url/to/node_modules/@theoplayer/extended/ui.css" />
```

Next, create an HTML element that will contain the player:

```html
<div id="theoplayer-container" class="video-js theoplayer-skin"></div>
```

Finally, create a player instance using the [THEOplayer.Player constructor](https://www.theoplayer.com/docs/theoplayer/v6/api-reference/web/classes/Player.html).
Pass it the created HTML element and a [configuration object](https://www.theoplayer.com/docs/theoplayer/v6/api-reference/web/interfaces/PlayerConfiguration.html).

The configuration object must contain a valid license obtained from THEOportal. See our [how-to guides](https://www.theoplayer.com/docs/theoplayer/how-to-guides/license/introduction/#web-and-chromecast-sdk) for more information.

```javascript
// The HTML element
let element = document.querySelector('#theoplayer-container');
// The player configuration
let configuration = {
    // Your license as given by THEOportal.
    license: 'your_theoplayer_license',
    // The URL where other JavaScript files from this package will be hosted on your web server.
    // THEOplayer may need to load these files as Web Workers in order to play certain streams.
    libraryLocation: '/url/to/node_modules/@theoplayer/extended/'
};
// Create the player instance
let player = new THEOplayer.Player(element, configuration);
```

That's it! You should now have a working player on your web page.
You can control this player through its UI, or through the `player` variable's [JavaScript API](https://www.theoplayer.com/docs/theoplayer/v6/api-reference/web/classes/Player.html).

## Documentation

The documentation for THEOplayer is located on our [documentation website](https://www.theoplayer.com/docs/).
For an example on how to setup THEOplayer, take a look at our [Getting started guide](https://www.theoplayer.com/docs/theoplayer/getting-started/sdks/web/getting-started/).

## Legacy browser support

By default, THEOplayer targets modern browsers that support modern JavaScript syntax (such as [async/await](https://caniuse.com/async-functions)). This keeps the download size small, so your viewers can spend less time waiting for your page to load and start watching their video faster.

On older browsers (such as older smart TVs), you need to load a different version of the THEOplayer library that uses older JavaScript syntax. Instead of using `export` to expose the public THEOplayer API, this version creates a global `THEOplayer` variable that exposes the full API.

```html
<script src="/url/to/node_modules/THEOplayer.js"></script>

<!-- or if you only need the chromeless version (without UI) -->
<script src="/url/to/node_modules/THEOplayer.chromeless.js"></script>

<script>
    // ...
    // use THEOplayer through the global variable
    let player = new THEOplayer.Player(element, configuration);
</script>
```

## Support

If you are having issues installing or using the package, first look for existing answers on our [documentation website](https://www.theoplayer.com/docs/),
and in particular our [FAQ](https://www.theoplayer.com/docs/theoplayer/faq/).

You can also contact our technical support team by following the instructions on our [support page](https://www.theoplayer.com/docs/theoplayer/faq/).
Note that your level of support depends on your selected [support plan](https://www.theoplayer.com/supportplans).

## License

The contents of this package are subject to the [THEOplayer license](https://www.theoplayer.com/terms).
