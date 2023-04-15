const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent default form submission behavior

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // do something with the form data (e.g. send it to a server via AJAX)
  console.log(`Name: ${name}, Email: ${email}`);

  form.reset(); // reset the form after submission
});
