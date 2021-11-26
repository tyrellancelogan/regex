// Regex validation object
const validate = {
    username: /^[a-zA-z][\w]{3,15}$/,
    email: /^([a-zA-z][\w\.-]+)@([a-zA-z\d-]+)\.([a-z]{1,5})(?:\.([a-z]{1,5}))?$/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-z\d]).{8,}$/,
    confirm: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z\d]).{8,}$/,
    phone: /(^((0\d{3})[ ]?(\d{3})[ ]?(\d{4}))$)|(^(\+?\d{10,13})$)/,
    small: /[a-z]/,
    caps: /[A-Z]/,
    number: /\d/,
    symbol: /[^a-zA-z0-9]/,
};

// get form object and inputs objects
const formObj = document.querySelector("#signup");
const inputObj = document.querySelectorAll("#signup input");
const passwordField = formObj.elements.password;
const confirmField = formObj.elements.confirm;

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

        // check if password contains certain characters

        // validate if password value matches confirm password value
        if (
            confirmField.value != "" &&
            inputValidate(validate[passwordField.name], passwordField) &&
            passwordField.value !== confirmField.value
        ) {
            console.log("password no match");
        } else if (confirmField.value != "") {
            console.log("password match");
        }
    });
}

passwordField.addEventListener("input", (evt) => {
    let message;
    let errorCount = [];
    const evtTag = evt.target;
    const tagVal = evtTag.value;
    const { small, caps, symbol, number } = validate;
    console.log(small, caps, symbol, number);
    // console.log(tagVal);
    if (
        tagVal != "" &&
        (!small.test(tagVal) || !caps.test(tagVal) || !symbol.test(tagVal) || !number.test(tagVal))
    ) {
        message = "must contain:";
        if (!small.test(tagVal)) {
            errorCount.push("small");
        } else {
            console.log("ss");
        }
        if (!caps.test(tagVal)) {
            errorCount.push("caps");
        } else {
            console.log("ss");
        }
        if (!symbol.test(tagVal)) {
            errorCount.push("symbol");
        } else {
            console.log("ss");
        }
        if (!number.test(tagVal)) {
            errorCount.push("number");
        } else {
            console.log("ss");
        }
    }

    console.log(errorCount);
});
//
