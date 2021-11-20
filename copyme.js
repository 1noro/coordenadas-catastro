// function copyToClipboard(div) {
//   const range = document.createRange();
//   range.selectNode(div);
//   window.getSelection().removeAllRanges(); // clear current selection
//   window.getSelection().addRange(range); // to select text
//   document.execCommand("copy");
//   // window.getSelection().removeAllRanges();// to deselect
// }

function printToLog(div) {
  console.log(div.innerHTML);
}

document.addEventListener('keyup', (e) => {
  if (e.code === 'KeyC') {
    const div = document.getElementsByClassName('custom-mouse-position')[0];
    printToLog(div);
    // copyToClipboard(div);
  }
});
