// Central datakälla för skattjakter och escape rooms
// Lägg till nya objekt i dessa arrayer utan att röra komponentlogik.

// git add .
// git commit -m "ready for GitHub Pages deploy"
// git push

// npm run deploy

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
        answer: ["BOLLAR", "BOLL", "BOLLARNA", "BOLAR"],
        hint: "Titta på vad det håller – runda färgglada saker som man kan kasta."
      },
      {
        id: 2,
        type: "letters",
        img: "/skattjakt/rodaspoket.jpg",
        prompt: "Vad har det röda spöket tagit med sig?",
        answer: ["PUMPOR", "PUMPA", "PUMPORNA"],
        hint: "Orangea saker som brukar stå utanför hus i oktober."
      },
      {
        id: 3,
        type: "letters",
        img: "/skattjakt/orangeaspoket.jpg",
        prompt: "Vad har det orangea spöket tagit med sig?",
        answer: "GODIS",
        hint: "Färgglada bitar som man äter – finns i påsen."
      },
      {
        id: 4,
        type: "letters",
        img: "/skattjakt/gronaspoket.jpg",
        prompt: "Vad har det gröna spöket tagit med sig?",
        answer: ["HÄXHATT", "HATT", "HÄXHATTEN", "HEXHATT"],
        hint: "Sitter på huvudet – tillhör ofta en häxa."
      },
      {
        id: 5,
        type: "letters",
        img: "/skattjakt/rosaspoket.jpg",
        prompt: "Vad har det rosa spöket tagit med sig?",
        answer: ["KVASTAR", "KVAST", "KVASTEN"],
        hint: "Något som kan användas för att flyga (i sagor) eller städa."
      },
      {
        id: 6,
        type: "letters",
        img: "/skattjakt/blaaspoket.jpg",
        prompt: "Vad har det blåa spöket tagit med sig?",
        answer: ["FLADDERMÖSS", "FLADDERMUS"],
        hint: "Små svarta djur som flyger på natten."
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
        answer: "GSUT",
        hint: "Bokstäverna finns gömda – leta noga i detaljerna."
      },
      {
        id: 2,
        type: "number",
        img: "/skattjakt/rodaspoket2.jpg",
        prompt: "Hjälp det röda spöket med gåtan och ange koden.",
        answer: "10010",
        hint: "Ett tal som ser ut som det kunde vara skrivet i binär form."
      },
      {
        id: 3,
        type: "number",
        img: "/skattjakt/orangeaspoket2.jpg",
        prompt: "Hjälp det orangea spöket med gåtan och ange koden.",
        answer: "1457",
        hint: "Fyra siffror du kan räkna fram – titta på antal saker."
      },
      {
        id: 4,
        type: "letters",
        img: "/skattjakt/gronaspoket2.jpg",
        prompt: "Hjälp det gröna spöket med gåtan och ange koden.",
        answer: "HEXAGON",
        hint: "En form med sex sidor."
      },
      {
        id: 5,
        type: "number",
        img: "/skattjakt/rosaspoket2.jpg",
        prompt: "Hjälp det rosa spöket med gåtan och ange koden.",
        answer: "35412",
        hint: "Siffrorna följer en ordning – jämför olika grupper."
      },
      {
        id: 6,
        type: "letters",
        img: "/skattjakt/blaaspoket2.jpg",
        prompt: "Hjälp det blåa spöket med gåtan och ange koden.",
        answer: "LADW",
        hint: "Ta första bokstaven från det du ser."
      }
    ]
  }
];





















// {
//   id: 1,
//   name: "Stadens mysterium",
//   introImg: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
//   questions: [
//     {
//       id: 1,
//       type: "number",
//       img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
//       prompt: "Hur många nycklar ser du på bilden?",
//       answer: ["3", "tre", "03"]
//     },
//     {
//       id: 2,
//       type: "letters",
//       img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
//       prompt: "Skriv det hemliga ordet (hint: BOK)",
//       answer: "BOK"
//     },
//     {
//       id: 3,
//       type: "pair",
//       prompt: "Para ihop bilder med rätt ord!",
//       img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
//       pairs: [
//         { word: "Sol", img: "/pairs/tree.svg" },
//         { word: "Träd", img: "/pairs/sun.svg" },
//         { word: "Bok", img: "/pairs/book.svg" }


//       ],
//       answer: [
//         { word: "Sol", img: "/pairs/sun.svg" },
//         { word: "Träd", img: "/pairs/tree.svg" },
//         { word: "Bok", img: "/pairs/book.svg" }
//       ]
//     }
//   ]
// },


export const escapeGames = [

  // Advent Escape Games
  {
    id: 1,
    name: "Familjen Juliusson reser iväg - Första advent",
    category: "advent",
    win: "Grattis! Familjen Juliusson är nu redo för en avkopplande och stillsam semester!",
    rooms: [
      { id: 1, name: "Garderoben", img: "/escape/garderoben2.jpg", type: "letters", answer: "PTRL", instruction: "Bra jobbat! Ta ledtråd 2" },
      { id: 2, name: "Skohyllan", img: "/escape/skohyllan.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "triangle", "rectangle"], answerSequence: ["square", "rectangle", "star", "heart", "circle"], instruction: "Bra jobbat! Ta ledtråd 4" },
      { id: 3, name: "Passen", img: "/escape/passen.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "flower", "rectangle"], answerSequence: ["circle", "flower", "star", "heart"], instruction: "Bra jobbat! Ta ledtråd 7" },
      { id: 4, name: "Mediciner", img: "/escape/medicin.jpg", type: "number", answer: "32353841", instruction: "Bra jobbat! Ta ledtråd 5" },
      { id: 5, name: "Necessärer", img: "/escape/necessar.jpg", type: "colors", allowedColors: ["yellow", "green", "orange", "red", "pink", "blue"], answerSequence: ["blue", "green", "red"], instruction: "Bra jobbat! Ta ledtråd 3" },
      { id: 6, name: "Julklappar", img: "/escape/julklappar.jpg", type: "letters", answer: "GRANSKOG", instruction: "Bra jobbat! Ta ledtråd 9" },
      { id: 7, name: "Djurvakt", img: "/escape/djurvakt.jpg", type: "colors", allowedColors: ["blue", "green", "orange", "red", "pink", "purple"], answerSequence: ["pink", "green", "orange", "blue"], instruction: "Bra jobbat!" },
      { id: 8, name: "Accessoarer", img: "/escape/accessoarer.jpg", type: "colors", allowedColors: ["blue", "green", "orange", "red", "pink", "purple"], answerSequence: ["red", "orange", "blue"], instruction: "Bra jobbat! Ta ledtråd 6" },
      { id: 9, name: "Bokhyllan", img: "/escape/bokhyllan1.jpg", type: "number", answer: "131121", instruction: "Bra jobbat! Ta ledtråd 8" }
    ]
  },
  {
    id: 2,
    name: "Familjen Juliusson reser iväg - Andra advent",
    category: "advent",
    win: "Grattis! Familjen Juliusson hann med planet och reser iväg mot avkoppling!",
    rooms: [
      { id: 1, name: "Halldörren", img: "/escape/halldorren1.jpg", type: "number", answer: "24816", instruction: "Bra jobbat! Ta ledtråd 2" },
      { id: 2, name: "Restaurangen", img: "/escape/restaurangen.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "triangle", "rectangle"], answerSequence: ["circle", "square", "rectangle", "heart"], instruction: "Bra jobbat! Ta ledtråd 7" },
      { id: 3, name: "Check-In", img: "/escape/checkin.jpg", type: "letters", answer: "GSRA", instruction: "Bra jobbat! Ta ledtråd 4" },
      { id: 4, name: "Taxin", img: "/escape/taxi.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "flower", "rectangle"], answerSequence: ["circle", "rectangle", "circle", "rectangle"], instruction: "Bra jobbat! Ta ledtråd 3" },
      { id: 5, name: "Flygplanet", img: "/escape/flygplanet.jpg", type: "number", answer: "23371622", instruction: "Bra jobbat!" },
      { id: 6, name: "Väskinlämningen", img: "/escape/vaskinlamning.jpg", type: "colors", allowedColors: ["yellow", "green", "purple", "red", "pink", "blue"], answerSequence: ["purple", "pink", "red", "blue", "green"], instruction: "Bra jobbat! Ta ledtråd 5" },
      { id: 7, name: "Säkerheten", img: "/escape/sakerheten.jpg", type: "letters", answer: "CBAD", instruction: "Bra jobbat! Ta ledtråd 6" },
      { id: 8, name: "Gaten", img: "/escape/gaten.jpg", type: "colors", allowedColors: ["blue", "green", "orange", "red", "pink", "yellow"], answerSequence: ["green", "yellow", "pink", "red"], instruction: "Bra jobbat! Ta ledtråd 9" },
      { id: 9, name: "Affärer", img: "/escape/affarer.jpg", type: "number", answer: "31179", instruction: "Bra jobbat! Ta ledtråd 8" }
    ]
  },





  {
    id: 5,
    name: "LÄGENHETEN",
    win: "Grattis ni har flytt från lägenheten!",
    rooms: [
      { id: 1, name: "Toalettdörren", img: "/escape/toalettdorren.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "triangle", "rectangle"], answerSequence: ["heart", "circle", "rectangle", "triangle"], instruction: "Bra jobbat2!" },
      { id: 2, name: "Soffan", img: "/escape/soffan.jpg", type: "number", answer: "104271", instruction: "Bra jobbat!" },
      { id: 3, name: "Sängen", img: "/escape/sangen.jpg", type: "letters", answer: "GFGH", instruction: "Bra jobbat!" },
      { id: 4, name: "Köket", img: "/escape/koket.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "triangle", "cloud"], answerSequence: ["circle", "star", "heart", "cloud", "heart"], instruction: "Bra jobbat!" },
      { id: 5, name: "Bokhyllan", img: "/escape/bokhyllan.jpg", type: "symbols", allowedSymbols: ["circle", "square", "cloud", "heart", "triangle"], answerSequence: ["heart", "circle", "square", "cloud"], instruction: "Bra jobbat!" },
      { id: 6, name: "Garderoben", img: "/escape/garderoben.jpg", type: "number", answer: "90090", instruction: "Bra jobbat!" },
      { id: 7, name: "TV:n", img: "/escape/tvn.jpg", type: "colors", allowedColors: ["yellow", "green", "orange", "red", "pink", "purple"], answerSequence: ["pink", "green", "orange", "purple"] },
      { id: 8, name: "Skrivbordet", img: "/escape/skrivbordet.jpg", type: "number", answer: "8431" },
      { id: 9, name: "Fönstret", img: "/escape/fonstret.jpg", type: "colors", allowedColors: ["yellow", "brown", "blue", "red", "pink", "purple"], answerSequence: ["blue", "yellow", "red", "pink", "brown"] },
      { id: 10, name: "Halldörren", img: "/escape/halldorren.jpg", type: "letters", answer: "DENOFI" }
    ]
  },


];

// Utility för att skapa nya ID
export const nextId = (arr) => arr.length === 0 ? 1 : Math.max(...arr.map(o => o.id)) + 1;
