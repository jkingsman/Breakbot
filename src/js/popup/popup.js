/* globals strings */
/* jshint globalstrict: true */

"use strict";

function flashCopied() {
  var copiedElement = document.querySelector('#copiedNotification');
  copiedElement.style.display = 'flex';
  copiedElement.className = 'fadein';
  setTimeout(function() {
    window.close();
  }, 500);
}

function copyToClipboard(text) {
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

function showString(string, id) {
  var containerli = document.createElement('li');
  containerli.className = 'list-group-item';
  containerli.id = 'stringID-' + id;

  var badge = document.createElement('span');
  badge.className = 'badge';
  if (string.demo === false) {
    string.demo = '(none)';
  }

  var demo = string.demo;
  // handle trimming
  if (demo.length > 10) {
    demo = demo.substr(0, 10) + ' [...]';
  }
  badge.innerText = demo;

  var classification = document.createElement('span');
  classification.className = 'classification';
  classification.innerHTML = string.classification;

  var label = document.createElement('span');
  label.className = 'name';
  label.innerHTML = string.name;

  containerli.appendChild(badge);
  containerli.appendChild(classification);
  containerli.appendChild(label);

  document.querySelector('#stringList').appendChild(containerli);
}

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

    if (displayedStrings === 0) {
      document.querySelector('#noResults').style.display = 'block';
    } else {
      document.querySelector('#noResults').style.display = 'none';
    }
  }
}

// load all strings into view
strings.forEach(function(string, index) {
  showString(string, index);
});

// set up click listeners
var copyableClass = document.getElementsByClassName('list-group-item');

function ClickHandler() {
  var id = this.id.split('-')[1];
  copyToClipboard(strings[id].value);
}

for (var i = 0; i < copyableClass.length; i += 1) {
  copyableClass[i].addEventListener('click', ClickHandler, false);
}

// attach the search listener
document.querySelector('#searchBox').addEventListener('input', searchChangeHandler);
