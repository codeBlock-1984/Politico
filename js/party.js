
let modal = document.getElementById('myModal');
let btnP = document.getElementById("myBtn");

let span = document.getElementsByClassName("close");
let cancelBtn = document.getElementsByClassName("modalCancel");
let submitModal = document.getElementsByClassName("modalSubmit");

btnP.onclick = () => {
  modal.style.display = "block";
}

span[0].onclick = () => {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
cancelBtn[0].onclick = () => {
  modal.style.display = "none";
}
let partyArray =["APC", "PDP", "LP", "APGA"];
submitModal[0].onclick = () => {
  let pN = document.getElementById("pName").value;
  let pA = document.getElementById("pAdd").value;
  let errorDisp = document.getElementById("ed").innerHTML;
  let newParty = new Party(pN, pA);
  partyArray.push(newParty);
  let errorDisp = partyArray;
  
}

let modalE = document.getElementById('editModal');
let btnE = document.getElementById("editBtn");

btnE.onclick = () => {
  modalE.style.display = "block";
}

span[1].onclick = () => {
  modalE.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == modalE) {
    modalE.style.display = "none";
  }
}
cancelBtn[1].onclick = () => {
  modalE.style.display = "none";
}
submitModal[1].onclick = () => {
  let eN = document.getElementById("eName").value;
  let eA = document.getElementById("eAdd").value;
  let updatedParty = {name: eN, hqAddress: eA};
}

let modalD = document.getElementById("delModal");
let btnD = document.getElementById("delBtn");

btnD.onclick = () => {
  modalD.style.display = "block";
  let selectP = document.getElementById("selectParty");  

  for(let i = 0; i < partyArray.length; i++) {
    let opt = partyArray[i];
    let partyOption = document.createElement("option");
    partyOption.text = opt;
    partyOption.value = opt;
    selectP.add(partyOption);
  }
}

span[2].onclick = () => {
  modalD.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == modalD) {
    modalD.style.display = "none";
  }
}
cancelBtn[2].onclick = () => {
  modalD.style.display = "none";
}
submitModal[2].onclick = () => {
  let dParty = document.getElementById("selectParty").value;
  partyArray.splice(dParty, 1);
}


class Party {

  constructor(name, hq){
    this.name = name;
    this.hqAddress = hq;
    this.addnew(this.name, this.hqAddress);

  }

}
