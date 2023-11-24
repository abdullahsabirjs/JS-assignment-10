document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission action

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p>`;
});



function toggleDetails() {
    var fullDetails = document.getElementById('fullDetails');
    var button = document.getElementById('toggleButton');
    if (fullDetails.style.display === 'none') {
        fullDetails.style.display = 'block';
        button.innerText = 'Read Less';
    } else {
        fullDetails.style.display = 'none';
        button.innerText = 'Read More';
    }
}



document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('studentName').value;
    var age = document.getElementById('studentAge').value;
    var studentClass = document.getElementById('studentClass').value;
    addStudentToTable(name, age, studentClass);
});

function addStudentToTable(name, age, studentClass) {
    var table = document.getElementById('studentTable');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = studentClass;
    cell4.innerHTML = '<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>';
}
function editRow(btn) {
    var row = btn.parentNode.parentNode;
    var cells = row.getElementsByTagName('td');
    document.getElementById('studentName').value = cells[0].innerHTML;
    document.getElementById('studentAge').value = cells[1].innerHTML;
    document.getElementById('studentClass').value = cells[2].innerHTML;
    // Additional logic to update the row or a separate form for editing can be added here.
}
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
