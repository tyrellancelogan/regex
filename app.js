// Regex validation object
const validate = {
    username: /^[a-zA-z][\w]{3,15}$/,
    email: /^([a-zA-z][\w\.-]+)@([a-zA-z\d-]+)\.([a-z]{1,5})(?:\.([a-z]{1,5}))?$/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_=]).{8,}$/,
    confirm: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_=]).{8,}$/,
    phone: /^((0\d{3})[ ]?(\d{3})[ ]?(\d{4}))|(\+?\d{10,13})$/,
};

// get form object and inputs objects
const formObj = document.querySelector("#signup");
const inputObj = document.querySelectorAll("#signup input");

// test regex pattern with user input
const inputValidate = (reg, input) => reg.test(input.value);

// add event listener to inputs obj
for (input of inputObj) {
    input.addEventListener("input", (evt) => {
        // console.dir(evt.target);
        // consol.log("a");
        // change class of input field based on regex test on input value
        if (inputValidate(validate[evt.target.name], evt.target)) {
            console.log(true);
        } else {
            console.log(false);
        }
    });
}
