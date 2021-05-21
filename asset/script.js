window.onload = () => {
    const addForm = document.querySelector("#addForm");
    let items = document.getElementById("items");
    let submit = document.getElementById("submit");

    let editItem = null;

    addForm.addEventListener("submit", addTask);
    items.addEventListener("click", removeItem);
};

let addTask = (e) => {
    e.preventDefault();

    if (submit.value != "Submit") {
        console.log("Hello");
        editItem.target.parentNode.childNodes[0].data = document.getElementById("new_task").value;
        submit.value = "Submit";
        document.getElementById("new_task").value = "";
        document.getElementById("lblsuccess").innerHTML= "Text edited successfully";
        document.getElementById("lblsuccess").style.display = "block";
        setTimeout(function() {
            document.getElementById("lblsuccess").style.display = "none";
        }, 3000);
  
        return false;
    }

    let newTask = document.getElementById("new_task");
    let newItem = newTask.value;
    if (newItem.trim() == "" || newItem.trim() == null)
        return false;
    else document.getElementById("new_task").value = "";
    
    let li = document.createElement("li");
        li.className = "list-group-item";
  
    let deleteButton = document.createElement("button");
        deleteButton.className = "btn-danger btn btn-sm m-1 delete";
        deleteButton.appendChild(document.createTextNode("Delete"));
  
    let editButton = document.createElement("button");
        editButton.className = "btn-success btn btn-sm m-1 edit";
        editButton.appendChild(document.createTextNode("Edit"));

  
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);
    li.appendChild(editButton);
  
    items.appendChild(li);
}

function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you Sure?")) {
            let li = e.target.parentNode;
            items.removeChild(li);
            document.getElementById("lblsuccess").innerHTML= "Text deleted successfully";
            document.getElementById("lblsuccess").style.display = "block";
  
            setTimeout(function() {
                document.getElementById("lblsuccess")
                        .style.display = "none";
            }, 3000);
        }
    }
    if (e.target.classList.contains("edit")) {
        document.getElementById("new_task").value = e.target.parentNode.childNodes[0].data;
        submit.value = "EDIT";
        editItem = e;
    }
}

function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = false;
}



