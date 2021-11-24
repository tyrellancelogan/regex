// Regex validation object
const validate = {
    username: /^[a-zA-z][\w]{3,15}$/,
    email: /^([a-zA-z][\w\.-]+)@([a-zA-z\d-]+)\.([a-z]{1,5})(?:\.([a-z]{1,5}))?$/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*]).{8,}$/,
    confirm: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*]).{8,}$/,
    phone: /^((0\d{3})[ ]?(\d{3})[ ]?(\d{4})){0,13}|(\+?\d{10,13})$/,
};

// get form object and inputs objects
const formObj = document.querySelector("#signup");
const inputObj = document.querySelectorAll("#signup input");

// test regex pattern with user input
const inputValidate = (reg, input) => reg.test(input.value);

// add event listener to inputs obj
for (input of inputObj) {
    input.addEventListener("input", (evt) => {
        const evtTag = evt.target;
        // console.dir(evt.target);
        // consol.log("a");
        // change class of input field based on regex test on input value
        if (evtTag.value.length > 3) {
            if (inputValidate(validate[evtTag.name], evtTag)) {
                console.log(true);
                evtTag.classList.remove("invalid");
                evtTag.classList.add("valid");
            } else {
                console.log(false);
                evtTag.classList.remove("valid");
                evtTag.classList.add("invalid");
            }
        }
    });
}

const passwordField = formObj.elements.password;
console.log(passwordField);
