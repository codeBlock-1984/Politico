

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
var cancelBtn = document.getElementsByClassName("modalCancel");
var submitModal = document.getElementsByClassName("modalSubmit");

var modalO = document.getElementById("oModal");
var btnO = document.getElementById("oBtn");

btnO.onclick = function() {
  modalO.style.display = "block";
}

span[0].onclick = function() {
  modalO.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalO) {
    modalO.style.display = "none";
  }
}
cancelBtn[0].onclick = function() {
  modalO.style.display = "none";
}
submitModal[0].onclick = function() {
  //modal.style.display = "block";
  var oN = document.getElementById("oName").value;
  var oT = document.getElementById("oType").value;
  let newOffice = {name: oN, type: oT};
}