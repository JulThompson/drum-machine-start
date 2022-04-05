const historyList = document.querySelector(".history") as HTMLElement;
const lastSoundName = document.querySelector("#last-sound-name") as HTMLElement;
// IMPORTANT: Do NOT add any more global variables. 


// TODO: Step 1a - Implement the function playSound.
// Make the audio element with the matching data-sound attribute play.
// Also, update the lastSoundName to display the name of the sound.
function playSound(sound : string): void {
  throw new Error("Not implemented"); //remove me    
}

// TEST: Step 1b - Confirm your playSound function works by clicking the h1.
// You may remove this testing code after confirming playSound works.
lastSoundName.addEventListener("click", (event : MouseEvent) => {
  playSound(prompt("Test the playSound function by entering a sound name:") as string);
});


// TODO: Step 2a - Set up a listener for the "keydown" event. 
// Based on the key pressed, add the "playing" class 
// to the .drum element with matching data-key attribute.
// Then play the appropriate sound, based on its data-sound attribute.
// Ignore repeated key presses from held-down keys.




// TODO: Step 2b - Set up a listener for the "keyup" event. 
// Based on the key pressed, remove the "playing" class 
// from the .drum element with matching data-key attribute.




// TODO: Step 3a - Implement the function handleClickDrum to be used for
// 'mousedown' events  on the .drum elements. Play the sound according 
// to the  data-sound attribute of clicked element.
function handleClickDrum(event : MouseEvent): void {
  throw new Error("Not implemented"); //remove me    
}

// TEST: Step 3b - Confirm your playSound method is working via the
// following click listener that is attach to the first .drum element.
// **Remove this testing code after confirming playSound works.**
const oneDrum = document.querySelector(".drum") as HTMLElement;
oneDrum.addEventListener("mousedown", handleClickDrum);

// TODO: Step 4 - Register handleClickDrum as the mousedown event listener
// for ALL .drum elements. Use the document.querySelectorAll() and .forEach() methods
// to do so with no repetitious code

// TODO: Step 5a - Implement addToHistory below.
// Add a new <li> element to the historyList
// The content of the <li> element should be the same as the given 
// drum's data-key attribute.
// Each <li> element should also have an anonymous click handler that plays 
// the drum's matching sound.
function addToHistory(drum : HTMLElement): void {
    throw new Error("Not implemented"); //remove me    
}

// TODO: Step 5b - Add calls to addToHistory in both the 
// 'keydown' listener and handleClickDrum

// TODO: Step 6a - Add some code to the 'keydown' listener that
// toggles the class "hidden" for the historyList when "/" is typed.
// This should cause the history to become invisible/visible.
// HINT: Use the classList.toggle() method, rather than .add() or .remove()

// TODO: Step 6b - Add some code to the 'keydown' listener that causes
// all the <li> elements to be removed, clearing the history.
// HINT: Use the document.querySelectorAll and .forEach methods again!

