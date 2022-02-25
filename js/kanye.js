const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data))
}

const displayQuotes = quote => {
    const quoteDisplayPlace = document.getElementById('showQuote');
    quoteDisplayPlace.innerText = quote.quote;
}
