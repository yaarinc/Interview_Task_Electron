const jsonfile = require('jsonfile');
const favicon = require('favicon-getter').default;
const path = require('path');
const uuid = require('uuid');
const bookmarks = path.join(__dirname, 'bookmarks.json');

const ById = function(id) {
  return document.getElementById(id);
}

const back = ById('back'),
  forward = ById('forward'),
  refresh = ById('refresh'),
  omni = ById('url'),
  view = ById('view');

function reloadView() {
  view.reload();
}

function backView() {
  view.goBack();
}

function forwardView() {
  view.goForward();
}

function updateURL(e) {
  if (e.keyCode === 13) {
    omni.blur();
    let val = omni.value;
    let https = val.slice(0, 8).toLowerCase();
    let http = val.slice(0, 7).toLowerCase();
    if (https === 'https://') {
      view.loadURL(val);
    } else if (http === 'http://') {
      view.loadURL(val);
    } else {
    	view.loadURL('http://'+ val);
    }
  }
}

function handleUrl(e) {
  if (e.target.className === 'link') {
    e.preventDefault();
    view.loadURL(e.target.href);
  } else if (e.target.className === 'favicon') {
    e.preventDefault();
    view.loadURL(e.target.parentElement.href);
  }
}

function handleDevtools() {
  if (view.isDevToolsOpened()) {
    view.closeDevTools();
  } else {
    view.openDevTools();
  }
}

function updateNav() {
  omni.value = view.src;
}

refresh.addEventListener('click', reloadView);
back.addEventListener('click', backView);
forward.addEventListener('click', forwardView);
omni.addEventListener('keydown', updateURL);
view.addEventListener('did-finish-load', updateNav);

