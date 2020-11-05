let childIdeas = document.querySelectorAll(".child-idea");
let button = document.querySelector("#more-info");

childIdeas.forEach((idea) => idea.classList.add("highlighted"));
button.classList.add("primary", "btn");
