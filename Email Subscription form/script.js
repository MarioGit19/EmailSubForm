const scriptURL = "https://script.google.com/macros/s/AKfycbybGCpSSwHQffwIiW3572yg20X49WT12XpxVB7-hbJS-eGoAHRB4IA4bvnqb1Oe8A1tnQ/exec"
  const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You For Subscribing!";
        setTimeout(function() {
            msg.innerHTML = "";
        }, 5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })