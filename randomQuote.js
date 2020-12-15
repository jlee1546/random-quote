let quotes = [
    "Be yourself; everyone else is already taken --Oscar Wilde",
    "So many books, so little time --Frank Zappa",
    "A room without books is like a body without a soul --Cicero",
    "You only live once, but if you do it right, once is enough --Mae West",
    "Be the change that you wish to see in the world --Gandhi",
    "In three words I can sum up everything about I've learned about life: it goes on --Robert Frost",
    "If you tell the truth, you don't have to remember anything --Mark Twain"

]

const child = document.querySelector('.child');
const button = document.querySelector('.button');
const quote = document.querySelector('.quotes');
quote.textContent = "Press the button to read a random quote --Jonathan Lee";

function randomQuote() {
    let min = 0;
    let max = quotes.length;
    return quotes[Math.floor(Math.random() * (max-min) + min)];
}

button.addEventListener('click',(e) => {
    quote.textContent = randomQuote();
});
