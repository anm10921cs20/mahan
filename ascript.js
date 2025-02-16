
function clickOn(){
const Name = document.getElementById('name').value;
const contact = document.getElementById('mobile').value;
const email = document.getElementById('email').value;
const gender = document.getElementsByName('gender').value;
const degree = document.getElementById('select').value;
if(Name|contact|email|gender|degree)
{
    alert("Registration Succesfully");
    return;
}
else
{
    alert("Registration Unsuccesfully");
}
};
