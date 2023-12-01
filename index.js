function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");

  let button = document.getElementById("change-mode");
  let logo = document.getElementById("logo");
  let ghbutton = document.getElementsByTagName("svg");
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

      console.log(audio);

      document.getElementById("word").innerHTML = word;
      document.getElementById("definition").innerHTML = meaning;
      document.getElementById("syns").innerHTML = synonym;
      document.getElementById("audio").src = audio; // Fix: Use getElementById instead of getElementsByTagName
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

document.getElementById("search-btn").addEventListener("click", wordLookup);

document.getElementById("wo-rd").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    wordLookup();
  }
});
