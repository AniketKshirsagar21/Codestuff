console.log('its working');
// let globid=10;

// localStorage.setItem("globid", );
let impArray = [];
// impArray.push("3");

localStorage.setItem('impArr', JSON.stringify(impArray));

showNotes();
// showNotes2()
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
  let addText = document.getElementById("addText");
 let addTitle = document.getElementById("addTitle");
  let myobj ={
    title: addTitle.value,
    text: addText.value

  }

  console.log(myobj);
  if (addText.value == "") { alert("cannot add Empty Note ! Please write Something"); }
 else if (addTitle.value == "") { alert(" Please Add a Title"); }
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
  // showNotes2();
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


// let f = true;

// let myar = JSON.parse(localStorage.getItem('impArr'));
  notesarr.forEach(function (element, index) {
// console.log(myar.length);
      console.log("true foung");
      html += `
            <div class="noteCard my-2 mx-2 card mycard" style="
            width: 18rem;
          background : rgba(82,136,217,.6);
            border-radius: 31px;
            color : white;
        ">
                    <div class="card-body cb">
                        <h5 class="card-title">${index+1}. ${element.title}</h5>
                        <p class="card-text text-Area" > ${element.text}</p>
                        <button class="deleteBtn" id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                        <button class="impBtn" id="${index}"onclick="imp(this.id)"   " class="btn btn-primary">Make Imp</button>

                    </div>
                </div>`;
    
  }
  );

  let notesElm = document.getElementById("notes");
  if (notesarr.length != 0) {
    notesElm.innerHTML = html;// add html code to show cards of notes
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}



// function showNotes2() {
//   let notest = localStorage.getItem("impArr");
//   if (notest == null) {
//     notesarr = [];
//   }
//   else {
//     notesarr = JSON.parse(notest);
//     //make it array
//   }

//   let html = ""; // thhe code  of notes will bw written 


// // let f = true;

// // let myar = JSON.parse(localStorage.getItem('impArr'));
//   notesarr.forEach(function (element, index) {
// // console.log(myar.length);
//       console.log("true foung");
//       html += `
//             <div class="noteCard my-2 mx-2 card" style="
//             width: 18rem;
//             background-color: #789dfb;
//             border-radius: 31px;
//         ">
//                     <div class="card-body cb">
//                         <h5 class="card-title">Note ${index + 1}</h5>
//                         <p class="card-text text-Area"> ${element}</p>
//                         <button class="deleteBtn" id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
//                         <button class="impBtn" id="${index}"onclick="imp(this.id)"   class="btn btn-primary" style="      background-color: rgb(6, 105, 39);   color: white;  " " class="btn btn-primary">Make Imp</button>

//                     </div>
//                 </div>`;
    
//   }
//   );

//   let notesElm = document.getElementById("notes");
//   if (notesarr.length != 0) {
//     notesElm.innerHTML = html;// add html code to show cards of notes
//   } else {
//     notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
//   }
// }

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



function imp(index) {
  // globid = index;
  console.log("Making Imp");


  let myar = JSON.parse(localStorage.getItem('impArr'));
myar.push(index);



localStorage.setItem("impArr" , JSON.stringify(myar));

// showNotes();












  
  // let notes = localStorage.getItem("notes");
  // if (notes == null) {
  //   notesarr = [];
  // }
  // else {
  //   notesarr = JSON.parse(notes);
  //   //make it array
  // }

  // let html = ""; // thhe code  of notes will bw written 
  // let idx = index;
  // notesarr.forEach(function (element, index) {
  //   if (idx == index) {
  //     html += `
  //     <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
  //             <div class="card-body cb">
  //                 <h5 class="card-title">Note ${index + 1}</h5>
  //                 <p class="card-text"> ${element}</p>
  //                 <button class="deleteBtn" id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
  //                 <button class="impBtn" id="${index}"onclick="imp(this.id)" class="btn btn-primary style="      background-color: rgb(6, 105, 39);   color: white;
  //                 " class="btn btn-primary">Make Imp</button>

  //             </div>
  //         </div>`;
  //   }
  //   else {
  //     html += `
  //           <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
  //                   <div class="card-body cb">
  //                       <h5 class="card-title">Note ${index + 1}</h5>
  //                       <p class="card-text"> ${element}</p>
  //                       <button class="deleteBtn" id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
  //                       <button class="impBtn" id="${index}"onclick="imp(this.id)"   " class="btn btn-primary">Make Imp</button>

  //                   </div>
  //               </div>`;
  //   }
  // }
  // );

  // let notesElm = document.getElementById("notes");
  // if (notesarr.length != 0) {
  //   notesElm.innerHTML = html;// add html code to show cards of notes
  // } else {
  //   notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  // }

  // }

}



var theme = document.getElementById("icon");
theme.onclick = function(){
  document.body.classList.toggle("dark-theme");


}