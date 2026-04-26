const form = document.getElementById("regForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let valid = true;

    // INPUT VALUES
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value.trim();

    // CLEAR ERRORS
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    // NAME
    if(name === ""){
        document.getElementById("nameError").textContent = "Name required";
        valid = false;
    }

    // EMAIL
    if(email === ""){
        document.getElementById("emailError").textContent = "Email required";
        valid = false;
    } else if(!email.includes("@")){
        document.getElementById("emailError").textContent = "Invalid email";
        valid = false;
    }

    // GENDER
    if(!gender){
        document.getElementById("genderError").textContent = "Select gender";
        valid = false;
    }

    // COURSE
    if(course === ""){
        document.getElementById("courseError").textContent = "Select course";
        valid = false;
    }

    // ADDRESS
    if(address === ""){
        document.getElementById("addressError").textContent = "Address required";
        valid = false;
    }

    // FINAL
    if(valid){
        alert("Form Submitted Successfully");
        form.reset();
    }

});