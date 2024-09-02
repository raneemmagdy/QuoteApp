var quotes = [
    { quote: "“You miss 100% of the shots you don't take”", attribution: "-- Wayne Gretzky" },
    { quote: "“Be yourself; everyone else is already taken.”", attribution: "-- Oscar Wilde" },
    { quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", attribution: "-- Albert Einstein" },
    { quote: "“So many books, so little time.”", attribution: "-- Frank Zappa" },
    { quote: "“A room without books is like a body without a soul.”", attribution: "-- Marcus Tullius Cicero" },
    { quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", attribution: "-- Bernard M. Baruch" },
    { quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", attribution: "-- Dr. Seuss" },
    { quote: "“You only live once, but if you do it right, once is enough.”", attribution: "-- Mae West" }
    
   
];

var btn=document.getElementById("btn")

btn.onclick=function(){
    quote()
}

function quote(){
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quoteText = `${quotes[randomIndex].quote}<br>${quotes[randomIndex].attribution}`;
    document.getElementById("quoteText").innerHTML = quoteText;
}