function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    if (name === "" || age === "" || course === "") {
        alert("Please fill all the fields");
        return;
    }

    let card = document.createElement("div");
    card.classList.add("Student-card");

    card.innerHTML = `
        <h3>Name: ${name}</h3>
        <p>Age: ${age}</p>
        <p>Course: ${course}</p>
        <button class="deletebutton">Delete</button>
    `;

    let deleteButton = card.querySelector(".deletebutton");

    deleteButton.onclick = function () {
        card.remove();
    };

    document.getElementById("studentList").appendChild(card);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}
