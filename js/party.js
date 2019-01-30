//modal js
// Get the modal
var modal = document.getElementById('myModal');

//Get the button that opens the modal
var btnP = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
var cancelBtn = document.getElementsByClassName("modalCancel");
var submitModal = document.getElementsByClassName("modalSubmit");

// When the user clicks on the button, open the modal 
btnP.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
cancelBtn[0].onclick = function() {
  modal.style.display = "none";
}
var partyArray =["APC", "PDP", "LP", "APGA"];
submitModal[0].onclick = function() {
  //modal.style.display = "block";
  var pN = document.getElementById("pName").value;
  var pA = document.getElementById("pAdd").value;
  var errorDisp = document.getElementById("ed").innerHTML;
  //if(pN & pA){
    var newParty = new Party(pN, pA);
    partyArray.push(newParty);
    var errorDisp = partyArray;
  //} else{
  //  let errorDisp = "All fields are required!";
  //}
}

var modalE = document.getElementById('editModal');
var btnE = document.getElementById("editBtn");

btnE.onclick = function() {
  modalE.style.display = "block";
}

span[1].onclick = function() {
  modalE.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalE) {
    modalE.style.display = "none";
  }
}
cancelBtn[1].onclick = function() {
  modalE.style.display = "none";
}
submitModal[1].onclick = function() {
  //modal.style.display = "block";
  var eN = document.getElementById("eName").value;
  var eA = document.getElementById("eAdd").value;
  var updatedParty = {name: eN, hqAddress: eA};
}

var modalD = document.getElementById("delModal");
var btnD = document.getElementById("delBtn");

btnD.onclick = function() {
  modalD.style.display = "block";
  var selectP = document.getElementById("selectParty");  

  for(var i = 0; i < partyArray.length; i++) {
    var opt = partyArray[i];
    var partyOption = document.createElement("option");
    partyOption.text = opt;
    partyOption.value = opt;
    selectP.add(partyOption);
  }
}

span[2].onclick = function() {
  modalD.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalD) {
    modalD.style.display = "none";
  }
}
cancelBtn[2].onclick = function() {
  modalD.style.display = "none";
}
submitModal[2].onclick = function() {
  //modal.style.display = "block";
  var dParty = document.getElementById("selectParty").value;
  partyArray.splice(dParty, 1);
}




class Party {

  constructor(name, hq){
    this.name = name;
    this.hqAddress = hq;
    this.addnew(this.name, this.hqAddress);

  }

}