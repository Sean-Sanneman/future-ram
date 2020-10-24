// Script for zenQuotes api

// ------- Function to fetch quote from api -------
var getQuotes = function (quotes) {
    var zenQuoteUrl = "https://zenquotes.io/api/random"
}

// ------- Fetching quotes -------

fetch(zenQuoteUrl).then(function ( response ) {
    if(response.ok) {
        response.json().then(function (response) {
            console.log(data);
        })
    }
})