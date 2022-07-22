/*<div class="note">
    <div class="operation">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
      
    </div>
    
  </div>*/ 


const addButton = document.querySelector("#add");
const updateLSData=()=>{
  const textAreaData=document.querySelectorAll("textarea");
  const notes=[];
  console.log(textAreaData);
  textAreaData.forEach((note)=>{
    return notes.push(note.value);
  });
  console.log(notes);
  // here we create aarray note[] and we store the value by index wise written in text area and acces it in console

localStorage.setItem("notes", JSON.stringify(notes)); 

}
const addNewNote = (text = "") =>{
  const note = document.createElement("div"); // here we create a div element 
  note.classList.add("note"); // add class note to it
//then insert rest of html data for text area
  const htmlData = `
    <div class="operation">
        <button class="edit"> <i class="fas fa-edit"></i> </button>
        <button class="delete"> <i class="fas fa-trash-alt"></i> </button>
    </div>
    <div class="main ${text ? "": "hidden"} "></div>   
    <textarea class="${text ? "hidden": ""}"></textarea> `; 
     // if there is no text then hide the main class show text area for write
    // if  sometext is present then we hide the textarea and show main class which contain the text
  
     note.insertAdjacentHTML("afterbegin", htmlData);
   //console.log(note);

// getting the References of edit ,delete button 
const editButton=note.querySelector('.edit');
const delButton=note.querySelector('.delete');
const mainDiv=note.querySelector('.main');
const textArea=note.querySelector('textarea');
 

 // deleting the node
 delButton.addEventListener('click',()=> {
  note.remove();

 updateLSData();
 })

// toggle using edit button used to toogle using edit button

textArea.value = text;
  mainDiv.innerHTML = text;


editButton.addEventListener('click',()=>{
  mainDiv.classList.toggle('hidden');
  textArea.classList.toggle('hidden');
})
 textArea.addEventListener("change", (event) => {
    const value = event.target.value;
       mainDiv.innerHTML=value;


       updateLSData();
        // we are calling a funct
       // that store the written text

  })


   document.body.appendChild(note);
 }

const notes=JSON.parse(localStorage.getItem('notes'));
if(notes){
  notes.forEach((note)=>addNewNote(note))
};


   addButton.addEventListener("click", () => addNewNote());