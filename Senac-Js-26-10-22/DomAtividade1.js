/*----------Function da Primeira div-----------------------
-------------MouseOver e MouseOut----------------------- */
object.onmouseover = function () {
  mouH;
};
object.onmouseout = function () {
  mouO;
};

function mouH() {
  let onm = window.document.getElementById("dv1");
  onm.innerText =
    "Interdum hac ante, ligula suscipit, luctus sodales euismod tristique aenean dui eu. Blandit porta tempus consequat, metus suspendisse imperdiet hac potenti. Urna commodo, ad consectetur lectus. Velit cras purus, ultrices nec lorem nostra. Mi neque purus, suscipit hac, auctor aenean commodo eleifend conubia himenaeos phasellus. Ut tempus primis, curae etiam habitasse cubilia.";
  onm.style.backgroundColor = "orange";
  onm.style.color = "white";
}
function mouO() {
  let onmo = window.document.getElementById("dv1");
  onmo.innerText =
    "Neque tempor metus curabitur, eget donec pulvinar, habitasse fames molestie quisque senectus pellentesque habitant. Inceptos luctus leo, ac vehicula, dictum dictumst vulputate sollicitudin hendrerit vivamus. Eros magna fringilla, curabitur per sagittis elit eleifend. Orci imperdiet dictumst sit, inceptos convallis pharetra consequat elementum. Amet iaculis curabitur, eros ante, lacus mattis nisi ultricies tellus.";
  onmo.style.backgroundColor = "blue";
  onmo.style.color = "white";
}
/**-------------- ---------------------------------- */

/**---------Function da Segunda Div------------------
 * ----------MouseDown e MouseUp-------------------- */

object.onmousedown = function () {
  mouC;
};
object.onmouseup = function () {
  mouC;
};

function mouC() {
  let mouc = window.document.getElementById("dv2");
  mouc.innerText =
    "Facilisis mollis cubilia ornare, platea class vulputate, maecenas neque vitae orci dictumst habitasse. Ultrices eros potenti, augue habitasse, blandit cursus eu aliquam duis iaculis enim. Nec viverra primis, rutrum risus, fames condimentum lacus per scelerisque pulvinar maecenas. Curabitur habitant sollicitudin phasellus, pharetra tellus quisque, erat augue quis etiam adipiscing id. Ut rhoncus hendrerit consequat, euismod sollicitudin duis quisque massa. Ultrices eleifend placerat in, pellentesque himenaeos tincidunt, et aenean nisl aptent senectus augue.";
  mouc.style.backgroundColor = "yellow";
  mouc.style.color = "black";
}
function mouUp() {
  let mouUp = window.document.getElementById("dv2");
  mouUp.innerText =
    "Eget auctor purus elit, pretium amet dictumst, pulvinar est inceptos urna dictum justo iaculis. Tempor leo non, suspendisse platea, torquent fermentum id commodo nec. Placerat eu mattis fermentum, pharetra tempus litora, rhoncus congue sem dapibus habitant integer. Luctus consequat suscipit vivamus, ut laoreet suspendisse placerat mattis. Rutrum aenean, pulvinar augue litora.";
  mouUp.style.backgroundColor = "green";
  mouUp.style.color = "white";
}
/**------------------------------------------------------ */
