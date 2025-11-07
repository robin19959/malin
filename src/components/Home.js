import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import { escapeGames, skattjakter } from "../data/gamesData";

// Filter out advent escape games
const adventEscapeGames = escapeGames.filter(g => g.category === "advent");
const normalEscapeGames = escapeGames.filter(g => g.category !== "advent");

function Home({ setPage, setSelectedSkattjakt, setSelectedEscapeGame }) {
  // 'skatt' | 'escape' | null
  const [openDropdown, setOpenDropdown] = useState(null);
  // Refs för knappar och listor
  const skattBtnRef = useRef(null);
  const escapeBtnRef = useRef(null);
  const adventBtnRef = useRef(null);
  const skattListRef = useRef(null);
  const escapeListRef = useRef(null);
  const adventListRef = useRef(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(prev => prev === key ? null : key);
  };

  // Stäng dropdown om man klickar / touchar utanför aktiv lista + knapp
  useEffect(() => {
    const handleGlobal = (e) => {
      if (!openDropdown) return; // inget öppet
      if (openDropdown === 'skatt') {
        if (skattBtnRef.current && skattBtnRef.current.contains(e.target)) return;
        if (skattListRef.current && skattListRef.current.contains(e.target)) return;
        setOpenDropdown(null);
      } else if (openDropdown === 'escape') {
        if (escapeBtnRef.current && escapeBtnRef.current.contains(e.target)) return;
        if (escapeListRef.current && escapeListRef.current.contains(e.target)) return;
        setOpenDropdown(null);
      } else if (openDropdown === 'advent') {
        if (adventBtnRef.current && adventBtnRef.current.contains(e.target)) return;
        if (adventListRef.current && adventListRef.current.contains(e.target)) return;
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleGlobal);
    document.addEventListener('touchstart', handleGlobal, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleGlobal);
      document.removeEventListener('touchstart', handleGlobal);
    };
  }, [openDropdown]);

  return (
  <div className="home-container">
      <h1>
        Välkommen<br />
        <span className="byline">MoreByMalin</span>
      </h1>
      <div className="options">
        <div className="dropdown">
          <button
            ref={skattBtnRef}
            className="home-btn"
            onClick={() => toggleDropdown('skatt')}
            aria-expanded={openDropdown === 'skatt'}
          >
            Skattjakter
          </button>
          {openDropdown === 'skatt' && (
            <div ref={skattListRef} className="dropdown-list">
              {skattjakter.map((jakt) => (
                <button
                  key={jakt.id}
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedSkattjakt(jakt.id);
                    setPage("skattjakt");
                  }}
                >
                  {jakt.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="dropdown">
          <button
            ref={escapeBtnRef}
            className="home-btn"
            onClick={() => toggleDropdown('escape')}
            aria-expanded={openDropdown === 'escape'}
          >
            Escape Games
          </button>
          {openDropdown === 'escape' && (
            <div ref={escapeListRef} className="dropdown-list">
              {normalEscapeGames.map((game) => (
                <button
                  key={game.id}
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedEscapeGame(game.id);
                    setPage("escapeMenu");
                  }}
                >
                  {game.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="dropdown">
          <button
            ref={adventBtnRef}
            className="home-btn"
            onClick={() => toggleDropdown('advent')}
            aria-expanded={openDropdown === 'advent'}
          >
            Advent Escape Games
          </button>
          {openDropdown === 'advent' && (
            <div ref={adventListRef} className="dropdown-list">
              {adventEscapeGames.map((game) => (
                <button
                  key={game.id}
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedEscapeGame(game.id);
                    setPage("escapeMenu");
                  }}
                >
                  {game.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
