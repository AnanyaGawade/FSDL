const list = document.getElementById("list");
let draggedItem = null;

// START DRAG
list.addEventListener("dragstart", (e) => {
    draggedItem = e.target;
    e.target.classList.add("dragging");
});

function addTask(){
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if(text === "") return;

    const li = createTaskElement(text);
    list.appendChild(li);

    input.value = "";
}

function createTaskElement(text){
    const li = document.createElement("li");
    li.setAttribute("draggable", "true");

    li.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">X</button>
    `;

    // DELETE
    li.querySelector(".delete-btn").onclick = () => {
        li.remove();
    };

    // DRAG EVENTS
    li.addEventListener("dragstart", () => {
        draggedItem = li;
        li.classList.add("dragging");
    });

    li.addEventListener("dragend", () => {
        li.classList.remove("dragging");
    });

    return li;
}

// END DRAG
list.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
});

// DRAG OVER
list.addEventListener("dragover", (e) => {
    e.preventDefault(); // REQUIRED

    const afterElement = getDragAfterElement(list, e.clientY);

    if(afterElement == null){
        list.appendChild(draggedItem);
    } else {
        list.insertBefore(draggedItem, afterElement);
    }
});

// HELPER FUNCTION
function getDragAfterElement(container, y){
    const elements = [...container.querySelectorAll("li:not(.dragging)")];

    return elements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if(offset < 0 && offset > closest.offset){
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}