const form = document.getElementById("registration-form");
form.addEventListener("submit", function(event) {       // to listen (handle) the event 
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;

  if (name === "" || email === "" || password === "" || address === "" || phone === "") {
    alert("All fields are required");
    return false;
  }

  if (phone.length !== 10) {
    alert("Phone number must be 10 digits");
    return false;
  }

  if (/\d/.test(name)) {
    alert("Name cannot contain digits");
    return false;
  }

  if (!/\d/.test(password) || password.length < 8) {
    alert("Password must contain at least one number and be at least 8 characters long");
    return false;
  }

  alert(`Name: ${name}
  Email: ${email}
  Password: ${password}
  Address: ${address}
  Phone: ${phone}`);
});
