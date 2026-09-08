import { useState } from "react";

const T = {
  cabernet: "#641224", cabernetDark: "#3D0B16", cabernetDeep: "#2A070F",
  cabernetTint: "rgba(100,18,36,0.07)",
  skyway: "#F7E6CA", skywayDark: "#D4C3A3", aurum: "#C3A66D",
  contrail: "#F8F8F8", afterburn: "#080000", white: "#FFFFFF",
  canvas: "#F7F3EA", hairline: "#EAE3D6", canvasDeep: "#F5EFE4",
  textPrimary: "#080000", textSecondary: "rgba(8,0,0,0.60)", textMuted: "rgba(8,0,0,0.40)",
  success: "#2D9B6F", successTint: "rgba(45,155,111,0.12)",
  warning: "#E6A817", warningTint: "rgba(230,168,23,0.12)",
  danger: "#C0392B", dangerTint: "rgba(192,57,43,0.12)",
};
const ros = "'Rosario',sans-serif";
const fus = "'Fustat',serif";
const mono = "'JetBrains Mono',monospace";

const I = {
  chev: <path d="m6 9 6 6 6-6"/>,
  chevR: <path d="m9 18 6-6-6-6"/>,
  arrR: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
  arrUR: <><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>,
  card: <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></>,
  dl: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></>,
  x: <path d="M18 6 6 18M6 6l12 12"/>,
  pencil: <><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></>,
  plane: <path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a.8.8 0 0 0-.9 1.1l2.3 4.6-2 2H2.5a.5.5 0 0 0-.3.9l3 2 2 3a.5.5 0 0 0 .9-.3v-1.7l2-2 4.6 2.3a.8.8 0 0 0 1.1-.9z"/>,
  takeoff: <><path d="M2 22h20"/><path d="M6.4 17.4 3.6 12a1 1 0 0 1 .6-1.4l1.3-.4 2 2.2 3.3-1-3.5-5.6a1 1 0 0 1 .6-1.5l1.4-.4a1.3 1.3 0 0 1 1.2.3l5.6 5.2 3.6-1.1a2 2 0 0 1 2.5 1.3 1.5 1.5 0 0 1-1 1.9L6.4 17.4Z"/></>,
  box: <><path d="m7.5 4.3 9 5.2"/><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  doc: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></>,
  user: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></>,
};

const Ic = ({ d, s = 20, c = "currentColor", w = 1.5, cls }) => (
  <svg className={cls} width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>{d}</svg>
);

const Tag = ({ children }) => <div style={{ fontFamily: ros, fontSize: 13, fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: T.aurum, marginBottom: 16 }}>{children}</div>;
const H = ({ children, n }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "0 0 26px" }}>
    <h3 style={{ fontFamily: ros, fontSize: 24, fontWeight: 700, color: T.afterburn, margin: 0, letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>{children}</h3>
    <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${T.aurum}55, transparent)` }} />
    {n && <span style={{ fontFamily: ros, fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", color: T.textMuted, whiteSpace: "nowrap" }}>{n}</span>}
  </div>
);
const Card = ({ children, style }) => <div style={{ background: T.white, border: `1px solid ${T.hairline}`, borderRadius: 14, padding: 34, ...style }}>{children}</div>;
const Sub = ({ children }) => <div style={{ fontFamily: ros, fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: T.textSecondary, marginBottom: 16 }}>{children}</div>;
const Spec = ({ children }) => <div style={{ fontFamily: fus, fontSize: 13, color: T.textMuted, marginTop: 6, lineHeight: 1.5 }}>{children}</div>;
const Note = ({ children }) => <div style={{ fontFamily: fus, fontSize: 14, color: T.textSecondary, lineHeight: 1.6, background: T.canvas, borderRadius: 10, padding: 16, marginTop: 18 }}>{children}</div>;
const NEW = () => <span style={{ fontFamily: ros, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", background: T.aurum, color: T.cabernetDeep, padding: "3px 8px", borderRadius: 100, marginLeft: 10, verticalAlign: "middle" }}>v1.1</span>;

export default function EANVisualSystem() {
  const [tab, setTab] = useState(0);
  const [pill, setPill] = useState(0);
  const [ca, setCa] = useState(false);
  const [cb, setCb] = useState(true);
  const [rv, setRv] = useState("a");
  const [t1, setT1] = useState(false);
  const [t2, setT2] = useState(true);
  const [exp, setExp] = useState(false);
  const [ov, setOv] = useState(null);

  const Tick = ({ on }) => on ? <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> : null;
  const Tog = ({ on, onClick, dis }) => (
    <div onClick={dis ? undefined : onClick} style={{ width: 50, height: 28, borderRadius: 100, position: "relative", cursor: dis ? "not-allowed" : "pointer", background: dis ? "rgba(212,195,163,.35)" : on ? T.cabernet : T.skywayDark, transition: "background .35s ease" }}>
      <div style={{ width: 22, height: 22, borderRadius: "50%", position: "absolute", top: 3, background: dis ? "rgba(255,255,255,.55)" : T.white, left: on && !dis ? 25 : 3, transition: "left .35s cubic-bezier(.34,1.56,.64,1)", boxShadow: dis ? "none" : "0 1px 4px rgba(0,0,0,.12)" }} />
    </div>
  );

  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=Rosario:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Fustat:wght@300;400;500;600;700;800&display=swap');
    * { -webkit-font-smoothing: antialiased; box-sizing: border-box; }

    .btn-p { display:inline-flex; align-items:center; justify-content:center; gap:9px; font-family:${ros};
      font-weight:600; letter-spacing:.02em; background:${T.cabernet}; color:${T.skyway}; border:none;
      border-radius:8px; cursor:pointer; box-shadow: 0 2px 8px rgba(100,18,36,.18);
      transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .btn-p:hover { background:${T.cabernetDark}; box-shadow: 0 8px 24px rgba(100,18,36,.30); transform: translateY(-2px); }
    .btn-p:active { transform: translateY(0); box-shadow: 0 2px 8px rgba(100,18,36,.22); }

    .btn-gold-static { display:inline-flex; align-items:center; justify-content:center; gap:9px; font-family:${ros};
      font-size:15px; font-weight:600; letter-spacing:.03em; padding:15px 30px; background:${T.skyway};
      color:${T.cabernetDeep}; border:none; border-radius:10px; cursor:pointer;
      box-shadow: 0 2px 10px rgba(0,0,0,.18); transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .btn-gold-static:hover { background:#FFF3DC; box-shadow: 0 10px 28px rgba(0,0,0,.28); transform: translateY(-2px); }

    .btn-gold { display:inline-flex; align-items:center; justify-content:center; gap:9px; font-family:${ros};
      font-size:15px; font-weight:600; letter-spacing:.03em; padding:15px 30px; background:${T.skyway};
      color:${T.cabernetDeep}; border:none; border-radius:10px; cursor:pointer;
      box-shadow: 0 2px 10px rgba(0,0,0,.18); position:relative; z-index:2;
      animation: breathe 9s cubic-bezier(.4,0,.6,1) infinite; transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .btn-gold:hover { background:#FFF3DC; box-shadow: 0 10px 28px rgba(0,0,0,.28); transform: translateY(-2px); }

    .btn-edit { display:inline-flex; align-items:center; gap:8px; font-family:${ros}; font-size:13px; font-weight:600;
      color:${T.cabernet}; background:${T.white}; border:1px solid ${T.hairline}; cursor:pointer;
      padding:8px 18px; border-radius:100px; transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .btn-edit:hover { border-color:${T.cabernet}; background:${T.cabernet}; color:${T.skyway};
      box-shadow: 0 6px 16px rgba(100,18,36,.20); transform: translateY(-2px); }
    .btn-edit:hover svg { stroke:${T.skyway}; }
    .btn-edit svg { transition: stroke .4s ease; }

    .ddl { display:inline-flex; align-items:center; gap:9px; cursor:pointer; font-family:${ros}; font-size:14px;
      font-weight:600; color:${T.skyway}; background:rgba(247,230,202,.08); border:1px solid rgba(195,166,109,.32);
      padding:9px 18px; border-radius:100px; transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .ddl:hover { background:${T.skyway}; color:${T.cabernetDeep}; border-color:${T.skyway};
      box-shadow: 0 6px 18px rgba(0,0,0,.24); transform: translateY(-2px); }
    .ddl:hover svg { stroke:${T.cabernetDeep}; }
    .dla { transition: transform .45s cubic-bezier(.34,1.56,.64,1), stroke .4s ease; }
    .ddl:hover .dla { transform: translateY(3px); }

    /* Travelling light */
    .pw { position:relative; display:inline-block; }
    .halo { position:absolute; inset:-4px; pointer-events:none; overflow:visible; z-index:1; }
    .halo rect { fill:none; stroke:${T.skyway}; stroke-width:1.6; stroke-linecap:round; stroke-dasharray:16 84;
      filter: drop-shadow(0 0 5px rgba(247,230,202,.95)) drop-shadow(0 0 12px rgba(195,166,109,.55));
      animation: travel 9s cubic-bezier(.4,0,.6,1) infinite; }
    .halo rect.t2 { stroke:${T.aurum}; stroke-width:1.2; stroke-dasharray:9 91; opacity:.75; animation-delay:.18s; }
    @keyframes travel { 0%{stroke-dashoffset:100;opacity:0} 4%{opacity:1} 26%{stroke-dashoffset:0;opacity:1} 31%{opacity:0} 100%{stroke-dashoffset:0;opacity:0} }
    @keyframes breathe {
      0%,100% { box-shadow: 0 2px 10px rgba(0,0,0,.18); }
      14% { box-shadow: 0 2px 10px rgba(0,0,0,.18), 0 0 0 3px rgba(247,230,202,.10); }
      26% { box-shadow: 0 4px 16px rgba(0,0,0,.22), 0 0 0 7px rgba(247,230,202,.045); }
      40% { box-shadow: 0 2px 10px rgba(0,0,0,.18), 0 0 0 10px rgba(247,230,202,0); }
    }

    /* Elevated dark surface */
    .hero { position:relative; overflow:hidden; border-radius:14px; background:${T.cabernetDark};
      box-shadow: 0 14px 40px rgba(42,7,15,.30), 0 2px 8px rgba(42,7,15,.20);
      transition: box-shadow .5s cubic-bezier(.25,.1,.25,1), transform .5s cubic-bezier(.25,.1,.25,1); }
    .hero:hover { box-shadow: 0 20px 56px rgba(42,7,15,.38), 0 3px 10px rgba(42,7,15,.24); transform: translateY(-3px); }
    .arcs { position:absolute; right:-70px; top:-80px; width:280px; height:280px; opacity:.16; pointer-events:none;
      animation: drift 26s linear infinite; }
    @keyframes drift { 0%{transform:rotate(0)} 100%{transform:rotate(360deg)} }
    .sheen { position:absolute; inset:0; pointer-events:none;
      background: radial-gradient(120% 90% at 12% 0%, rgba(247,230,202,.10), transparent 55%); }
    .glow { box-shadow: 0 0 10px ${T.aurum}; animation: pulse 3.2s ease-in-out infinite; }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.45} }

    /* Interactive card */
    .ci { position:relative; overflow:hidden; cursor:pointer; background:${T.white};
      border:1px solid ${T.hairline}; border-radius:14px; padding:26px;
      transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .ci:before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px;
      background: linear-gradient(180deg, ${T.aurum}, rgba(195,166,109,.35));
      transform:scaleY(0); transition: transform .5s cubic-bezier(.25,.1,.25,1); z-index:2; }
    .ci:after { content:''; position:absolute; right:-40px; top:-40px; width:170px; height:170px; border-radius:50%;
      background: radial-gradient(circle, rgba(195,166,109,.20), transparent 68%); opacity:0; transform:scale(.7);
      pointer-events:none; transition: opacity .5s ease, transform .6s cubic-bezier(.25,.1,.25,1); }
    .ci:hover { border-color:${T.aurum}; background:#FFFDF9; transform: translateY(-5px);
      box-shadow: 0 14px 34px rgba(100,18,36,.13), 0 2px 6px rgba(100,18,36,.06); }
    .ci:hover:before { transform:scaleY(1); }
    .ci:hover:after { opacity:1; transform:scale(1); }
    .ci .ttl { transition: color .4s ease, letter-spacing .4s ease; }
    .ci:hover .ttl { color:${T.cabernet}; letter-spacing:.14em; }
    .ci .fig { transition: transform .5s cubic-bezier(.25,.1,.25,1); }
    .ci:hover .fig { transform: translateX(4px); }

    /* Rows */
    .row { display:flex; align-items:center; gap:16px; cursor:pointer; position:relative;
      transition: background .4s cubic-bezier(.25,.1,.25,1); }
    .row:before { content:''; position:absolute; left:0; top:0; bottom:0; width:2px; background:${T.aurum};
      transform:scaleY(0); transition: transform .4s cubic-bezier(.25,.1,.25,1); }
    .row:hover, .row.open { background:#FCFAF6; }
    .row:hover:before, .row.open:before { transform:scaleY(1); }
    .tile { border-radius:10px; background:${T.white}; border:1px solid ${T.hairline}; display:flex;
      align-items:center; justify-content:center; flex-shrink:0; transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .row:hover .tile { background:${T.canvasDeep}; border-color:${T.skywayDark}; transform:scale(1.05); }
    .chev { transition: transform .5s cubic-bezier(.25,.1,.25,1); }
    .row.open .chev { transform: rotate(180deg); }

    /* Expandable */
    .exp { display:grid; grid-template-rows:0fr; transition: grid-template-rows .55s cubic-bezier(.25,.1,.25,1); }
    .exp.on { grid-template-rows:1fr; }
    .exp > .expw { overflow:hidden; }
    .expi { background:${T.canvasDeep}; border-top:1px solid ${T.hairline}; padding:22px;
      opacity:0; transition: opacity .45s cubic-bezier(.25,.1,.25,1) .1s; }
    .exp.on .expi { opacity:1; }
    .paper-s { background:${T.white}; border:1px solid ${T.hairline}; border-radius:12px; }
    .srow { display:flex; align-items:center; gap:12px; padding:10px 0; border-bottom:1px solid ${T.hairline}; }
    .srow:last-of-type { border-bottom:none; }

    /* Pills / tabs */
    .pill { font-family:${ros}; font-size:14px; font-weight:600; padding:8px 18px; border-radius:100px;
      cursor:pointer; border:1px solid ${T.hairline}; background:transparent; color:${T.textSecondary};
      transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .pill:hover { border-color:${T.skywayDark}; background:${T.canvasDeep}; color:${T.cabernet}; }
    .pill.on { background:${T.cabernet}; color:${T.skyway}; border-color:${T.cabernet}; box-shadow: 0 2px 8px rgba(100,18,36,.20); }

    /* Select */
    .sel { position:relative; display:inline-block; }
    .sel select { appearance:none; font-family:${ros}; font-size:15px; font-weight:600; color:${T.afterburn};
      background:${T.white}; border:1px solid ${T.hairline}; border-radius:8px; padding:11px 42px 11px 18px;
      cursor:pointer; outline:none; transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .sel select:hover { border-color:${T.aurum}; box-shadow: 0 4px 12px rgba(100,18,36,.07); }
    .sel .cv { position:absolute; right:15px; top:50%; transform:translateY(-50%); pointer-events:none; }

    /* Icon buttons */
    .ib { width:46px; height:46px; border-radius:10px; border:1px solid ${T.hairline}; background:${T.white};
      display:flex; align-items:center; justify-content:center; cursor:pointer;
      transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .ib:hover { background:${T.cabernet}; border-color:${T.cabernet}; transform:translateY(-2px);
      box-shadow: 0 6px 16px rgba(100,18,36,.22); }
    .ib:hover svg { stroke:${T.skyway}; }
    .ib svg { transition: stroke .4s ease; }

    /* Nav */
    .nv { display:flex; align-items:center; gap:14px; padding:13px 16px; border-radius:10px; cursor:pointer;
      margin-bottom:3px; transition: background .4s cubic-bezier(.25,.1,.25,1); }
    .nv:hover { background:rgba(247,230,202,.07); }
    .nv.on { background:rgba(247,230,202,.11); }
    .nv .dot { width:5px; height:5px; border-radius:50%; background:${T.aurum}; margin-left:auto;
      opacity:0; transform:scale(.4); transition: all .4s cubic-bezier(.34,1.56,.64,1); }
    .nv.on .dot { opacity:1; transform:scale(1); }
    .tb { flex:1; display:flex; flex-direction:column; align-items:center; cursor:pointer; padding-top:8px; position:relative; }
    .tbd { position:absolute; top:0; left:50%; transform:translateX(-50%) scaleX(0); width:22px; height:2.5px;
      border-radius:100px; background:${T.aurum}; transition: transform .4s cubic-bezier(.34,1.56,.64,1); }
    .tb.on .tbd { transform:translateX(-50%) scaleX(1); }
    .fnav { background:rgba(61,11,22,.94); border-radius:100px; display:flex; align-items:center;
      padding:0 10px 0 18px; gap:4px; height:62px; border:1px solid rgba(195,166,109,.18);
      box-shadow: 0 12px 34px rgba(42,7,15,.34); }
    .fb { flex:1; display:flex; align-items:center; justify-content:center; height:44px; border-radius:100px;
      cursor:pointer; transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .fb.on { background:rgba(247,230,202,.13); }

    /* Avatars */
    .av { border-radius:50%; display:flex; align-items:center; justify-content:center; font-family:${ros};
      font-weight:600; background:transparent; transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .av-l { border:1.5px solid rgba(100,18,36,.28); color:${T.cabernet}; }
    .av-d { border:1.5px solid ${T.aurum}; color:${T.aurum}; }
    .av-e { border:1.5px solid ${T.aurum}; color:${T.cabernet}; background:${T.canvasDeep}; }

    /* Overlay diagrams */
    .ovbox { position:relative; height:200px; border-radius:12px; overflow:hidden; cursor:pointer;
      background:${T.canvasDeep}; border:1px solid ${T.hairline};
      transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .ovbox:hover { border-color:${T.aurum}; box-shadow: 0 10px 26px rgba(100,18,36,.10); transform:translateY(-3px); }
    .ovpanel { position:absolute; background:${T.white}; border:1px solid ${T.skywayDark}; }
    .ovscrim { position:absolute; inset:0; background:rgba(42,7,15,.42); }

    .cmark { height:30px; padding:0 11px; border-radius:6px; border:1px solid ${T.hairline}; background:${T.white};
      display:flex; align-items:center; justify-content:center; font-family:${ros}; font-size:10px;
      font-weight:700; letter-spacing:.04em; color:${T.textSecondary}; }

    .scrl { height:90px; overflow-y:scroll; background:${T.white}; border:1px solid ${T.hairline}; border-radius:10px; padding:14px; }
    .scrl::-webkit-scrollbar { width:9px; }
    .scrl::-webkit-scrollbar-thumb { background:${T.skywayDark}; border-radius:100px; border:3px solid ${T.white}; }
    .scrl::-webkit-scrollbar-track { background:transparent; }

    @keyframes rise { from{opacity:0; transform:translateY(14px)} to{opacity:1; transform:none} }
    .in { animation: rise .7s cubic-bezier(.25,.1,.25,1) both; }
    @media (prefers-reduced-motion: reduce) { * { animation:none !important; transition:none !important; } }
  `;

  return (
    <div style={{ fontFamily: fus, background: T.canvas, minHeight: "100vh" }}>
      <style>{CSS}</style>

      <div style={{ display: "grid", gridTemplateColumns: "360px 1fr", minHeight: "100vh" }}>

        {/* ═══ SIDEBAR ═══ */}
        <aside style={{ padding: "56px 40px", borderRight: `1px solid ${T.hairline}`, position: "sticky", top: 0, height: "100vh", overflowY: "auto" }}>
          <div style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: T.aurum, marginBottom: 8 }}>Design System</div>
          <div style={{ fontFamily: ros, fontSize: 14, fontWeight: 500, color: T.textMuted, marginBottom: 36 }}>v1.1.4 / September 2026</div>

          <h1 style={{ fontFamily: ros, fontSize: 34, fontWeight: 700, color: T.cabernet, margin: "0 0 12px", letterSpacing: "-0.02em", lineHeight: 1.12 }}>EAN Aviation</h1>
          <p style={{ fontFamily: fus, fontSize: 16, color: T.textSecondary, lineHeight: 1.7, margin: "0 0 36px" }}>
            Visual reference for all web applications, mobile products, dashboards, and client portals built for EAN Aviation.
          </p>

          <div style={{ width: 40, height: 1, background: T.aurum, marginBottom: 36 }} />

          <div style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: T.cabernet, marginBottom: 20 }}>Luxury Principles</div>
          {[
            { t: "Space is the first luxury", d: "EAN interfaces are never dense. Generous padding and wide margins say we value the user's attention over screen efficiency." },
            { t: "Tempo, not speed", d: "Animations and interactions take 350ms, not 200ms. Everything moves just slowly enough that it feels intentional. When a heavy door closes, it moves gently." },
            { t: "Warmth over precision", d: "Cream backgrounds, soft borders, rounded edges, ample spacing. The interface should feel inviting, not clinical." },
            { t: "Restraint is confidence", d: "Colour enters sparingly. Cabernet at 10 to 15 percent. Hierarchy comes from size and weight, not from adding more colour. The goal is to avoid visual noise." },
            { t: "Materiality", d: "Every surface has weight. Cards sit on a cream desk. The whole interface should feel crafted, not assembled." },
          ].map(p => (
            <div key={p.t} style={{ marginBottom: 22 }}>
              <div style={{ fontFamily: ros, fontSize: 16, fontWeight: 600, color: T.afterburn, marginBottom: 5 }}>{p.t}</div>
              <div style={{ fontFamily: fus, fontSize: 15, color: T.textMuted, lineHeight: 1.65 }}>{p.d}</div>
            </div>
          ))}

          <div style={{ width: 40, height: 1, background: T.hairline, margin: "32px 0" }} />

          <div style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: T.cabernet, marginBottom: 14 }}>Desk and Paper Rule</div>
          <p style={{ fontFamily: fus, fontSize: 15, color: T.textMuted, lineHeight: 1.65, margin: "0 0 30px" }}>
            Cream canvas, white cards, hairline borders. No shadows on content cards. Colour only where it carries meaning.
          </p>

          <div style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: T.cabernet, marginBottom: 14 }}>Brand Context</div>
          <p style={{ fontFamily: fus, fontSize: 15, color: T.textMuted, lineHeight: 1.65, margin: "0 0 14px" }}>
            EAN Aviation is Nigeria's first fully integrated FBO and maintenance facility at Murtala Muhammed International Airport, Lagos.
          </p>
          <div style={{ fontFamily: fus, fontSize: 17, fontStyle: "italic", color: T.aurum }}>Above, Beyond, For You.</div>

          <div style={{ marginTop: 48, fontFamily: fus, fontSize: 14, color: T.textMuted }}>Designed by Apex Motive</div>
        </aside>

        {/* ═══ MAIN ═══ */}
        <main style={{ padding: "56px 48px 90px", maxWidth: 1100 }}>

          {/* TYPOGRAPHY */}
          <section style={{ marginBottom: 48 }}>
            <Card>
              <Tag>Foundations</Tag>
              <H n="01">Typography</H>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
                <div>
                  <Sub>Rosario / Headings</Sub>
                  {[["Headline 1", 48, 700], ["Headline 2", 32, 700], ["Headline 3", 24, 600], ["Headline 4", 18, 600]].map(([t, fs, fw]) => (
                    <div key={t} style={{ marginBottom: 24 }}>
                      <div style={{ fontFamily: ros, fontSize: fs, fontWeight: fw, color: T.afterburn, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{t}</div>
                      <Spec>Rosario {fw === 700 ? "Bold" : "SemiBold"} / {fs}px / -0.02em</Spec>
                    </div>
                  ))}
                  <div>
                    <div style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.cabernet }}>Section Label</div>
                    <Spec>Rosario SemiBold / 14px / 0.08em / uppercase</Spec>
                  </div>
                </div>
                <div>
                  <Sub>Fustat / Body</Sub>
                  <div style={{ marginBottom: 24 }}>
                    <div style={{ fontFamily: fus, fontSize: 16, color: T.textPrimary, lineHeight: 1.7 }}>Body text in Fustat at 16px with generous line height. The serif forms carry heritage and craft, reading at length without fatigue.</div>
                    <Spec>Fustat Regular / 16px / line-height 1.7</Spec>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <div style={{ fontFamily: fus, fontSize: 14, color: T.textSecondary, lineHeight: 1.6 }}>Captions and supporting text at 14px in a quieter colour.</div>
                    <Spec>Fustat Regular / 14px</Spec>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <div style={{ fontFamily: ros, fontSize: 44, fontWeight: 700, color: T.cabernet, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>247</div>
                    <Spec>Rosario Bold / 44px / tabular-nums</Spec>
                  </div>
                  <Note>Rosario for headings, numbers, buttons, labels and navigation. Fustat for everything read at length. Never swap them.</Note>
                </div>
              </div>
            </Card>
          </section>

          {/* COLOUR */}
          <section style={{ marginBottom: 48 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
              <Card>
                <Tag>Brand Palette</Tag>
                <H n="02">Colours</H>
                {[
                  ["Cabernet", "#641224", "Primary / 10–15% in product UI", 1],
                  ["Skyway", "#F7E6CA", "Secondary / text on dark", 0],
                  ["Aurum", "#C3A66D", "Accent only / max 10%", 0],
                  ["Contrail", "#F8F8F8", "Near-white surface", 0],
                  ["Afterburn", "#080000", "Near-black / body text", 1],
                ].map(([n, h, d, dk]) => (
                  <div key={n} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 12, background: h, border: dk ? "none" : `1px solid ${T.hairline}`, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: ros, fontSize: 16, fontWeight: 600, color: T.afterburn }}>{n}</div>
                      <div style={{ fontFamily: mono, fontSize: 13, color: T.textSecondary, marginTop: 2 }}>{h}</div>
                      <div style={{ fontFamily: fus, fontSize: 14, color: T.textMuted }}>{d}</div>
                    </div>
                  </div>
                ))}
              </Card>

              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                <Card>
                  <Tag>Product UI</Tag>
                  <H n="03">Extended <NEW /></H>
                  {[
                    ["Canvas Linen", "#F7F3EA", "Default page background", 0],
                    ["Hairline", "#EAE3D6", "Default border", 0],
                    ["Canvas Deep", "#F5EFE4", "Brand surfaces, nested panels", 0],
                    ["Cabernet Dark", "#3D0B16", "Elevated dark surface", 1],
                    ["Cabernet Deep", "#2A070F", "Text on Skyway", 1],
                  ].map(([n, h, d, dk]) => (
                    <div key={n} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 9, background: h, border: dk ? "none" : `1px solid ${T.hairline}`, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, color: T.afterburn }}>{n} <span style={{ fontFamily: mono, fontSize: 12, fontWeight: 400, color: T.textMuted }}>{h}</span></div>
                        <div style={{ fontFamily: fus, fontSize: 13, color: T.textMuted }}>{d}</div>
                      </div>
                    </div>
                  ))}
                  <Note>Background and border always move together. On a lighter canvas, a heavier hairline reads as a hard edge.</Note>
                </Card>

                <Card>
                  <Tag>Data</Tag>
                  <H n="04">Status</H>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    {[["Success", T.success, T.successTint, "Paid, complete"], ["Warning", T.warning, T.warningTint, "Pending, at risk"], ["Danger", T.danger, T.dangerTint, "Overdue, failed"], ["Info", T.cabernet, T.cabernetTint, "Neutral"]].map(([n, h, t, u]) => (
                      <div key={n} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                          <div style={{ width: 36, height: 18, borderRadius: 5, background: h }} />
                          <div style={{ width: 36, height: 18, borderRadius: 5, background: t, border: `1px solid ${T.hairline}` }} />
                        </div>
                        <div>
                          <div style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, color: h }}>{n}</div>
                          <div style={{ fontFamily: fus, fontSize: 12.5, color: T.textMuted }}>{u}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Note>Functional only. Never decorative. A zero value never takes Success green.</Note>
                </Card>
              </div>
            </div>
          </section>

          {/* SPACING / RADIUS / ELEVATION */}
          <section style={{ marginBottom: 48 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 22 }}>
              <Card>
                <Tag>Foundations</Tag>
                <H n="05">Spacing</H>
                {[[4, "Icon gaps"], [8, "Chip padding"], [12, "Related items"], [16, "Field gaps"], [24, "Compact"], [36, "Card padding"], [52, "Sections"], [72, "Page-level"]].map(([v, t]) => (
                  <div key={v} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 9 }}>
                    <div style={{ width: Math.min(v, 42), height: Math.min(v, 42), borderRadius: 3, background: T.cabernetTint, border: `1px solid ${T.skywayDark}`, flexShrink: 0 }} />
                    <div><span style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, color: T.afterburn }}>{v}px </span><span style={{ fontFamily: fus, fontSize: 13.5, color: T.textMuted }}>{t}</span></div>
                  </div>
                ))}
              </Card>
              <Card>
                <Tag>Shape</Tag>
                <H n="06">Radius</H>
                <p style={{ fontFamily: fus, fontSize: 14, color: T.textSecondary, lineHeight: 1.6, margin: "0 0 20px" }}>Each component has one assigned radius. Not interchangeable.</p>
                {[[8, "Buttons, inputs, selects"], [14, "Cards, drawers"], [18, "Modals, featured"], [100, "Badges, toggles, pills"]].map(([v, u]) => (
                  <div key={v} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: v, border: `2px solid ${T.cabernet}`, background: T.cabernetTint, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: ros, fontSize: 15, fontWeight: 600, color: T.afterburn }}>{v === 100 ? "Pill" : `${v}px`}</div>
                      <div style={{ fontFamily: fus, fontSize: 13.5, color: T.textMuted }}>{u}</div>
                    </div>
                  </div>
                ))}
              </Card>
              <Card>
                <Tag>Depth</Tag>
                <H n="07">Elevation</H>
                <p style={{ fontFamily: fus, fontSize: 14, color: T.textSecondary, lineHeight: 1.6, margin: "0 0 20px" }}>Content cards are flat. Shadows are for objects that float above the page.</p>
                {[
                  ["Flat", "Content cards", "none", `1px solid ${T.hairline}`],
                  ["Subtle", "Chips, brand cards", "0 2px 8px rgba(100,18,36,.06)", "none"],
                  ["Medium", "Popovers, menus", "0 4px 16px rgba(100,18,36,.08), 0 12px 32px rgba(0,0,0,.05)", "none"],
                  ["Elevated", "Modals, drawers", "0 8px 32px rgba(100,18,36,.14)", "none"],
                ].map(([l, d, sh, bd]) => (
                  <div key={l} style={{ marginBottom: 16 }}>
                    <div style={{ height: 50, borderRadius: 12, background: T.white, boxShadow: sh, border: bd, marginBottom: 8 }} />
                    <div style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, color: T.afterburn }}>{l}</div>
                    <div style={{ fontFamily: fus, fontSize: 13.5, color: T.textMuted }}>{d}</div>
                  </div>
                ))}
              </Card>
            </div>
          </section>

          {/* ELEVATED DARK SURFACE */}
          <section style={{ marginBottom: 48 }}>
            <Card>
              <Tag>Signature</Tag>
              <H n="08">Elevated Dark Surface <NEW /></H>
              <p style={{ fontFamily: fus, fontSize: 15, color: T.textSecondary, lineHeight: 1.65, margin: "0 0 26px", maxWidth: 720 }}>
                A single dark Cabernet surface may anchor a screen, carrying the primary financial figure. There is never more than one per screen. On this surface the primary action inverts to Skyway, since a Cabernet button would disappear.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 26 }}>
                <div className="hero" style={{ padding: 30 }}>
                  <svg className="arcs" viewBox="0 0 300 300" fill="none">
                    {[70, 100, 130, 160, 190].map(r => <circle key={r} cx="150" cy="150" r={r} stroke={T.aurum} strokeWidth="1" strokeDasharray="3 9" />)}
                  </svg>
                  <div className="sheen" />
                  <div style={{ position: "relative" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 18 }}>
                      <span className="glow" style={{ width: 7, height: 7, borderRadius: "50%", background: T.aurum }} />
                      <span style={{ fontFamily: ros, fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.aurum }}>Headline Figure</span>
                    </div>
                    <div style={{ fontFamily: ros, fontSize: 40, fontWeight: 700, color: T.skyway, letterSpacing: "-0.035em", lineHeight: 1, fontVariantNumeric: "tabular-nums", marginBottom: 8 }}>$00,000.00</div>
                    <div style={{ fontFamily: fus, fontSize: 14, color: "rgba(247,230,202,.55)", marginBottom: 24 }}>Supporting qualifier line</div>
                    <button className="btn-gold-static" style={{ width: "100%" }}><Ic d={I.card} s={18} c={T.cabernetDeep} /> Primary Action</button>
                  </div>
                </div>

                <div>
                  <Sub>Specification</Sub>
                  {[
                    ["Background", "Cabernet Dark #3D0B16"],
                    ["Shadow (rest)", "0 14px 40px rgba(42,7,15,.30)"],
                    ["Shadow (hover)", "0 20px 56px rgba(42,7,15,.38)"],
                    ["Lift", "translateY(-3px)"],
                    ["Sheen", "radial 120% 90% at 12% 0%"],
                    ["Arcs", "Aurum 1px, dash 3 9, opacity .16"],
                    ["Arc motion", "rotate 360° / 26s linear"],
                    ["Label", "Aurum, 0.14em tracking"],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "9px 0", borderBottom: `1px solid ${T.hairline}` }}>
                      <span style={{ fontFamily: fus, fontSize: 13.5, color: T.textSecondary }}>{k}</span>
                      <span style={{ fontFamily: mono, fontSize: 12, color: T.afterburn, textAlign: "right" }}>{v}</span>
                    </div>
                  ))}
                  <Note>On this surface the primary action inverts to Skyway with Cabernet Deep text. A Cabernet button would disappear against the background. Figures are placeholders.</Note>
                </div>
              </div>
            </Card>
          </section>

          {/* BUTTONS */}
          <section style={{ marginBottom: 48 }}>
            <Card>
              <Tag>Interactive</Tag>
              <H n="09">Buttons</H>
              <p style={{ fontFamily: fus, fontSize: 15, color: T.textSecondary, lineHeight: 1.65, margin: "0 0 28px", maxWidth: 720 }}>
                Buttons carry a resting shadow and lift on hover. Wider and taller than standard SaaS patterns; the extra horizontal space signals confidence. Hover the live examples below.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 26, marginBottom: 28 }}>
                {[
                  ["Primary", { background: T.cabernet, color: T.skyway, border: "none" }],
                  ["Secondary", { background: T.skyway, color: T.cabernet, border: `1px solid ${T.cabernet}` }],
                  ["Ghost", { background: "transparent", color: T.cabernet, border: `1px solid ${T.cabernet}` }],
                  ["Danger", { background: T.danger, color: "#fff", border: "none" }],
                ].map(([n, st]) => (
                  <div key={n}>
                    <Sub>{n}</Sub>
                    <button className={n === "Primary" ? "btn-p" : ""} style={{ ...st, fontFamily: ros, fontSize: 14, fontWeight: 600, letterSpacing: "0.02em", padding: "13px 28px", borderRadius: 8, cursor: "pointer", width: "100%", boxShadow: n === "Primary" ? undefined : "none", transition: "all .4s cubic-bezier(.25,.1,.25,1)" }}>{n}</button>
                    <Spec>{n === "Primary" ? "Lift + shadow on hover" : "Fill shift on hover"}</Spec>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: `1px solid ${T.hairline}`, paddingTop: 26, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 26 }}>
                <div>
                  <Sub>Tertiary <NEW /></Sub>
                  <button className="btn-edit"><Ic d={I.pencil} s={14} c={T.cabernet} /> Edit</button>
                  <Spec>Contextual actions inside panels. Below Ghost in hierarchy.</Spec>
                </div>
                <div>
                  <Sub>Secondary on dark <NEW /></Sub>
                  <div style={{ background: T.cabernetDark, borderRadius: 10, padding: 16, display: "inline-block" }}>
                    <button className="ddl"><Ic cls="dla" d={I.dl} s={15} c="currentColor" w={1.8} /> Download</button>
                  </div>
                  <Spec>Icon travels in the direction of its action.</Spec>
                </div>
                <div>
                  <Sub>Size scale</Sub>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                    {[["Small", 13, "9px 20px"], ["Default", 14, "13px 28px"], ["Commit", 18, "18px 30px"]].map(([l, fs, p]) => (
                      <button key={l} className="btn-p" style={{ fontSize: fs, padding: p }}>{l}</button>
                    ))}
                  </div>
                  <Spec>A commit action runs at 18px, above the 14px default.</Spec>
                </div>
              </div>
            </Card>
          </section>

          {/* FORMS */}
          <section style={{ marginBottom: 48 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
              <Card>
                <Tag>Inputs</Tag>
                <H n="10">Form Fields</H>
                {[
                  ["Default", "Placeholder text", "", `1px solid ${T.skywayDark}`, T.textMuted, "Helper text appears here", T.textMuted],
                  ["Focused", "", "Input text", `1.5px solid ${T.cabernet}`, T.textPrimary, null, null],
                  ["Error", "", "Invalid input", `1.5px solid ${T.danger}`, T.textPrimary, "This field is required", T.danger],
                ].map(([l, ph, v, bd, tc, hl, hc]) => (
                  <div key={l} style={{ marginBottom: 22 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <label style={{ fontFamily: fus, fontSize: 14, fontWeight: 500, color: T.textSecondary }}>Label</label>
                      <span style={{ fontFamily: fus, fontSize: 13, color: T.textMuted }}>{l}</span>
                    </div>
                    <input readOnly placeholder={ph} value={v} style={{ fontFamily: fus, fontSize: 15, color: tc, padding: "14px 18px", borderRadius: 8, border: bd, background: T.white, width: "100%", outline: "none" }} />
                    {hl && <div style={{ fontFamily: fus, fontSize: 13, color: hc, marginTop: 6 }}>{hl}</div>}
                  </div>
                ))}
                <div>
                  <label style={{ fontFamily: fus, fontSize: 14, fontWeight: 500, color: T.textSecondary, display: "block", marginBottom: 8 }}>Select <NEW /></label>
                  <div className="sel" style={{ display: "block" }}>
                    <select style={{ width: "100%" }}><option>September</option><option>August</option></select>
                    <Ic cls="cv" d={I.chev} s={15} c={T.cabernet} />
                  </div>
                  <Spec>Native appearance removed, Cabernet chevron positioned with pointer-events none.</Spec>
                </div>
              </Card>

              <Card>
                <Tag>Selection</Tag>
                <H n="11">Controls</H>
                <Sub>Checkboxes</Sub>
                <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
                  {[[ca, setCa], [cb, setCb]].map(([v, set], i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => set(!v)}>
                      <div style={{ width: 20, height: 20, borderRadius: 5, border: `1.5px solid ${v ? T.cabernet : T.skywayDark}`, background: v ? T.cabernet : T.white, display: "flex", alignItems: "center", justifyContent: "center", transition: "all .35s ease" }}><Tick on={v} /></div>
                      <span style={{ fontFamily: fus, fontSize: 15, color: T.textPrimary }}>{v ? "Checked" : "Unchecked"}</span>
                    </div>
                  ))}
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 20, height: 20, borderRadius: 5, border: "1.5px solid rgba(212,195,163,.40)", background: "#F7F4EE" }} />
                    <span style={{ fontFamily: fus, fontSize: 15, color: T.textMuted }}>Disabled</span>
                  </div>
                </div>

                <Sub>Radios</Sub>
                <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
                  {["a", "b"].map(v => (
                    <div key={v} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => setRv(v)}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", border: `1.5px solid ${rv === v ? T.cabernet : T.skywayDark}`, background: T.white, display: "flex", alignItems: "center", justifyContent: "center", transition: "all .35s ease" }}>
                        {rv === v && <div style={{ width: 10, height: 10, borderRadius: "50%", background: T.cabernet }} />}
                      </div>
                      <span style={{ fontFamily: fus, fontSize: 15, color: T.textPrimary }}>Option {v.toUpperCase()}</span>
                    </div>
                  ))}
                </div>

                <Sub>Toggles</Sub>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}><Tog on={t1} onClick={() => setT1(!t1)} /><span style={{ fontFamily: fus, fontSize: 15 }}>{t1 ? "On" : "Off"}</span></div>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}><Tog on={t2} onClick={() => setT2(!t2)} /><span style={{ fontFamily: fus, fontSize: 15 }}>{t2 ? "On" : "Off"}</span></div>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}><Tog dis /><span style={{ fontFamily: fus, fontSize: 15, color: T.textMuted }}>Disabled</span></div>
                </div>
              </Card>
            </div>
          </section>

          {/* CARDS + INTERACTIVE */}
          <section style={{ marginBottom: 48 }}>
            <Card>
              <Tag>Containers</Tag>
              <H n="12">Cards <NEW /></H>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 22, marginBottom: 24 }}>
                <div>
                  <Sub>Static</Sub>
                  <div style={{ background: T.white, border: `1px solid ${T.hairline}`, borderRadius: 14, padding: 24 }}>
                    <div style={{ fontFamily: ros, fontSize: 17, fontWeight: 600, color: T.afterburn, marginBottom: 6 }}>Card Title</div>
                    <div style={{ fontFamily: fus, fontSize: 14.5, color: T.textSecondary, lineHeight: 1.6 }}>Hairline border, no shadow, sits flat on canvas.</div>
                  </div>
                </div>
                <div>
                  <Sub>Interactive <NEW /></Sub>
                  <div className="ci">
                    <div className="ttl" style={{ fontFamily: ros, fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.textSecondary, marginBottom: 12 }}>Spent YTD</div>
                    <div className="fig">
                      <div style={{ fontFamily: ros, fontSize: 28, fontWeight: 700, color: T.afterburn, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>$130,965</div>
                      <div style={{ fontFamily: fus, fontSize: 13.5, color: T.textMuted, marginTop: 6 }}>Hover me</div>
                    </div>
                  </div>
                </div>
                <div>
                  <Sub>Metric</Sub>
                  <div style={{ background: T.white, border: `1px solid ${T.hairline}`, borderRadius: 14, padding: 24 }}>
                    <div style={{ fontFamily: ros, fontSize: 34, fontWeight: 700, color: T.cabernet, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>247</div>
                    <div style={{ fontFamily: ros, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: T.textMuted, marginTop: 8 }}>Open Invoices</div>
                    <div style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, color: T.danger, marginTop: 5 }}>+12%</div>
                  </div>
                </div>
              </div>
              <Note>Interactive card hover fires five signals at once: 3px Aurum edge bar scales in, card lifts 5px, shadow deepens, border warms to Aurum, background shifts to #FFFDF9. Label shifts to Cabernet with tracking opening to 0.14em; the figure slides 4px right.</Note>
            </Card>
          </section>

          {/* OVERLAYS */}
          <section style={{ marginBottom: 48 }}>
            <Card>
              <Tag>Overlays</Tag>
              <H n="13">Drawer, Modal, Sheet <NEW /></H>
              <p style={{ fontFamily: fus, fontSize: 15, color: T.textSecondary, lineHeight: 1.65, margin: "0 0 26px", maxWidth: 760 }}>
                The choice is task versus document, not length. A drawer is for a task that belongs to the page behind it and ends in a commitment. A centred modal is for a self-contained document the user examines and exports. On mobile both become bottom sheets, and the header carries the distinction instead of the container.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 22 }}>
                {[
                  { n: "Side Drawer", u: "Task · desktop", w: "600px", panel: { top: 0, bottom: 0, right: 0, width: "58%", borderRadius: 0 }, headDark: true },
                  { n: "Centred Modal", u: "Document · desktop", w: "760px", panel: { top: "12%", bottom: "12%", left: "14%", right: "14%", borderRadius: 10 }, headDark: false },
                  { n: "Bottom Sheet", u: "Both · mobile", w: "top inset 54px", panel: { left: 0, right: 0, bottom: 0, top: "22%", borderRadius: "12px 12px 0 0" }, headDark: true },
                ].map(o => (
                  <div key={o.n}>
                    <div className="ovbox">
                      {/* page behind */}
                      <div style={{ position: "absolute", inset: 0, padding: 12 }}>
                        <div style={{ height: 10, width: "45%", background: T.hairline, borderRadius: 3, marginBottom: 8 }} />
                        <div style={{ height: 34, background: T.white, border: `1px solid ${T.hairline}`, borderRadius: 6, marginBottom: 8 }} />
                        <div style={{ height: 34, background: T.white, border: `1px solid ${T.hairline}`, borderRadius: 6 }} />
                      </div>
                      <div className="ovscrim" />
                      <div className="ovpanel" style={{ ...o.panel, boxShadow: "0 8px 30px rgba(42,7,15,.35)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                        <div style={{ height: 42, background: o.headDark ? T.cabernetDark : T.white, borderBottom: o.headDark ? "none" : `1px solid ${T.hairline}`, display: "flex", alignItems: "center", padding: "0 10px", gap: 6 }}>
                          <div style={{ width: 26, height: 6, borderRadius: 3, background: o.headDark ? "rgba(247,230,202,.35)" : T.hairline }} />
                          <div style={{ marginLeft: "auto", width: 14, height: 6, borderRadius: 3, background: o.headDark ? T.aurum : T.cabernet }} />
                        </div>
                        <div style={{ flex: 1, background: T.canvas, padding: 8 }}>
                          <div style={{ height: "100%", background: T.white, border: `1px solid ${T.hairline}`, borderRadius: 5 }} />
                        </div>
                        <div style={{ height: 30, background: T.white, borderTop: `1px solid ${T.hairline}`, display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "0 8px" }}>
                          <div style={{ width: 40, height: 12, borderRadius: 3, background: T.cabernet }} />
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: 14 }}>
                      <div style={{ fontFamily: ros, fontSize: 16, fontWeight: 600, color: T.afterburn }}>{o.n}</div>
                      <div style={{ fontFamily: fus, fontSize: 13.5, color: T.textMuted, marginTop: 3 }}>{o.u} · {o.w}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Note>All three share the structure: fixed header, scrolling body, pinned footer holding the commit or export action. Scrim is <span style={{ fontFamily: mono, fontSize: 13 }}>rgba(42,7,15,.46)</span> with blur. A task header takes the Elevated Dark Surface with the headline figure; a document header takes white with the controls that change what is shown.</Note>
            </Card>
          </section>

          {/* DOCUMENT SURFACE + TABULAR */}
          <section style={{ marginBottom: 48 }}>
            <Card>
              <Tag>Documents</Tag>
              <H n="14">Document Surface <NEW /></H>
              <div style={{ background: T.canvas, borderRadius: 12, padding: 24 }}>
                <div style={{ background: T.white, border: `1px solid ${T.hairline}`, borderRadius: 16, padding: 30 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
                    <div>
                      <div style={{ fontFamily: ros, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.cabernet, marginBottom: 10 }}>Issuer</div>
                      <div style={{ fontFamily: fus, fontSize: 14, color: T.textSecondary, lineHeight: 1.7 }}>Organisation Name<br />Address Line</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: ros, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.textMuted, marginBottom: 10 }}>Document</div>
                      <div style={{ fontFamily: ros, fontSize: 26, fontWeight: 700, color: T.afterburn, letterSpacing: "-0.02em" }}>ACC-0000</div>
                    </div>
                  </div>
                  <div style={{ height: 1, background: `linear-gradient(90deg, ${T.aurum}55, ${T.hairline} 40%, ${T.hairline})`, marginBottom: 14 }} />
                  <div style={{ display: "grid", gridTemplateColumns: "110px 1fr 110px 90px", gap: 14, padding: "0 10px 8px" }}>
                    {["Date", "Description", "Amount", "Status"].map((h, j) => <span key={h} style={{ fontFamily: ros, fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.textMuted, textAlign: j >= 2 ? "right" : "left" }}>{h}</span>)}
                  </div>
                  {[["01 Jan 2026", "Line item description", "REF-0001", "$000.00", "Due", T.warning], ["01 Jan 2026", "Line item description", "REF-0002", "$0,000.00", "Due", T.warning], ["01 Jan 2026", "Line item description", "REF-0003", "$0,000.00", "Overdue", T.danger]].map(([dt, d, n, a, s, c], j) => (
                    <div key={n} style={{ display: "grid", gridTemplateColumns: "110px 1fr 110px 90px", gap: 14, alignItems: "center", padding: "15px 10px", borderBottom: j < 2 ? `1px solid ${T.hairline}` : "none" }}>
                      <span style={{ fontFamily: fus, fontSize: 13.5, color: T.textSecondary, fontVariantNumeric: "tabular-nums" }}>{dt}</span>
                      <div>
                        <div style={{ fontFamily: ros, fontSize: 15, fontWeight: 600, color: T.afterburn, marginBottom: 3 }}>{d}</div>
                        <div style={{ fontFamily: fus, fontSize: 13, color: T.textMuted, fontVariantNumeric: "tabular-nums" }}>{n}</div>
                      </div>
                      <span style={{ fontFamily: ros, fontSize: 15, fontWeight: 600, color: T.afterburn, fontVariantNumeric: "tabular-nums", textAlign: "right" }}>{a}</span>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 7 }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
                        <span style={{ fontFamily: ros, fontSize: 13.5, fontWeight: 600, color: c }}>{s}</span>
                      </div>
                    </div>
                  ))}
                  <div style={{ height: 1, background: `linear-gradient(90deg, ${T.hairline}, ${T.hairline} 55%, ${T.aurum}55)`, margin: "20px 0 16px" }} />
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
                    <div style={{ display: "flex", gap: 26 }}><span style={{ fontFamily: fus, fontSize: 14.5, color: T.textSecondary }}>Total invoiced</span><span style={{ fontFamily: ros, fontSize: 17, fontWeight: 600, minWidth: 120, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>$00,000.00</span></div>
                    <div style={{ display: "flex", gap: 26 }}><span style={{ fontFamily: fus, fontSize: 14.5, color: T.textSecondary }}>Paid</span><span style={{ fontFamily: ros, fontSize: 17, fontWeight: 600, color: T.textMuted, minWidth: 120, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>$0.00</span></div>
                    <div style={{ display: "flex", gap: 26, alignItems: "baseline", marginTop: 4 }}><span style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: T.textSecondary }}>Outstanding</span><span style={{ fontFamily: ros, fontSize: 28, fontWeight: 700, color: T.cabernet, letterSpacing: "-0.03em", minWidth: 120, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>$00,000.00</span></div>
                  </div>
                </div>
              </div>
              <Note>All figures, references and names shown are placeholders. Grid, never flex, so columns hold alignment down the page. Status is a dot plus label, never a filled badge: a column of badges reads as alarm. Paid $0.00 renders muted, not Success green. Divider rules above and below totals fade from Aurum to hairline in opposing directions.</Note>
            </Card>
          </section>

          {/* NAVIGATION */}
          <section style={{ marginBottom: 48 }}>
            <Card>
              <Tag>Patterns</Tag>
              <H n="15">Navigation <NEW /></H>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26, marginBottom: 26 }}>
                <div>
                  <Sub>Sidebar active state</Sub>
                  <div style={{ background: T.cabernetDark, borderRadius: 12, padding: "16px 12px" }}>
                    {[["Overview", I.grid, 1], ["Invoices", I.doc, 0], ["Account", I.user, 0]].map(([l, ic, on]) => (
                      <div key={l} className={`nv${on ? " on" : ""}`}>
                        <Ic d={ic} s={18} c={T.skyway} w={on ? 2 : 1.5} />
                        <span style={{ fontFamily: ros, fontSize: 15, fontWeight: on ? 600 : 400, color: T.skyway, opacity: on ? 1 : .70 }}>{l}</span>
                        <span className="dot" />
                      </div>
                    ))}
                  </div>
                  <Spec>Skyway-tint fill plus a 5px Aurum dot that springs in. The v1.0 Aurum left border is withdrawn.</Spec>
                </div>
                <div>
                  <Sub>Top bar</Sub>
                  <div style={{ background: T.cabernet, borderRadius: 12, padding: "0 22px", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
                      <span style={{ fontFamily: ros, fontSize: 21, fontWeight: 700, color: T.skyway, letterSpacing: "-0.01em" }}>ean</span>
                      {["Dashboard", "Invoices"].map((l, i) => <span key={l} style={{ fontFamily: ros, fontSize: 14.5, fontWeight: 500, color: T.skyway, opacity: i === 0 ? 1 : .55, borderBottom: i === 0 ? `2px solid ${T.aurum}` : "none", paddingBottom: 3 }}>{l}</span>)}
                    </div>
                    <button style={{ fontFamily: ros, fontSize: 13.5, fontWeight: 600, background: T.skyway, color: T.cabernet, border: "none", padding: "8px 18px", borderRadius: 8, cursor: "pointer" }}>New Request</button>
                  </div>
                  <Spec>Aurum underline on the active item, Skyway CTA at the right.</Spec>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }}>
                <div>
                  <Sub>Frosted footer · mobile <NEW /></Sub>
                  <div style={{ background: "rgba(255,255,255,.92)", border: `1px solid ${T.hairline}`, borderRadius: 12, display: "flex", padding: "8px 6px 12px" }}>
                    {[["Overview", I.grid, 1], ["Invoices", I.doc, 0], ["Account", I.user, 0]].map(([l, ic, on]) => (
                      <div key={l} className={`tb${on ? " on" : ""}`}>
                        <span className="tbd" />
                        <Ic d={ic} s={19} c={on ? T.cabernet : "rgba(8,0,0,.34)"} w={on ? 2 : 1.5} />
                        <span style={{ fontFamily: ros, fontSize: 10.5, fontWeight: on ? 600 : 500, color: on ? T.cabernet : "rgba(8,0,0,.36)", marginTop: 5 }}>{l}</span>
                      </div>
                    ))}
                  </div>
                  <Spec>88px, 20px backdrop blur, Aurum indicator springs in above the icon.</Spec>
                </div>
                <div>
                  <Sub>Floating pill · mobile <NEW /></Sub>
                  <div className="fnav">
                    {[[I.grid, 1], [I.doc, 0], [I.user, 0]].map(([ic, on], i) => (
                      <div key={i} className={`fb${on ? " on" : ""}`}><Ic d={ic} s={18} c={on ? T.skyway : "rgba(247,230,202,.45)"} w={on ? 2 : 1.5} /></div>
                    ))}
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: T.skyway, display: "flex", alignItems: "center", justifyContent: "center", marginLeft: 6, boxShadow: "0 4px 14px rgba(0,0,0,.28)", cursor: "pointer" }}>
                      <Ic d={<path d="M12 5v14M5 12h14" />} s={19} c={T.cabernetDeep} w={2.2} />
                    </div>
                  </div>
                  <Spec>Inset 24px, Aurum hairline border, optional Skyway FAB rotating 90° on press.</Spec>
                </div>
              </div>
              <Note>Fixed navigation must carry an explicit z-index above any raised sheet, or a sheet with its own stacking context will paint over it.</Note>
            </Card>
          </section>

          {/* TABS / BADGES / AVATARS / MISC */}
          <section style={{ marginBottom: 48 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 22 }}>
              <Card>
                <Tag>Navigation</Tag>
                <H n="16">Tabs</H>
                <Sub>Underline · primary</Sub>
                <div style={{ borderBottom: `1px solid ${T.hairline}`, display: "flex", marginBottom: 22 }}>
                  {["Overview", "Invoices"].map((t, i) => (
                    <div key={t} onClick={() => setTab(i)} style={{ fontFamily: ros, fontSize: 15, fontWeight: 600, color: tab === i ? T.cabernet : T.textMuted, padding: "12px 18px", borderBottom: tab === i ? `2px solid ${T.cabernet}` : "2px solid transparent", cursor: "pointer", marginBottom: -1, transition: "all .35s ease" }}>{t}</div>
                  ))}
                </div>
                <Sub>Pill · compact</Sub>
                <div style={{ display: "flex", gap: 8 }}>
                  {["All", "Due"].map((t, i) => <div key={t} className={`pill${pill === i ? " on" : ""}`} onClick={() => setPill(i)}>{t}</div>)}
                </div>
              </Card>

              <Card>
                <Tag>Feedback</Tag>
                <H n="17">Badges</H>
                <div style={{ display: "flex", gap: 9, flexWrap: "wrap", marginBottom: 22 }}>
                  {[["Completed", T.successTint, T.success], ["Pending", T.warningTint, T.warning], ["Overdue", T.dangerTint, T.danger], ["Draft", "rgba(8,0,0,.05)", T.textSecondary]].map(([l, bg, c]) => (
                    <span key={l} style={{ fontFamily: ros, fontSize: 13.5, fontWeight: 600, background: bg, color: c, padding: "5px 14px", borderRadius: 100 }}>{l}</span>
                  ))}
                </div>
                <Sub>Alerts</Sub>
                {[["Success", T.success, T.successTint, "Payment confirmed."], ["Error", T.danger, T.dangerTint, "Failed to sync."]].map(([t, c, bg, m]) => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 12, borderRadius: 10, padding: "13px 16px", marginBottom: 9, background: bg }}>
                    <div style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
                    <div><span style={{ fontFamily: ros, fontSize: 13.5, fontWeight: 600 }}>{t} </span><span style={{ fontFamily: fus, fontSize: 13.5, color: T.textSecondary }}>{m}</span></div>
                  </div>
                ))}
              </Card>

              <Card>
                <Tag>Identity</Tag>
                <H n="18">Avatars <NEW /></H>
                <p style={{ fontFamily: fus, fontSize: 14, color: T.textSecondary, lineHeight: 1.6, margin: "0 0 18px" }}>Rings, not fills. Quieter when more than one appears on screen.</p>
                <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 20 }}>
                  <div className="av av-l" style={{ width: 46, height: 46, fontSize: 14 }}>AM</div>
                  <div style={{ background: T.cabernetDark, padding: 10, borderRadius: 10 }}><div className="av av-d" style={{ width: 46, height: 46, fontSize: 14 }}>AM</div></div>
                  <div className="av av-e" style={{ width: 46, height: 46, fontSize: 14 }}>AN</div>
                </div>
                <Sub>Stacked group</Sub>
                <div style={{ display: "flex" }}>
                  {["SD", "YA", "AK"].map((n, i) => (
                    <div key={n} style={{ width: 38, height: 38, borderRadius: "50%", background: [T.cabernet, T.aurum, T.cabernetDark][i], display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ros, fontSize: 13, fontWeight: 600, color: T.white, border: `2.5px solid ${T.white}`, marginLeft: i > 0 ? -10 : 0, zIndex: 3 - i, position: "relative" }}>{n}</div>
                  ))}
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: T.hairline, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ros, fontSize: 13, fontWeight: 600, color: T.textSecondary, border: `2.5px solid ${T.white}`, marginLeft: -10 }}>+3</div>
                </div>
                <Spec>Solid fills only where colour separates individuals.</Spec>
              </Card>
            </div>
          </section>

          {/* MOTION + SCROLLBAR */}
          <section style={{ marginBottom: 48 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 22 }}>
              <Card>
                <Tag>Motion</Tag>
                <H n="19">Timing <NEW /></H>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                  <div>
                    <Sub>Durations</Sub>
                    {[["100ms", "Colour, opacity"], ["350ms", "Standard interaction"], ["450ms", "Panel switch"], ["550ms", "Drawer, expansion"], ["700ms", "Page entrance"]].map(([d, u]) => (
                      <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${T.hairline}` }}>
                        <span style={{ fontFamily: mono, fontSize: 13, color: T.cabernet }}>{d}</span>
                        <span style={{ fontFamily: fus, fontSize: 13.5, color: T.textMuted }}>{u}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <Sub>Easing</Sub>
                    {[["Default", ".25,.1,.25,1"], ["Enter", ".22,.9,.28,1"], ["Spring", ".34,1.56,.64,1"]].map(([n, v]) => (
                      <div key={n} style={{ marginBottom: 12 }}>
                        <div style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, color: T.afterburn }}>{n}</div>
                        <div style={{ fontFamily: mono, fontSize: 12, color: T.textMuted }}>cubic-bezier({v})</div>
                      </div>
                    ))}
                  </div>
                </div>
                <Note>One orchestrated page entrance: elements rise 14px and fade over 700ms, staggered 50ms in reading order. All motion respects <span style={{ fontFamily: mono, fontSize: 13 }}>prefers-reduced-motion</span>.</Note>
              </Card>

              <Card>
                <Tag>Detail</Tag>
                <H n="20">Scrollbar <NEW /></H>
                <div className="scrl">
                  {[1, 2, 3, 4, 5, 6].map(i => <div key={i} style={{ fontFamily: fus, fontSize: 14, color: T.textSecondary, padding: "6px 0" }}>Scroll to see the thumb treatment</div>)}
                </div>
                <Spec>9px track, Skyway Dark thumb, fully rounded, 3px border in the container background to inset it. Track transparent. Hidden entirely on mobile.</Spec>
                <div style={{ marginTop: 22 }}>
                  <Sub>Focus ring</Sub>
                  <button className="btn-p" style={{ fontSize: 14, padding: "13px 28px", outline: `2px solid ${T.aurum}`, outlineOffset: 3 }}>Focused</button>
                  <Spec>2px Aurum, offset 3px, via :focus-visible.</Spec>
                </div>
              </Card>
            </div>
          </section>

          {/* DO NOT */}
          <section>
            <Card>
              <Tag>Guardrails</Tag>
              <H n="21">Do Not Use</H>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }}>
                {[
                  ["Foundations", [
                    "Any colour outside the defined palette",
                    "Plus Jakarta Sans, Sora, or Inter typefaces",
                    "Generic greys (#F5F5F5, #E0E0E0)",
                    "Cold, flat, or sterile colour schemes",
                    "Coloured borders on card edges",
                    "Shadows on content cards",
                    "Dense layouts without breathing room",
                    "Transitions faster than 350ms",
                  ]],
                  ["Patterns", [
                    "Green as a call to action",
                    "Tinted or gradient fills on content cards",
                    "More than one elevated dark surface per screen",
                    "More than one travelling light per screen",
                    "A headline figure without a label and qualifier",
                    "A modal or drawer fired from a chevron",
                    "Filled status badges in a dense document",
                    "Success green applied to a zero value",
                    "Flex layout for tabular rows needing alignment",
                    "A side drawer on a mobile viewport",
                    "Fixed nav without z-index above sheets",
                    "Desktop tables shrunk rather than restructured",
                  ]],
                ].map(([g, items]) => (
                  <div key={g}>
                    <Sub>{g}</Sub>
                    {items.map(d => (
                      <div key={d} style={{ display: "flex", alignItems: "flex-start", gap: 11, marginBottom: 11 }}>
                        <span style={{ fontFamily: ros, fontSize: 14, color: T.textMuted, flexShrink: 0, marginTop: 1 }}>&#10005;</span>
                        <span style={{ fontFamily: fus, fontSize: 14.5, color: T.textSecondary, lineHeight: 1.55 }}>{d}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Card>
          </section>

        </main>
      </div>
    </div>
  );
}
