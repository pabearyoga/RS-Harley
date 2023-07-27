// sendForm.js

const form = document.getElementById("form1");
console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  sendMessage(form);
});

async function sendMessage(form) {
  const formData = new FormData(form);
  if (formData) {
    const url = "../php/sendmessage.php";
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      form.reset();
      alert("Form sent!");
    } else {
      alert("Error");
    }
  }
}