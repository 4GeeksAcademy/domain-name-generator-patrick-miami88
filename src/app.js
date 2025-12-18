import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our', 'my', 'your', 'their', 'his', 'her', 'its', 'thine'];
  let adj = ['great', 'big', 'amazing', 'fantastic', 'super', 'colorful', 'shiny', 'nefarious'];
  let noun = ['jogger', 'raccoon', 'pizza', 'monster', 'guava', 'sword', 'seal', 'moon', 'crescent'];
  const domainName = document.querySelector('.domainName')
  for(let a = 0; a < pronoun.length;  a++) {
    for(let b = 0; b < adj.length; b++) {
      for(let c = 0; c < noun.length; c++)  {
        console.log(pronoun[a] + adj[b] + noun[c] + '.com')

        const li = document.createElement("li");
        li.textContent = pronoun[a] + adj[b] + noun[c] + '.com';
        domainName.appendChild(li);
      }
    }
  }

};
