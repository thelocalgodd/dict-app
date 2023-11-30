function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");

  let button = document.getElementById("change-mode");
  let logo = document.getElementById("logo");
  if (element.classList.contains("dark-mode")) {
    button.textContent = "Light";
    logo.src = "[ TLG ]white.png";
  } else {
    logo.src = "[ TLG ]black.png";
    button.textContent = "Dark";
  }
}

function wordLookup() {
  let word = document.getElementById("wo-rd").value;
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let word = data[0].word;
      let meaning = data[0].meanings[0].definitions[0].definition;
      let synonym = data[0].meanings[0].definitions[0].synonyms;
      let audio = data[0].phonetics[0].audio;

      if (data.title === "No Definitions Found") {
        document.getElementById("word").innerHTML = "Word not found";
        document.getElementById("definition").innerHTML = "Undefined";
        document.getElementById("syns").innerHTML = "Undefined";
        document.getElementsByTagName("audio").src = "";
      }

      document.getElementById("word").innerHTML = word;
      document.getElementById("definition").innerHTML = meaning;
      document.getElementById("syns").innerHTML = synonym;
      document.getElementsByTagName("audio").src = audio;
    });
}

document
  .getElementById("search-btn")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      wordLookup();
    }
  });
