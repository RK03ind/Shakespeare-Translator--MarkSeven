document.querySelector(".translate-button").addEventListener("click", () => {
  var text = document.querySelector(".text-input").value;
  if (!text) return alert("Enter Something to translate");
  document.querySelector(".translate-button").innerText = "Translating...";
  fetch(
    `https://api.funtranslations.com/translate/shakespeare.json?text=${text}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector(".text-output").innerText =
        data.contents.translated;
      document.querySelector(".translate-button").innerText = "Translate";
    })
    .catch((error) => {
      alert("Something went wrong");
      document.querySelector(".translate-button").innerText = "Translate";
    });
});
