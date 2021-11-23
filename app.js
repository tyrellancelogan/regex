// Regex validation object
const validate = {
    username: /^([a-zA-z][\w]){5,12}$/,
    email: /^([a-zA-z][\w\.-]+)@([a-zA-z\d-]+)\.([a-z]{1,5})(?:\.([a-z]{1,5}))?$/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_=]).{8,}$/,
    phone: /^((0\d{3})[ ]?(\d{3})[ ]?(\d{4}))|(\+?\d{10,13})$/,
};

const inputValidator = function (validate, input) {
    // compare if input == regex
    //      remove invalid class, add valid class
    // else
    //      remove valid class, add invalid class
    if(validate.name )
    
};

const passwordValidator = function (alpha, omega) {
    // if alpha != omega
    // alert omega
};
const form = document.querySelector("form");
const formInputs = document.querySelectorAll("#signup input");

for (input of formInputs) {
    input.addEventListener("input", (e) => {
        console.log(e);
    });
}
