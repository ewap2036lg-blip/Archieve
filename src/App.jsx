import { useState, useRef, useEffect } from "react";

const C = {
  ivory:"#fafafa", ivoryDeep:"#f2f2f2", ivoryDark:"#dddddd",
  line:"#cccccc", accent:"#1a1a1a", accentLight:"#e8e8e8",
  gold:"#1a1a1a", teal:"#2a7a64",
  text:"#111111", textMid:"#333333", textSoft:"#888888", white:"#ffffff", good:"#27ae60",
};
const FONT = "'Futura','Century Gothic','Trebuchet MS',sans-serif";

// â”€â”€ ALL SVG ICONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const ICONS = {

  "doors": (s) => (
    <svg width={s} height={s} viewBox="0 0 34 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 38 L3 18 Q3 4 17 4 Q31 4 31 18 L31 38" strokeWidth="1.8"/>
      <path d="M6 38 L6 19 Q6 8 17 8 Q28 8 28 19 L28 38" strokeWidth="1.1"/>
      <rect x="6" y="14" width="22" height="5" strokeWidth="0.9"/>
      <line x1="9"  y1="14" x2="9"  y2="19" strokeWidth="0.7"/>
      <line x1="12" y1="14" x2="12" y2="19" strokeWidth="0.7"/>
      <line x1="15" y1="14" x2="15" y2="19" strokeWidth="0.7"/>
      <line x1="17" y1="14" x2="17" y2="19" strokeWidth="0.7"/>
      <line x1="19" y1="14" x2="19" y2="19" strokeWidth="0.7"/>
      <line x1="22" y1="14" x2="22" y2="19" strokeWidth="0.7"/>
      <line x1="25" y1="14" x2="25" y2="19" strokeWidth="0.7"/>
      <line x1="6" y1="16.5" x2="28" y2="16.5" strokeWidth="0.7"/>
      <rect x="6" y="19" width="11" height="19" strokeWidth="1.3"/>
      <rect x="17" y="19" width="11" height="19" strokeWidth="1.3"/>
      <path d="M7 28 L7 23 Q7 20 11.5 20 Q16 20 16 23 L16 28" strokeWidth="1"/>
      <path d="M18 28 L18 23 Q18 20 22.5 20 Q27 20 27 23 L27 28" strokeWidth="1"/>
      <circle cx="16" cy="30" r="1" strokeWidth="1.1"/>
      <circle cx="18" cy="30" r="1" strokeWidth="1.1"/>
      <rect x="8" y="29" width="7" height="7" rx="0.5" strokeWidth="0.8"/>
      <rect x="19" y="29" width="7" height="7" rx="0.5" strokeWidth="0.8"/>
      <line x1="1" y1="38" x2="33" y2="38" strokeWidth="2"/>
    </svg>
  ),

  "door-frames": (s) => (
    <svg width={s} height={s} viewBox="0 0 34 42" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 2 Q17 0 23 2 L22 4 L12 4 Z" strokeWidth="1.3"/>
      <path d="M9 4 Q17 1.5 25 4 L24 7 L10 7 Z" strokeWidth="1.2"/>
      <line x1="8" y1="7" x2="26" y2="7" strokeWidth="1.5"/>
      <circle cx="10" cy="7" r="0.7" fill="currentColor" stroke="none"/>
      <circle cx="13" cy="7" r="0.7" fill="currentColor" stroke="none"/>
      <circle cx="16" cy="7" r="0.7" fill="currentColor" stroke="none"/>
      <circle cx="19" cy="7" r="0.7" fill="currentColor" stroke="none"/>
      <circle cx="22" cy="7" r="0.7" fill="currentColor" stroke="none"/>
      <circle cx="25" cy="7" r="0.7" fill="currentColor" stroke="none"/>
      <rect x="5" y="7" width="24" height="4" strokeWidth="1.3"/>
      <path d="M8 9 Q9 8 10 9 Q9 10 8 9" strokeWidth="0.9"/>
      <path d="M24 9 Q25 8 26 9 Q25 10 24 9" strokeWidth="0.9"/>
      <path d="M7 39 L7 22 Q7 11 17 11 Q27 11 27 22 L27 39" strokeWidth="1.7"/>
      <path d="M10 39 L10 23 Q10 14.5 17 14.5 Q24 14.5 24 23 L24 39" strokeWidth="1"/>
      <path d="M10 22 Q12 19 14 22" strokeWidth="0.9"/>
      <path d="M20 22 Q22 19 24 22" strokeWidth="0.9"/>
      <path d="M5 11 L5 17 Q4 20 5 23 Q6 26 5 30 L5 39" strokeWidth="1.5"/>
      <path d="M29 11 L29 17 Q30 20 29 23 Q28 26 29 30 L29 39" strokeWidth="1.5"/>
      <line x1="4.2" y1="17" x2="5.8" y2="17" strokeWidth="1"/>
      <line x1="4.2" y1="23" x2="5.8" y2="23" strokeWidth="1"/>
      <line x1="28.2" y1="17" x2="29.8" y2="17" strokeWidth="1"/>
      <line x1="28.2" y1="23" x2="29.8" y2="23" strokeWidth="1"/>
      <line x1="3" y1="39" x2="31" y2="39" strokeWidth="2"/>
      <line x1="5" y1="41" x2="29" y2="41" strokeWidth="1.3"/>
    </svg>
  ),

  "windows": (s) => (
    <svg width={s} height={s} viewBox="0 0 36 38" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 7 Q18 3 35 7 L35 9 L1 9Z" strokeWidth="1.5"/>
      <line x1="18" y1="3" x2="18" y2="7" strokeWidth="1.3"/>
      <circle cx="18" cy="2.5" r="1.1" fill="currentColor" stroke="none"/>
      <rect x="3" y="9" width="30" height="22" strokeWidth="1.5"/>
      <path d="M5 31 L5 22 Q5 17 9 17 Q13 17 13 22 L13 31" strokeWidth="1.1"/>
      <path d="M14 31 L14 22 Q14 17 18 17 Q22 17 22 22 L22 31" strokeWidth="1.1"/>
      <path d="M23 31 L23 22 Q23 17 27 17 Q31 17 31 22 L31 31" strokeWidth="1.1"/>
      <line x1="3" y1="17" x2="33" y2="17" strokeWidth="1"/>
      <line x1="7"  y1="10" x2="7"  y2="17" strokeWidth="0.7"/>
      <line x1="11" y1="10" x2="11" y2="17" strokeWidth="0.7"/>
      <line x1="15" y1="10" x2="15" y2="17" strokeWidth="0.7"/>
      <line x1="18" y1="10" x2="18" y2="17" strokeWidth="0.7"/>
      <line x1="21" y1="10" x2="21" y2="17" strokeWidth="0.7"/>
      <line x1="25" y1="10" x2="25" y2="17" strokeWidth="0.7"/>
      <line x1="29" y1="10" x2="29" y2="17" strokeWidth="0.7"/>
      <line x1="3" y1="12" x2="33" y2="12" strokeWidth="0.7"/>
      <line x1="3" y1="14.5" x2="33" y2="14.5" strokeWidth="0.7"/>
      <path d="M3 9 L3 15 Q2 18 3 21 Q4 24 3 27 L3 31" strokeWidth="1.4"/>
      <path d="M33 9 L33 15 Q34 18 33 21 Q32 24 33 27 L33 31" strokeWidth="1.4"/>
      <path d="M1 31 Q1 34 3 34" strokeWidth="1.4"/>
      <path d="M35 31 Q35 34 33 34" strokeWidth="1.4"/>
      <line x1="1" y1="31" x2="35" y2="31" strokeWidth="2"/>
      <line x1="1" y1="34" x2="35" y2="34" strokeWidth="1.2"/>
      <line x1="5"  y1="34" x2="5"  y2="36" strokeWidth="1"/>
      <line x1="10" y1="34" x2="10" y2="37" strokeWidth="1"/>
      <line x1="15" y1="34" x2="15" y2="36" strokeWidth="1"/>
      <line x1="18" y1="34" x2="18" y2="37.5" strokeWidth="1"/>
      <line x1="21" y1="34" x2="21" y2="36" strokeWidth="1"/>
      <line x1="26" y1="34" x2="26" y2="37" strokeWidth="1"/>
      <line x1="31" y1="34" x2="31" y2="36" strokeWidth="1"/>
    </svg>
  ),

  "window-frames": (s) => (
    <svg width={s} height={s} viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="32" height="4" rx="0.5" strokeWidth="1.5"/>
      <circle cx="6"  cy="4" r="0.7" fill="currentColor" stroke="none"/>
      <circle cx="10" cy="4" r="0.7" fill="currentColor" stroke="none"/>
      <circle cx="14" cy="4" r="0.7" fill="currentColor" stroke="none"/>
      <circle cx="18" cy="4" r="0.7" fill="currentColor" stroke="none"/>
      <circle cx="22" cy="4" r="0.7" fill="currentColor" stroke="none"/>
      <circle cx="26" cy="4" r="0.7" fill="currentColor" stroke="none"/>
      <circle cx="30" cy="4" r="0.7" fill="currentColor" stroke="none"/>
      <path d="M3 34 L3 20 Q3 12 8 12 Q13 12 13 20 L13 34" strokeWidth="1.5"/>
      <path d="M13 34 L13 20 Q13 12 18 12 Q23 12 23 20 L23 34" strokeWidth="1.5"/>
      <path d="M23 34 L23 20 Q23 12 28 12 Q33 12 33 20 L33 34" strokeWidth="1.5"/>
      <line x1="2" y1="6" x2="2" y2="34" strokeWidth="1.5"/>
      <line x1="34" y1="6" x2="34" y2="34" strokeWidth="1.5"/>
      <path d="M3 20 Q5 17 7 20" strokeWidth="0.9"/>
      <path d="M9 20 Q11 17 13 20" strokeWidth="0.9"/>
      <path d="M13 20 Q15 17 17 20" strokeWidth="0.9"/>
      <path d="M19 20 Q21 17 23 20" strokeWidth="0.9"/>
      <path d="M23 20 Q25 17 27 20" strokeWidth="0.9"/>
      <path d="M29 20 Q31 17 33 20" strokeWidth="0.9"/>
      <line x1="2" y1="26" x2="34" y2="26" strokeWidth="0.8" strokeDasharray="2,2"/>
      <line x1="2" y1="34" x2="34" y2="34" strokeWidth="2"/>
      <line x1="2" y1="36" x2="34" y2="36" strokeWidth="1.2"/>
    </svg>
  ),

  "stone-arches": (s) => (
    <svg width={s} height={s} viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 32 L4 16 Q4 4 17 4 Q30 4 30 16 L30 32" strokeWidth="2"/>
      <path d="M9 32 L9 17 Q9 9 17 9 Q25 9 25 17 L25 32" strokeWidth="1.3"/>
      <polygon points="17,3.5 14.5,7.5 19.5,7.5" strokeWidth="1.2" fill="none"/>
      <line x1="4"  y1="20" x2="9"  y2="21" strokeWidth="1"/>
      <line x1="5.5" y1="14" x2="10" y2="16" strokeWidth="1"/>
      <line x1="30" y1="20" x2="25" y2="21" strokeWidth="1"/>
      <line x1="28.5" y1="14" x2="24" y2="16" strokeWidth="1"/>
      <rect x="2"  y="30" width="6" height="3" rx="0.3" strokeWidth="1.3"/>
      <rect x="26" y="30" width="6" height="3" rx="0.3" strokeWidth="1.3"/>
    </svg>
  ),

  "columns": (s) => (
    <svg width={s} height={s} viewBox="0 0 22 42" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="2" width="20" height="2.5" rx="0.4" strokeWidth="1.6"/>
      <path d="M3 4.5 Q11 7 19 4.5" strokeWidth="1.2"/>
      <path d="M2 4.5 Q1 7 4 8.5" strokeWidth="1.2"/>
      <path d="M20 4.5 Q21 7 18 8.5" strokeWidth="1.2"/>
      <circle cx="5"  cy="7.5" r="1.5" strokeWidth="1"/>
      <circle cx="17" cy="7.5" r="1.5" strokeWidth="1"/>
      <line x1="5" y1="9" x2="17" y2="9" strokeWidth="1.3"/>
      <line x1="7" y1="9" x2="7" y2="13" strokeWidth="1.2"/>
      <line x1="15" y1="9" x2="15" y2="13" strokeWidth="1.2"/>
      <path d="M7 13 Q11 15 15 13" strokeWidth="1.2"/>
      <path d="M7 13 Q4 18 5 23 Q6 27 7 28" strokeWidth="1.4"/>
      <path d="M15 13 Q18 18 17 23 Q16 27 15 28" strokeWidth="1.4"/>
      <path d="M4.5 20 Q11 22 17.5 20" strokeWidth="1"/>
      <line x1="7"  y1="28" x2="8"  y2="32" strokeWidth="1.2"/>
      <line x1="15" y1="28" x2="14" y2="32" strokeWidth="1.2"/>
      <path d="M8 32 Q6 34 5 36 L17 36 Q16 34 14 32" strokeWidth="1.2"/>
      <rect x="3" y="36" width="16" height="2.5" rx="0.3" strokeWidth="1.6"/>
      <line x1="2" y1="41" x2="20" y2="41" strokeWidth="1.5"/>
    </svg>
  ),

  "beams": (s) => (
    <svg width={s} height={s} viewBox="0 0 38 28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 19 L2 9 L8 4 L36 4 L36 14 L8 14 Z" strokeWidth="1.6"/>
      <line x1="2"  y1="19" x2="36" y2="19" strokeWidth="1.6"/>
      <line x1="36" y1="4"  x2="36" y2="19" strokeWidth="1.6"/>
      <rect x="10" y="14" width="8" height="5" rx="0.5" strokeWidth="0.9"/>
      <rect x="20" y="14" width="8" height="5" rx="0.5" strokeWidth="0.9"/>
      <circle cx="14" cy="16.5" r="1.2" strokeWidth="0.8"/>
      <circle cx="24" cy="16.5" r="1.2" strokeWidth="0.8"/>
      <line x1="14" y1="4" x2="14" y2="14" strokeWidth="0.7"/>
      <line x1="22" y1="4" x2="22" y2="14" strokeWidth="0.7"/>
      <line x1="30" y1="4" x2="30" y2="14" strokeWidth="0.7"/>
      <rect x="2" y="10" width="3" height="5" rx="0.3" strokeWidth="1"/>
      <circle cx="10" cy="4.5" r="0.6" fill="currentColor" stroke="none"/>
      <circle cx="14" cy="4.5" r="0.6" fill="currentColor" stroke="none"/>
      <circle cx="18" cy="4.5" r="0.6" fill="currentColor" stroke="none"/>
      <circle cx="22" cy="4.5" r="0.6" fill="currentColor" stroke="none"/>
      <circle cx="26" cy="4.5" r="0.6" fill="currentColor" stroke="none"/>
      <circle cx="30" cy="4.5" r="0.6" fill="currentColor" stroke="none"/>
    </svg>
  ),

  "jarokhas": (s) => (
    <svg width={s} height={s} viewBox="0 0 30 34" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6.5 Q15 2.5 27 6.5 L27 8.5 L3 8.5Z" strokeWidth="1.5"/>
      <line x1="15" y1="2.5" x2="15" y2="6.5" strokeWidth="1.5"/>
      <circle cx="15" cy="1.8" r="1.3" fill="currentColor" stroke="none"/>
      <rect x="5" y="8.5" width="20" height="14" strokeWidth="1.3"/>
      <path d="M9 22.5 L9 17 Q9 12.5 15 12.5 Q21 12.5 21 17 L21 22.5" strokeWidth="1.2"/>
      <line x1="8" y1="8.5" x2="8" y2="22.5" strokeWidth="1.5"/>
      <line x1="22" y1="8.5" x2="22" y2="22.5" strokeWidth="1.5"/>
      <path d="M3 22.5 Q3 25.5 5 25.5" strokeWidth="1.5"/>
      <path d="M27 22.5 Q27 25.5 25 25.5" strokeWidth="1.5"/>
      <line x1="3" y1="22.5" x2="27" y2="22.5" strokeWidth="2"/>
      <line x1="3" y1="25.5" x2="27" y2="25.5" strokeWidth="1.2"/>
      <line x1="8"  y1="25.5" x2="8"  y2="30" strokeWidth="1.5" strokeOpacity="0.35"/>
      <line x1="22" y1="25.5" x2="22" y2="30" strokeWidth="1.5" strokeOpacity="0.35"/>
    </svg>
  ),

  "furniture": (s) => (
    <svg width={s} height={s} viewBox="0 0 30 34" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3" width="20" height="12" rx="1" strokeWidth="1.5"/>
      <line x1="10" y1="3" x2="10" y2="15" strokeWidth="1"/>
      <line x1="15" y1="3" x2="15" y2="15" strokeWidth="1"/>
      <line x1="20" y1="3" x2="20" y2="15" strokeWidth="1"/>
      <path d="M5 6 Q15 4 25 6" strokeWidth="1"/>
      <rect x="4" y="15" width="22" height="4" rx="0.5" strokeWidth="1.6"/>
      <line x1="7"  y1="19" x2="6"  y2="32" strokeWidth="1.5"/>
      <line x1="23" y1="19" x2="24" y2="32" strokeWidth="1.5"/>
      <line x1="7"  y1="15" x2="5"  y2="32" strokeWidth="1.3"/>
      <line x1="23" y1="15" x2="25" y2="32" strokeWidth="1.3"/>
      <line x1="6.5" y1="26" x2="23.5" y2="26" strokeWidth="1"/>
      <line x1="5.5" y1="32" x2="24.5" y2="32" strokeWidth="1.5"/>
    </svg>
  ),

  "stone-lamps": (s) => (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* Wall surround â€” same proportions as other icons */}
      <rect x="2" y="2" width="28" height="28" rx="1" strokeWidth="1.8"/>
      {/* Thick side pilasters */}
      <line x1="7" y1="2" x2="7" y2="30" strokeWidth="1.4"/>
      <line x1="25" y1="2" x2="25" y2="30" strokeWidth="1.4"/>
      {/* Recessed pointed arch niche */}
      <path d="M8 30 L8 18 Q8 9 16 9 Q24 9 24 18 L24 30" strokeWidth="1.3"/>
      {/* Keystone triangle */}
      <polygon points="16,8 14,11 18,11" strokeWidth="1" fill="none"/>
      {/* Candle body */}
      <rect x="13" y="21" width="6" height="7" rx="0.5" strokeWidth="1.3"/>
      {/* Wax drip left */}
      <path d="M13 21 Q12 19.5 13 18.5" strokeWidth="1"/>
      {/* Wax drip right */}
      <path d="M19 21 Q20 19.5 19 18.5" strokeWidth="1"/>
      {/* Flame */}
      <path d="M16 18 Q14 15 16 12.5 Q18 15 16 18Z" strokeWidth="1.2"/>
      {/* Niche shelf */}
      <line x1="8" y1="30" x2="24" y2="30" strokeWidth="1.6"/>
      {/* Top entablature bead row */}
      <line x1="2" y1="6" x2="30" y2="6" strokeWidth="1"/>
      <circle cx="6"  cy="4" r="0.6" fill="currentColor" stroke="none"/>
      <circle cx="10" cy="4" r="0.6" fill="currentColor" stroke="none"/>
      <circle cx="14" cy="4" r="0.6" fill="currentColor" stroke="none"/>
      <circle cx="18" cy="4" r="0.6" fill="currentColor" stroke="none"/>
      <circle cx="22" cy="4" r="0.6" fill="currentColor" stroke="none"/>
      <circle cx="26" cy="4" r="0.6" fill="currentColor" stroke="none"/>
    </svg>
  ),

  "metal-lamps": (s) => (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* Hanging chain */}
      <line x1="16" y1="1" x2="16" y2="5" strokeWidth="1.3" strokeDasharray="1.5,1.5"/>
      {/* Top cap */}
      <path d="M10 5 Q16 3.5 22 5 L21 8 L11 8 Z" strokeWidth="1.3"/>
      {/* Upper neck */}
      <path d="M11 8 Q9 11 10 14 L22 14 Q23 11 21 8" strokeWidth="1.3"/>
      {/* Mid ring */}
      <ellipse cx="16" cy="14" rx="7" ry="1.3" strokeWidth="1.2"/>
      {/* Oil belly */}
      <path d="M9 14 Q7 19 9 23 Q11 26 16 26 Q21 26 23 23 Q25 19 23 14" strokeWidth="1.4"/>
      {/* Left spout + flame */}
      <path d="M9 21 L4 22 Q3 24 5 24 L9 23" strokeWidth="1.1"/>
      <path d="M4.5 23 Q3.5 21 4.5 19.5" strokeWidth="1"/>
      {/* Right spout + flame */}
      <path d="M23 21 L28 22 Q29 24 27 24 L23 23" strokeWidth="1.1"/>
      <path d="M27.5 23 Q28.5 21 27.5 19.5" strokeWidth="1"/>
      {/* Stem */}
      <line x1="16" y1="26" x2="16" y2="29" strokeWidth="1.5"/>
      {/* Base */}
      <ellipse cx="16" cy="29" rx="7" ry="1.8" strokeWidth="1.5"/>
      <ellipse cx="16" cy="31" rx="5" ry="1.2" strokeWidth="1.2"/>
    </svg>
  ),
};

// Universal icon renderer â€” all categories use SVG now
function CatIcon({icon, size=20, color="currentColor"}) {
  try {
    const fn = ICONS[icon];
    if (fn) return (
      <span style={{color, display:"flex", alignItems:"center", justifyContent:"center", lineHeight:1}}>
        {fn(size)}
      </span>
    );
  } catch(e) {}
  // fallback for custom user-added categories or unknown icons
  return <span style={{fontSize:Math.max(10,size*0.7), lineHeight:1, display:"flex", alignItems:"center", justifyContent:"center"}}>{icon}</span>;
}

const DEFAULT_CATS = [
  {id:"doors",         icon:"doors",         label:"Doors"},
  {id:"door-frames",   icon:"door-frames",   label:"Door Frames"},
  {id:"windows",       icon:"windows",       label:"Windows"},
  {id:"window-frames", icon:"window-frames", label:"Window Frames"},
  {id:"stone-arches",  icon:"stone-arches",  label:"Stone Arches"},
  {id:"columns",       icon:"columns",       label:"Columns"},
  {id:"beams",         icon:"beams",         label:"Beams"},
  {id:"jarokhas",      icon:"jarokhas",      label:"Jarokhas"},
  {id:"furniture",     icon:"furniture",     label:"Furniture"},
  {id:"stone-lamps",   icon:"stone-lamps",   label:"Lamp Niches"},
  {id:"metal-lamps",   icon:"metal-lamps",   label:"Metal Lamps"},
];

const CONDITIONS = ["Excellent","Good","Fair","Poor","Critical"];
const COND_COLOR = { Excellent:"#27ae60",Good:"#7db83a",Fair:"#e6a817",Poor:"#e07020",Critical:"#c0392b" };
const uid = () => Math.random().toString(36).slice(2,9);
function load(k,fb){try{return JSON.parse(localStorage.getItem(k))??fb}catch{return fb}}
function save(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch{}}

// â”€â”€ BACKUP SYSTEM â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Keeps 3 rolling backups under keys hi_backup_0/1/2 with timestamps
// Backups are NEVER touched by app updates â€” separate keys from live data
const BACKUP_COUNT = 3;
function saveBackup(items){
  try{
    const slot = (load("hi_backup_slot",0)+1) % BACKUP_COUNT;
    localStorage.setItem("hi_backup_"+slot, JSON.stringify({
      ts: new Date().toISOString(),
      items
    }));
    save("hi_backup_slot", slot);
  }catch{}
}
function loadBackups(){
  const out=[];
  for(let i=0;i<BACKUP_COUNT;i++){
    try{
      const b=JSON.parse(localStorage.getItem("hi_backup_"+i));
      if(b) out.push({slot:i,...b});
    }catch{}
  }
  return out.sort((a,b)=>b.ts.localeCompare(a.ts));
}

function dimStr(v){if(!v||(!v.ft&&!v.in))return"â€”";return`${v.ft||0}â€² ${v.in||0}â€³`}

function FtInInput({label,value,onChange}){
  const ft=value?.ft??"",inch=value?.in??"";
  const s={width:50,padding:"8px 4px 8px 8px",border:`1.5px solid ${C.line}`,borderRadius:8,
    fontSize:14,fontFamily:FONT,color:C.text,background:C.white,outline:"none",textAlign:"center",boxSizing:"border-box"};
  return(
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
      <div style={{fontSize:10,color:C.textSoft,textTransform:"uppercase",letterSpacing:1,fontFamily:FONT}}>{label}</div>
      <div style={{display:"flex",gap:4}}>
        <div style={{position:"relative"}}>
          <input type="number" min="0" placeholder="0" value={ft}
            onChange={e=>onChange({ft:e.target.value,in:inch})} style={s}/>
          <span style={{position:"absolute",right:3,top:"50%",transform:"translateY(-50%)",fontSize:9,color:C.textSoft}}>ft</span>
        </div>
        <div style={{position:"relative"}}>
          <input type="number" min="0" max="11" placeholder="0" value={inch}
            onChange={e=>onChange({ft,in:e.target.value})} style={s}/>
          <span style={{position:"absolute",right:3,top:"50%",transform:"translateY(-50%)",fontSize:9,color:C.textSoft}}>in</span>
        </div>
      </div>
    </div>
  );
}

function PhotoAnnotator({photoUrl,pins,onChange}){
  const ref=useRef();
  const [adding,setAdding]=useState(false);
  const [pending,setPending]=useState(null);
  const [editId,setEditId]=useState(null);
  const [labelInput,setLabelInput]=useState("");

  const handleTap=e=>{
    if(!adding)return;
    e.preventDefault();
    const rect=ref.current.getBoundingClientRect();
    const cx=e.touches?e.touches[0].clientX:e.clientX;
    const cy=e.touches?e.touches[0].clientY:e.clientY;
    setPending({x:((cx-rect.left)/rect.width)*100,y:((cy-rect.top)/rect.height)*100,id:uid()});
    setLabelInput("");
    setAdding(false);
  };

  const confirmPin=()=>{
    if(!labelInput.trim()){setPending(null);return;}
    onChange([...pins,{...pending,label:labelInput.trim()}]);
    setPending(null);
  };

  return(
    <div>
      <div ref={ref} onClick={handleTap} onTouchEnd={handleTap}
        style={{position:"relative",width:"100%",aspectRatio:"4/3",borderRadius:12,overflow:"hidden",
          background:C.ivoryDeep,border:`1.5px solid ${C.line}`,cursor:adding?"crosshair":"default",userSelect:"none"}}>
        <img src={photoUrl} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
        {adding&&(
          <div style={{position:"absolute",inset:0,background:"rgba(26,18,8,0.35)",
            display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div style={{background:C.white,borderRadius:10,padding:"10px 18px",fontSize:13,fontFamily:FONT,color:C.text}}>
              Tap photo to place pin
            </div>
          </div>
        )}
        {pins.map((pin,i)=>(
          <div key={pin.id} onClick={e=>{e.stopPropagation();setEditId(pin.id);}}
            style={{position:"absolute",left:`${pin.x}%`,top:`${pin.y}%`,transform:"translate(-50%,-100%)",
              display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",zIndex:10}}>
            <div style={{background:C.accent,color:C.white,borderRadius:6,padding:"3px 8px",
              fontSize:11,fontFamily:FONT,fontWeight:600,whiteSpace:"nowrap",
              boxShadow:"0 2px 8px rgba(0,0,0,0.25)",marginBottom:2}}>
              {i+1}. {pin.label}
            </div>
            <div style={{width:2,height:10,background:C.accent}}/>
            <div style={{width:8,height:8,borderRadius:"50%",background:C.accent,marginTop:-2}}/>
          </div>
        ))}
      </div>

      <div style={{display:"flex",gap:8,marginTop:10}}>
        <button onClick={()=>setAdding(true)} style={{flex:1,padding:"10px",
          border:`1.5px solid ${C.accent}`,borderRadius:10,
          background:adding?C.accent:C.white,color:adding?C.white:C.accent,
          fontSize:13,fontFamily:FONT,fontWeight:600,cursor:"pointer"}}>
          {adding?"Tap photo to pinâ€¦":"+ Add Label Pin"}
        </button>
        {pins.length>0&&(
          <button onClick={()=>onChange([])} style={{padding:"10px 14px",border:`1.5px solid ${C.line}`,
            borderRadius:10,background:C.white,color:C.textSoft,fontSize:12,fontFamily:FONT,cursor:"pointer"}}>
            Clear
          </button>
        )}
      </div>

      {pins.length>0&&(
        <div style={{marginTop:10,display:"flex",flexDirection:"column",gap:6}}>
          {pins.map((pin,i)=>(
            <div key={pin.id} style={{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",
              background:C.ivoryDeep,borderRadius:8,border:`1px solid ${C.line}`}}>
              <div style={{width:22,height:22,borderRadius:"50%",background:C.accent,color:C.white,
                fontSize:11,fontFamily:FONT,fontWeight:700,display:"flex",alignItems:"center",
                justifyContent:"center",flexShrink:0}}>{i+1}</div>
              {editId===pin.id?(
                <input autoFocus defaultValue={pin.label}
                  onBlur={e=>{onChange(pins.map(p=>p.id===pin.id?{...p,label:e.target.value}:p));setEditId(null);}}
                  style={{flex:1,border:`1px solid ${C.accent}`,borderRadius:6,padding:"4px 8px",
                    fontFamily:FONT,fontSize:13,outline:"none"}}/>
              ):(
                <span style={{flex:1,fontSize:13,fontFamily:FONT,color:C.text,cursor:"text"}}
                  onClick={()=>setEditId(pin.id)}>{pin.label}</span>
              )}
              <button onClick={()=>onChange(pins.filter(p=>p.id!==pin.id))}
                style={{background:"none",border:"none",color:C.textSoft,cursor:"pointer",fontSize:18,padding:"0 4px"}}>Ã—</button>
            </div>
          ))}
        </div>
      )}

      {pending&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",
          display:"flex",alignItems:"center",justifyContent:"center",zIndex:999}}>
          <div style={{background:C.white,borderRadius:16,padding:"24px",width:"80%",maxWidth:320}}>
            <div style={{fontSize:14,fontFamily:FONT,fontWeight:600,color:C.text,marginBottom:14}}>Name this part</div>
            <input autoFocus value={labelInput} onChange={e=>setLabelInput(e.target.value)}
              onKeyDown={e=>{if(e.key==="Enter")confirmPin();}}
              placeholder="e.g. Top Rail, Keystoneâ€¦"
              style={{width:"100%",padding:"11px 14px",border:`1.5px solid ${C.line}`,
                borderRadius:10,fontFamily:FONT,fontSize:14,outline:"none",
                boxSizing:"border-box",marginBottom:14}}/>
            <div style={{display:"flex",gap:8}}>
              <button onClick={()=>setPending(null)} style={{flex:1,padding:"10px",
                border:`1.5px solid ${C.line}`,borderRadius:10,background:C.white,
                color:C.textMid,fontFamily:FONT,fontSize:13,cursor:"pointer"}}>Cancel</button>
              <button onClick={confirmPin} style={{flex:1,padding:"10px",border:"none",
                borderRadius:10,background:C.accent,color:C.white,
                fontFamily:FONT,fontSize:13,fontWeight:600,cursor:"pointer"}}>Add Pin</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ItemForm({category,item,itemNumber,onSave,onCancel}){
  const fileRef=useRef(),videoRef=useRef(),canvasRef=useRef();
  const [stream,setStream]=useState(null);
  const [showCam,setShowCam]=useState(false);
  const [name,setName]=useState(item?.name??`${category.label} â€” ${String(itemNumber).padStart(2,"0")}`);
  const [pieces,setPieces]=useState(item?.pieces??1);
  const [condition,setCondition]=useState(item?.condition??"");
  const [notes,setNotes]=useState(item?.notes??"");
  const [photo,setPhoto]=useState(item?.photo??null);
  const [pins,setPins]=useState(item?.pins??[]);
  const [dims,setDims]=useState(item?.dims??{H:{},W:{},D:{}});

  useEffect(()=>{if(showCam&&stream&&videoRef.current)videoRef.current.srcObject=stream;},[showCam,stream]);

  const openCamera=async()=>{
    try{const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:false});
      setStream(s);setShowCam(true);}
    catch{fileRef.current?.click();}
  };
  const closeCamera=()=>{stream?.getTracks().forEach(t=>t.stop());setStream(null);setShowCam(false);};
  const snap=()=>{
    const v=videoRef.current,c=canvasRef.current;
    c.width=v.videoWidth;c.height=v.videoHeight;
    c.getContext("2d").drawImage(v,0,0);
    setPhoto(c.toDataURL("image/jpeg",0.85));closeCamera();
  };
  const fromFile=e=>{
    const f=e.target.files[0];if(!f)return;
    const r=new FileReader();r.onload=ev=>setPhoto(ev.target.result);
    r.readAsDataURL(f);e.target.value="";
  };

  const inp={width:"100%",padding:"11px 14px",border:`1.5px solid ${C.line}`,borderRadius:10,
    fontSize:14,fontFamily:FONT,color:C.text,background:C.white,outline:"none",boxSizing:"border-box"};
  const lbl={fontSize:11,fontWeight:600,color:C.textSoft,textTransform:"uppercase",
    letterSpacing:1.2,display:"block",marginBottom:8,fontFamily:FONT};

  return(
    <div style={{flex:1,overflowY:"auto",background:C.ivory}}>
      <div style={{padding:"14px 16px",borderBottom:`1px solid ${C.line}`,background:C.white,
        position:"sticky",top:0,zIndex:20,display:"flex",alignItems:"center",gap:12}}>
        <button onClick={onCancel} style={{background:"none",border:`1.5px solid ${C.line}`,
          borderRadius:8,padding:"6px 12px",fontSize:13,fontFamily:FONT,color:C.textMid,cursor:"pointer"}}>
          â† Back
        </button>
        <div style={{flex:1}}>
          <div style={{fontSize:11,color:C.textSoft,fontFamily:FONT,textTransform:"uppercase",letterSpacing:1}}>
            {category.icon} {category.label}
          </div>
          <div style={{fontSize:15,fontWeight:700,color:C.text,fontFamily:FONT}}>
            {item?"Edit Element":"New Element"}
          </div>
        </div>
        <button onClick={()=>onSave({id:item?.id??uid(),name,pieces,condition,notes,photo,pins,dims,date:new Date().toISOString().slice(0,10)})}
          style={{background:C.accent,color:C.white,border:"none",borderRadius:10,
            padding:"8px 18px",fontSize:13,fontFamily:FONT,fontWeight:600,cursor:"pointer"}}>
          Save
        </button>
      </div>

      <div style={{padding:"18px 16px",display:"flex",flexDirection:"column",gap:18}}>

        {/* Name + pieces */}
        <div style={{display:"grid",gridTemplateColumns:"1fr auto",gap:12,alignItems:"end"}}>
          <div>
            <label style={lbl}>Name / Label</label>
            <input value={name} onChange={e=>setName(e.target.value)} style={inp} placeholder="e.g. Main Entrance Door"/>
          </div>
          <div>
            <label style={{...lbl,textAlign:"center"}}>Pieces</label>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <button onClick={()=>setPieces(p=>Math.max(1,p-1))}
                style={{width:34,height:42,border:`1.5px solid ${C.line}`,borderRadius:8,
                  background:C.white,fontSize:18,cursor:"pointer",color:C.textMid,fontFamily:FONT}}>âˆ’</button>
              <div style={{width:40,height:42,border:`1.5px solid ${C.line}`,borderRadius:8,
                background:C.white,display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:16,fontWeight:700,color:C.text,fontFamily:FONT}}>{pieces}</div>
              <button onClick={()=>setPieces(p=>p+1)}
                style={{width:34,height:42,border:`1.5px solid ${C.line}`,borderRadius:8,
                  background:C.white,fontSize:18,cursor:"pointer",color:C.accent,fontFamily:FONT}}>+</button>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div>
          <label style={lbl}>Photo & Labels</label>
          {!photo?(
            <div style={{display:"flex",gap:10}}>
              <button onClick={openCamera} style={{flex:1,padding:"22px 10px",border:`2px dashed ${C.line}`,
                borderRadius:12,background:C.ivoryDeep,cursor:"pointer",
                display:"flex",flexDirection:"column",alignItems:"center",gap:6}}>
                <span style={{fontSize:28}}>ðŸ“·</span>
                <span style={{fontSize:12,fontFamily:FONT,color:C.textMid}}>Camera</span>
              </button>
              <button onClick={()=>fileRef.current?.click()} style={{flex:1,padding:"22px 10px",border:`2px dashed ${C.line}`,
                borderRadius:12,background:C.ivoryDeep,cursor:"pointer",
                display:"flex",flexDirection:"column",alignItems:"center",gap:6}}>
                <span style={{fontSize:28}}>ðŸ–¼ï¸</span>
                <span style={{fontSize:12,fontFamily:FONT,color:C.textMid}}>Upload</span>
              </button>
            </div>
          ):(
            <div>
              <PhotoAnnotator photoUrl={photo} pins={pins} onChange={setPins}/>
              <button onClick={()=>{setPhoto(null);setPins([]);}}
                style={{marginTop:8,padding:"7px 14px",border:`1.5px solid ${C.line}`,
                  borderRadius:8,background:C.white,color:C.textSoft,fontSize:12,fontFamily:FONT,cursor:"pointer"}}>
                Ã— Remove Photo
              </button>
            </div>
          )}
          <input ref={fileRef} type="file" accept="image/*" hidden onChange={fromFile}/>
          <canvas ref={canvasRef} hidden/>
        </div>

        {/* Dimensions */}
        <div>
          <label style={lbl}>Dimensions</label>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,
            padding:"16px",background:C.white,borderRadius:12,border:`1.5px solid ${C.line}`}}>
            <FtInInput label="Height" value={dims.H} onChange={v=>setDims(p=>({...p,H:v}))}/>
            <FtInInput label="Width"  value={dims.W} onChange={v=>setDims(p=>({...p,W:v}))}/>
            <FtInInput label="Depth"  value={dims.D} onChange={v=>setDims(p=>({...p,D:v}))}/>
          </div>
        </div>

        {/* Condition */}
        <div>
          <label style={lbl}>Condition</label>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
            {CONDITIONS.map(c=>(
              <button key={c} onClick={()=>setCondition(c)} style={{padding:"8px 14px",borderRadius:20,
                border:`2px solid ${condition===c?COND_COLOR[c]:C.line}`,
                background:condition===c?COND_COLOR[c]+"22":C.white,
                color:condition===c?COND_COLOR[c]:C.textMid,
                fontSize:12,fontFamily:FONT,fontWeight:600,cursor:"pointer"}}>{c}</button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label style={lbl}>Notes</label>
          <textarea value={notes} onChange={e=>setNotes(e.target.value)} rows={3}
            placeholder="Materials, damage, observationsâ€¦"
            style={{...inp,resize:"vertical",lineHeight:1.6}}/>
        </div>

        <button onClick={()=>onSave({id:item?.id??uid(),name,pieces,condition,notes,photo,pins,dims,date:new Date().toISOString().slice(0,10)})}
          style={{width:"100%",padding:"15px",background:C.accent,border:"none",borderRadius:12,
            color:C.white,fontSize:15,fontFamily:FONT,fontWeight:700,cursor:"pointer",
            boxShadow:`0 4px 16px rgba(139,92,26,0.3)`}}>
          Save Element
        </button>
        <div style={{height:8}}/>
      </div>

      {showCam&&(
        <div style={{position:"fixed",inset:0,background:"#000",zIndex:999,
          display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20}}>
          <video ref={videoRef} autoPlay playsInline style={{width:"100%",maxWidth:500,borderRadius:12}}/>
          <div style={{display:"flex",gap:20}}>
            <button onClick={snap} style={{width:72,height:72,borderRadius:"50%",background:C.white,
              border:`4px solid ${C.accent}`,fontSize:28,cursor:"pointer"}}>ðŸ“¸</button>
            <button onClick={closeCamera} style={{width:72,height:72,borderRadius:"50%",background:"#333",
              border:"none",color:C.white,fontSize:24,cursor:"pointer"}}>âœ•</button>
          </div>
        </div>
      )}
    </div>
  );
}

function CategoryScreen({category,items,onAdd,onEdit,onBack}){
  return(
    <div style={{flex:1,display:"flex",flexDirection:"column",background:C.ivory,overflow:"hidden"}}>
      <div style={{padding:"14px 16px",borderBottom:`1px solid ${C.line}`,background:C.white,
        display:"flex",alignItems:"center",gap:12,flexShrink:0}}>
        <button onClick={onBack} style={{background:"none",border:`1.5px solid ${C.line}`,
          borderRadius:8,padding:"6px 12px",fontSize:13,fontFamily:FONT,color:C.textMid,cursor:"pointer"}}>
          â† Back
        </button>
        <div style={{flex:1}}>
          <div style={{fontSize:18,fontFamily:FONT,fontWeight:700,color:C.text}}>
            {category.icon} {category.label}
          </div>
          <div style={{fontSize:12,color:C.textSoft,fontFamily:FONT}}>
            {items.length} element{items.length!==1?"s":""} documented
          </div>
        </div>
      </div>

      <div style={{flex:1,overflowY:"auto",padding:"16px"}}>
        {items.length===0?(
          <div style={{textAlign:"center",paddingTop:60,color:C.textSoft}}>
            <div style={{fontSize:48,marginBottom:14,display:'flex',alignItems:'center',justifyContent:'center',color:C.textSoft}}><CatIcon icon={category.icon} size={48}/></div>
            <div style={{fontSize:15,fontFamily:FONT,color:C.textMid,marginBottom:6}}>No elements yet</div>
            <div style={{fontSize:13,fontFamily:FONT,color:C.textSoft}}>Tap + to add your first {category.label}</div>
          </div>
        ):(
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {items.map((item,i)=>(
              <button key={item.id} onClick={()=>onEdit(item)} style={{background:C.white,
                border:`1.5px solid ${C.line}`,borderRadius:14,padding:0,
                overflow:"hidden",cursor:"pointer",textAlign:"left",width:"100%"}}>
                {item.photo&&(
                  <div style={{position:"relative"}}>
                    <img src={item.photo} alt="" style={{width:"100%",height:150,objectFit:"cover",display:"block"}}/>
                    {item.pins?.length>0&&(
                      <div style={{position:"absolute",top:10,right:10,background:C.accent,
                        color:C.white,borderRadius:20,padding:"3px 10px",fontSize:11,fontFamily:FONT,fontWeight:600}}>
                        {item.pins.length} labels
                      </div>
                    )}
                  </div>
                )}
                <div style={{padding:"12px 14px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                    <div style={{fontSize:15,fontFamily:FONT,fontWeight:700,color:C.text}}>{item.name}</div>
                    <div style={{background:C.accentLight,color:C.accent,borderRadius:8,
                      padding:"2px 10px",fontSize:12,fontFamily:FONT,fontWeight:600}}>Ã— {item.pieces}</div>
                  </div>
                  <div style={{display:"flex",gap:14,marginBottom:6}}>
                    {["H","W","D"].map(k=>(
                      <div key={k} style={{fontSize:12,fontFamily:FONT,color:C.textSoft}}>
                        <span style={{color:C.textMid,fontWeight:600}}>{k} </span>{dimStr(item.dims?.[k])}
                      </div>
                    ))}
                  </div>
                  {item.condition&&(
                    <span style={{padding:"3px 10px",borderRadius:20,fontSize:11,fontFamily:FONT,fontWeight:600,
                      background:COND_COLOR[item.condition]+"22",color:COND_COLOR[item.condition]}}>
                      {item.condition}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
        <div style={{height:80}}/>
      </div>

      <button onClick={onAdd} style={{position:"fixed",bottom:24,right:24,width:60,height:60,
        borderRadius:"50%",background:C.accent,border:"none",color:C.white,fontSize:30,
        cursor:"pointer",zIndex:50,boxShadow:`0 6px 20px rgba(139,92,26,0.4)`,
        display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1}}>+</button>
    </div>
  );
}

function generatePDF(allItems,categories,projectName){
  const cats=categories.filter(c=>allItems[c.id]?.length>0);

  // Cover page + one page per category (2 items per row, compact cards)
  let body="";

  // â”€â”€ COVER PAGE â”€â”€
  const totalItems=cats.reduce((s,c)=>s+allItems[c.id].length,0);
  const totalPieces=cats.reduce((s,c)=>allItems[c.id].reduce((ss,i)=>ss+(i.pieces||1),ss),0);
  body+=`<div class="cover">
    <div class="cover-top">
      <div class="cover-sub">Architectural Heritage Documentation</div>
      <div class="cover-title">${projectName||"Architectural Survey"}</div>
      <div class="cover-date">${new Date().toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"})}</div>
    </div>
    <div class="cover-stats">
      ${cats.map(c=>`<div class="cs-row"><span>${({"doors":"[D]","door-frames":"[DF]","windows":"[W]","window-frames":"[WF]","stone-arches":"[A]","columns":"[C]","beams":"[B]","jarokhas":"[J]","furniture":"[F]","stone-lamps":"[SL]","metal-lamps":"[ML]"}[c.icon]||c.icon)} ${c.label}</span><span class="cs-n">${allItems[c.id].length} item${allItems[c.id].length>1?"s":""}</span></div>`).join("")}
    </div>
    <div class="cover-footer">
      <span>${totalItems} elements &nbsp;Â·&nbsp; ${totalPieces} pieces &nbsp;Â·&nbsp; ${cats.length} categories</span>
    </div>
  </div>`;

  // â”€â”€ ONE PAGE PER CATEGORY â”€â”€
  cats.forEach(cat=>{
    const items=allItems[cat.id];
    // chunk into rows of 2
    const rows=[];
    for(let i=0;i<items.length;i+=2) rows.push(items.slice(i,i+2));

    body+=`<div class="cat-page">
      <div class="cat-header">
        <div class="cat-title">${({"doors":"[D]","door-frames":"[DF]","windows":"[W]","window-frames":"[WF]","stone-arches":"[A]","columns":"[C]","beams":"[B]","jarokhas":"[J]","furniture":"[F]","stone-lamps":"[SL]","metal-lamps":"[ML]"}[cat.icon]||cat.icon)} ${cat.label}</div>
        <div class="cat-meta">${items.length} element${items.length>1?"s":""} &nbsp;Â·&nbsp; ${projectName||"Architectural Survey"}</div>
      </div>
      ${rows.map(row=>`
        <div class="item-row">
          ${row.map(item=>{
            const pinList=(item.pins||[]).map((p,i)=>`<span class="pill">${i+1} ${p.label}</span>`).join(" ");
            return`<div class="item-card">
              <div class="ic-head">
                <div class="ic-name">${item.name}</div>
                <div class="ic-badges">
                  <span class="badge-pieces">Ã—${item.pieces}</span>
                  ${item.condition?`<span class="badge-cond" style="color:${COND_COLOR[item.condition]};border-color:${COND_COLOR[item.condition]}44;background:${COND_COLOR[item.condition]}11">${item.condition}</span>`:""}
                </div>
              </div>
              <div class="ic-photo">
                ${item.photo
                  ?`<div style="position:relative;width:100%;height:100%">
                      <img src="${item.photo}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;display:block"/>
                      ${(item.pins||[]).map((p,i)=>`
                        <div style="position:absolute;left:${p.x}%;top:${p.y}%;transform:translate(-50%,-100%)">
                          <div style="background:#1a1a1a;color:#fff;border-radius:3px;padding:1px 5px;font-size:6.5pt;font-family:Futura,sans-serif;font-weight:700;white-space:nowrap;margin-bottom:1px">${i+1}. ${p.label}</div>
                          <div style="width:1.5px;height:7px;background:#1a1a1a;margin:0 auto"></div>
                          <div style="width:5px;height:5px;border-radius:50%;background:#1a1a1a;margin:0 auto"></div>
                        </div>`).join("")}
                    </div>`
                  :`<div class="no-photo">No photo</div>`}
              </div>
              ${pinList?`<div class="ic-pins">${pinList}</div>`:""}
              <div class="ic-dims">
                <div class="dim"><div class="dl">H</div><div class="dv">${dimStr(item.dims?.H)}</div></div>
                <div class="dim-div"></div>
                <div class="dim"><div class="dl">W</div><div class="dv">${dimStr(item.dims?.W)}</div></div>
                <div class="dim-div"></div>
                <div class="dim"><div class="dl">D</div><div class="dv">${dimStr(item.dims?.D)}</div></div>
              </div>
              ${item.notes?`<div class="ic-notes">${item.notes}</div>`:""}
            </div>`;
          }).join("")}
          ${row.length===1?`<div class="item-card item-card--empty"></div>`:""}
        </div>`).join("")}
    </div>`;
  });

  const html=`<!DOCTYPE html><html><head><meta charset="utf-8">
  <title>${projectName||"Architectural Inventory"}</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:Futura,'Century Gothic','Trebuchet MS',sans-serif;background:#fff;color:#111111}

    /* COVER */
    .cover{width:210mm;min-height:297mm;padding:20mm 22mm;display:flex;flex-direction:column;
      justify-content:space-between;background:#fafafa;page-break-after:always}
    .cover-top{border-bottom:2px solid #1a1a1a;padding-bottom:16mm}
    .cover-sub{font-size:9pt;color:#888888;letter-spacing:3px;text-transform:uppercase;margin-bottom:8px}
    .cover-title{font-family:Georgia,serif;font-size:38pt;color:#111111;line-height:1.1;margin-bottom:10px}
    .cover-date{font-size:11pt;color:#333333}
    .cover-stats{flex:1;padding:12mm 0 8mm}
    .cs-row{display:flex;justify-content:space-between;align-items:center;
      padding:8px 0;border-bottom:1px solid #dddddd;font-size:11pt}
    .cs-n{font-weight:700;color:#1a1a1a}
    .cover-footer{font-size:9pt;color:#888888;letter-spacing:1px;text-align:center;
      padding-top:8px;border-top:1px solid #dddddd}

    /* CATEGORY PAGE */
    .cat-page{width:210mm;min-height:297mm;padding:12mm 14mm;background:#fff;page-break-after:always}
    .cat-header{border-bottom:2px solid #1a1a1a;padding-bottom:8px;margin-bottom:10px}
    .cat-title{font-family:Georgia,serif;font-size:20pt;color:#111111}
    .cat-meta{font-size:8pt;color:#888888;letter-spacing:1px;margin-top:3px}

    /* ITEM ROW: 2 per row */
    .item-row{display:grid;grid-template-columns:1fr 1fr;gap:8mm;margin-bottom:8mm;page-break-inside:avoid}

    /* ITEM CARD */
    .item-card{border:1px solid #cccccc;border-radius:6px;overflow:hidden;background:#fafafa;display:flex;flex-direction:column}
    .item-card--empty{border:none;background:transparent}
    .ic-head{padding:6px 8px;border-bottom:1px solid #dddddd;display:flex;justify-content:space-between;align-items:flex-start;gap:6px}
    .ic-name{font-size:10pt;font-weight:700;color:#111111;line-height:1.2}
    .ic-badges{display:flex;gap:4px;flex-shrink:0;align-items:center;flex-wrap:wrap;justify-content:flex-end}
    .badge-pieces{background:#e8e8e8;color:#1a1a1a;border-radius:4px;padding:1px 6px;font-size:8pt;font-weight:700}
    .badge-cond{border:1px solid;border-radius:4px;padding:1px 6px;font-size:7.5pt;font-weight:700}
    .ic-photo{height:42mm;background:#f2f2f2;position:relative;overflow:hidden}
    .no-photo{height:100%;display:flex;align-items:center;justify-content:center;color:#bbbbbb;font-size:9pt}
    .ic-pins{padding:4px 8px;background:#f2f2f2;border-top:1px solid #dddddd;display:flex;flex-wrap:wrap;gap:3px}
    .pill{background:#1a1a1a;color:#fff;border-radius:3px;padding:1px 5px;font-size:7pt;font-weight:600}
    .ic-dims{display:flex;align-items:center;padding:5px 8px;border-top:1px solid #dddddd;background:#fff}
    .dim{flex:1;text-align:center}
    .dl{font-size:7pt;color:#888888;letter-spacing:1px;text-transform:uppercase;margin-bottom:2px}
    .dv{font-size:10pt;font-weight:700;color:#111111;letter-spacing:0.5px}
    .dim-div{width:1px;height:24px;background:#cccccc;margin:0 4px}
    .ic-notes{padding:5px 8px;font-size:8pt;color:#333333;border-top:1px solid #dddddd;
      background:#fafafa;line-height:1.5;font-style:italic}

    @media print{
      body{background:#fff}
      .cover,.cat-page{margin:0}
    }
  </style></head><body>
  ${body||"<div style='padding:40px;text-align:center;color:#888888;font-size:14pt'>No elements to export yet</div>"}
  </body></html>`;

  // Use Blob URL so mobile browsers don't block it as a popup
  const blob = new Blob([html], {type:"text/html"});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.target   = "_blank";
  a.rel      = "noopener";
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>{ document.body.removeChild(a); URL.revokeObjectURL(url); }, 1000);
}

function HomeScreen({categories,allItems,onCategoryTap,totalCount,onAddCategory,onDeleteCategory}){
  const [showAdd,setShowAdd]=useState(false);
  const [newIcon,setNewIcon]=useState("ðŸ›ï¸");
  const [newLabel,setNewLabel]=useState("");

  const confirmAdd=()=>{
    if(!newLabel.trim())return;
    onAddCategory({id:newLabel.toLowerCase().replace(/\s+/g,"-")+"-"+Math.random().toString(36).slice(2,6),icon:newIcon,label:newLabel.trim()});
    setNewLabel("");setNewIcon("ðŸ›ï¸");setShowAdd(false);
  };

  return(
    <div style={{flex:1,display:"flex",flexDirection:"column",background:C.ivory,overflowY:"auto",WebkitOverflowScrolling:"touch",minHeight:0}}>

        {/* Title block */}
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",
          padding:"24px 20px 16px",gap:4,textAlign:"center"}}>
          <div style={{fontSize:10,fontFamily:FONT,color:C.textSoft,textTransform:"uppercase",letterSpacing:3,marginBottom:2}}>
            Architectural Survey
          </div>
          <div style={{fontSize:26,fontFamily:FONT,fontWeight:700,color:C.text,lineHeight:1.15}}>
            Architectural<br/>Inventory
          </div>
          {totalCount>0&&(
            <div style={{marginTop:8,fontSize:13,fontFamily:FONT,color:C.textMid,
              background:C.accentLight,padding:"5px 16px",borderRadius:20,
              border:`1px solid ${C.accent}44`}}>
              {totalCount} element{totalCount>1?"s":""} documented
            </div>
          )}
        </div>

      <div style={{background:C.white,borderTop:`1px solid ${C.line}`,padding:"14px 12px 20px",flexShrink:0}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10,paddingLeft:2}}>
          <div style={{fontSize:9,fontFamily:FONT,color:C.textSoft,textTransform:"uppercase",letterSpacing:1.5}}>
            Select Category
          </div>
          <button onClick={()=>setShowAdd(true)} style={{fontSize:11,fontFamily:FONT,fontWeight:600,
            color:C.accent,background:"none",border:`1px solid ${C.accent}`,borderRadius:8,
            padding:"4px 10px",cursor:"pointer"}}>+ New</button>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8}}>
          {categories.map(cat=>{
            const count=allItems[cat.id]?.length??0;
            const isCustom=!["doors","door-frames","windows","window-frames","stone-arches","columns","beams","jarokhas","furniture","stone-lamps","metal-lamps"].includes(cat.id);
            return(
              <div key={cat.id} style={{position:"relative"}}>
                <button onClick={()=>onCategoryTap(cat)} style={{
                  width:"100%",background:count>0?C.accentLight:C.ivoryDeep,
                  border:`1.5px solid ${count>0?C.accent+"66":C.line}`,
                  borderRadius:12,padding:"14px 4px 10px",cursor:"pointer",
                  display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
                  <CatIcon icon={cat.icon} size={26} color={count>0?C.accent:C.textMid}/>
                  <span style={{fontSize:8,fontFamily:FONT,color:count>0?C.accent:C.textMid,
                    textAlign:"center",lineHeight:1.2,fontWeight:count>0?700:400,
                    wordBreak:"break-word",maxWidth:"100%",marginTop:2}}>{cat.label}</span>
                  {count>0&&<span style={{fontSize:10,fontFamily:FONT,fontWeight:700,color:C.accent}}>{count}</span>}
                </button>
                {isCustom&&(
                  <button onClick={e=>{e.stopPropagation();if(confirm(`Delete "${cat.label}"?`))onDeleteCategory(cat.id);}}
                    style={{position:"absolute",top:-6,right:-6,width:18,height:18,borderRadius:"50%",
                      background:"#cc0000",color:"#fff",border:"none",fontSize:11,cursor:"pointer",
                      display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1,zIndex:5}}>Ã—</button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {showAdd&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:999,
          display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{background:C.white,borderRadius:16,padding:"24px",width:"85%",maxWidth:340,
            boxShadow:"0 8px 40px rgba(0,0,0,0.18)"}}>
            <div style={{fontSize:15,fontFamily:FONT,fontWeight:700,color:C.text,marginBottom:16}}>
              Add Custom Category
            </div>
            <div style={{display:"flex",gap:8,marginBottom:12}}>
              <input value={newIcon} onChange={e=>setNewIcon(e.target.value)}
                style={{width:52,padding:"10px",border:`1.5px solid ${C.line}`,borderRadius:10,
                  fontSize:20,textAlign:"center",outline:"none"}}/>
              <input autoFocus value={newLabel} onChange={e=>setNewLabel(e.target.value)}
                onKeyDown={e=>{if(e.key==="Enter")confirmAdd();}}
                placeholder="Category nameâ€¦"
                style={{flex:1,padding:"10px 14px",border:`1.5px solid ${C.line}`,borderRadius:10,
                  fontFamily:FONT,fontSize:14,color:C.text,outline:"none"}}/>
            </div>
            <div style={{fontSize:11,fontFamily:FONT,color:C.textSoft,marginBottom:16}}>
              Tip: paste any emoji into the icon box ðŸ‘†
            </div>
            <div style={{display:"flex",gap:8}}>
              <button onClick={()=>setShowAdd(false)} style={{flex:1,padding:"11px",
                border:`1.5px solid ${C.line}`,borderRadius:10,background:C.white,
                color:C.textMid,fontFamily:FONT,fontSize:13,cursor:"pointer"}}>Cancel</button>
              <button onClick={confirmAdd} style={{flex:1,padding:"11px",border:"none",
                borderRadius:10,background:C.accent,color:C.white,
                fontFamily:FONT,fontSize:13,fontWeight:700,cursor:"pointer"}}>Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function RecordsScreen({categories,allItems,onEdit}){
  const [search,setSearch]=useState("");
  const all=categories.flatMap(c=>(allItems[c.id]||[]).map(i=>({...i,catIcon:c.icon,catLabel:c.label,catId:c.id})));
  const filtered=all.filter(i=>!search||i.name.toLowerCase().includes(search.toLowerCase())||i.catLabel.toLowerCase().includes(search.toLowerCase()));
  return(
    <div style={{flex:1,overflowY:"auto",padding:"14px 16px",background:C.ivory}}>
      <div style={{position:"relative",marginBottom:14}}>
        <span style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)"}}>ðŸ”</span>
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search elementsâ€¦"
          style={{width:"100%",padding:"11px 14px 11px 36px",border:`1.5px solid ${C.line}`,
            borderRadius:10,fontSize:14,fontFamily:FONT,color:C.text,
            background:C.white,outline:"none",boxSizing:"border-box"}}/>
      </div>
      {filtered.length===0?(
        <div style={{textAlign:"center",padding:"60px 20px",color:C.textSoft}}>
          <div style={{fontSize:40,marginBottom:12}}>ðŸ›ï¸</div>
          <div style={{fontSize:15,fontFamily:FONT}}>No elements yet</div>
          <div style={{fontSize:13,fontFamily:FONT,marginTop:6}}>Go to Home and tap a category</div>
        </div>
      ):(
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {filtered.map(item=>(
            <button key={item.id} onClick={()=>onEdit(item.catId,item)}
              style={{background:C.white,border:`1.5px solid ${C.line}`,borderRadius:12,
                padding:0,overflow:"hidden",cursor:"pointer",textAlign:"left",width:"100%"}}>
              <div style={{display:"flex"}}>
                <div style={{width:72,height:72,flexShrink:0,background:C.ivoryDeep,
                  display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>
                  {item.photo?<img src={item.photo} alt="" style={{width:72,height:72,objectFit:"cover"}}/>:<CatIcon icon={item.catIcon} size={28}/>}
                </div>
                <div style={{flex:1,padding:"10px 12px",minWidth:0}}>
                  <div style={{fontSize:10,color:C.textSoft,fontFamily:FONT,textTransform:"uppercase",letterSpacing:0.8,marginBottom:3}}>
                    <><CatIcon icon={item.catIcon} size={12}/> {item.catLabel}</>
                  </div>
                  <div style={{fontSize:14,fontFamily:FONT,fontWeight:700,color:C.text,
                    whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{item.name}</div>
                  <div style={{fontSize:12,fontFamily:FONT,color:C.textSoft,marginTop:3}}>
                    {dimStr(item.dims?.H)} Ã— {dimStr(item.dims?.W)} &nbsp;Â·&nbsp; Ã—{item.pieces}
                  </div>
                </div>
                <div style={{padding:"10px 10px 10px 0",display:"flex",alignItems:"center"}}>
                  {item.condition&&(
                    <span style={{padding:"3px 9px",borderRadius:20,fontSize:10,fontFamily:FONT,fontWeight:700,
                      background:COND_COLOR[item.condition]+"22",color:COND_COLOR[item.condition]}}>
                      {item.condition}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
      <div style={{height:20}}/>
    </div>
  );
}

// â”€â”€ BACKUP PANEL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function BackupPanel({allItems, setAllItems}){
  const [backups, setBackups] = useState(()=>loadBackups());
  const [expanded, setExpanded] = useState(false);
  const [restored, setRestored] = useState(false);

  const refresh = () => setBackups(loadBackups());

  const doRestore = (b) => {
    if(!confirm(`Restore backup from ${new Date(b.ts).toLocaleString()}?\nThis will replace your current data.`)) return;
    save("hi_items", b.items);
    setAllItems(b.items);
    setRestored(true);
    setTimeout(()=>setRestored(false), 3000);
  };

  const card = {background:C.white,border:`1.5px solid ${C.line}`,borderRadius:14,padding:"14px 16px",marginBottom:14};

  const totalItems = (items) => Object.values(items||{}).reduce((s,arr)=>s+arr.length,0);

  return(
    <div style={card}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
          <div style={{fontSize:10,fontFamily:FONT,color:C.textSoft,textTransform:"uppercase",letterSpacing:1.2}}>
            Auto Backups
          </div>
          <div style={{fontSize:12,fontFamily:FONT,color:C.textMid,marginTop:3}}>
            {backups.length>0 ? `${backups.length} backup${backups.length>1?"s":""} saved` : "No backups yet"}
          </div>
        </div>
        <button onClick={()=>{refresh();setExpanded(e=>!e);}}
          style={{fontSize:11,fontFamily:FONT,color:C.accent,background:"none",
            border:`1px solid ${C.accent}`,borderRadius:8,padding:"5px 12px",cursor:"pointer",fontWeight:600}}>
          {expanded?"Hide":"Restore"}
        </button>
      </div>

      {restored&&(
        <div style={{marginTop:10,padding:"8px 12px",background:"#e8f5e9",borderRadius:8,
          fontSize:12,fontFamily:FONT,color:C.good,fontWeight:600}}>
          âœ“ Data restored successfully! Go to Home to see your elements.
        </div>
      )}

      {expanded&&(
        <div style={{marginTop:12}}>
          {backups.length===0?(
            <div style={{fontSize:12,fontFamily:FONT,color:C.textSoft,textAlign:"center",padding:"12px 0"}}>
              Backups are created automatically as you add elements.
            </div>
          ):(
            backups.map((b,i)=>(
              <div key={b.slot} style={{display:"flex",justifyContent:"space-between",alignItems:"center",
                padding:"10px 0",borderTop:i>0?`1px solid ${C.line}`:"none"}}>
                <div>
                  <div style={{fontSize:12,fontFamily:FONT,color:C.text,fontWeight:600}}>
                    {totalItems(b.items)} elements
                  </div>
                  <div style={{fontSize:11,fontFamily:FONT,color:C.textSoft,marginTop:2}}>
                    {new Date(b.ts).toLocaleString("en-IN",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}
                  </div>
                </div>
                <button onClick={()=>doRestore(b)}
                  style={{fontSize:11,fontFamily:FONT,fontWeight:600,color:C.white,
                    background:C.accent,border:"none",borderRadius:8,
                    padding:"6px 14px",cursor:"pointer"}}>
                  Restore
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

// â”€â”€ ONEDRIVE EXPORT (no Azure needed) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Downloads each element as a .json file â€” user manually moves to OneDrive
// OR user pastes a OneDrive "upload" folder URL (Business/SharePoint only)

function downloadJSON(filename, obj){
  const blob = new Blob([JSON.stringify(obj, null, 2)], {type:"application/json"});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  setTimeout(()=>{ document.body.removeChild(a); URL.revokeObjectURL(url); }, 500);
}

function ExportScreen({categories,allItems,setAllItems,projectName,setProjectName}){
  const total       = categories.reduce((s,c)=>s+(allItems[c.id]?.length??0),0);
  const totalPieces = categories.reduce((s,c)=>(allItems[c.id]||[]).reduce((ss,i)=>ss+(i.pieces||1),s),0);
  const [editing,   setEditing]   = useState(false);
  const [dlStatus,  setDlStatus]  = useState(null); // null | "running" | "done"
  const [dlCount,   setDlCount]   = useState(0);
  const [dlTotal,   setDlTotal]   = useState(0);

  const lbl  = {fontSize:10,fontFamily:FONT,color:C.textSoft,textTransform:"uppercase",letterSpacing:1.2,marginBottom:8};
  const card  = {background:C.white,border:`1.5px solid ${C.line}`,borderRadius:14,padding:"16px 18px",marginBottom:14};

  const downloadAll = async () => {
    const cats = categories.filter(c=>(allItems[c.id]?.length??0)>0);
    const all  = cats.reduce((s,c)=>s+allItems[c.id].length,0);
    setDlStatus("running"); setDlCount(0); setDlTotal(all);
    let done = 0;
    for(const cat of cats){
      for(const item of allItems[cat.id]){
        const obj = {
          project:    projectName||"Architectural Survey",
          category:   cat.label,
          name:       item.name,
          pieces:     item.pieces||1,
          condition:  item.condition||"",
          date:       item.date||"",
          dimensions: {
            height: item.dims?.H ? `${item.dims.H.ft||0}ft ${item.dims.H.in||0}in` : "",
            width:  item.dims?.W ? `${item.dims.W.ft||0}ft ${item.dims.W.in||0}in` : "",
            depth:  item.dims?.D ? `${item.dims.D.ft||0}ft ${item.dims.D.in||0}in` : "",
          },
          labels: (item.pins||[]).map((p,i)=>({number:i+1,label:p.label})),
          notes:  item.notes||"",
          photo:  item.photo||null,
        };
        const safeName = item.name.replace(/[^a-z0-9]/gi,"-").toLowerCase();
        const filename = `${cat.label.replace(/\s+/g,"-")}_${safeName}_${item.id}.json`;
        downloadJSON(filename, obj);
        done++;
        setDlCount(done);
        // Small delay so browser doesn't block multiple downloads
        await new Promise(r=>setTimeout(r,600));
      }
    }
    setDlStatus("done");
  };

  return(
    <div style={{flex:1,overflowY:"auto",padding:"16px",background:C.ivory}}>

      {/* Project name */}
      <div style={card}>
        <div style={lbl}>Project Name</div>
        {editing?(
          <input autoFocus value={projectName} onChange={e=>setProjectName(e.target.value)}
            onBlur={()=>setEditing(false)}
            style={{width:"100%",padding:"8px 12px",border:`1.5px solid ${C.accent}`,
              borderRadius:8,fontFamily:FONT,fontSize:16,fontWeight:700,color:C.text,
              outline:"none",boxSizing:"border-box"}}/>
        ):(
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{fontSize:18,fontFamily:FONT,fontWeight:700,color:C.text}}>
              {projectName||"Untitled Survey"}
            </div>
            <button onClick={()=>setEditing(true)} style={{border:`1px solid ${C.line}`,borderRadius:8,
              padding:"5px 10px",background:C.ivoryDeep,fontSize:12,fontFamily:FONT,color:C.textMid,cursor:"pointer"}}>
              Edit
            </button>
          </div>
        )}
      </div>

      {/* Stats */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:14}}>
        {[{v:total,l:"Elements"},{v:categories.filter(c=>(allItems[c.id]?.length??0)>0).length,l:"Categories"},{v:totalPieces,l:"Pieces"}].map(x=>(
          <div key={x.l} style={{background:C.white,border:`1.5px solid ${C.line}`,borderRadius:12,padding:"12px",textAlign:"center"}}>
            <div style={{fontSize:24,fontFamily:FONT,fontWeight:700,color:C.accent}}>{x.v}</div>
            <div style={{fontSize:10,fontFamily:FONT,color:C.textSoft,marginTop:2}}>{x.l}</div>
          </div>
        ))}
      </div>

      {/* Backup & Restore */}
      <BackupPanel allItems={allItems} setAllItems={setAllItems}/>

      {/* PDF Export */}
      <button onClick={()=>{ if(total===0)return; generatePDF(allItems,categories,projectName); }}
        style={{width:"100%",padding:"16px",
          background:total===0?"#cccccc":C.accent,
          border:"none",borderRadius:12,
          color:C.white,fontSize:14,fontFamily:FONT,fontWeight:700,
          cursor:total===0?"not-allowed":"pointer",
          display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:8,
          opacity:total===0?0.6:1}}>
        <span style={{fontSize:20}}>ðŸ“„</span> Export PDF Report
      </button>
      <div style={{fontSize:11,fontFamily:FONT,color:C.textSoft,textAlign:"center",marginBottom:16}}>
        {total===0 ? "Add elements first to export" : "Opens in new tab Â· Print or Save as PDF"}
      </div>

      {/* OneDrive â€” download JSON files */}
      <div style={card}>
        <div style={lbl}>â˜ï¸ Save to OneDrive</div>

        <div style={{fontSize:12,fontFamily:FONT,color:C.textMid,marginBottom:14,lineHeight:1.7}}>
          Downloads each element as a <strong>.json file</strong>. Move them to your OneDrive folder to back up your survey data.
        </div>

        {/* How it works steps */}
        {[
          {n:"1", t:"Tap "Download All Files" below"},
          {n:"2", t:"Files save to your phone's Downloads folder"},
          {n:"3", t:"Open OneDrive app â†’ upload the files to your survey folder"},
        ].map(s=>(
          <div key={s.n} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:10}}>
            <div style={{width:22,height:22,borderRadius:"50%",background:C.accent,color:C.white,
              fontSize:11,fontFamily:FONT,fontWeight:700,display:"flex",alignItems:"center",
              justifyContent:"center",flexShrink:0}}>{s.n}</div>
            <div style={{fontSize:12,fontFamily:FONT,color:C.textMid,lineHeight:1.5,paddingTop:2}}>{s.t}</div>
          </div>
        ))}

        {/* Download button */}
        {dlStatus===null&&(
          <button onClick={downloadAll}
            disabled={total===0}
            style={{width:"100%",padding:"14px",marginTop:6,
              background:total===0?"#cccccc":"#0078d4",
              border:"none",borderRadius:12,color:"#fff",
              fontSize:14,fontFamily:FONT,fontWeight:700,
              cursor:total===0?"not-allowed":"pointer",
              display:"flex",alignItems:"center",justifyContent:"center",gap:10,
              opacity:total===0?0.6:1}}>
            <span style={{fontSize:18}}>â¬‡ï¸</span>
            {total===0 ? "No elements yet" : `Download All ${total} Files`}
          </button>
        )}

        {/* Progress */}
        {dlStatus==="running"&&(
          <>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
              <div style={{fontSize:13,fontFamily:FONT,color:C.textMid}}>Downloadingâ€¦</div>
              <div style={{fontSize:13,fontFamily:FONT,fontWeight:700,color:C.accent}}>{dlCount}/{dlTotal}</div>
            </div>
            <div style={{height:6,background:C.line,borderRadius:3,overflow:"hidden"}}>
              <div style={{height:"100%",background:"#0078d4",borderRadius:3,
                width:`${dlTotal?Math.round(dlCount/dlTotal*100):0}%`,transition:"width 0.3s"}}/>
            </div>
            <div style={{fontSize:11,fontFamily:FONT,color:C.textSoft,marginTop:8,textAlign:"center"}}>
              Allow downloads if your browser asks
            </div>
          </>
        )}

        {/* Done */}
        {dlStatus==="done"&&(
          <>
            <div style={{fontSize:14,fontFamily:FONT,fontWeight:700,color:C.good,marginBottom:6}}>
              âœ“ All {dlTotal} files downloaded!
            </div>
            <div style={{fontSize:12,fontFamily:FONT,color:C.textMid,marginBottom:12,lineHeight:1.6}}>
              Go to your <strong>Downloads</strong> folder and move them to <strong>OneDrive</strong>.
            </div>
            <button onClick={()=>{setDlStatus(null);setDlCount(0);}}
              style={{width:"100%",padding:"12px",background:"none",
                border:`1.5px solid ${C.accent}`,borderRadius:10,
                color:C.accent,fontSize:13,fontFamily:FONT,fontWeight:600,cursor:"pointer"}}>
              Download Again
            </button>
          </>
        )}
      </div>

      {/* Summary */}
      {total>0&&(
        <div style={{marginTop:4}}>
          <div style={{fontSize:10,fontFamily:FONT,color:C.textSoft,textTransform:"uppercase",letterSpacing:1.2,marginBottom:10}}>
            Summary by Category
          </div>
          {categories.filter(c=>(allItems[c.id]?.length??0)>0).map(c=>(
            <div key={c.id} style={{display:"flex",alignItems:"center",justifyContent:"space-between",
              padding:"10px 14px",background:C.white,border:`1px solid ${C.line}`,
              borderRadius:10,marginBottom:8}}>
              <span style={{fontSize:14,fontFamily:FONT,color:C.text,display:"flex",alignItems:"center",gap:8}}>
                <CatIcon icon={c.icon} size={16}/> {c.label}
              </span>
              <span style={{fontSize:13,fontFamily:FONT,fontWeight:700,color:C.accent}}>
                {allItems[c.id].length} item{allItems[c.id].length>1?"s":""}
              </span>
            </div>
          ))}
        </div>
      )}
      <div style={{height:20}}/>
    </div>
  );
}

function BottomNav({active,onChange}){
  const tabs=[{id:"home",icon:"âŠž",label:"Home"},{id:"records",icon:"â˜°",label:"Records"},{id:"export",icon:"â†‘",label:"Export"}];
  return(
    <div style={{display:"flex",borderTop:`1px solid ${C.line}`,background:C.white,
      flexShrink:0,paddingBottom:"env(safe-area-inset-bottom,0px)"}}>
      {tabs.map(t=>(
        <button key={t.id} onClick={()=>onChange(t.id)} style={{flex:1,padding:"10px 0 8px",
          border:"none",background:"none",cursor:"pointer",display:"flex",flexDirection:"column",
          alignItems:"center",gap:2,borderTop:`2.5px solid ${active===t.id?C.accent:"transparent"}`}}>
          <span style={{fontSize:20,color:active===t.id?C.accent:C.textSoft}}>{t.icon}</span>
          <span style={{fontSize:10,fontFamily:FONT,fontWeight:600,letterSpacing:0.8,
            color:active===t.id?C.accent:C.textSoft,textTransform:"uppercase"}}>{t.label}</span>
        </button>
      ))}
    </div>
  );
}

export default function App(){
  const [tab,setTab]=useState("home");
  const [activeCat,setActiveCat]=useState(null);
  const [editData,setEditData]=useState(null);
  const [allItems,setAllItems]=useState(()=>load("hi_items",{}));
  const [projectName,setProjectName]=useState(()=>load("hi_project","Architectural Survey"));
  const [categories, setCategories] = useState(() => load("hi_cats_v2", DEFAULT_CATS));

  useEffect(()=>{
    save("hi_items",allItems);
    // Auto-backup every time data changes (debounced to avoid too many writes)
    const t=setTimeout(()=>saveBackup(allItems),2000);
    return()=>clearTimeout(t);
  },[allItems]);
  useEffect(()=>save("hi_project",projectName),[projectName]);
  useEffect(()=>save("hi_cats_v2",categories),[categories]);

  const addCategory=(cat)=>setCategories(p=>[...p,cat]);
  const deleteCategory=(id)=>setCategories(p=>p.filter(c=>c.id!==id));

  const totalCount=categories.reduce((s,c)=>s+(allItems[c.id]?.length??0),0);

  const saveItem=(catId,item)=>{
    setAllItems(prev=>{
      const list=prev[catId]??[];
      const exists=list.find(i=>i.id===item.id);
      return{...prev,[catId]:exists?list.map(i=>i.id===item.id?item:i):[...list,item]};
    });
    setEditData(null);
    setActiveCat(categories.find(c=>c.id===catId));
  };

  if(editData){
    const cat=categories.find(c=>c.id===editData.catId);
    const itemCount=(allItems[editData.catId]?.length??0)+1;
    return(
      <Shell>
        <ItemForm category={cat} item={editData.item} itemNumber={itemCount}
          onSave={item=>saveItem(editData.catId,item)}
          onCancel={()=>{setEditData(null);setActiveCat(categories.find(c=>c.id===editData.catId));}}/>
      </Shell>
    );
  }

  if(activeCat){
    return(
      <Shell>
        <CategoryScreen category={activeCat} items={allItems[activeCat.id]??[]}
          onAdd={()=>setEditData({catId:activeCat.id,item:null})}
          onEdit={item=>setEditData({catId:activeCat.id,item})}
          onBack={()=>{setActiveCat(null);setTab("home");}}/>
      </Shell>
    );
  }

  return(
    <Shell>
      <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
        {tab==="home" &&<HomeScreen categories={categories} allItems={allItems} onCategoryTap={setActiveCat} totalCount={totalCount} onAddCategory={addCategory} onDeleteCategory={deleteCategory}/>}
        {tab==="records" &&<RecordsScreen categories={categories} allItems={allItems} onEdit={(catId,item)=>setEditData({catId,item})}/>}
        {tab==="export"  &&<ExportScreen  categories={categories} allItems={allItems} projectName={projectName} setProjectName={p=>{setProjectName(p);save("hi_project",p);}}/>}
      </div>
      <BottomNav active={tab} onChange={setTab}/>
    </Shell>
  );
}

function Shell({children}){
  useEffect(()=>{
    // Force full width â€” override any cached styles
    const s = document.createElement('style');
    s.id = 'arch-global';
    s.textContent = `
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
      html { width: 100% !important; height: 100% !important; overflow-x: hidden !important; }
      body { width: 100% !important; height: 100% !important; margin: 0 !important; padding: 0 !important; overflow-x: hidden !important; background: #fafafa; }
      #root { width: 100% !important; height: 100% !important; display: flex; flex-direction: column; }
      input, textarea, button, select { font-family: 'Futura','Century Gothic','Trebuchet MS',sans-serif; }
      input:focus, textarea:focus { border-color: #1a1a1a !important; box-shadow: 0 0 0 3px #1a1a1a18; }
      ::-webkit-scrollbar { display: none; }
      * { scrollbar-width: none; }
    `;
    document.head.appendChild(s);
    return () => { const el=document.getElementById('arch-global'); if(el) el.remove(); };
  },[]);
  return(
    <div style={{height:"100dvh",width:"100%",display:"flex",
      flexDirection:"column",background:C.ivory,overflow:"hidden"}}>
      {children}
    </div>
  );
}
