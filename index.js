// index.ts
var resumeForm = document.getElementById("resumeForm");
var resumeOutput = document.getElementById("resumeOutput");
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Getting input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Clear previous resume output
    resumeOutput.innerHTML = '';
    // Generate the resume below the form
    resumeOutput.innerHTML = "\n        <h2>Your Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Education:</strong><br>").concat(education.replace(/\n/g, '<br>'), "</p>\n        <p><strong>Experience:</strong><br>").concat(experience.replace(/\n/g, '<br>'), "</p>\n        <p><strong>Skills:</strong><br>").concat(skills.replace(/\n/g, '<br>'), "</p>\n    ");
    // Show the resume output section
    resumeOutput.style.display = 'block';
});
