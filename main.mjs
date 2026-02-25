// This is a placeholder file which shows how you can access JSON data defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import words from "./words.json" with { type: "json" };

import {checkSpelling} from "./spellchecker.mjs";

const textInput=document.getElementById("text-input");       //grabs the  <textarea> from HTML so JS can interact with it.
const checkButton=document.getElementById("check-button");   //grabs the “Check Spelling” button from HTML.
const resultsDiv=document.getElementById("results");         //grabs the <div> where spelling mistakes will be displayed.

// Button to listen to the event.
checkButton.addEventListener("click", ()=> {                 //When the button is clicked, run this function.
    const text =textInput.value;
    const mistakes =checkSpelling(text, words);
    resultsDiv.innerHTML = "";                               //Clears any previous spelling results from the page.
    if(mistakes.length===0){                                 // Checks if there are no misspelled words.
        return;}
        mistakes.forEach((word)=>{                           // Loops through each misspelled word to display it on the page.
            const wordDiv = document.createElement("div");   // creates a new <div> element in the browser for each misspelled word.
            wordDiv.textContent=`Misspelled word: ${word}`;  //Adds text inside the newly created <div> to show the misspelled word.
            const addButton = document.createElement("button");//Creates a new button element in memory for the user to add the misspelled word to the dictionary.
            addButton.textContent = "Add to dictionary";
            addButton.addEventListener("click", () => {        //Sets up a click handler for the button so the word can be added to the dictionary.
                 words.push(word.toLowerCase());              //Adds the misspelled word to the dictionary array.
                checkButton.click();                         //Programmatically triggers a click on the “Check Spelling” button.
                });
            wordDiv.appendChild(addButton);                  //Adds the “Add to dictionary” button to the word’s <div> so it appears in the browser. 
        resultsDiv.appendChild(wordDiv);
        });
    });



