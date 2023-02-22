const button = document.getElementById("submit-button");
const nameInput = document.getElementById("name-input");
const resultDiv = document.getElementById("result");

button.addEventListener("click", function() {
  const name = nameInput.value;

  if (name === "") {
    alert("Please enter your name");
    return;
  }

  // Get a random spirit animal
  const animals = ["scallop", "alaskan king crab", "buoy barnacle", "Gribble", "lobter", "scrimp", "hermit crab", "pea crab", "whale lice", "Remipedia"];
  const animal = animals[Math.floor(Math.random() * animals.length)];

  // Display the name fact and spirit animal
  resultDiv.innerHTML = `Did you know that ${name} is an awesome name? Your spirit animal is the ${animal}!`;
});