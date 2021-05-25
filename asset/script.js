window.onload = () => {
    const addForm = document.querySelector("#addForm");
    let items = document.getElementById("items");
    let submit = document.getElementById("submit");


    let editItem = null;

    addForm.addEventListener("submit", addTask);
    items.addEventListener("click", removeItem);
    items.addEventListener("click", completedItem);
    
};



let addTask = (e) => {
    e.preventDefault();

    if (submit.value != "Submit") {
        // console.log("Hello");
        editItem.target.parentNode.childNodes[0].data = document.getElementById("new_task").value;
        submit.value = "Submit";
        document.getElementById("new_task").value = "";
        document.getElementById("lblsuccess").innerHTML= "Task edited successfully";
        document.getElementById("lblsuccess").style.display = "block";
        setTimeout(function() {
            document.getElementById("lblsuccess").style.display = "none";
        }, 3000);
  
        return false;
    }
    //from input
    let newTask = document.getElementById("new_task");
    //The value from input
    let newItem = newTask.value;
    //remove whitespace from both sides
    if (newItem.trim() == "" || newItem.trim() == null)
        return false;
    else document.getElementById("new_task").value = "";
    
    //create a new tag
    let li = document.createElement("li");
        li.className = "list-group-item listItem";
  
    let completeButton = document.createElement("button");
        completeButton.className = "btn-danger btn btn-sm m-1 completeTask";
        completeButton.appendChild(document.createTextNode("Complete"));
  
    let editButton = document.createElement("button");
        editButton.className = "btn-success btn btn-sm m-1 edit";
        editButton.appendChild(document.createTextNode("Edit"));

  
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(completeButton);
    li.appendChild(editButton);
  
    items.appendChild(li);
}

let removeItem = (e) => {
    e.preventDefault();

    if (e.target.classList.contains("edit")) {
        document.getElementById("new_task").value = e.target.parentNode.childNodes[0].data;
        document.getElementById("lblsuccess").innerHTML= "Update your task!";
        document.getElementById("lblsuccess").style.display = "block";
        submit.value = "EDIT";
        editItem = e;
    }
}

let completedItem = (e) => {
    e.preventDefault();

    let completedTask = document.getElementById("completedItems");

    if (e.target.classList.contains("completeTask")) {
        if (confirm("Are you Sure?")) {
            //li will become the parent
            let li = e.target.parentNode;
            //remove the first Button (editButton)
            li.removeChild(li.childNodes[1]);
            //remove the 2nd Button (deleteButton)
            li.removeChild(li.childNodes[1]);
            
            let today = new Date();
            let date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
            // let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let time = today.toLocaleTimeString('PST');
            // let dateTime = date;
            let dateTime = date+' '+time;

            console.log(li.childNodes[0]);
            console.log(dateTime);

            let newDate = document.createElement("p");
                newDate.className = "date";
                newDate.appendChild(document.createTextNode(dateTime));

            li.appendChild(newDate);
            completedTask.appendChild(li);
            document.getElementById("lblsuccess").innerHTML= "Task was completed!";
            document.getElementById("lblsuccess").style.display = "block";
  
            setTimeout(function() {
                document.getElementById("lblsuccess").style.display = "none";
            }, 3000);
        }
    }

}

let toggleButton = (ref, btnID) => {
    // The disabled property sets or returns whether a text field is disabled, or not.
    // true - The text field is disabled
    // false - Default. The text field is not disabled
    document.getElementById(btnID).disabled = false;
}



