// Central datakälla för skattjakter och escape rooms
// Lägg till nya objekt i dessa arrayer utan att röra komponentlogik.

export const skattjakter = [


  {
    id: 5,
    name: "SPÖKFESTEN - YNGRE BARN",
    introImg: "/skattjakt/spokfesten1.jpg",
    questions: [
      {
        id: 1,
        type: "letters",
        img: "/skattjakt/vitaspoket.jpg",
        prompt: "Vad har det vita spöket tagit med sig?",
        answer: "BOLLAR"
      },
      {
        id: 2,
        type: "letters",
        img: "/skattjakt/rodaspoket.jpg",
        prompt: "Vad har det röda spöket tagit med sig?",
        answer: "PUMPOR"
      },
      {
        id: 3,
        type: "letters",
        img: "/skattjakt/orangeaspoket.jpg",
        prompt: "Vad har det orangea spöket tagit med sig?",
        answer: "GODIS"
      },
      {
        id: 4,
        type: "letters",
        img: "/skattjakt/gronaspoket.jpg",
        prompt: "Vad har det gröna spöket tagit med sig?",
        answer: "HÄXHATT"
      },
      {
        id: 5,
        type: "letters",
        img: "/skattjakt/rosaspoket.jpg",
        prompt: "Vad har det rosa spöket tagit med sig?",
        answer: "KVASTAR"
      },
      {
        id: 6,
        type: "letters",
        img: "/skattjakt/blaaspoket.jpg",
        prompt: "Vad har det blåa spöket tagit med sig?",
        answer: "FLADDERMÖSS"
      }
    ]
  },





  {
    id: 6,
    name: "SPÖKFESTEN - ÄLDRE BARN",
    introImg: "/skattjakt/spokfesten2.jpg",
    questions: [
      {
        id: 1,
        type: "letters",
        img: "/skattjakt/vitaspoket2.jpg",
        prompt: "Hjälp det vita spöket med gåtan och ange koden.",
        answer: "GSUT"
      },
      {
        id: 2,
        type: "number",
        img: "/skattjakt/rodaspoket2.jpg",
        prompt: "Hjälp det röda spöket med gåtan och ange koden.",
        answer: "10010"
      },
      {
        id: 3,
        type: "number",
        img: "/skattjakt/orangeaspoket2.jpg",
        prompt: "Hjälp det orangea spöket med gåtan och ange koden.",
        answer: "1457"
      },
      {
        id: 4,
        type: "letters",
        img: "/skattjakt/gronaspoket2.jpg",
        prompt: "Hjälp det gröna spöket med gåtan och ange koden.",
        answer: "HEXAGON"
      },
      {
        id: 5,
        type: "number",
        img: "/skattjakt/rosaspoket2.jpg",
        prompt: "Hjälp det rosa spöket med gåtan och ange koden.",
        answer: "35412"
      },
      {
        id: 6,
        type: "letters",
        img: "/skattjakt/blaaspoket2.jpg",
        prompt: "Hjälp det blåa spöket med gåtan och ange koden.",
        answer: "LADW"
      }
    ]
  },





















  {
    id: 4,
    name: "Bildjakten",
    introImg: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
    questions: [




      {
        id: 1,
        type: "pairImg",
        prompt: "Para ihop bilder som hör ihop!",
        pairs: [
          { img1: "/pairs/sun.svg", img2: "/pairs/sun.svg" },
          { img1: "/pairs/tree.svg", img2: "/pairs/tree.svg" },
          { img1: "/pairs/book.svg", img2: "/pairs/book.svg" }
        ],
        answer: [
          { img1: "/pairs/sun.svg", img2: "/pairs/sun.svg" },
          { img1: "/pairs/tree.svg", img2: "/pairs/tree.svg" },
          { img1: "/pairs/book.svg", img2: "/pairs/book.svg" }
        ]
      },
      {
        id: 2,
        type: "pair",
        prompt: "TESTfråga 2?",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        pairs: [
          { word: "tree", img: "/pairs/tree.svg" },
          { word: "sun", img: "/pairs/sun.svg" },
          { word: "book", img: "/pairs/book.svg" }


        ],
        answer: [
          { word: "sun", img: "/pairs/sun.svg" },
          { word: "tree", img: "/pairs/tree.svg" },
          { word: "book", img: "/pairs/book.svg" }
        ]
      },
    ]
  },



  {
    id: 1,
    name: "Stadens mysterium",
    introImg: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    questions: [
      {
        id: 1,
        type: "number",
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        prompt: "Hur många nycklar ser du på bilden?",
        answer: ["3", "tre", "03"]
      },
      {
        id: 2,
        type: "letters",
        img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
        prompt: "Skriv det hemliga ordet (hint: BOK)",
        answer: "BOK"
      },
      {
        id: 3,
        type: "pair",
        prompt: "Para ihop bilder med rätt ord!",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        pairs: [
          { word: "Sol", img: "/pairs/tree.svg" },
          { word: "Träd", img: "/pairs/sun.svg" },
          { word: "Bok", img: "/pairs/book.svg" }


        ],
        answer: [
          { word: "Sol", img: "/pairs/sun.svg" },
          { word: "Träd", img: "/pairs/tree.svg" },
          { word: "Bok", img: "/pairs/book.svg" }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Naturens gåtor",
    introImg: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
    questions: [
      {
        id: 1,
        type: "number",
        img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
        prompt: "Hur många träd ser du?",
        answer: "5"
      },
      {
        id: 2,
        type: "letters",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        prompt: "Skriv färgen på himlen",
        answer: "BLÅ"
      },
      {
        id: 3,
        type: "pair",
        prompt: "Para ihop bilder med rätt ord!",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        pairs: [
          { word: "Blomma", img: "/pairs/flower.svg" },
          { word: "Träd", img: "/pairs/tree.svg" },
          { word: "Fågel", img: "/pairs/bird.svg" }
        ],
        answer: [
          { word: "Blomma", img: "/pairs/flower.svg" },
          { word: "Träd", img: "/pairs/tree.svg" },
          { word: "Fågel", img: "/pairs/bird.svg" }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Historiejakten",
    introImg: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    questions: [
      {
        id: 1,
        type: "number",
        img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
        prompt: "Vilket årtal ser du på boken?",
        answer: "1892"
      },
      {
        id: 2,
        type: "letters",
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        prompt: "Skriv namnet på staden",
        answer: "UPPSALA"
      },
      {
        id: 3,
        type: "pair",
        prompt: "Para ihop bilder med rätt ord!",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        pairs: [
          { word: "Kyrka", img: "/pairs/church.svg" },
          { word: "Slott", img: "/pairs/castle.svg" },
          { word: "Bok", img: "/pairs/book.svg" }
        ],
        answer: [
          { word: "Kyrka", img: "/pairs/church.svg" },
          { word: "Slott", img: "/pairs/castle.svg" },
          { word: "Bok", img: "/pairs/book.svg" }
        ]
      }
    ]
  }
];

export const escapeGames = [

  {
    id: 4,
    name: "LÄGENHETEN",
    rooms: [
  { id: 1, name: "Toalettdörren", img: "/escape/toalettdorren.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "triangle", "rectangle"], answerSequence: ["heart", "circle", "rectangle", "triangle"] },
  { id: 2, name: "Soffan", img: "/escape/soffan.jpg", type: "number", answer: "104271" },
  { id: 3, name: "Sängen", img: "/escape/sangen.jpg", type: "letters", answer: "GFGH" },
  { id: 4, name: "Köket", img: "/escape/koket.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "triangle", "cloud"], answerSequence: ["circle", "star", "heart", "cloud", "heart"] },
  { id: 5, name: "Bokhyllan", img: "/escape/bokhyllan.jpg", type: "symbols", allowedSymbols: ["circle", "square", "cloud", "heart", "triangle"], answerSequence: ["heart", "circle", "square", "cloud"] },
  { id: 6, name: "Garderoben", img: "/escape/garderoben.jpg", type: "number", answer: "90090" },
      { id: 7, name: "TV:n", img: "/escape/tvn.jpg", type: "colors", allowedColors: ["yellow", "green", "orange", "red", "pink", "purple"], answerSequence: ["pink", "green", "orange", "purple"] },
      { id: 8, name: "Skrivbordet", img: "/escape/skrivbordet.jpg", type: "number", answer: "8431" },
      { id: 9, name: "Fönstret", img: "/escape/fonstret.jpg", type: "colors", allowedColors: ["yellow", "brown", "blue", "red", "pink", "purple"], answerSequence: ["blue", "yellow", "red", "pink", "brown"] },
      { id: 10, name: "Halldörren", img: "/escape/halldorren.jpg", type: "letters", answer: "DENOFI" }
    ]
  },
  {
    id: 1,
    name: "Rymdäventyret",
    rooms: [
      { id: 1, name: "Rymdlabbet", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", type: "number", answer: "7" },
      { id: 2, name: "Skeppet", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", type: "symbols", answer: "★" },
      // Dynamisk symbolsekvens-exempel: ange allowedSymbols + answerSequence
      { id: 7, name: "Symbolkoden", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80", type: "symbols", allowedSymbols: ["star", "heart", "triangle", "circle"], answerSequence: ["star", "heart", "triangle", "circle"] },
      { id: 3, name: "Stjärnporten", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", type: "letters", answer: "ABC" },
      { id: 4, name: "Observatoriet", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", type: "colors", answer: "blue" },
      { id: 5, name: "Kontrollrummet", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80", type: "number", answer: "42" },
      { id: 6, name: "Planetrummet", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80", type: "colors", allowedColors: ["red", "blue", "green"], answerSequence: ["red", "blue", "green"] }
    ]
  },
  {
    id: 2,
    name: "Djungeljakten",
    rooms: [
      { id: 1, name: "Djungeln", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80", type: "letters", answer: "DJUNGEL" },
      { id: 2, name: "Vulkanen", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", type: "colors", allowedColors: ["yellow", "red", "green", "blue"], answerSequence: ["yellow", "red", "green", "blue"] },
      { id: 3, name: "Floden", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", type: "symbols", answer: "❤" },
      { id: 4, name: "Grottan", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", type: "number", answer: "3" },
      { id: 5, name: "Trädhuset", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80", type: "letters", answer: "TRÄD" },
      { id: 6, name: "Ruinerna", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", type: "colors", answer: "green" }
    ]
  },
  {
    id: 3,
    name: "Slottets gåta",
    rooms: [
      { id: 1, name: "Biblioteket", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", type: "letters", answer: "BOK" },
      { id: 2, name: "Slottssalen", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80", type: "symbols", answer: "☀" },
      { id: 7, name: "Vaktkoden", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", type: "symbols", allowedSymbols: ["circle", "square", "star"], answerSequence: ["circle", "square", "star"] },
      { id: 3, name: "Tornet", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", type: "number", answer: "5" },
      { id: 4, name: "Fängelsehålan", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", type: "colors", answer: "purple" },
      { id: 5, name: "Kapellet", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80", type: "letters", answer: "KORS" },
      { id: 6, name: "Trädgården", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", type: "symbols", answer: "♣" }
    ]
  }
];

// Utility för att skapa nya ID
export const nextId = (arr) => arr.length === 0 ? 1 : Math.max(...arr.map(o => o.id)) + 1;
