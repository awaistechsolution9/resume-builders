document.getElementById('resumefrom')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Type assertion for all input elements
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const regionElement = document.getElementById('Region') as HTMLInputElement;
    const countryElement = document.getElementById('country') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const fatherNameElement = document.getElementById('fatherName') as HTMLInputElement;
    const experienceElement = document.getElementById('Experience') as HTMLInputElement;
    const skillsElement = document.getElementById('Skils') as HTMLInputElement;

    // Check if all elements are available
    if (
        nameElement && emailElement && phoneElement && regionElement && 
        countryElement && educationElement && fatherNameElement && 
        experienceElement && skillsElement
    ) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const region = regionElement.value;
        const country = countryElement.value;
        const education = educationElement.value;
        const fatherName = fatherNameElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Resume output structure
        const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
            <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
            <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
            <p><strong>Region:</strong> <span id="edit-region" class="editable">${region}</span></p>
            <p><strong>Country:</strong> <span id="edit-country" class="editable">${country}</span></p>
            <p><strong>Father's Name:</strong> <span id="edit-father-name" class="editable">${fatherName}</span></p>

            <h3>Education</h3>
            <p id="edit-education" class="editable">${education}</p>

            <h3>Experience</h3> 
            <p id="edit-experience" class="editable">${experience}</p>

            <h3>Skills</h3>
            <p id="edit-skills" class="editable">${skills}</p>
        `;

        // Insert the generated resume into the page
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }

        // Make the fields editable
        makeEditable();
    } else {
        console.error('One or more input elements are missing');
    }
});

// Function to make resume fields editable when clicked
function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function() {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing-input');

                input.addEventListener('blur', function() {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline';
                    input.remove();
                });

                currentElement.style.display = 'none';
                currentElement.parentNode?.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}
