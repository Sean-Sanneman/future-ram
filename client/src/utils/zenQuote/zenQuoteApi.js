// Script for zenQuotes api

// ------- Function to fetch quote from api -------
var getQuotes = function () {
    var zenQuoteUrl = "https://zenquotes.io/api/random";

    fetch(zenQuoteUrl).then(function ( response ) {
        if(response.ok) {
            response.json().then(function (data) {
                console.log(data);

                var quote = document.createElement("text");
                quote.src = zenQuoteUrl;
                document.querySelector("quoteResult").appendChild(quote)

                data.items = data.items.slice(0,1);
                data.items.forEach((doc) => {
                    let quote = doc.q;
                    let author = doc.a;
                    let h = doc.h;
                })
            })
        }
    })
}

export default getQuotes;