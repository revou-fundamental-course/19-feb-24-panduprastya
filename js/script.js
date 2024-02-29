const oldName = document.getElementById('name');
var nama = prompt("Siapa Nama Kamu?","");
document.write(nama);

function validateForm(event) {
    event.preventDefault(); // Prevents form submission for now
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Simple validation
    if (name === '' || email === '' || pesan === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Email validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If all validations pass, you can proceed with form submission or other actions
    alert('Form submitted successfully!');
    // Uncomment the line below if you want to submit the form programmatically
    // document.getElementById('myForm').submit();
}