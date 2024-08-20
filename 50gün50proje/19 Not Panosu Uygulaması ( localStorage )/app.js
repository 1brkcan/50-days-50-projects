const addButton = document.getElementById('add');



const notes = JSON.parse(localStorage.getItem("notes"));

if(notes){
    notes.forEach((note) => addNewNote(note));
}


//! Note Ekleme Islemi

addButton.addEventListener('click', addNewNote);

function addNewNote (text = "") {

    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML =
    `
        <img src="pin.png" alt="pin">
        <div class="tools">
            <button class="edit" id="edit"> 
                <i class="fa-solid fa-pencil"></i>
            </button>
            <button class="delete" id="delete"> 
                <i class="fa-solid fa-eraser"></i>
            </button>
        </div>

        <div class="main ${text ? "" : "hidden"}"></div>

        <textarea class="${text ? "hidden" : ""}" cols="30" rows="7"></textarea>

    ` 



    //! Note silme Islemi

    const deleteBtn = note.querySelector("#delete");

    deleteBtn.addEventListener("click", deleteNote);

    function deleteNote(){

        note.remove();

    }

    //! Note Duzenleme Islemi

    const editBtn = note.querySelector("#edit");
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    editBtn.addEventListener("click", editNote);

    function editNote(){
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");

    }

    //?----------------------------------------------------------------

    const texts = textArea.value
    main.innerHTML = marked(texts);


    textArea.addEventListener("input", (e) => {

        const {value} = e.target
        main.innerHTML = marked(value)


        updateLocalStorage()

    });


    document.body.appendChild(note);
}



//! Local Storage

function updateLocalStorage(){
    const notesText = document.querySelectorAll("textarea")
    const notes = [];

    notesText.forEach((note) => notes.push(note.value));
    localStorage.setItem("notes", JSON.stringify(notes));

}



























