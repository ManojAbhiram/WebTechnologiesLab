document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var qualification =
    document.querySelectorAll('input[name="qualification"]:checked');
    var highestDegree = document.getElementById('highestDegree').value;
    if (!name || !email || !gender || qualification.length === 0 ||
    !highestDegree) {
    alert('Please fill in all the required fields.');
    return;
    }
    var confirmationMessage = `Name: ${name}\nEmail: ${email}\nGender:
    ${gender.value}\nQualification: `;
    for (var i = 0; i < qualification.length; i++) {
    confirmationMessage += qualification[i].value + ', ';
    }
    confirmationMessage += `\nHighest Degree: ${highestDegree}`;
    if (confirm(`Please confirm your details:\n\n${confirmationMessage}`))
    {
    alert('Form submitted successfully!');
    document.getElementById('myForm').reset();
    } else {
    alert('Form submission canceled.');
    }
    });
    