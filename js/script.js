// NAVBAR OVERLAY START
const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
// NAVBAR OVERLAY END

// ALERT COFFEE START
document.getElementById('sendCoffeeBtn').addEventListener('click', function() {
  var confirmation = confirm("Apakah Anda ingin mengirimkan kopi?");

  if (confirmation) {
    alert("Terima kasih banyak!");
  } else {
    alert("Next time kasih aku kopi yaaa!");
  }
});
// ALERT COFFEE END

// EmailJS Start
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var params = {
    from_name : document.getElementById("name").value,
    email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value,
  }

  emailjs.send("service_imuhcvk", "template_lnfdoc4", params).then(function (res) {
    alert("Success! " + res.status);
    console.log('Form terkirim:', res.status, res.text);
    resetForm();
  }, function(error) {
    console.error('Gagal mengirim form:', error);
  });
});

function resetForm() {
  document.getElementById('myForm').reset();
}
// EmailJS End
