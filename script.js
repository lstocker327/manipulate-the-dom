let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {

  function shortenTitle(){
      const mainTitle = document.querySelector("#main-title");
      mainTitle.textContent = "My name is Dom. This is my website."
  }

  function changeBackground(){
    const body = document.querySelector("body");
    body.style.backgroundColor = "green";
  }

  function removeListItem(){
    const list = document.querySelector("#favorite-things");
    list.removeChild(list.lastElementChild);
  }

  function changeFont(){
    const specialTitle = document.querySelectorAll(".special-title")
    specialTitle.forEach(function(title){
      title.style.fontSize = "2rem";
    })
  }

  function deleteChicago(){
    const pastRaces =  document.querySelector("#past-races");
    pastRaces.removeChild(pastRaces.childNodes[7]);
  }

  function addCity(){
    const pastRaces = document.querySelector("#past-races");
    const li = document.createElement("li");
    li.innerHTML = "New York";
    pastRaces.appendChild(li);
  }

  function addBlogPost(){
    const mainDiv = document.querySelector(".main");

    const blogPostDiv = document.createElement("div");
    blogPostDiv.classList.add("blog-post");
    blogPostDiv.classList.add("purple");
    mainDiv.appendChild(blogPostDiv);

    const blogPostH1 = document.createElement("h1");
    blogPostH1.innerHTML = "New York";
    blogPostDiv.appendChild(blogPostH1);

    const blogPostP = document.createElement("p");
    blogPostP.innerHTML = "I RACED LUKE STOCKER AND HE WON";
    blogPostDiv.appendChild(blogPostP);

  }
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
shortenTitle();

  // Part 2
changeBackground();

  // Part 3
removeListItem();

  // Part 4
changeFont();

  // Part 5
deleteChicago();

  // Part 6
addCity();

  // Part 7
addBlogPost();

  // Part 8


  // Part 9




});
