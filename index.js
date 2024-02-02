function submitloginForm() {
    // Validate the email
    const emailInput = document.querySelector("[name='useremail']");
    const passwordInput = document.querySelector("[name='password']");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || password === "") {
        // If email or password is empty, show an error message or take other actions
        alert("Email and password are required");
    } else if (!emailRegex.test(email)) {
        // If the email is not valid, show an error message or take other actions
        alert("Invalid email address");
    } else {
        // If both email and password are valid, navigate to the new page
        
        
        window.location.href = "home.html";
        alert("User has Logged In Successfully") ;       

    }

}

function submitsignupForm(){
    const emailInput = document.querySelector("[name='useremail']");
    const passwordInput = document.querySelector("[name='password']");
    const confirmPassword=document.querySelector("[name='cpassword']");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const cpassword=confirmPassword.value.trim();

    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || password === "") {
        // If email or password is empty, show an error message or take other actions
        alert("Email and password are required");
    } else if (!emailRegex.test(email)) {
        // If the email is not valid, show an error message or take other actions
        alert("Invalid email address");
    }else if(password != cpassword){
        alert("Confirm Password didnt matched");
    }
     else {
        // If both email and password are valid, navigate to the new page
        var check = isStrongPassword(password);
        console.log(check);

        if (!check) {
            alert("Make a Strong Password....\nIt should have at least..\n1 Uppercase\n1 Lowercase\n1 Number\n1 Special Character\n8 Characters Long");
            // window.location.href = "home.html";
        } else {
            // alert("Make a Strong Password....\nIt should have at least..\n1 Uppercase\n1 Lowercase\n1 Number\n1 Special Character");
        alert("User has Logged In Successfully") ;       }

    }
}

function isStrongPassword(password) {
    // Define criteria for a strong password
    const minLength = 4;  // Set a higher value, for example, 8 characters
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    // Check if the password meets all criteria
    const isStrong =
        password.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecialChar;

    return isStrong;
}
