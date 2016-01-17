// technically don't need this but it shuts jshint up and duplications don't matter
/* jshint globalstrict: true */
/* jshint -W100 */ //silence warnings about unicode in comments (lol)

"use strict";

// please escape all text as unicode; add a plaintext comment of what it is where possible
// demos will be concatenated to 10 characters
// Many thanks to the BLNS (https://github.com/minimaxir/big-list-of-naughty-strings/)

/*
 {
   // the string, if applicable/non-destructive
   name: 'name to be displayed',
   classification: 'unicode/shell/js/etc',
   demo: 'demo text to be displayed (set to false if potentially destructive or invisible (e.g. spaces))',
   value: 'value to be copied'
 }
*/

var strings = [{
  // ¯\_(ツ)_/¯
  name: 'shrug emote',
  classification: 'emoji/emote',
  demo: '\u00AF\u005C\u005F\u0028\u30C4\u0029\u005F\u002F\u00AF',
  value: '\u00AF\u005C\u005F\u0028\u30C4\u0029\u005F\u002F\u00AF'
}, {
  // 😀
  name: 'smiley emoji',
  classification: 'emoji/emote',
  demo: '\uD83D\uDE00',
  value: '\uD83D\uDE00'
}, {
  // 👦🏿
  name: 'fitzpatrick-6 emoji',
  classification: 'emoji/emote',
  demo: '\uD83D\uDC66\uD83C\uDFFF',
  value: '\uD83D\uDC66\uD83C\uDFFF'
}, {
  // œ∑´®†¥¨ˆøπ“‘
  name: 'common unicode',
  classification: 'unicode',
  demo: '\u0153\u2211\u00B4\u00AE\u2020\u00A5\u00A8\u02C6\u00F8\u03C0\u201C\u2018',
  value: '\u0153\u2211\u00B4\u00AE\u2020\u00A5\u00A8\u02C6\u00F8\u03C0\u201C\u2018'
}, {
  // 🇺🇸🇷🇺🇸 🇦🇫🇦🇲🇸
  name: 'regional indicators',
  classification: 'unicode',
  demo: '\uD83C\uDDFA\uD83C\uDDF8\uD83C\uDDF7\uD83C\uDDFA\uD83C\uDDF8\u0020\uD83C\uDDE6\uD83C\uDDEB\uD83C\uDDE6\uD83C\uDDF2\uD83C\uDDF8\u0020',
  value: '\uD83C\uDDFA\uD83C\uDDF8\uD83C\uDDF7\uD83C\uDDFA\uD83C\uDDF8\u0020\uD83C\uDDE6\uD83C\uDDEB\uD83C\uDDE6\uD83C\uDDF2\uD83C\uDDF8\u0020'
}, {
  // Z̵͍̭̻̏̾ͬ̉ͣ̎͢A̴̵̬̬̪̤ͤͯͯͫͮ́̉ͧ͞L̡̰͎̫̝̠͍̓̓̎G̶̷̥̞̤͗ͮͪ̀̀͡Oͪͧ͞҉͈̳̲̙͖͖̫̤̩͞!̛͓͎̆ͥ̀ͮ
  name: 'zalgo',
  classification: 'unicode',
  demo: '\u005A\u030F\u033E\u036C\u0309\u0363\u030E\u0362\u0335\u034D\u032D\u033B\u0041\u0364\u036F\u036F\u036B\u036E\u0301\u0309\u0367\u0334\u035E\u0335\u032C\u032C\u032A\u0324\u004C\u0343\u0313\u030E\u0321\u0330\u034E\u032B\u031D\u0320\u034D\u0047\u0357\u036E\u036A\u0300\u0300\u0336\u0361\u0337\u0325\u031E\u0324\u004F\u036A\u0367\u035E\u0489\u035E\u0348\u0333\u0332\u0319\u0356\u0356\u032B\u0324\u0329\u0021\u0306\u0365\u0300\u036E\u031B\u0353\u034E',
  value: '\u005A\u030F\u033E\u036C\u0309\u0363\u030E\u0362\u0335\u034D\u032D\u033B\u0041\u0364\u036F\u036F\u036B\u036E\u0301\u0309\u0367\u0334\u035E\u0335\u032C\u032C\u032A\u0324\u004C\u0343\u0313\u030E\u0321\u0330\u034E\u032B\u031D\u0320\u034D\u0047\u0357\u036E\u036A\u0300\u0300\u0336\u0361\u0337\u0325\u031E\u0324\u004F\u036A\u0367\u035E\u0489\u035E\u0348\u0333\u0332\u0319\u0356\u0356\u032B\u0324\u0329\u0021\u0306\u0365\u0300\u036E\u031B\u0353\u034E'
}, {
  // ﻿ＡＥＳＴＨＥＴＩＣ
  name: 'unicode fullwidth',
  classification: 'unicode',
  demo: '\uFEFF\uFF21\uFF25\uFF33\uFF34\uFF28\uFF25\uFF34\uFF29\uFF23',
  value: '\uFEFF\uFF21\uFF25\uFF33\uFF34\uFF28\uFF25\uFF34\uFF29\uFF23'
}, {
  // ʇǝɯɐ ʇᴉs ɹolop ɯnsdᴉ ɯǝɹo˥
  name: 'upside down text',
  classification: 'unicode',
  demo: '\u0287\u01DD\u026F\u0250\u0020\u0287\u1D09\u0073\u0020\u0279\u006F\u006C\u006F\u0070\u0020\u026F\u006E\u0073\u0064\u1D09\u0020\u026F\u01DD\u0279\u006F\u02E5',
  value: '\u0287\u01DD\u026F\u0250\u0020\u0287\u1D09\u0073\u0020\u0279\u006F\u006C\u006F\u0070\u0020\u026F\u006E\u0073\u0064\u1D09\u0020\u026F\u01DD\u0279\u006F\u02E5'
}, {
  //  
  name: 'em-quad space',
  classification: 'unicode',
  demo: false,
  value: '\u2001'
}, {
  // œ∑´®†¥¨ˆøπ“‘
  name: 'two byte unicode',
  classification: 'unicode',
  demo: '\u793E\u6703\u79D1\u5B78\u9662\u8A9E\u5B78\u7814\u7A76\u6240',
  value: '\u793E\u6703\u79D1\u5B78\u9662\u8A9E\u5B78\u7814\u7A76\u6240'
}, {
  // [unicode RTL override]
  name: 'RTL override',
  classification: 'unicode',
  demo: false,
  value: '\u200F'
}, {
  // בְּרֵאשִׁית, בָּרָא אֱלֹהִים, אֵת הַשָּׁמַיִם, וְאֵת הָאָרֶץ
  name: 'hebrew text',
  classification: 'unicode',
  demo: '\u05D1\u05BC\u05B0\u05E8\u05B5\u05D0\u05E9\u05C1\u05B4\u05D9\u05EA\u002C\u0020\u05D1\u05BC\u05B8\u05E8\u05B8\u05D0\u0020\u05D0\u05B1\u05DC\u05B9\u05D4\u05B4\u05D9\u05DD\u002C\u0020\u05D0\u05B5\u05EA\u0020\u05D4\u05B7\u05E9\u05BC\u05C1\u05B8\u05DE\u05B7\u05D9\u05B4\u05DD\u002C\u0020\u05D5\u05B0\u05D0\u05B5\u05EA\u0020\u05D4\u05B8\u05D0\u05B8\u05E8\u05B6\u05E5',
  value: '\u05D1\u05BC\u05B0\u05E8\u05B5\u05D0\u05E9\u05C1\u05B4\u05D9\u05EA\u002C\u0020\u05D1\u05BC\u05B8\u05E8\u05B8\u05D0\u0020\u05D0\u05B1\u05DC\u05B9\u05D4\u05B4\u05D9\u05DD\u002C\u0020\u05D0\u05B5\u05EA\u0020\u05D4\u05B7\u05E9\u05BC\u05C1\u05B8\u05DE\u05B7\u05D9\u05B4\u05DD\u002C\u0020\u05D5\u05B0\u05D0\u05B5\u05EA\u0020\u05D4\u05B8\u05D0\u05B8\u05E8\u05B6\u05E5'
}, {
  // ,./;'[]\-=<>?:"{}|_+!@#$%^&*()`~
  name: 'special chars',
  classification: 'ascii',
  demo: '\u002C\u002E\u002F\u003B\u0027\u005B\u005D\u005C\u002D\u003D\u003C\u003E\u003F\u003A\u0022\u007B\u007D\u007C\u005F\u002B\u0021\u0040\u0023\u0024\u0025\u005E\u0026\u002A\u0028\u0029\u0060\u007E',
  value: '\u002C\u002E\u002F\u003B\u0027\u005B\u005D\u005C\u002D\u003D\u003C\u003E\u003F\u003A\u0022\u007B\u007D\u007C\u005F\u002B\u0021\u0040\u0023\u0024\u0025\u005E\u0026\u002A\u0028\u0029\u0060\u007E'
}, {
  // <script>alert(123)</script>
  name: 'basic injection',
  classification: 'js/html',
  demo: '\u003C\u0073\u0063\u0072\u0069\u0070\u0074\u003E\u0061\u006C\u0065\u0072\u0074\u0028\u0031\u0032\u0033\u0029\u003C\u002F\u0073\u0063\u0072\u0069\u0070\u0074\u003E',
  value: '\u003C\u0073\u0063\u0072\u0069\u0070\u0074\u003E\u0061\u006C\u0065\u0072\u0074\u0028\u0031\u0032\u0033\u0029\u003C\u002F\u0073\u0063\u0072\u0069\u0070\u0074\u003E'
}, {
  // <plaintext>
  name: 'plaintext tag',
  classification: 'js/html',
  demo: '\u003C\u0070\u006C\u0061\u0069\u006E\u0074\u0065\u0078\u0074\u003E',
  value: '\u003C\u0070\u006C\u0061\u0069\u006E\u0074\u0065\u0078\u0074\u003E'
}, {
  // /dev/null; touch /tmp/kilroy ; echo
  name: 'raw touch',
  classification: 'shell',
  demo: '\u002F\u0064\u0065\u0076\u002F\u006E\u0075\u006C\u006C\u003B\u0020\u0074\u006F\u0075\u0063\u0068\u0020\u002F\u0074\u006D\u0070\u002F\u006B\u0069\u006C\u0072\u006F\u0079\u0020\u003B\u0020\u0065\u0063\u0068\u006F',
  value: '\u002F\u0064\u0065\u0076\u002F\u006E\u0075\u006C\u006C\u003B\u0020\u0074\u006F\u0075\u0063\u0068\u0020\u002F\u0074\u006D\u0070\u002F\u006B\u0069\u006C\u0072\u006F\u0079\u0020\u003B\u0020\u0065\u0063\u0068\u006F'
}, {
  // `touch /tmp/kilroy`
  name: 'inline bash touch',
  classification: 'shell',
  demo: '\u0060\u0074\u006F\u0075\u0063\u0068\u0020\u002F\u0074\u006D\u0070\u002F\u006B\u0069\u006C\u0072\u006F\u0079\u0060',
  value: '\u0060\u0074\u006F\u0075\u0063\u0068\u0020\u002F\u0074\u006D\u0070\u002F\u006B\u0069\u006C\u0072\u006F\u0079\u0060'
}, {
  // ../../../../../../../../../../../etc/passwd%00
  name: 'passwd path',
  classification: 'shell',
  demo: '\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u0065\u0074\u0063\u002F\u0070\u0061\u0073\u0073\u0077\u0064\u0025\u0030\u0030',
  value: '\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u0065\u0074\u0063\u002F\u0070\u0061\u0073\u0073\u0077\u0064\u0025\u0030\u0030'
}, {
  // ../../../../../../../../../../../etc/hosts
  name: 'hosts path',
  classification: 'shell',
  demo: '\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u0065\u0074\u0063\u002F\u0068\u006F\u0073\u0074\u0073',
  value: '\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u002E\u002E\u002F\u0065\u0074\u0063\u002F\u0068\u006F\u0073\u0074\u0073'
}, {
  // () { 0; }; touch /tmp/shellshock;
  name: 'shellshock 1',
  classification: 'shell',
  demo: '\u0028\u0029\u0020\u007B\u0020\u0030\u003B\u0020\u007D\u003B\u0020\u0074\u006F\u0075\u0063\u0068\u0020\u002F\u0074\u006D\u0070\u002F\u0073\u0068\u0065\u006C\u006C\u0073\u0068\u006F\u0063\u006B\u003B',
  value: '\u0028\u0029\u0020\u007B\u0020\u0030\u003B\u0020\u007D\u003B\u0020\u0074\u006F\u0075\u0063\u0068\u0020\u002F\u0074\u006D\u0070\u002F\u0073\u0068\u0065\u006C\u006C\u0073\u0068\u006F\u0063\u006B\u003B'
}, {
  // () { _; } >_[$($())] { touch /tmp/shellshock; }
  name: 'shellshock 2',
  classification: 'shell',
  demo: '\u0028\u0029\u0020\u007B\u0020\u005F\u003B\u0020\u007D\u0020\u003E\u005F\u005B\u0024\u0028\u0024\u0028\u0029\u0029\u005D\u0020\u007B\u0020\u0074\u006F\u0075\u0063\u0068\u0020\u002F\u0074\u006D\u0070\u002F\u0073\u0068\u0065\u006C\u006C\u0073\u0068\u006F\u0063\u006B\u003B\u0020\u007D',
  value: '\u0028\u0029\u0020\u007B\u0020\u005F\u003B\u0020\u007D\u0020\u003E\u005F\u005B\u0024\u0028\u0024\u0028\u0029\u0029\u005D\u0020\u007B\u0020\u0074\u006F\u0075\u0063\u0068\u0020\u002F\u0074\u006D\u0070\u002F\u0073\u0068\u0065\u006C\u006C\u0073\u0068\u006F\u0063\u006B\u003B\u0020\u007D'
}, {
  // Powerلُلُصّبُلُلصّبُررً ॣ ॣh ॣ ॣ冗
  name: 'iphone crash',
  classification: 'misc',
  demo: '\u0050\u006F\u0077\u0065\u0072\u0644\u064F\u0644\u064F\u0635\u0651\u0628\u064F\u0644\u064F\u0644\u0635\u0651\u0628\u064F\u0631\u0631\u064B\u0020\u0963\u0020\u0963\u0068\u0020\u0963\u0020\u0963\u5197',
  value: '\u0050\u006F\u0077\u0065\u0072\u0644\u064F\u0644\u064F\u0635\u0651\u0628\u064F\u0644\u064F\u0644\u0635\u0651\u0628\u064F\u0631\u0631\u064B\u0020\u0963\u0020\u0963\u0068\u0020\u0963\u0020\u0963\u5197'
}, {
  // X5O!P%@AP[4\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*
  name: 'eicar test',
  classification: 'misc',
  demo: '\u0058\u0035\u004F\u0021\u0050\u0025\u0040\u0041\u0050\u005B\u0034\u005C\u0050\u005A\u0058\u0035\u0034\u0028\u0050\u005E\u0029\u0037\u0043\u0043\u0029\u0037\u007D\u0024\u0045\u0049\u0043\u0041\u0052\u002D\u0053\u0054\u0041\u004E\u0044\u0041\u0052\u0044\u002D\u0041\u004E\u0054\u0049\u0056\u0049\u0052\u0055\u0053\u002D\u0054\u0045\u0053\u0054\u002D\u0046\u0049\u004C\u0045\u0021\u0024\u0048\u002B\u0048\u002A',
  value: '\u0058\u0035\u004F\u0021\u0050\u0025\u0040\u0041\u0050\u005B\u0034\u005C\u0050\u005A\u0058\u0035\u0034\u0028\u0050\u005E\u0029\u0037\u0043\u0043\u0029\u0037\u007D\u0024\u0045\u0049\u0043\u0041\u0052\u002D\u0053\u0054\u0041\u004E\u0044\u0041\u0052\u0044\u002D\u0041\u004E\u0054\u0049\u0056\u0049\u0052\u0055\u0053\u002D\u0054\u0045\u0053\u0054\u002D\u0046\u0049\u004C\u0045\u0021\u0024\u0048\u002B\u0048\u002A'
}];

strings.sort(function(a, b) {
  // sort by classification, then by name
  if (a.classification < b.classification) {
    return -1;
  } else if (a.classification > b.classification) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    // they're identical
    return 0;
  }
});
