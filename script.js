function randomQuotes() {
    $.getJSON("quotes.json", function(data) {
        var choose = Math.floor(Math.random() * data.quotes.length);
        var canvas = document.getElementById('text-greeting');

        var typewriter = new Typewriter(canvas, {
            delay: 60
        });
    
        typewriter.typeString(data.quotes[choose]).start();
    });
}