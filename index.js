const form = document.getElementById("form");
const studentname = document.getElementById("studentName");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phoneNumber");
const rollnumber = document.getElementById("rollNo");
const classname = document.getElementById("className");
const address = document.getElementById("address");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const studentnameValue = studentname.value.trim();
  const emailValue = email.value.trim();
  const phoneNumbervalue = phonenumber.value.trim();
  const rollnumbervalue = rollnumber.value.trim();
  const classnamevalue = classname.value.trim();
  const addressvalue = address.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (studentnameValue === "") {
    setErrorInput(studentname, "Student cannot be blank");
  } else {
    setSuccessInput(studentname);
  }

  if (phoneNumbervalue === "") {
    setErrorInput(phonenumber, "Please fill the phone number");
  } else {
    setSuccessInput(phonenumber);
  }

  if (rollnumbervalue === "") {
    setErrorInput(rollnumber, "Please fill the roll number");
  } else {
    setSuccessInput(rollnumber);
  }

  if (classnamevalue === "") {
    setErrorInput(classname, "Enter your class name");
  } else {
    setSuccessInput(classname);
  }

  if (addressvalue === "") {
    setErrorInput(address, "Fill the address");
  } else {
    setSuccessInput(address);
  }

  if (emailValue === "") {
    setErrorInput(email, "email should be valid");
  } else {
    validateEmail(emailValue) && setSuccessInput(email);
  }

  if (passwordValue === "") {
    setErrorInput(password, "Password must valid & match");
  } else {
    setSuccessInput(password) && validatePassword(passwordValue);
  }

  if (password2Value === "") {
    setErrorInput(password2, "Password must valid & Match");
  } else if (password2Value !== passwordValue) {
    setErrorInput(password2, "Password dose not match.");
  } else {
    setSuccessInput(password2);
  }
}

function setErrorInput(input, errorMessage) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = errorMessage;
  formControl.className = "form_control error";
}

function setSuccessInput(input) {
  const formControl = input.parentElement;
  formControl.className = "form_control success";
}

function validateEmail(email) {
  let regular_expressions =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regular_expressions.test(String(email).toLocaleLowerCase());
}

function validatePassword(password) {
  let regular_expressions = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return regular_expressions.match(regular_expressions);
}
