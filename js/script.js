
let nav1open = false;
let nav2open = false;
const openNav = () => {
  if(!nav2open){
    closeNav1();
    document.getElementById("mySidebar").style.display = "initial";
    document.getElementById("mySidebar").style.width = "400px";
    document.getElementById("main").style.marginRight = "400px";
    nav1open = true;
  }
    
  }

  const closeNav = () => {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    nav1open = false;
  }

  const openNav1 = () => {
    if(!nav1open){
      closeNav();
      document.getElementById("mySidebar1").style.display = "initial";
      document.getElementById("mySidebar1").style.width = "400px";
      document.getElementById("main").style.marginRight = "400px";
      nav2open = true;
    }
    
    
  }
 
  const closeNav1 = () => {
    document.getElementById("mySidebar1").style.display = "none";
    document.getElementById("mySidebar1").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    nav2open = false;
  }

const acc = document.getElementsByClassName("office-list");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", () => {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

let count = 3;
const myMove = () => {
  
  if(count >= 0){
    let elem = document.getElementsByClassName("vote"); 
    let i = count;  
    let pos = 200;
    let id = setInterval(frame, 0.000000000000000000000001);
    const frame = () => {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem[i].style.top = pos + 'px'; 
      }
    }
  
      count--;
      if(count === -1){
        displayMyVote();
      }
  }
  
}
const displayMyVote = () => {
  let votes = document.getElementsByClassName("single-vote");
  let results = document.getElementsByClassName("res");
  let j, z = 3;
  let len = votes.length;
  for(j = 0; j < len; j++){
    if(votes[j].checked == true){
      results[z].innerHTML = votes[j].value;
      z--;
    }
  }
  
}

const clearForm = () => {
  document.getElementById("contest-form").reset();
}
const conSubmit = () => {
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let party = document.getElementById("party").value;
  let office = document.getElementById("offfice").value;
  let manifesto = document.getElementById("manifesto").value;

  let newCandidate = {name: fName + lName, party: party, office: office, manifesto: manifesto};
}
