

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close");
let cancelBtn = document.getElementsByClassName("modalCancel");
let submitModal = document.getElementsByClassName("modalSubmit");

let officeModal = document.getElementById("officeModal");
let addOfficeBtn = document.getElementById("add-office-Btn");

addOfficeBtn.onclick = () => {
  officeModal.style.display = "block";
}

span[0].onclick = () => {
  officeModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == officeModal) {
    officeModal.style.display = "none";
  }
}
cancelBtn[0].onclick = () => {
  officeModal.style.display = "none";
}
submitModal[0].onclick = () => {
  let officeName = document.getElementById("officeName").value;
  let officeType = document.getElementById("officeType").value;
  const newOffice = {name: officeName, type: officeType};
}
