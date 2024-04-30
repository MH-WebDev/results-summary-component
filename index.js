let category = document.querySelectorAll(".name");
let score = document.querySelectorAll(".score");

//Adds /100 to each result field, along with class to colour the text
let total = document.createElement("span");
total.textContent = " / 100";
total.classList.add("text-light-lavender");

// Fetch the JSON file
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i in data) {
      category[i].textContent = data[i].category;
      score[i].textContent = data[i].score;
      score[i].append(total.cloneNode(true));
    }
      // Extract scores from the JSON data
      const scores = data.map(entry => entry.score);
      
      // Calculate the average score
      const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;
      
      // Round the average score to 0 decimal places
      const roundedAverageScore = Math.round(averageScore);
      
      // Output the result to the webpage
      document.getElementById('totalScore').textContent = roundedAverageScore;
  });