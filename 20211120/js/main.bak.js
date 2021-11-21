const $e = (e) => document.getElementById(e);
const $ael = (elem, ev, f) => $e(elem).addEventListener(ev, f);
const $ac = (elem, c) => $e(elem).classList.add(c);
const $rc = (elem, c) => $e(elem).classList.remove(c);
const $cc = (elem, c) => $e(elem).classList.contains(c);

document.addEventListener("DOMContentLoaded", () => {
  $ael("toggle_btn", "click", () => {
    if ($cc("header", "open")) {
      $rc("header", "open");
    } else {
      $ac("header", "open");
    }
  });

  $ael("mask", "click", () => {
    $rc("header", "open");
  });
});
