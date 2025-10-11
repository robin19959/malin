# Skattjakter & Escape Rooms App

En enkel React-app för att köra interaktiva skattjakter och escape rooms. All speldata ligger samlad i `src/data/gamesData.js` för att det ska vara lätt att lägga till nya spel utan att röra komponentkoden.

## Köra lokalt

```bash
npm install
npm start
```

Öppna http://localhost:3000 i webbläsaren.

## Struktur

Viktiga mappar/filer:

- `src/App.js` – Routing/logik mellan vyer (home, skattjakt, escapeMenu, escapeRoom).
- `src/components/` – Presentationskomponenter (Home, Skattjakt, EscapeMenu, EscapeRoom + deras CSS).
- `src/data/gamesData.js` – Alla skattjakter (`skattjakter`) och escape games (`escapeGames`).

## Lägga till en ny skattjakt

I `gamesData.js`, lägg till ett objekt i arrayen `skattjakter`:

```js
export const skattjakter = [
	// ...befintliga
	{
		id: 4,
		name: "Min nya jakt",
		questions: [
			{ id: 1, type: "number", img: "https://...", prompt: "Hur många ...?", answer: "7" },
			{ id: 2, type: "letters", img: null, prompt: "Skriv ordet", answer: "ORD" },
			{ id: 3, type: "pair", prompt: "Para ihop...", pairs: [...], answer: [...] }
		]
	}
];
```

Fält som används:
- `type`: "number" | "letters" | "pair"
- `prompt`: Text som visas.
- `img` (valfritt): Bild-URL.
- `answer`: Rätt svar (string eller array av par).
- `pairs` (endast för `type: 'pair'`): Lista med `{ word, img }`.

## Lägga till nytt Escape Game

Lägg till ett objekt i `escapeGames`:

```js
export const escapeGames = [
	// ...befintliga
	{
		id: 4,
		name: "Nytt äventyr",
		rooms: [
			{ id: 1, name: "Första rummet", img: "https://...", type: "number", answer: "12" },
			{ id: 2, name: "Andra rummet", img: "https://...", type: "letters", answer: "ABC" }
		]
	}
];
```

Tillåtna `type` i rum: `number`, `letters`, `symbols`, `colors`.

## Typer / Kontrakt

Skattjaktsfråga:
```ts
{
	id: number;
	type: 'number' | 'letters' | 'pair';
	prompt: string;
	img?: string;
	answer: string | Array<{ word: string; img: string }>;
	pairs?: Array<{ word: string; img: string }>; // endast vid pair
}
```

Escape room:
```ts
{
	id: number;
	name: string;
	img: string;
	type: 'number' | 'letters' | 'symbols' | 'colors';
	answer: string;
}
```

Escape game:
```ts
{
	id: number;
	name: string;
	rooms: Room[];
}
```

## Rensa eller bygga ut

Du kan lägga till ett enkelt admin-formulär senare som skriver till state och låter dig testa nya spel utan att manuellt redigera filen.

## Deployment

Bygg för produktion:
```bash
npm run build
```
Innehållet i `build/` kan läggas på GitHub Pages (skript finns i `package.json`).

## Licens

Intern / privat användning.

---
Det här README ersätter det generella Create React App-innehållet för att vara mer relevant för projektet.
