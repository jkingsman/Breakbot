# Contributing

Please feel free to contribute code improvements or add strings to `strings.js`.

## `strings.js`

One could hypothetically add every entry in the [BLNS](https://github.com/minimaxir/big-list-of-naughty-strings/blob/master/blns.txt), but this focuses on strings that are time consuming to track down and copy - anyone can type `false` or `NaN`, but googling around for an example of full width unicode or the RTL character can be time consuming, which is what this extension tries to mitigate.

There's no *specific* order the strings file, but similar classifications are grouped together. They're all sorted on output, but it would be appreciated if classifications could stay lumped together.

When adding strings to the file, please use the following format:

```js
{
  // the string, if applicable/non-destructive
  name: 'plain english name to be displayed',
  classification: 'unicode/shell/js/etc',
  description: 'Short, 2-3 sentence description goes here.',
  demo: 'demo text to be displayed (set to false if potentially destructive or invisible (e.g. spaces))',
  value: 'value to be copied'
}
```

Please escape all `value` and `demo` string sequences (even ASCII) with `\uXXXX` format. [This](http://0xcc.net/jsescape/) is a great utility to do so.
