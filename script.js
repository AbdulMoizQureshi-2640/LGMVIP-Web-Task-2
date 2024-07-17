document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const picture = document.getElementById('picture').files[0]; // Get the uploaded picture file
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skills = [...document.querySelectorAll('input[name="skills"]:checked')].map(skill => skill.value).join(', ');

    const displayData = document.getElementById('displayData');

    const newDataDiv = document.createElement('div');
    newDataDiv.classList.add('submitted-data');
    newDataDiv.innerHTML = `
    <div class="info">
        <h3>Registration Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Gender:</strong> ${gender}</p>
         <p><strong>Skills:</strong> ${skills}</p>

    </div>
    <div class="picture">
        <img src="${picture ? URL.createObjectURL(picture) : 'placeholder.png'}" alt="Uploaded Picture">
    </div>
`;

    displayData.appendChild(newDataDiv);

    document.getElementById('registrationForm').reset();
});


function clearForm() {
    document.getElementById('registrationForm').reset();
}