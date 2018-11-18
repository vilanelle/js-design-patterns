// Simplify an interface for listening to events cross-browser.
// A common method that can be used in one’s code
// which does the task of checking for the existence of features
// so that it can provide a safe and cross-browser compatible solution.

var addMyEvent = function(el, ev, fn) {
  if (el.addEventListener) {
    el.addEventListener(ev, fn, false);
  } else if (el.attachEvent) {
    el.attachEvent("on" + ev, fn);
  } else {
    el["on" + ev] = fn;
  }
};
