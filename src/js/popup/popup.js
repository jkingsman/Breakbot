/* globals strings */
/* jshint globalstrict: true */

"use strict";

/**
 * Flash the "Copied" message, and close the window.
 */
function flashCopied() {
  var copiedElement = document.querySelector('#copiedNotification');
  copiedElement.style.display = 'flex';
  copiedElement.className = 'fadein';
  setTimeout(function() {
    window.close();
  }, 500);
}

/**
 * Copy text to the clipboard
 * @param {text} str The string to copy.
 */
function copyToClipboard(text) {
  // create an invisible textarea
  var input = document.createElement('textarea');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = text;

  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);

  flashCopied();
}

/**
 * Display a string
 * @param {string} object The string to display, with id, demo, classification, and name properties.
 * @param {id} int The index of the string being displayed in the master strings object
 */
function showString(string, id) {
  var containerli = document.createElement('li');
  containerli.className = 'list-group-item';
  containerli.id = 'stringID-' + id;

  var badge = document.createElement('span');
  badge.className = 'demo';
  if (string.demo === false) {
    string.demo = '(none)';
  }

  // strip newlines
  badge.innerText = string.demo.replace(/(\r\n|\n|\r)/gm, "");

  var classification = document.createElement('span');
  classification.className = 'classification';
  classification.innerHTML = string.classification;

  var label = document.createElement('span');
  label.className = 'name';
  label.innerHTML = string.name;

  containerli.appendChild(classification);
  containerli.appendChild(label);
  containerli.appendChild(badge);

  containerli.title = string.description;

  document.querySelector('#stringList').appendChild(containerli);
}

/**
 * Filter the displayed strings (display where any of the string properties contain the string in #searchBox)
 */
function searchChangeHandler() {
  var query = document.querySelector('#searchBox').value.toLowerCase();
  var names = document.querySelectorAll('.list-group-item');

  // home rolled O(n) search... what could go wrong?
  var displayedStrings = 0;
  for (var i = 0; i < names.length; i += 1) {
    if (names[i].innerText.toLowerCase().indexOf(query) > -1) {
      names[i].style.display = 'block';
      displayedStrings += 1;
    } else {
      names[i].style.display = 'none';
    }
  }

  if (displayedStrings === 0) {
    document.querySelector('#noResults').style.display = 'block';
  } else {
    document.querySelector('#noResults').style.display = 'none';
  }

  document.querySelector('.container').scrollTop = 0;
}

/**
 * Read the ID of the clicked string and feed it to the copy function
 */
function ClickHandler() {
  var id = this.id.split('-')[1];
  copyToClipboard(strings[id].value);
}

/**
 * Keystrike handler that copies the first visible string on [enter]
 * @param {keyStrike} event The keystrike event
 */
function copyOnEnter(keyStrike) {
  keyStrike = (keyStrike) ? keyStrike : ((event) ? event : null);
  if ((keyStrike.keyCode === 13) && (document.activeElement.id === 'searchBox')) {
    var entries = document.querySelectorAll('.list-group-item');

    if (entries.length > 0) {
      // we have entries
      for (var i = 0; i < entries.length; i += 1) {
        if (entries[i].style.display !== 'none') {
          // found our first non-hidden entry; copy it
          var id = entries[i].id.split('-')[1];
          copyToClipboard(strings[id].value);
          break;
        }
      }
    }
  }
}

// load all strings into view
strings.forEach(function(string, index) {
  showString(string, index);
});

// set up click listeners
var copyableClass = document.getElementsByClassName('list-group-item');
for (var i = 0; i < copyableClass.length; i += 1) {
  copyableClass[i].addEventListener('click', ClickHandler, false);
}

// attach the search listener
document.querySelector('#searchBox').addEventListener('input', searchChangeHandler);

// attach enter keystrike listener
document.onkeypress = copyOnEnter;
