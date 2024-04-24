let category = document.querySelectorAll(".name");
let score = document.querySelectorAll(".score");
//let average = document.querySelectorAll(".average"); Yeah, no. Not happening

//Adds /100 to each result field, along with class to colour the text
let total = document.createElement("span");
total.textContent = " / 100";
total.classList.add("text-light-lavender");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i in data) {
      category[i].textContent = data[i].category;
      score[i].textContent = data[i].score;
      score[i].append(total.cloneNode(true));
    }
});
