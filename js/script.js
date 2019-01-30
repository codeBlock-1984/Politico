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

let clearForm = () => {
  document.getElementById("contest-form").reset();
}
let conSubmit = () => {
  let fName = document.getElementById("fN").value;
  let lName = document.getElementById("lN").value;
  let party = document.getElementById("pty").value;
  let office = document.getElementById("of").value;
  let manifesto = document.getElementById("man").value;

  let newCandidate = {name: fName + lName, party: party, office: office, manifesto: manifesto};
}