function getRandomColour() {
    const colours = ["#FAFACE", "#D4D0F5", "#FDF9E0", "#CCF3F1", "#D1E9CF"];
    const randomIndex = Math.floor(Math.random() * colours.length);
    return colours[randomIndex];
}

const stickyContainer = document.querySelector('.sticky-notes');
const addBtn = document.querySelector('.add-button');

const addNotes = () => {
    const inputData = document.querySelector('#new-note').value.trim();

    if (inputData === "") {
        alert("Please add the data");
        return;
    }

    const newNote = document.createElement('div');
    newNote.classList.add('sticky-note');
    newNote.style.backgroundColor = getRandomColour();

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', () => {
        newNote.remove();
    });

    const stickyData = document.createElement('div');
    stickyData.classList.add('note-content');
    stickyData.textContent = inputData;

    newNote.appendChild(deleteButton);
    newNote.appendChild(stickyData);


    stickyContainer.appendChild(newNote);

    document.querySelector('#new-note').value = '';
}


addBtn.addEventListener('click', addNotes);
