const $ = (s) => document.querySelector(s);

const $ta = $("#text-content-area");
const $e = $("#encrypt");
const $d = $("#decrypt");
const $r = $("#result");
const $f = $("form");

let value;

const keys = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat"
}

$f.addEventListener("submit", (e) => e.preventDefault());

function encrypt(t) {
  return t.replace(/[eiou]/g, (c) => keys[c]);
}

function decrypt(t) {
  return t.replace(/(enter|imes|ai|ober|ufat)/g, (c) => {
    for (let k in keys) {
      if (keys[k] === c) return k;
    }
  });
}

$ta.addEventListener("input", (e) => {
  value = e.target.value;
  $ta.style.height = "auto";
  $ta.style.height = $ta.scrollHeight + "px";
});

$e.addEventListener("click", () => {
  $r.innerText = encrypt(value);
});

$d.addEventListener("click", () => {
  $r.innerText = decrypt(value);
});
