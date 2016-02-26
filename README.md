# Breakbot
Quickly add disruptive unicode, dangerous strings, and more to your clipboard. Spend less time googling for RTL overrides and Zalgo text, and more time pen-testing!


[![Image of Chrome Store Badge](https://developer.chrome.com/webstore/images/ChromeWebStore_Badge_v2_340x96.png)](https://chrome.google.com/webstore/detail/paljnfjjeclclieknpdeljeilmmoheog)

## Usage
You can get Breakbot from the [Chrome store](https://chrome.google.com/webstore/detail/paljnfjjeclclieknpdeljeilmmoheog), or run `gulp` and import the `dist` directory as an unpacked extension. Click the cracked egg icon on your toolbar to expand a searchable list of naughty strings; click a string to copy it to your clipboard. You can also strike enter while in the search box to copy the first result (i.e. typing `shrug[enter]` will copy the shrug to your clipboard).

### Installation (Automatic)
Install this from the [Chrome store](https://chrome.google.com/webstore/detail/paljnfjjeclclieknpdeljeilmmoheog).

### Installation (Manual)

> You'll need node and npm set up on your system (which is beyond the scope of this README), and gulp installed (`npm install -g gulp` if you don't already have it).

1. Clone this repo:

  `git clone https://github.com/jkingsman/Breakbot.git`

2. Move into it:

  `cd Breakbot`

2. Install the gulp dependencies:

  `npm install`

3. Make sure the build directory is empty:

  `gulp empty`

4. Build it, using any of the following commands:

  | `gulp` command  | result |
  | ------------- | ------------- |
  | `gulp`  | Lint the code and build the `src` directory into the `dist` directory. `dist` can be imported as an unpacked extension.  |
  | `gulp zip`  | Lint the code and build the `src` directory into the `dist` directory, then zip the `dist` directory into `Breakbot.zip` in the root `BreakBot` folder.  |
  | `gulp watch`  | Build the `src` directory into the `dist` directory and rebuild on changes to `src`.  |

5. Load into Chrome as an [unpacked extension](http://techapple.net/2015/09/how-to-install-load-unpacked-extension-in-google-chrome-browser-os-chromebooks/)

## License
MIT.

***
