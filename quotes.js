document.addEventListener("DOMContentLoaded", main);

// Array of quotes
const quotes = [
  "If today were the last day of my life, would I want to do what I do today?” -Steve Jobs",
  "I can't relate to lazy people. We don't speak the same language. -Kobe Bryant",
  "I am the Way, the Truth, and the Life. No one comes to the Father except through me. Let the one among you who is without sin be the first to cast a stone. As the Father has loved me, so have I loved you. - Jesus",
  "It takes 20 years to build a reputation and five minutes to ruin it -Warren Buffett",
  "When you do not know what to say, the truth is a great place to start. -Andrew Stribling",
];

// Array of favorite websites
const websites = [
  "https://www.spotify.com",
  "https://www.youtube.com",
  "https://www.discord.com",
];

// Function to display the selected quote
function quoteSelector(quoteNumber) {
  let quoteIndex = quoteNumber % quotes.length; // Calculate the remainder
  let selectedQuote = quotes[quoteIndex]; // Get the quote at the calculated index

  const quoteContainer = document.getElementById("quote-container");
  quoteContainer.innerHTML = `<p>${selectedQuote}</p>`; // Display the selected quote
}

// Function to display the websites
function displayWebsites() {
  const websitesContainer = document.getElementById("website-container");
  websitesContainer.innerHTML = ""; // Clear existing content
  websites.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.textContent = url;
    link.target = "_blank"; // Open link in a new tab
    websitesContainer.appendChild(link);
    websitesContainer.appendChild(document.createElement("br")); // Add line break
  });
}

// Function to handle favorite website input and update the list
function favoriteWebsite() {
  let favoriteWebsite = prompt("User please enter your favorite website URL?");
  websites.push(favoriteWebsite); // Add the new website to the end of the array
  websites.shift(); // Remove the first website from the array
  displayWebsites(); // Display the updated list of websites
}

// Main function to prompt the user and display the quote and websites
function main() {
  let quoteNumber = prompt("User please select a number greater than 0.");
  quoteNumber = Math.floor(Number(quoteNumber)); // Convert to number and round down
  if (isNaN(quoteNumber) || quoteNumber <= 0) {
    alert("Please enter a valid number greater than 0.");
    return;
  }
  quoteSelector(quoteNumber); // Display the selected quote
  displayWebsites(); // Display the initial list of websites
  favoriteWebsite(); // Prompt for favorite website and update the list
}
