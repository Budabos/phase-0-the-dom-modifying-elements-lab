// Write your code here!
// Assuming you have a <main> element with the id 'main' and want to replace it with a new <h1> element

// Remove the <main> element with id 'main'
const mainElement = document.querySelector('#main');
mainElement.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id attribute to 'victory'
newHeader.setAttribute('id', 'victory');

// Set the text content to 'YOUR-NAME is the champion' (replace YOUR-NAME with your actual name)
newHeader.textContent = 'YOUR-NAME is the champion';

// Append the new <h1> element to the document body or another desired location
document.body.appendChild(newHeader);
