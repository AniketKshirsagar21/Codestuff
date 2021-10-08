console.log('its working');


var theme = document.getElementById("changeTheme");
theme.onclick = function(){
  document.body.classList.toggle("dark-theme");
}


const textarea = document.getElementById("addText");
textarea.addEventListener("keyup", e =>{
  textarea.style.height = "63px";
        let scHeight = e.target.scrollHeight;
        textarea.style.height = `${scHeight}px`;
      });

      const textarea2 = document.getElementById("addText2");
      textarea2.addEventListener("keyup", e =>{
        textarea2.style.height = "63px";
              let scHeight = e.target.scrollHeight;
              textarea2.style.height = `${scHeight}px`;
            });

            textarea2.style.height = "2px";
            const textarea3 = document.getElementById("addText3");
textarea3.addEventListener("keyup", e =>{
  textarea3.style.height = "63px";
        let scHeight = e.target.scrollHeight;
        textarea3.style.height = `${scHeight}px`;
      });



showNotes();

let addBtn = document.getElementById("addBtn");
let delall = document.getElementById("delall");

delall.onclick = function () {
  localStorage.clear();
  console.log('all deleted');

  showNotes();
  showNotes2();
  showNotes3();

}


addBtn.addEventListener("click", function (e) {
  let addText = document.getElementById("addText");
  let addTitle = document.getElementById("addTitle");

  let myobj = {
    title: addTitle.value,
    text: addText.value
  }

  console.log(myobj);
  if (addText.value == "") {
    alert("Please add a link");
  }

  else if (addTitle.value == "") {
    alert(" Please Add a Title");
  }

  else {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesarr = [];
    }
    else {
      notesarr = JSON.parse(notes);
      //make it array
    }

    notesarr.push(myobj);

    localStorage.setItem("notes", JSON.stringify(notesarr));
    addText.value = "";
    addTitle.value = "";
  }
  showNotes();
})





function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesarr = [];
  }
  else {
    notesarr = JSON.parse(notes);
    //make it array
  }

  let html = ""; // thhe code  of notes will bw written 




  notesarr.forEach(function (element, index) {

    console.log("true foung");
    html +=
      `      <div class="accLinks">
               <nav class="navbar navbar-dark" id="accountbar">
               <div class="container-fluid" style="    padding: 4px 0px 4px 6px;
"               >
                ${index + 1}.
                <a href="${element.text}" target="_blank" class="linksall padd"> ${element.title} </a>
                <a class="navbar-brand" href="#">
                  <button id="${index}" class="deleteBtn padd"
                      onclick="deleteNote(this.id)">X</button>
                </a>
              </a>
          </div>
      </nav>
      <hr>
  </div>
  ` ;

  }
  );


  let notesElm = document.getElementById("linkdiv");
  if (notesarr.length != 0) {
    notesElm.innerHTML = html;// add html code to show cards of notes
  } else {
    notesElm.innerHTML = ` <div class="alert alert-warning alert-dismissible fade show" role="alert" STYLE="background-color: rgb(158, 231, 158); text-align: center;">
    You can add your Coding websites accounts like  <strong>  Codeforces, Hackerearth,Codechef </strong>,Etc
    <br>
    Like this :-

    <div class="accLinks">
    <nav class="navbar navbar-dark" id="accountbar">
        <div class="container-fluid" style="    padding: 4px 0px 4px 6px;
        "             >
        1.
            <a href="https://codeforces.com/problemset?order=BY_RATING_DESC" target="_blank" class="linksall4 padd"> Codeforces </a>
            <a class="navbar-brand" href="#">
                <button  class="deleteBtn padd"
                   >X</button>
            </a>
            </a>
        </div>
    </nav>
  
</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  }
}


// delete
function deleteNote(index) {
  console.log("i ama deleting");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesarr = [];
  } else {
    notesarr = JSON.parse(notes);
  }

  notesarr.splice(index, 1); // delete index
  localStorage.setItem("notes", JSON.stringify(notesarr));

  showNotes();
}



//column 2

showNotes2();

let addBtn2 = document.getElementById("addBtn2");
let delbtn2 = document.getElementById("delbtn2");

addBtn2.addEventListener("click", function (e) {
  let addText2 = document.getElementById("addText2");
  let addTitle2 = document.getElementById("addTitle2");
  let myobj2 = {
    title: addTitle2.value,
    text: addText2.value
  }

  console.log(myobj2);
  if (addText2.value == "") {
    alert("cannot add Empty Note ! Please write Something");
  }

  else if (addTitle2.value == "") {
    alert(" Please Add a Title");
  }

  else {
    let notes2 = localStorage.getItem("notes2");
    if (notes2 == null) {
      notesarr2 = [];
    }

    else {
      notesarr2 = JSON.parse(notes2);
      //make it array
    }

    notesarr2.push(myobj2);

    localStorage.setItem("notes2", JSON.stringify(notesarr2));
    addText2.value = "";
    addTitle2.value = "";
  }

  showNotes2();
})


function showNotes2() {
  let notes2 = localStorage.getItem("notes2");
  if (notes2 == null) {
    notesarr2 = [];
  }
  else {
    notesarr2 = JSON.parse(notes2);
    //make it array
  }

  let html2 = ""; // thhe code  of notes will bw written 


  notesarr2.forEach(function (element, index) {

    console.log("true foung");
    html2 += `
    <div class="noteCard  mycard" >
            <div class="card-body cb">
                <h5 class="card-title">${index + 1}. ${element.title}</h5>
                <p class=" text-Area" > ${element.text}</p>
                <button class="deleteBtn2" id="${index}"onclick="deleteNote2(this.id)" class="btn btn-primary">Delete Note</button>

            </div>
        </div>`;
  }
  );

  let notesElm = document.getElementById("notes2");
  if (notesarr2.length != 0) {
    notesElm.innerHTML = html2;// add html code to show cards of notes
  } else {
    notesElm.innerHTML = `
    <div class="alert alert-warning alert-dismissible fade show" role="alert" STYLE="       background-color: rgb(158, 231, 158);; text-align: center;">
    You can add your General <strong>Notes </strong>here 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    
    <div class="noteCard my-2 mx-2 card mycard" style="
    width: 18rem;
  background : rgba(82,136,217,.6);
    border-radius: 31px;
    color : white;
">
            <div class="card-body cb">
                <h5 class="card-title" style="text-align:centre;">Note Title</h5>
                <p class="card-text text-Area" > Your Note here !</p>

            </div>
        </div>
    </div>`;






    
  }
}


// delete
function deleteNote2(index) {
  console.log("i ama deleting");
  let notes2 = localStorage.getItem("notes2");
  if (notes2 == null) {
    notesarr2 = [];
  }
  else {
    notesarr2 = JSON.parse(notes2);
  }
  notesarr2.splice(index, 1); // delete index
  localStorage.setItem("notes2", JSON.stringify(notesarr2));

  showNotes2();
}



// 3rd column

showNotes3();
let addBtn3 = document.getElementById("addBtn3");
let delbtn3 = document.getElementById("delbtn3");

addBtn3.addEventListener("click", function (e) {
  let addText3 = document.getElementById("addText3");
  let addTitle3 = document.getElementById("addTitle3");


 
  if (addTitle3.value == "") {
    addTitle3.value = "To do";
    // alert(" Please Add a Title");
  }
  if (addText3.value == "") {
    alert("Please paste the link to the Que");
  }
  else {
    let myobj3 = {
      title: addTitle3.value,
      text: addText3.value
    }
    let notes3 = localStorage.getItem("notes3");
    if (notes3 == null) {
      notesarr3 = [];
    }

    else {
      notesarr3 = JSON.parse(notes3);
      //make it array
    }

    notesarr3.push(myobj3);
    localStorage.setItem("notes3", JSON.stringify(notesarr3));
    addText3.value = "";
    addTitle3.value = "";
  }

  showNotes3();
})





function showNotes3() {
  let notes3 = localStorage.getItem("notes3");
  if (notes3 == null) {
    notesarr3 = [];
  }
  else {
    notesarr3 = JSON.parse(notes3);
    //make it array
  }

  let html3 = ""; // thhe code  of notes will bw written 


  notesarr3.forEach(function (element, index) {
    console.log("true foung");
    html3 +=
      `       <div class="accLinks">
      <nav class="navbar3 navbar-dark" id="accountbar3">
          <div class="container-fluid" style="    padding: 4px 0px 4px 6px;
          "          >
         
              <a href="${element.text}" target="_blank" class="quelinkall padd">  ${index + 1}. ${element.title} </a>
              <a class="navbar-brand" href="#">
                  <button id="${index}" class="deleteBtn3 padd"
                      onclick="deleteNote3(this.id)">X</button>
              </a>
              </a>
          </div>
      </nav>
      <hr>
  </div>



  `
      ;
  }
  );

  let notesElm3 = document.getElementById("quelink");
  if (notesarr3.length != 0) {
    notesElm3.innerHTML = html3;// add html code to show cards of notes
  }
  else {
    notesElm3.innerHTML = ` <div class="alert alert-warning alert-dismissible fade show" role="alert" STYLE="background-color: rgb(158, 231, 158); text-align: center;">
    You can add your Coding websites accounts like  <strong>  Codeforces, Hackerearth,Codechef </strong>,Etc
    <br>
    Example :-
    <div class="accLinks">
    <nav class="navbar3 navbar-dark" id="accountbar3" >
        <div class="container-fluid" style="    padding: 4px 0px 4px 6px;
        "           >
       
            <a href="https://codeforces.com/problemset/problem/115/A" target="_blank" class="quelinkall padd">  Graph DFS </a>
            <a class="navbar-brand " href="#">
                <button class="deleteBtn3 padd" >X</button>
            </a>
            </a>
        </div>
    </nav>
   
</div>
    <button type="button" class="btn-close deleteBtn3" data-bs-dismiss="alert" aria-label="Close" style="color: white;"></button>
  </div>`;
  }
}


// delete
function deleteNote3(index) {
  console.log("i ama deleting");
  let notes3 = localStorage.getItem("notes3");
  if (notes3 == null) {
    notesarr3 = [];
  } else {
    notesarr3 = JSON.parse(notes3);
  }

  notesarr3.splice(index, 1); // delete index
  localStorage.setItem("notes3", JSON.stringify(notesarr3));

  showNotes3();
}

// date and time:-
function updateClock() {
  var now = new Date();
  var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

  if (hou >= 12) {
    pe = "PM";
  }
  if (hou == 0) {
    hou = 12;
  }
  if (hou > 12) {
    hou = hou - 12;
  }

  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  }

  var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
  var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
  var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
  for (var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}
