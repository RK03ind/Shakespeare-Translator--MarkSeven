document.querySelector(".translate-button").addEventListener("click", () => {
  var text = document.querySelector(".text-input").value;
  if (!text) return alert("Enter Something to translate");
  document.querySelector(".translate-button").innerText = "Translating...";
  fetch(
    `https://api.funtranslations.com/translate/shakespeare.json?text=${text}`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 429) {
        throw new Error("Request limit reached");
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((data) => {
      document.querySelector(".text-output").innerText =
        data.contents.translated;
      document.querySelector(".translate-button").innerText = "Translate";
    })
    .catch((error) => {
      alert(error);
      document.querySelector(".translate-button").innerText = "Translate";
      console.log(error);
    });
});
