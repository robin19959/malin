// Central datakälla för skattjakter och escape rooms
// Lägg till nya objekt i dessa arrayer utan att röra komponentlogik.

export const skattjakter = [
  {
    id: 1,
    name: "Stadens mysterium",
    questions: [
      {
        id: 1,
        type: "number",
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        prompt: "Hur många nycklar ser du på bilden?",
        answer: "3"
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
        pairs: [
          { word: "Sol", img: "/pairs/sun.svg" },
          { word: "Träd", img: "/pairs/tree.svg" },
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
    id: 1,
    name: "Rymdäventyret",
    rooms: [
      { id: 1, name: "Rymdlabbet", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", type: "number", answer: "7" },
      { id: 2, name: "Skeppet", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", type: "symbols", answer: "★" },
  // Dynamisk symbolsekvens-exempel: ange allowedSymbols + answerSequence
  { id: 7, name: "Symbolkoden", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80", type: "symbols", allowedSymbols: ["star","heart","triangle","circle"], answerSequence: ["star","heart","triangle","circle"] },
      { id: 3, name: "Stjärnporten", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", type: "letters", answer: "ABC" },
      { id: 4, name: "Observatoriet", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", type: "colors", answer: "blue" },
      { id: 5, name: "Kontrollrummet", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80", type: "number", answer: "42" },
  { id: 6, name: "Planetrummet", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80", type: "colors", allowedColors: ["red","blue","green"], answerSequence: ["red","blue","green"] }
    ]
  },
  {
    id: 2,
    name: "Djungeljakten",
    rooms: [
      { id: 1, name: "Djungeln", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80", type: "letters", answer: "DJUNGEL" },
  { id: 2, name: "Vulkanen", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", type: "colors", allowedColors: ["yellow","red","green","blue"], answerSequence: ["yellow","red","green","blue"] },
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
  { id: 7, name: "Vaktkoden", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", type: "symbols", allowedSymbols: ["circle","square","star"], answerSequence: ["circle","square","star"] },
      { id: 3, name: "Tornet", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", type: "number", answer: "5" },
      { id: 4, name: "Fängelsehålan", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", type: "colors", answer: "purple" },
      { id: 5, name: "Kapellet", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80", type: "letters", answer: "KORS" },
      { id: 6, name: "Trädgården", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", type: "symbols", answer: "♣" }
    ]
  }
];

// Utility för att skapa nya ID
export const nextId = (arr) => arr.length === 0 ? 1 : Math.max(...arr.map(o => o.id)) + 1;
