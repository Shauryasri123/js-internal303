document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault(); // page reload stop

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let course = document.getElementById("course").value;
    let terms = document.getElementById("terms").checked;
    let gender = document.querySelector('input[name="gender"]:checked');

    let msg = document.getElementById("msg");

    // Validation
    if (name === "" || email === "" || !gender || course === "" || !terms) {
        msg.innerText = "Please fill all fields properly!";
        return;
    }

    let userData = {
        name: name,
        email: email,
        gender: gender.value,
        course: course
    };

    // Save to localStorage
    localStorage.setItem("registeredUser", JSON.stringify(userData));

    // Redirect to success page
    window.location.href = "success.html";
});