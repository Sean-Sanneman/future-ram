// Script for zenQuotes api

// ------- Function to fetch quote from api -------
var getQuotes = function () {
    var zenQuoteUrl = "https://zenquotes.io/api/random"
}

// ------- Fetching quotes -------

fetch(zenQuoteUrl).then(function ( response ) {
    if(response.ok) {
        response.json().then(function (data) {
            console.log(data);
            data.items = data.items.slice(0,1);
            data.items.forEach((quotes) => {
                // let quote = quote
                
                let newQuote = {
                    quote: quote,
                    author: author,
                    h: h,
                },

            })
        })
    }
})