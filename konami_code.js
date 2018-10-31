const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


// const uniqCodes = [
//   "ArrowUp",
//   "ArrowDown",
//   "ArrowLeft",
//   "ArrowRight",
//   "b",
//   "a"
// ];

let listenLast10 = []


function updateListenLast10 (v) {
  listenLast10.push(v)
  if (listenLast10.length == 11) {
    listenLast10.shift()
    // console.log(listenLast10 + codes)
  }
  if (listenLast10.join(',') == codes.join(',')) {
    alert('code entered')
  }
}


function init() {
  document.body.addEventListener("keydown", function(e) {
  // console.log(e.key)
  updateListenLast10(e.key)
})
}

// console.log("Hello world!");
// init()
