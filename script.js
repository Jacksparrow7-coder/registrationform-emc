// form variables and event listeners
let username = document.getElementById("username");
username.addEventListener("input", function () {
  let usernameError = document.getElementById("username-error");
  if (username.value.length < 3) {
    usernameError.innerHTML =
      "<span style='color:red;'>Enter a valid name</span>";
  } else {
    usernameError.textContent = "";
  }
});

let age = document.getElementById("age");
age.addEventListener("input", function () {
  let ageError = document.getElementById("age-error");
  if (age.value < 1 || age.value > 50) {
    ageError.innerHTML =
      "<span style='color:red;'>Age must be between 1 to 50</span>";
  } else {
    ageError.textContent = "";
  }
});

let gender = document.getElementsByName("gender");

let email = document.getElementById("email");
email.addEventListener("input", function () {
  let emailError = document.getElementById("email-error");
  if (!email.value.includes("@")) {
    emailError.innerHTML =
      "<span style='color:red;'>Enter a valid email address</span>";
  } else {
    emailError.textContent = "";
  }
});

let terms = document.getElementById("terms");
terms.addEventListener("input", function () {
  let termsError = document.getElementById("terms-error");
});
// save button functionality
let saveBtn = document.getElementById("saveBtn");
let tableBody = document.querySelector("#dataTable tbody");
let form = document.getElementById("userForm");

function validateForm() {
  if (
    username.value.trim() === "" ||
    age.value.trim() === "" ||
    !Array.from(gender).some((g) => g.checked) ||
    email.value.trim() === "" ||
    !terms.checked
  ) {
    return false;
  }
  return true;
}
// save button event listener
saveBtn.addEventListener("click", () => {
  if (validateForm()) {
    let selectedGender = Array.from(gender).find((g) => g.checked).value;
    let selectedCourse = document.getElementById("course").value;

    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${username.value}</td>
            <td>${age.value}</td>
            <td>${selectedGender}</td>
            <td>${selectedCourse}</td>
            <td>${email.value}</td>
        `;

    tableBody.prepend(row);
    alert("✅ Data added successfully!");

    form.reset();
  } else {
    alert("⚠️ Please fill all fields correctly before saving.");
  }
});
