var _a;
(_a = document.getElementById('resumefrom')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion for all input elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var regionElement = document.getElementById('Region');
    var countryElement = document.getElementById('country');
    var educationElement = document.getElementById('education');
    var fatherNameElement = document.getElementById('fatherName');
    var experienceElement = document.getElementById('Experience');
    var skillsElement = document.getElementById('Skils');
    // Check if all elements are available
    if (nameElement && emailElement && phoneElement && regionElement &&
        countryElement && educationElement && fatherNameElement &&
        experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var region = regionElement.value;
        var country = countryElement.value;
        var education = educationElement.value;
        var fatherName = fatherNameElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Resume output structure
        var resumeOutput = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">".concat(name_1, "</span></p>\n            <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n            <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n            <p><strong>Region:</strong> <span id=\"edit-region\" class=\"editable\">").concat(region, "</span></p>\n            <p><strong>Country:</strong> <span id=\"edit-country\" class=\"editable\">").concat(country, "</span></p>\n            <p><strong>Father's Name:</strong> <span id=\"edit-father-name\" class=\"editable\">").concat(fatherName, "</span></p>\n\n            <h3>Education</h3>\n            <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n            <h3>Experience</h3> \n            <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n        ");
        // Insert the generated resume into the page
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        // Make the fields editable
        makeEditable();
    }
    else {
        console.error('One or more input elements are missing');
    }
});
// Function to make resume fields editable when clicked
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
