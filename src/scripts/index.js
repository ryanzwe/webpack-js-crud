
import '../styles/index.scss';
import { HelloWorldServiceClient } from './Clients/HelloWorldServiceClient';

// Retrieve Users
let client = new HelloWorldServiceClient();
client.ReturnStaff((data) => {
    console.log("dayta",data);
    appendUserToDom(data);
});

// Append users onto the dom after retrieving
function appendUserToDom(data) {
    const mainHeader = document.getElementById("welcomeUsers");
    data.forEach(element => {
        const welcomeUser = document.createElement("h1");
        welcomeUser.textContent = `Welcome ${element.email}`;
        mainHeader.append(welcomeUser);
    });
}
// Add listener onto the form to create a user
const userSubmitForm = document.getElementById("submitUserForm");
userSubmitForm.addEventListener("submit",function(ev){
    const userFormElements = userSubmitForm.elements;
    const firstNameValue = userFormElements['formFirstName'].value;
    const lastNameValue = userFormElements['formLastName'].value;
    const newUser = {
        firstName:firstNameValue,
        lastName:lastNameValue
    };
    client.CreateUser(newUser,(data) =>{
        appendUserToDom(data);
    },
    (request) => {
        const ele = document.getElementById("formErrorSpan");
        ele.textContent = request.responseText;
        setInterval(() => ele.textContent = "",5000 );
    });
    ev.preventDefault();
});





