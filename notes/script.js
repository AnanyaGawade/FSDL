const input = document.getElementById("noteInput");
const container = document.getElementById("notesContainer");

// LOAD NOTES FROM STORAGE
function loadNotes(){
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    container.innerHTML = "";

    notes.forEach((note, index) => {

        const div = document.createElement("div");
        div.className = `note ${note.priority.toLowerCase()}`;

        div.innerHTML = `
            <button class="delete-btn" onclick="deleteNote(${index})">X</button>
            <h3>${note.title}</h3>
            <p><strong>Category:</strong> ${note.category}</p>
            <p><strong>Priority:</strong> ${note.priority}</p>
            <p>${note.text}</p>
        `;

        container.appendChild(div);
    });
}

// ADD NOTE
function addNote(){
    const title = document.getElementById("titleInput").value.trim();
    const category = document.getElementById("categoryInput").value.trim();
    const priority = document.getElementById("priorityInput").value;
    const text = document.getElementById("noteInput").value.trim();

    if(title === "" || category === "" || priority === "" || text === ""){
        alert("All fields are required");
        return;
    }

    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    const newNote = {
        title,
        category,
        priority,
        text
    };

    notes.push(newNote);

    localStorage.setItem("notes", JSON.stringify(notes));

    // CLEAR INPUTS
    document.getElementById("titleInput").value = "";
    document.getElementById("categoryInput").value = "";
    document.getElementById("priorityInput").value = "";
    document.getElementById("noteInput").value = "";

    loadNotes();
}

// DELETE NOTE
function deleteNote(index){
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}

// INITIAL LOAD
loadNotes();