/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
var nav1open = false;
var nav2open = false;
function openNav() {
  if(!nav2open){
    closeNav1();
    document.getElementById("mySidebar").style.display = "initial";
    document.getElementById("mySidebar").style.width = "400px";
    document.getElementById("main").style.marginRight = "400px";
    nav1open = true;
  }
    
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    nav1open = false;
  }

  function openNav1() {
    if(!nav1open){
      closeNav();
    document.getElementById("mySidebar1").style.display = "initial";
    document.getElementById("mySidebar1").style.width = "400px";
    document.getElementById("main").style.marginRight = "400px";
    nav2open = true;
    }
    
    
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav1() {
    document.getElementById("mySidebar1").style.display = "none";
    document.getElementById("mySidebar1").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    nav2open = false;
  }

var acc = document.getElementsByClassName("office-list");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var count = 3;
function myMove() {
  
  if(count >= 0){
    var elem = document.getElementsByClassName("vote"); 
    var i = count;  
    var pos = 200;
    var id = setInterval(frame, 0.000000000000000000000001);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem[i].style.top = pos + 'px'; 
        //elem.style.left = pos + 'px'; 
      }
    }
  
      count--;
      if(count === -1){
        displayMyVote();
      }
  }
  
}
function displayMyVote(){
  var votes = document.getElementsByClassName("single-vote");
  var results = document.getElementsByClassName("res");
  var j, z = 3;
  var len = votes.length;
  for(j = 0; j < len; j++){
    if(votes[j].checked == true){
      results[z].innerHTML = votes[j].value;
      z--;
    }
  }
}

//modal js
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
var cancelBtn = document.getElementsByClassName("modalCancel");
var submitModal = document.getElementsByClassName("modalSubmit");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
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
submitModal[1].onclick = function() {
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