import { useState } from "react";

const T = {
  cabernet: "#641224", cabernetDark: "#3D0B16", cabernetDeep: "#2A070F",
  cabernetTint: "rgba(100,18,36,0.07)",
  skyway: "#F7E6CA", skywayDark: "#D4C3A3", aurum: "#C3A66D",
  afterburn: "#080000", white: "#FFFFFF",
  canvas: "#F7F3EA", hairline: "#EAE3D6", canvasDeep: "#F5EFE4",
  textPrimary: "#080000", textSecondary: "rgba(8,0,0,0.60)", textMuted: "rgba(8,0,0,0.40)",
  success: "#2D9B6F", successTint: "rgba(45,155,111,0.12)",
  warning: "#E6A817", warningTint: "rgba(230,168,23,0.12)",
  danger: "#C0392B", dangerTint: "rgba(192,57,43,0.12)",
};

const ros = "'Rosario',sans-serif";
const fus = "'Fustat',serif";

const Ico = {
  grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  doc: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></>,
  plane: <path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a.8.8 0 0 0-.9 1.1l2.3 4.6-2 2H2.5a.5.5 0 0 0-.3.9l3 2 2 3a.5.5 0 0 0 .9-.3v-1.7l2-2 4.6 2.3a.8.8 0 0 0 1.1-.9z"/>,
  send: <><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></>,
  plus: <><path d="M12 5v14M5 12h14"/></>,
  plusC: <><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></>,
  user: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></>,
  card: <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>,
  chat: <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></>,
  chevD: <path d="m6 9 6 6 6-6"/>,
  arrR: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
  arrUR: <><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>,
  screen: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>,
  takeoff: <><path d="M2 22h20"/><path d="M6.4 17.4 3.6 12a1 1 0 0 1 .6-1.4l1.3-.4 2 2.2 3.3-1-3.5-5.6a1 1 0 0 1 .6-1.5l1.4-.4a1.3 1.3 0 0 1 1.2.3l5.6 5.2 3.6-1.1a2 2 0 0 1 2.5 1.3 1.5 1.5 0 0 1-1 1.9L6.4 17.4Z"/></>,
  landing: <><path d="M2 22h20"/><path d="M3.8 12.6 3 9.5a1 1 0 0 1 1-1.3l1.3.1 1.2 2.7 3.4.9L9.3 5a1 1 0 0 1 1.1-1.2l1.4.2a1.3 1.3 0 0 1 1 .8l2.8 7 3.7 1a2 2 0 0 1 1.5 2.4 1.5 1.5 0 0 1-1.8 1.1L3.8 12.6Z"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.1a4 4 0 0 1 0 7.75"/></>,
  shield: <path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1 1 0 0 1 1.6 0C14.6 3.8 17 5 19 5a1 1 0 0 1 1 1Z"/>,
  box: <><path d="m7.5 4.3 9 5.2"/><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></>,
  pencil: <><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></>,
};

function Icon({ d, size = 20, color = "currentColor", sw = 1.5, cls }) {
  return <svg className={cls} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>{d}</svg>;
}

function Badge({ children, tone }) {
  const m = { success: [T.successTint, T.success], warning: [T.warningTint, T.warning], danger: [T.dangerTint, T.danger], brand: [T.cabernetTint, T.cabernet] };
  const [bg, c] = m[tone] || m.brand;
  return <span style={{ fontFamily: ros, fontSize: 13, fontWeight: 600, background: bg, color: c, padding: "5px 14px", borderRadius: 100, whiteSpace: "nowrap" }}>{children}</span>;
}

function SectionHead({ title, sub, action }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <h2 style={{ fontFamily: ros, fontSize: 22, fontWeight: 700, color: T.afterburn, margin: 0, letterSpacing: "-0.02em" }}>{title}</h2>
          <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${T.aurum}55, transparent)`, minWidth: 40 }} />
        </div>
        {sub && <p style={{ fontFamily: fus, fontSize: 14, color: T.textMuted, margin: "5px 0 0" }}>{sub}</p>}
      </div>
      {action && <button className="lnk">{action}<Icon cls="lnk-a" d={Ico.arrR} size={15} color={T.cabernet} /></button>}
    </div>
  );
}

export default function EANClientOverviewLinen() {
  const [nav, setNav] = useState("Overview");
  const [contact, setContact] = useState("Ann");
  const [payOpen, setPayOpen] = useState(false);
  const [openRow, setOpenRow] = useState(null);
  const [stmt, setStmt] = useState(null);

  const PERIODS = {
    "September 2026": {
      period: "1 September – 30 September 2026", count: 3,
      rows: [
        { dt: "6 Sept 2026", d: "3rd Party Equipment Handling +1", n: "INV-14260", a: "$188.02", s: "Due", tone: "warning" },
        { dt: "1 Sept 2026", d: "Apron Parking Fee", n: "INV-14251", a: "$5,375.00", s: "Due", tone: "warning" },
        { dt: "1 Sept 2026", d: "Apron Parking Fee", n: "INV-14252", a: "$5,375.00", s: "Due", tone: "warning" },
      ],
      invoiced: "$10,938.02", paid: "$0.00", out: "$10,938.02",
    },
    "August 2026": {
      period: "1 August – 31 August 2026", count: 4,
      rows: [
        { dt: "30 Aug 2026", d: "DNMM", n: "INV-14233", a: "$77.89", s: "Due", tone: "warning" },
        { dt: "3 Aug 2026", d: "Apron Parking Fee", n: "INV-14139", a: "$5,375.00", s: "Overdue", tone: "danger" },
        { dt: "3 Aug 2026", d: "Apron Parking Fee", n: "INV-14138", a: "$5,375.00", s: "Overdue", tone: "danger" },
        { dt: "3 Aug 2026", d: "Apron Parking Fee", n: "INV-14140", a: "$5,375.00", s: "Overdue", tone: "danger" },
      ],
      invoiced: "$16,202.89", paid: "$0.00", out: "$16,202.89",
    },
  };
  const S = stmt ? PERIODS[stmt] : null;
  const stMonth = stmt ? stmt.split(" ")[0] : "September";
  const stYear = stmt ? stmt.split(" ")[1] : "2026";

  const BILL = [
    { n: "INV-14260", d: "3rd Party Equipment Handling +1", dt: "6 Sept 2026", a: "$188.02" },
    { n: "INV-14252", d: "Apron Parking Fee", dt: "1 Sept 2026", a: "$5,375.00" },
    { n: "INV-14251", d: "Apron Parking Fee", dt: "1 Sept 2026", a: "$5,375.00" },
    { n: "INV-14233", d: "DNMM", dt: "30 Aug 2026", a: "$77.89" },
    { n: "INV-14139", d: "Apron Parking Fee", dt: "3 Aug 2026", a: "$5,375.00", od: "5d overdue" },
    { n: "INV-14138", d: "Apron Parking Fee", dt: "3 Aug 2026", a: "$5,375.00", od: "5d overdue" },
    { n: "INV-14140", d: "Apron Parking Fee", dt: "3 Aug 2026", a: "$5,375.00", od: "5d overdue" },
    { n: "INV-14120", d: "Towing Services", dt: "30 Jul 2026", a: "$268.75", od: "9d overdue" },
    { n: "INV-13991", d: "Apron Parking Fee", dt: "1 Jul 2026", a: "$5,375.00", od: "38d overdue" },
    { n: "INV-13993", d: "Apron Parking Fee", dt: "1 Jul 2026", a: "$5,375.00", od: "38d overdue" },
    { n: "INV-13992", d: "Apron Parking Fee", dt: "1 Jul 2026", a: "$5,375.00", od: "38d overdue" },
    { n: "INV-13948", d: "Main-Wheel Tyre Building", dt: "28 Jun 2026", a: "$645.00", od: "41d overdue" },
  ];

  const navItems = [
    { l: "Overview", i: Ico.grid }, { l: "Invoices", i: Ico.doc },
    { l: "Aircraft", i: Ico.plane }, { l: "Requests", i: Ico.send },
    { l: "New Request", i: Ico.plusC, indent: true }, { l: "Account", i: Ico.user },
  ];

  const activity = [
    { t: "LOS (EAN) → Abuja", r: "5N-DSN", d: "23 Aug 2026", a: "$640.00", s: "Requested", tone: "warning", ic: Ico.plane,
      det: {
        dep: { t: "Departed LOS (EAN) (DNMM)", to: "To Abuja (DNAA)", fbo: "Nnamdi Azikiwe", m: "1 passenger · 1 crew · Domestic", dt: "23 Aug 2026 · 13:51" },
        arr: { t: "Arrived in Abuja (DNAA)", to: "From LOS (EAN) (DNMM)", fbo: "EAN Hangar", m: "1 passenger · 1 crew · Domestic", dt: "25 Aug 2026 · 01:52" },
        pax: ["Dennis Jay"], crew: ["Jenny Kay"],
        svc: [["ABV Handling", "$300.00"], ["Hangarage", "$300.00"], ["Dishes", "$20.00"], ["Fridge Storage", "$20.00"]],
        total: "$640.00",
      } },
    { t: "ABV Handling +4", r: "5N-DSN", d: "19 Aug 2026", a: "$2,050.00", s: "Requested", tone: "warning", ic: Ico.screen,
      det: {
        dep: { t: "Departed LOS (EAN) (DNMM)", to: "To Abuja (DNAA)", fbo: "Nnamdi Azikiwe", m: "3 passengers · 2 crew · Domestic", dt: "19 Aug 2026 · 09:20" },
        arr: { t: "Arrived in Abuja (DNAA)", to: "From LOS (EAN) (DNMM)", fbo: "EAN Hangar", m: "3 passengers · 2 crew · Domestic", dt: "19 Aug 2026 · 11:05" },
        pax: ["Dennis Jay", "Marcus Obi", "Ruth Adeyemi"], crew: ["Jenny Kay", "Paul Eze"],
        svc: [["ABV Handling", "$300.00"], ["Hangarage", "$600.00"], ["Catering", "$450.00"], ["Ground Power Unit", "$400.00"], ["Lavatory Service", "$300.00"]],
        total: "$2,050.00",
      } },
    { t: "GroundEquipService +1", r: "N104DA", d: "7 Sept 2026", a: "$188.02", s: "Unpaid", tone: "danger", ic: Ico.screen,
      det: {
        dep: { t: "Departed LOS (EAN) (DNMM)", to: "To Port Harcourt (DNPO)", fbo: "EAN Jet Centre", m: "2 passengers · 2 crew · Domestic", dt: "7 Sept 2026 · 06:45" },
        arr: { t: "Arrived in Port Harcourt (DNPO)", to: "From LOS (EAN) (DNMM)", fbo: "Omagwa Apron", m: "2 passengers · 2 crew · Domestic", dt: "7 Sept 2026 · 08:10" },
        pax: ["Ibrahim Sule", "Grace Oduya"], crew: ["Jenny Kay", "Paul Eze"],
        svc: [["Ground Equipment Service", "$120.00"], ["Apron Handling", "$68.02"]],
        total: "$188.02",
      } },
    { t: "LOS (EAN) → LOS (GAT) → LOS (EAN)", r: "N605DA", d: "7 Sept 2026", a: "", s: "Completed", tone: "success", ic: Ico.plane,
      det: {
        dep: { t: "Departed LOS (EAN) (DNMM)", to: "To LOS (GAT) (DNMM)", fbo: "EAN Jet Centre", m: "1 passenger · 2 crew · Local", dt: "7 Sept 2026 · 14:30" },
        arr: { t: "Returned to LOS (EAN) (DNMM)", to: "From LOS (GAT) (DNMM)", fbo: "EAN Hangar", m: "1 passenger · 2 crew · Local", dt: "7 Sept 2026 · 16:15" },
        pax: ["Dr. Apex Motive"], crew: ["Jenny Kay", "Paul Eze"],
        svc: [["Positioning Flight", "Included"], ["Hangarage", "Included"]],
        total: "Settled",
      } },
    { t: "LOS (EAN) → LOS (GAT) → LOS (EAN)", r: "N605DA", d: "3 Sept 2026", a: "", s: "Completed", tone: "success", ic: Ico.plane,
      det: {
        dep: { t: "Departed LOS (EAN) (DNMM)", to: "To LOS (GAT) (DNMM)", fbo: "EAN Jet Centre", m: "2 passengers · 2 crew · Local", dt: "3 Sept 2026 · 10:05" },
        arr: { t: "Returned to LOS (EAN) (DNMM)", to: "From LOS (GAT) (DNMM)", fbo: "EAN Hangar", m: "2 passengers · 2 crew · Local", dt: "3 Sept 2026 · 12:40" },
        pax: ["Dr. Apex Motive", "Dennis Jay"], crew: ["Jenny Kay", "Paul Eze"],
        svc: [["Positioning Flight", "Included"], ["Hangarage", "Included"]],
        total: "Settled",
      } },
  ];

  const invoices = [
    { n: "14260", d: "6 Sept 2026", a: "$188.02" },
    { n: "14252", d: "1 Sept 2026", a: "$5,375.00" },
    { n: "14251", d: "1 Sept 2026", a: "$5,375.00" },
  ];

  const statements = [
    { m: "September 2026", c: "3 invoices", a: "$10,938.02" },
    { m: "August 2026", c: "4 invoices", a: "$16,202.89" },
  ];

  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=Rosario:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Fustat:wght@300;400;500;600;700;800&display=swap');
    * { -webkit-font-smoothing: antialiased; box-sizing: border-box; }

    /* ── Nav ── */
    .nav-i { display:flex; align-items:center; gap:14px; border-radius:10px; cursor:pointer;
      margin-bottom:3px; position:relative; transition: background .4s cubic-bezier(.25,.1,.25,1), padding-left .4s cubic-bezier(.25,.1,.25,1); }
    .nav-i:hover { background: rgba(247,230,202,.07); }
    .nav-i.on { background: rgba(247,230,202,.11); }
    .nav-i .dot { width:5px; height:5px; border-radius:50%; background:${T.aurum};
      margin-left:auto; opacity:0; transform:scale(.4); transition: all .4s cubic-bezier(.34,1.56,.64,1); }
    .nav-i.on .dot { opacity:1; transform:scale(1); }
    .nav-i svg { transition: transform .4s cubic-bezier(.25,.1,.25,1); }
    .nav-i:hover svg { transform: translateX(2px); }

    /* ── Buttons ── */
    .btn-p { display:flex; align-items:center; justify-content:center; gap:10px;
      font-family:${ros}; font-weight:600; letter-spacing:.02em; background:${T.cabernet};
      color:${T.skyway}; border:none; border-radius:8px; cursor:pointer;
      box-shadow: 0 2px 8px rgba(100,18,36,.18);
      transition: background .4s cubic-bezier(.25,.1,.25,1), box-shadow .4s cubic-bezier(.25,.1,.25,1), transform .4s cubic-bezier(.25,.1,.25,1); }
    .btn-p:hover { background:${T.cabernetDark}; box-shadow: 0 8px 24px rgba(100,18,36,.30); transform: translateY(-2px); }
    .btn-p:active { transform: translateY(0); box-shadow: 0 2px 8px rgba(100,18,36,.22); }

    .btn-gold { display:flex; align-items:center; justify-content:center; gap:10px; width:100%;
      font-family:${ros}; font-size:15px; font-weight:600; letter-spacing:.03em; padding:17px 32px;
      background:${T.skyway}; color:${T.cabernetDeep}; border:none; border-radius:8px; cursor:pointer;
      box-shadow: 0 2px 10px rgba(0,0,0,.18);
      transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .btn-gold:hover { background:#FFF3DC; box-shadow: 0 10px 28px rgba(0,0,0,.28); transform: translateY(-2px); }
    .btn-gold:active { transform: translateY(0); }

    /* ── Pay Now: travelling light ── */
    .pay-wrap { position:relative; margin-top:auto; }
    .pay-halo { position:absolute; inset:-4px; pointer-events:none; overflow:visible; z-index:1; }
    .pay-halo rect { fill:none; stroke:${T.skyway}; stroke-width:1.6; stroke-linecap:round;
      stroke-dasharray: 16 84;
      filter: drop-shadow(0 0 5px rgba(247,230,202,.95)) drop-shadow(0 0 12px rgba(195,166,109,.55));
      animation: travel 9s cubic-bezier(.4,0,.6,1) infinite; }
    .pay-halo rect.t2 { stroke:${T.aurum}; stroke-width:1.2; stroke-dasharray: 9 91;
      animation: travel 9s cubic-bezier(.4,0,.6,1) infinite; animation-delay: .18s; opacity:.75; }
    @keyframes travel {
      0%   { stroke-dashoffset: 100; opacity: 0; }
      4%   { opacity: 1; }
      26%  { stroke-dashoffset: 0;   opacity: 1; }
      31%  { opacity: 0; }
      100% { stroke-dashoffset: 0;   opacity: 0; }
    }
    .pay-wrap .btn-gold { animation: breathe 9s cubic-bezier(.4,0,.6,1) infinite; }
    @keyframes breathe {
      0%, 100% { box-shadow: 0 2px 10px rgba(0,0,0,.18); }
      14%      { box-shadow: 0 2px 10px rgba(0,0,0,.18), 0 0 0 3px rgba(247,230,202,.10); }
      26%      { box-shadow: 0 4px 16px rgba(0,0,0,.22), 0 0 0 7px rgba(247,230,202,.045); }
      40%      { box-shadow: 0 2px 10px rgba(0,0,0,.18), 0 0 0 10px rgba(247,230,202,0); }
    }
    .pay-wrap:hover .pay-halo rect, .pay-wrap:hover .btn-gold { animation-play-state: paused; }
    .pay-wrap:hover .pay-halo rect { opacity: 0; transition: opacity .4s ease; }

    /* ── Link button ── */
    .lnk { display:flex; align-items:center; gap:7px; font-family:${ros}; font-size:14px; font-weight:600;
      color:${T.cabernet}; background:transparent; border:none; cursor:pointer; padding:6px 0; }
    .lnk-a { transition: transform .4s cubic-bezier(.25,.1,.25,1); }
    .lnk:hover .lnk-a { transform: translateX(5px); }

    /* ── Cards ── */
    .card { background:${T.white}; border:1px solid ${T.hairline}; border-radius:14px;
      transition: border-color .4s cubic-bezier(.25,.1,.25,1), box-shadow .4s cubic-bezier(.25,.1,.25,1), transform .4s cubic-bezier(.25,.1,.25,1); }

    /* Interactive summary cards */
    .card-i { position:relative; overflow:hidden; cursor:pointer; }
    .card-i:before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px;
      background: linear-gradient(180deg, ${T.aurum}, rgba(195,166,109,.35));
      transform: scaleY(0); transform-origin:center;
      transition: transform .5s cubic-bezier(.25,.1,.25,1); z-index:2; }
    .card-i:after { content:''; position:absolute; right:-40px; top:-40px; width:170px; height:170px;
      border-radius:50%; pointer-events:none; opacity:0;
      background: radial-gradient(circle, rgba(195,166,109,.20) 0%, transparent 68%);
      transition: opacity .5s cubic-bezier(.25,.1,.25,1), transform .6s cubic-bezier(.25,.1,.25,1);
      transform: scale(.7); }
    .card-i:hover { border-color:${T.aurum}; background:#FFFDF9;
      box-shadow: 0 14px 34px rgba(100,18,36,.13), 0 2px 6px rgba(100,18,36,.06);
      transform: translateY(-5px); }
    .card-i:hover:before { transform: scaleY(1); }
    .card-i:hover:after { opacity:1; transform: scale(1); }
    .card-i .ttl { transition: color .4s cubic-bezier(.25,.1,.25,1), letter-spacing .4s cubic-bezier(.25,.1,.25,1); }
    .card-i:hover .ttl { color:${T.cabernet}; letter-spacing:.14em; }
    .card-i .fig { transition: transform .5s cubic-bezier(.25,.1,.25,1); }
    .card-i:hover .fig { transform: translateX(4px); }

    /* ── Dark hero card ── */
    .hero { position:relative; overflow:hidden; border-radius:14px; background:${T.cabernetDark};
      box-shadow: 0 14px 40px rgba(42,7,15,.30), 0 2px 8px rgba(42,7,15,.20);
      transition: box-shadow .5s cubic-bezier(.25,.1,.25,1), transform .5s cubic-bezier(.25,.1,.25,1); }
    .hero:hover { box-shadow: 0 20px 56px rgba(42,7,15,.38), 0 3px 10px rgba(42,7,15,.24); transform: translateY(-3px); }
    .hero-arcs { position:absolute; right:-70px; top:-70px; width:300px; height:300px; opacity:.16; pointer-events:none;
      transition: transform 1.2s cubic-bezier(.25,.1,.25,1), opacity .6s ease; }
    .hero:hover .hero-arcs { transform: rotate(12deg) scale(1.06); opacity:.22; }
    .hero-sheen { position:absolute; inset:0; pointer-events:none;
      background: radial-gradient(120% 90% at 12% 0%, rgba(247,230,202,.10) 0%, transparent 55%); }

    /* ── Rows ── */
    .row { display:flex; align-items:center; gap:18px; cursor:pointer; position:relative;
      transition: background .4s cubic-bezier(.25,.1,.25,1); }
    .row:before { content:''; position:absolute; left:0; top:0; bottom:0; width:2px;
      background:${T.aurum}; transform:scaleY(0); transform-origin:center;
      transition: transform .4s cubic-bezier(.25,.1,.25,1); }
    .row:hover { background:#FCFAF6; }
    .row:hover:before { transform:scaleY(1); }
    .row .tile { transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .row:hover .tile { background:${T.canvasDeep}; border-color:${T.skywayDark}; transform: scale(1.05); }
    .row .chev { transition: transform .4s cubic-bezier(.25,.1,.25,1); }
    .row:hover .chev { transform: translateY(2px); }

    /* ── Contact pills ── */
    .pill { font-family:${ros}; font-size:14px; font-weight:600; padding:8px 18px; border-radius:100px;
      cursor:pointer; border:1px solid ${T.hairline}; background:transparent; color:${T.textSecondary};
      transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .pill:hover { border-color:${T.skywayDark}; background:${T.canvasDeep}; color:${T.cabernet}; }
    .pill.on { background:${T.cabernet}; color:${T.skyway}; border-color:${T.cabernet};
      box-shadow: 0 2px 8px rgba(100,18,36,.20); }

    /* ── Icon buttons ── */
    .ib { width:46px; height:46px; border-radius:10px; border:1px solid ${T.hairline};
      display:flex; align-items:center; justify-content:center; cursor:pointer; background:${T.white};
      transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .ib:hover { background:${T.cabernet}; border-color:${T.cabernet}; transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(100,18,36,.22); }
    .ib:hover svg { stroke:${T.skyway}; }
    .ib svg { transition: stroke .4s ease; }

    /* ── Statement arrow ── */
    .sa { width:38px; height:38px; border-radius:8px; border:1px solid ${T.hairline};
      display:flex; align-items:center; justify-content:center; flex-shrink:0;
      transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .row:hover .sa { background:${T.cabernet}; border-color:${T.cabernet}; }
    .row:hover .sa svg { stroke:${T.skyway}; transform: translate(2px,-2px); }
    .sa svg { transition: all .4s cubic-bezier(.25,.1,.25,1); }

    /* ── Avatar ring ── */
    .av { border-radius:50%; display:flex; align-items:center; justify-content:center;
      font-family:${ros}; font-weight:600; background:transparent;
      transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .av-l { border:1.5px solid ${T.aurum}; color:${T.aurum}; }
    .av-d { border:1.5px solid rgba(100,18,36,.28); color:${T.cabernet}; }
    .prof:hover .av-d { border-color:${T.cabernet}; background:${T.cabernetTint}; }
    .prof { display:flex; align-items:center; gap:11px; cursor:pointer; padding:6px 10px;
      border-radius:100px; transition: background .4s cubic-bezier(.25,.1,.25,1); }
    .prof:hover { background: rgba(100,18,36,.05); }
    .prof .pc { transition: transform .4s cubic-bezier(.25,.1,.25,1); }
    .prof:hover .pc { transform: translateY(2px); }

    /* ── Entrance ── */
    /* ══ Expandable row detail ══ */
    .exp { display:grid; grid-template-rows:0fr;
      transition: grid-template-rows .55s cubic-bezier(.25,.1,.25,1); }
    .exp.on { grid-template-rows:1fr; }
    .exp > .expw { overflow:hidden; }
    .expi { background:${T.canvasDeep}; border-top:1px solid ${T.hairline}; padding:26px 26px 28px;
      opacity:0; transition: opacity .45s cubic-bezier(.25,.1,.25,1) .1s; }
    .exp.on .expi { opacity:1; }
    .row.open { background:#FCFAF6; }
    .row.open:before { transform:scaleY(1); }
    .row.open .chev { transform: rotate(180deg); }
    .row .chev { transition: transform .5s cubic-bezier(.25,.1,.25,1); }

    .dlab { font-family:${ros}; font-size:12px; font-weight:600; letter-spacing:.12em;
      text-transform:uppercase; color:${T.textMuted}; }
    .paper-s { background:${T.white}; border:1px solid ${T.hairline}; border-radius:12px; }
    .btn-edit { display:flex; align-items:center; gap:8px; font-family:${ros}; font-size:13px; font-weight:600;
      color:${T.cabernet}; background:${T.white}; border:1px solid ${T.hairline}; cursor:pointer;
      padding:8px 18px; border-radius:100px; transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .btn-edit:hover { border-color:${T.cabernet}; background:${T.cabernet}; color:${T.skyway};
      box-shadow: 0 6px 16px rgba(100,18,36,.20); transform: translateY(-2px); }
    .btn-edit:hover svg { stroke:${T.skyway}; }
    .btn-edit svg { transition: stroke .4s ease; }
    .srow { display:flex; align-items:center; gap:12px; padding:11px 0;
      border-bottom:1px solid ${T.hairline}; }
    .srow:last-of-type { border-bottom:none; }

    /* ══ Statement modal ══ */
    @keyframes modalIn { from { opacity:0; transform: translateY(18px) scale(.975); } to { opacity:1; transform:none; } }
    .mwrap { position:fixed; inset:0; z-index:91; display:flex; align-items:center; justify-content:center;
      padding:44px 24px; pointer-events:none; }
    .modal { width:100%; max-width:760px; max-height:100%; background:${T.canvas}; border-radius:18px;
      display:flex; flex-direction:column; overflow:hidden; pointer-events:auto;
      box-shadow: 0 32px 80px rgba(42,7,15,.34), 0 4px 16px rgba(42,7,15,.20);
      animation: modalIn .5s cubic-bezier(.22,.9,.28,1) both; }

    .mhead { display:flex; align-items:center; justify-content:space-between; gap:20px; flex-shrink:0;
      padding:22px 28px; border-bottom:1px solid ${T.hairline}; background:${T.white}; }

    .sel { position:relative; }
    .sel select { appearance:none; font-family:${ros}; font-size:15px; font-weight:600; color:${T.afterburn};
      background:${T.white}; border:1px solid ${T.hairline}; border-radius:8px;
      padding:11px 42px 11px 18px; cursor:pointer; outline:none;
      transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .sel select:hover { border-color:${T.aurum}; box-shadow: 0 4px 12px rgba(100,18,36,.07); }
    .sel select:focus-visible { border-color:${T.cabernet}; outline:2px solid ${T.aurum}; outline-offset:2px; }
    .sel .cv { position:absolute; right:15px; top:50%; transform:translateY(-50%); pointer-events:none; }

    .mclose { width:42px; height:42px; border-radius:10px; border:1px solid ${T.hairline}; background:${T.white};
      display:flex; align-items:center; justify-content:center; cursor:pointer; flex-shrink:0;
      transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .mclose:hover { background:${T.cabernet}; border-color:${T.cabernet}; transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(100,18,36,.22); }
    .mclose:hover svg { stroke:${T.skyway}; transform: rotate(90deg); }
    .mclose svg { transition: transform .45s cubic-bezier(.34,1.56,.64,1), stroke .4s ease; }

    .mbody { flex:1; overflow-y:auto; padding:28px; }
    .mbody::-webkit-scrollbar { width:9px; }
    .mbody::-webkit-scrollbar-thumb { background:${T.skywayDark}; border-radius:100px; border:3px solid ${T.canvas}; }
    .mbody::-webkit-scrollbar-track { background:transparent; }

    .mfoot { flex-shrink:0; background:${T.white}; border-top:1px solid ${T.hairline};
      padding:18px 28px; display:flex; justify-content:flex-end; align-items:center; gap:18px;
      box-shadow: 0 -6px 24px rgba(100,18,36,.05); }

    .strow { display:grid; grid-template-columns: 120px 1fr 130px 110px; align-items:center; gap:16px;
      padding:18px 12px; margin:0 -12px; border-radius:9px; position:relative;
      transition: background .35s cubic-bezier(.25,.1,.25,1); }
    .strow:before { content:''; position:absolute; left:0; top:8px; bottom:8px; width:2px; background:${T.aurum};
      border-radius:2px; transform:scaleY(0); transition: transform .4s cubic-bezier(.25,.1,.25,1); }
    .strow:hover { background:#FDFBF7; }
    .strow:hover:before { transform:scaleY(1); }

    @keyframes rise { from { opacity:0; transform: translateY(14px); } to { opacity:1; transform:none; } }
    .in { animation: rise .7s cubic-bezier(.25,.1,.25,1) both; }

    /* ══ Payment drawer ══ */
    @keyframes scrimIn { from { opacity:0 } to { opacity:1 } }
    @keyframes drawIn { from { transform: translateX(100%) } to { transform:none } }
    .scrim { position:fixed; inset:0; background:rgba(42,7,15,.46); backdrop-filter:blur(5px);
      z-index:90; animation: scrimIn .45s cubic-bezier(.25,.1,.25,1) both; }
    .drawer { position:fixed; top:0; right:0; bottom:0; width:600px; max-width:94vw; background:${T.canvas};
      z-index:91; display:flex; flex-direction:column;
      box-shadow: -24px 0 70px rgba(42,7,15,.30), -2px 0 12px rgba(42,7,15,.16);
      animation: drawIn .55s cubic-bezier(.22,.9,.28,1) both; }

    .dhead { position:relative; overflow:hidden; background:${T.cabernetDark}; padding:26px 36px 30px; flex-shrink:0; }
    .dhead-arcs { position:absolute; right:-90px; top:-120px; width:320px; height:320px; opacity:.15;
      pointer-events:none; animation: drift 30s linear infinite; }
    @keyframes drift { 0%{transform:rotate(0)} 100%{transform:rotate(360deg)} }
    .dhead-sheen { position:absolute; inset:0; pointer-events:none;
      background: radial-gradient(120% 85% at 8% 0%, rgba(247,230,202,.11) 0%, transparent 58%); }

    .dclose { display:flex; align-items:center; gap:9px; background:transparent; border:none; cursor:pointer;
      font-family:${ros}; font-size:14px; font-weight:600; color:rgba(247,230,202,.72); padding:8px 14px 8px 10px;
      border-radius:100px; transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .dclose:hover { background:rgba(247,230,202,.10); color:${T.skyway}; }
    .dclose svg { transition: transform .45s cubic-bezier(.34,1.56,.64,1); }
    .dclose:hover svg { transform: rotate(90deg); }

    .ddl { display:flex; align-items:center; gap:9px; cursor:pointer;
      font-family:${ros}; font-size:14px; font-weight:600; color:${T.skyway};
      background:rgba(247,230,202,.08); border:1px solid rgba(195,166,109,.32);
      padding:9px 18px; border-radius:100px; transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .ddl:hover { background:${T.skyway}; color:${T.cabernetDeep}; border-color:${T.skyway};
      box-shadow: 0 6px 18px rgba(0,0,0,.24); transform: translateY(-2px); }
    .ddl:hover svg { stroke:${T.cabernetDeep}; }
    .ddl:active { transform: translateY(0); }
    .dla { transition: transform .45s cubic-bezier(.34,1.56,.64,1), stroke .4s ease; }
    .ddl:hover .dla { transform: translateY(3px); }

    .dbody { flex:1; overflow-y:auto; padding:28px 36px 32px; }
    .dbody::-webkit-scrollbar { width:9px; }
    .dbody::-webkit-scrollbar-thumb { background:${T.skywayDark}; border-radius:100px;
      border:3px solid ${T.canvas}; }
    .dbody::-webkit-scrollbar-track { background:transparent; }

    .paper { background:${T.white}; border:1px solid ${T.hairline}; border-radius:16px; padding:38px 36px 32px; }

    .irow { display:flex; align-items:flex-start; justify-content:space-between; gap:22px;
      padding:16px 12px; margin:0 -12px; border-radius:9px; position:relative; cursor:default;
      transition: background .35s cubic-bezier(.25,.1,.25,1); }
    .irow:before { content:''; position:absolute; left:0; top:8px; bottom:8px; width:2px; background:${T.aurum};
      border-radius:2px; transform:scaleY(0); transition: transform .4s cubic-bezier(.25,.1,.25,1); }
    .irow:hover { background:#FDFBF7; }
    .irow:hover:before { transform:scaleY(1); }

    .dfoot { flex-shrink:0; background:${T.white}; border-top:1px solid ${T.hairline};
      padding:22px 36px 26px; box-shadow: 0 -6px 24px rgba(100,18,36,.06); }

    .cmark { height:30px; padding:0 11px; border-radius:6px; border:1px solid ${T.hairline};
      background:${T.white}; display:flex; align-items:center; justify-content:center;
      font-family:${ros}; font-size:10px; font-weight:700; letter-spacing:.04em; color:${T.textSecondary};
      transition: all .35s cubic-bezier(.25,.1,.25,1); }
    .cmark:hover { border-color:${T.skywayDark}; }

    @media (prefers-reduced-motion: reduce) { * { animation:none !important; transition:none !important; } }
  `;

  return (
    <div style={{ display: "flex", background: T.canvas, minHeight: "100vh", fontFamily: fus }}>
      <style>{CSS}</style>

      {/* ═══════ SIDEBAR ═══════ */}
      <aside style={{ width: 268, background: T.cabernetDark, display: "flex", flexDirection: "column", padding: "32px 0 28px", flexShrink: 0, position: "sticky", top: 0, height: "100vh" }}>
        <div style={{ padding: "0 28px 26px" }}>
          <div style={{ fontFamily: ros, fontSize: 31, fontWeight: 700, color: T.skyway, letterSpacing: "-0.02em", lineHeight: 1 }}>ean</div>
          <div style={{ fontFamily: ros, fontSize: 10, fontWeight: 500, color: T.aurum, letterSpacing: "0.38em", marginTop: 5 }}>AVIATION</div>
        </div>

        <div style={{ height: 1, background: "linear-gradient(90deg, rgba(195,166,109,.35), rgba(247,230,202,.06))", margin: "0 28px 22px" }} />

        <nav style={{ flex: 1, padding: "0 16px" }}>
          {navItems.map(n => {
            const on = nav === n.l;
            return (
              <div key={n.l} className={`nav-i${on ? " on" : ""}`} onClick={() => setNav(n.l)}
                style={{ padding: n.indent ? "13px 16px 13px 32px" : "13px 16px" }}>
                <Icon d={n.i} size={19} color={T.skyway} sw={on ? 2 : 1.5} />
                <span style={{ fontFamily: ros, fontSize: 15, fontWeight: on ? 600 : 400, color: T.skyway, opacity: on ? 1 : 0.70 }}>{n.l}</span>
                <span className="dot" />
              </div>
            );
          })}
        </nav>

        <div style={{ margin: "22px 20px 0", padding: "20px 8px 0", borderTop: "1px solid rgba(247,230,202,.09)", display: "flex", alignItems: "center", gap: 13 }}>
          <div className="av av-l" style={{ width: 42, height: 42, fontSize: 14, flexShrink: 0 }}>AM</div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: ros, fontSize: 15, fontWeight: 600, color: T.skyway, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Dr. Apex Motive</div>
            <div style={{ fontFamily: fus, fontSize: 13, color: "rgba(247,230,202,.48)" }}>Kura Aviation · KUR001</div>
          </div>
        </div>
      </aside>

      {/* ═══════ MAIN ═══════ */}
      <main style={{ flex: 1, padding: "34px 44px 64px", minWidth: 0 }}>

        {/* Top bar */}
        <div className="in" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 16, marginBottom: 38 }}>
          <button className="btn-p" style={{ fontSize: 14, padding: "13px 28px" }}>
            <Icon d={Ico.plus} size={17} color={T.skyway} sw={2} /> New Request
          </button>
          <div className="prof">
            <div className="av av-d" style={{ width: 40, height: 40, fontSize: 14 }}>AM</div>
            <span style={{ fontFamily: ros, fontSize: 15, fontWeight: 600, color: T.afterburn }}>Dr. Apex Motive</span>
            <Icon cls="pc" d={Ico.chevD} size={17} color={T.textMuted} />
          </div>
        </div>

        {/* Greeting */}
        <div className="in" style={{ marginBottom: 34, animationDelay: ".05s" }}>
          <h1 style={{ fontFamily: ros, fontSize: 42, fontWeight: 700, color: T.afterburn, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.08 }}>Good afternoon, Dr. Apex</h1>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 13 }}>
            <span style={{ fontFamily: fus, fontSize: 16, color: T.textSecondary }}>Kura Aviation · KUR001</span>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: T.aurum }} />
            <span style={{ fontFamily: fus, fontSize: 16, color: T.textSecondary }}>8 movements this month</span>
          </div>
        </div>

        {/* ── SUMMARY ROW ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gap: 20, marginBottom: 44, alignItems: "stretch" }}>

          {/* Balance Due — dark hero */}
          <div className="hero in" style={{ padding: 32, display: "flex", flexDirection: "column", animationDelay: ".1s" }}>
            <svg className="hero-arcs" viewBox="0 0 300 300" fill="none">
              {[80, 108, 136, 164, 192].map(r => (
                <circle key={r} cx="150" cy="150" r={r} stroke={T.aurum} strokeWidth="1" strokeDasharray="3 9" />
              ))}
            </svg>
            <div className="hero-sheen" />

            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: T.aurum, boxShadow: `0 0 10px ${T.aurum}` }} />
                <span style={{ fontFamily: ros, fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.aurum }}>Balance Due</span>
              </div>

              <div style={{ fontFamily: ros, fontSize: 48, fontWeight: 700, color: T.skyway, letterSpacing: "-0.035em", lineHeight: 1, fontVariantNumeric: "tabular-nums", marginBottom: 22 }}>
                $44,179.66
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E8756A", flexShrink: 0 }} />
                  <span style={{ fontFamily: fus, fontSize: 15, color: T.skyway, fontVariantNumeric: "tabular-nums" }}>$33,163.75</span>
                  <span style={{ fontFamily: fus, fontSize: 15, color: "rgba(247,230,202,.55)" }}>overdue</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.aurum, flexShrink: 0 }} />
                  <span style={{ fontFamily: fus, fontSize: 15, color: T.skyway, fontVariantNumeric: "tabular-nums" }}>$11,015.91</span>
                  <span style={{ fontFamily: fus, fontSize: 15, color: "rgba(247,230,202,.55)" }}>due 29 Sept</span>
                </div>
              </div>
            </div>

            <div className="pay-wrap">
              <svg className="pay-halo" width="100%" height="100%" preserveAspectRatio="none">
                <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="10" pathLength="100" />
                <rect className="t2" x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="10" pathLength="100" />
              </svg>
              <button className="btn-gold" style={{ position: "relative", zIndex: 2 }} onClick={() => setPayOpen(true)}>
                <Icon d={Ico.card} size={18} color={T.cabernetDeep} /> Pay Now
              </button>
            </div>
          </div>

          {/* 2026 Summary */}
          <div className="card card-i in" style={{ padding: 30, display: "flex", flexDirection: "column", animationDelay: ".15s" }}>
            <div className="ttl" style={{ fontFamily: ros, fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.textSecondary, marginBottom: 24 }}>2026 Summary</div>

            <div className="fig" style={{ marginBottom: 22 }}>
              <div style={{ fontFamily: ros, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textMuted, marginBottom: 9 }}>Spent Year to Date</div>
              <div style={{ fontFamily: ros, fontSize: 31, fontWeight: 700, color: T.afterburn, letterSpacing: "-0.025em", lineHeight: 1.05, fontVariantNumeric: "tabular-nums" }}>$130,965.24</div>
              <div style={{ fontFamily: fus, fontSize: 15, color: T.textMuted, marginTop: 7, fontVariantNumeric: "tabular-nums" }}>plus ₦197,499.94</div>
            </div>

            <div style={{ height: 1, background: `linear-gradient(90deg, ${T.aurum}44, ${T.hairline})`, marginBottom: 22 }} />

            <div>
              <div style={{ fontFamily: ros, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textMuted, marginBottom: 9 }}>Movements</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <span style={{ fontFamily: ros, fontSize: 31, fontWeight: 700, color: T.afterburn, letterSpacing: "-0.025em", fontVariantNumeric: "tabular-nums" }}>130</span>
                <span style={{ fontFamily: fus, fontSize: 15, color: T.textMuted }}>this year</span>
              </div>
            </div>
          </div>

          {/* Client Relations */}
          <div className="card card-i in" style={{ padding: 30, display: "flex", flexDirection: "column", animationDelay: ".2s" }}>
            <div className="ttl" style={{ fontFamily: ros, fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.textSecondary, marginBottom: 20 }}>Client Relations</div>

            <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 24 }}>
              {["Tosin", "Okey", "Finance", "Ann"].map(c => (
                <div key={c} className={`pill${contact === c ? " on" : ""}`} onClick={() => setContact(c)}>{c}</div>
              ))}
            </div>

            <div style={{ marginTop: "auto" }}>
              <div style={{ fontFamily: fus, fontSize: 15, color: T.textSecondary, marginBottom: 16, lineHeight: 1.5 }}>
                Reach <span style={{ fontWeight: 600, color: T.cabernet }}>{contact}</span> for lounge and complaints
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {[Ico.phone, Ico.chat, Ico.mail].map((ic, i) => (
                  <div key={i} className="ib"><Icon d={ic} size={19} color={T.cabernet} /></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── TWO COLUMN ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 26 }}>

          {/* Recent Activity */}
          <div className="in" style={{ animationDelay: ".25s" }}>
            <SectionHead title="Recent Activity" sub="Flight and service requests" action="View all" />
            <div className="card" style={{ overflow: "hidden" }}>
              {activity.map((a, i) => {
                const open = openRow === i;
                const D = a.det;
                return (
                  <div key={i} style={{ borderBottom: i < activity.length - 1 ? `1px solid ${T.hairline}` : "none" }}>
                    <div className={`row${open ? " open" : ""}`} onClick={() => setOpenRow(open ? null : i)} style={{ padding: "22px 26px" }}>
                      <div className="tile" style={{ width: 46, height: 46, borderRadius: 10, background: T.white, border: `1px solid ${T.hairline}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon d={a.ic} size={20} color={T.cabernet} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontFamily: ros, fontSize: 16, fontWeight: 600, color: T.afterburn, marginBottom: 5, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.t}</div>
                        <div style={{ fontFamily: fus, fontSize: 14, color: T.textMuted }}>{a.r} · {a.d}</div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 18, flexShrink: 0 }}>
                        {a.a && <span style={{ fontFamily: ros, fontSize: 17, fontWeight: 600, color: T.afterburn, fontVariantNumeric: "tabular-nums" }}>{a.a}</span>}
                        <Badge tone={a.tone}>{a.s}</Badge>
                        <Icon cls="chev" d={Ico.chevD} size={18} color={T.textMuted} />
                      </div>
                    </div>

                    {/* Expanded detail */}
                    <div className={`exp${open ? " on" : ""}`}>
                      <div className="expw">
                        <div className="expi">

                          {/* Schedule & Route */}
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                            <span className="dlab">Schedule &amp; Route</span>
                            <button className="btn-edit" onClick={e => e.stopPropagation()}>
                              <Icon d={Ico.pencil} size={14} color={T.cabernet} /> Edit
                            </button>
                          </div>

                          <div className="paper-s" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginBottom: 16 }}>
                            {[
                              { k: "Departure", ic: Ico.takeoff, v: D.dep },
                              { k: "Arrival", ic: Ico.landing, v: D.arr },
                            ].map((leg, j) => (
                              <div key={leg.k} style={{ padding: "22px 24px", borderLeft: j === 1 ? `1px solid ${T.hairline}` : "none" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 14 }}>
                                  <Icon d={leg.ic} size={17} color={T.cabernet} />
                                  <span style={{ fontFamily: ros, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.cabernet }}>{leg.k}</span>
                                </div>
                                <div style={{ fontFamily: ros, fontSize: 17, fontWeight: 600, color: T.afterburn, letterSpacing: "-0.01em", marginBottom: 7 }}>{leg.v.t}</div>
                                <div style={{ fontFamily: fus, fontSize: 14.5, color: T.textSecondary, lineHeight: 1.6 }}>{leg.v.to}</div>
                                <div style={{ fontFamily: fus, fontSize: 14.5, color: T.textSecondary, lineHeight: 1.6, marginBottom: 14 }}>{leg.v.fbo}</div>
                                <div style={{ fontFamily: fus, fontSize: 13.5, color: T.textMuted, marginBottom: 5 }}>{leg.v.m}</div>
                                <div style={{ fontFamily: fus, fontSize: 13.5, color: T.textMuted, fontVariantNumeric: "tabular-nums" }}>{leg.v.dt}</div>
                              </div>
                            ))}
                          </div>

                          {/* Passengers & Crew */}
                          <div className="paper-s" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginBottom: 16 }}>
                            {[
                              { k: "Passengers", ic: Ico.users, list: D.pax },
                              { k: "Crew", ic: Ico.shield, list: D.crew },
                            ].map((g, j) => (
                              <div key={g.k} style={{ padding: "20px 24px", borderLeft: j === 1 ? `1px solid ${T.hairline}` : "none" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
                                  <Icon d={g.ic} size={16} color={T.cabernet} />
                                  <span style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, color: T.textSecondary }}>{g.k}</span>
                                </div>
                                {g.list.map(p => (
                                  <div key={p} style={{ fontFamily: fus, fontSize: 15, color: T.afterburn, lineHeight: 1.75 }}>{p}</div>
                                ))}
                              </div>
                            ))}
                          </div>

                          {/* Requested Services */}
                          <div className="paper-s" style={{ padding: "20px 24px 22px" }}>
                            <div className="dlab" style={{ marginBottom: 6 }}>Requested Services</div>
                            {D.svc.map(([n, v]) => (
                              <div key={n} className="srow">
                                <Icon d={Ico.box} size={17} color={T.aurum} />
                                <span style={{ flex: 1, fontFamily: fus, fontSize: 15, color: T.afterburn }}>{n}</span>
                                <span style={{ fontFamily: ros, fontSize: 15, fontWeight: 600, color: v === "Included" ? T.textMuted : T.afterburn, fontVariantNumeric: "tabular-nums" }}>{v}</span>
                              </div>
                            ))}
                            <div style={{ height: 1, background: `linear-gradient(90deg, ${T.hairline}, ${T.hairline} 60%, ${T.aurum}55)`, margin: "14px 0 14px" }} />
                            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                              <span style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: T.textSecondary }}>Estimated Total</span>
                              <span style={{ fontFamily: ros, fontSize: 22, fontWeight: 700, color: T.cabernet, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>{D.total}</span>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 34 }}>

            <div className="in" style={{ animationDelay: ".3s" }}>
              <SectionHead title="Unpaid Invoices" sub="12 awaiting settlement" action="View all" />
              <div className="card" style={{ overflow: "hidden" }}>
                {invoices.map((v, i) => (
                  <div key={v.n} className="row" style={{ padding: "20px 24px", justifyContent: "space-between", gap: 14, borderBottom: i < invoices.length - 1 ? `1px solid ${T.hairline}` : "none" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
                      <Icon d={Ico.doc} size={19} color={T.textMuted} />
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontFamily: ros, fontSize: 16, fontWeight: 600, color: T.afterburn, fontVariantNumeric: "tabular-nums" }}>{v.n}</div>
                        <div style={{ fontFamily: fus, fontSize: 14, color: T.textMuted, marginTop: 3 }}>{v.d}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontFamily: ros, fontSize: 16, fontWeight: 600, color: T.afterburn, fontVariantNumeric: "tabular-nums", marginBottom: 6 }}>{v.a}</div>
                      <Badge tone="danger">Unpaid</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="in" style={{ animationDelay: ".35s" }}>
              <SectionHead title="Statements" sub="Latest account statements" action="View all" />
              <div className="card" style={{ overflow: "hidden" }}>
                {statements.map((s, i) => (
                  <div key={s.m} className="row" onClick={() => setStmt(s.m)} style={{ padding: "20px 24px", justifyContent: "space-between", gap: 14, borderBottom: i < statements.length - 1 ? `1px solid ${T.hairline}` : "none" }}>
                    <div>
                      <div style={{ fontFamily: ros, fontSize: 16, fontWeight: 600, color: T.afterburn }}>{s.m}</div>
                      <div style={{ fontFamily: fus, fontSize: 14, color: T.textMuted, marginTop: 3, fontVariantNumeric: "tabular-nums" }}>{s.c} · {s.a}</div>
                    </div>
                    <div className="sa"><Icon d={Ico.arrUR} size={16} color={T.cabernet} /></div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* ═══════ PAYMENT DRAWER ═══════ */}
      {payOpen && (
        <>
          <div className="scrim" onClick={() => setPayOpen(false)} />
          <aside className="drawer">

            {/* Header */}
            <div className="dhead">
              <svg className="dhead-arcs" viewBox="0 0 320 320" fill="none">
                {[70, 100, 130, 160, 190].map(r => <circle key={r} cx="160" cy="160" r={r} stroke={T.aurum} strokeWidth="1" strokeDasharray="3 9" />)}
              </svg>
              <div className="dhead-sheen" />

              <div style={{ position: "relative" }}>
                {/* Row 1 — actions */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
                  <button className="dclose" onClick={() => setPayOpen(false)}>
                    <Icon d={<path d="M18 6 6 18M6 6l12 12" />} size={17} color="currentColor" sw={2} /> Close
                  </button>
                  <button className="ddl">
                    <Icon cls="dla" d={<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /><path d="M12 15V3" /></>} size={17} color="currentColor" sw={1.8} /> Download
                  </button>
                </div>

                {/* Row 2 — labelled total */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
                  <div>
                    <div style={{ fontFamily: ros, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.aurum }}>Total Outstanding</div>
                    <div style={{ fontFamily: fus, fontSize: 14, color: "rgba(247,230,202,.60)", marginTop: 6 }}>Across 12 invoices</div>
                  </div>
                  <div style={{ fontFamily: ros, fontSize: 40, fontWeight: 700, color: T.skyway, letterSpacing: "-0.035em", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>$44,179.66</div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="dbody">
              <div className="paper">

                {/* Issuer / Bill to */}
                <div style={{ display: "flex", justifyContent: "space-between", gap: 32, marginBottom: 30 }}>
                  <div>
                    <div style={{ fontFamily: ros, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.cabernet, marginBottom: 12 }}>EAN Aviation</div>
                    <div style={{ fontFamily: fus, fontSize: 14, color: T.textSecondary, lineHeight: 1.75 }}>
                      Murtala Muhammed<br />International Airport<br />Lagos, Nigeria
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: ros, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.textMuted, marginBottom: 12 }}>Bill To</div>
                    <div style={{ fontFamily: ros, fontSize: 20, fontWeight: 700, color: T.afterburn, letterSpacing: "-0.02em" }}>Kura Aviation</div>
                    <div style={{ fontFamily: fus, fontSize: 14, color: T.textMuted, marginTop: 5, fontVariantNumeric: "tabular-nums" }}>KUR001</div>
                  </div>
                </div>

                <div style={{ height: 1, background: `linear-gradient(90deg, ${T.aurum}55, ${T.hairline} 40%, ${T.hairline})`, marginBottom: 22 }} />

                {/* Column heads */}
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, padding: "0 12px" }}>
                  <span style={{ fontFamily: ros, fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.textMuted }}>Invoice</span>
                  <span style={{ fontFamily: ros, fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.textMuted }}>Amount</span>
                </div>

                {/* Line items */}
                <div>
                  {BILL.map((b, i) => (
                    <div key={b.n} className="irow" style={{ borderBottom: i < BILL.length - 1 ? `1px solid ${T.hairline}` : "none" }}>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontFamily: ros, fontSize: 15.5, fontWeight: 600, color: T.afterburn, fontVariantNumeric: "tabular-nums", marginBottom: 5 }}>{b.n}</div>
                        <div style={{ fontFamily: fus, fontSize: 13.5, color: T.textMuted, lineHeight: 1.5 }}>
                          {b.d} · {b.dt}
                          {b.od && <> · <span style={{ color: T.danger, fontWeight: 500 }}>{b.od}</span></>}
                        </div>
                      </div>
                      <div style={{ fontFamily: ros, fontSize: 16, fontWeight: 600, color: T.afterburn, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap", paddingTop: 1 }}>{b.a}</div>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div style={{ height: 1, background: `linear-gradient(90deg, ${T.hairline}, ${T.hairline} 60%, ${T.aurum}55)`, margin: "22px 0 20px" }} />
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "baseline", gap: 26 }}>
                  <span style={{ fontFamily: ros, fontSize: 15, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: T.textSecondary }}>Total</span>
                  <span style={{ fontFamily: ros, fontSize: 32, fontWeight: 700, color: T.cabernet, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums" }}>$44,179.66</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="dfoot">
              <div className="pay-wrap" style={{ marginTop: 0, marginBottom: 16 }}>
                <svg className="pay-halo" width="100%" height="100%" preserveAspectRatio="none">
                  <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="10" pathLength="100" />
                  <rect className="t2" x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="10" pathLength="100" />
                </svg>
                <button className="btn-p" style={{ width: "100%", fontSize: 18, letterSpacing: "0.02em", padding: "20px 32px", position: "relative", zIndex: 2 }}>
                  <Icon d={Ico.card} size={21} color={T.skyway} /> Pay Now · $44,179.66
                </button>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon d={<><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>} size={15} color={T.textMuted} />
                  <span style={{ fontFamily: fus, fontSize: 13.5, color: T.textMuted }}>Secure payment</span>
                </div>
                <span style={{ width: 1, height: 16, background: T.hairline }} />
                <div style={{ display: "flex", gap: 8 }}>
                  <div className="cmark">VISA</div>
                  <div className="cmark">MC</div>
                  <div className="cmark">AMEX</div>
                </div>
              </div>
            </div>

          </aside>
        </>
      )}

      {/* ═══════ STATEMENT MODAL ═══════ */}
      {stmt && (
        <>
          <div className="scrim" onClick={() => setStmt(null)} />
          <div className="mwrap">
            <div className="modal">

              {/* Header */}
              <div className="mhead">
                <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: ros, fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.textMuted }}>Statement for</span>

                  <div className="sel">
                    <select value={stMonth} onChange={e => setStmt(`${e.target.value} ${stYear}`)}>
                      <option>September</option>
                      <option>August</option>
                    </select>
                    <Icon cls="cv" d={Ico.chevD} size={15} color={T.cabernet} />
                  </div>

                  <div className="sel">
                    <select value={stYear} onChange={e => setStmt(`${stMonth} ${e.target.value}`)}>
                      <option>2026</option>
                    </select>
                    <Icon cls="cv" d={Ico.chevD} size={15} color={T.cabernet} />
                  </div>

                  <span style={{ fontFamily: fus, fontSize: 15, color: T.textMuted }}>{S.count} invoices</span>
                </div>

                <button className="mclose" onClick={() => setStmt(null)}>
                  <Icon d={<path d="M18 6 6 18M6 6l12 12" />} size={19} color={T.cabernet} sw={2} />
                </button>
              </div>

              {/* Body */}
              <div className="mbody">
                <div className="paper">

                  {/* Issuer / Reference */}
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 32, marginBottom: 30 }}>
                    <div>
                      <div style={{ fontFamily: ros, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.cabernet, marginBottom: 12 }}>EAN Aviation</div>
                      <div style={{ fontFamily: fus, fontSize: 14, color: T.textSecondary, lineHeight: 1.75 }}>
                        Murtala Muhammed<br />International Airport<br />Lagos, Nigeria
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: ros, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.textMuted, marginBottom: 10 }}>Statement</div>
                      <div style={{ fontFamily: ros, fontSize: 30, fontWeight: 700, color: T.afterburn, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>KUR001</div>
                    </div>
                  </div>

                  <div style={{ height: 1, background: T.hairline, marginBottom: 26 }} />

                  {/* Account / Period */}
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 32, marginBottom: 26 }}>
                    <div>
                      <div style={{ fontFamily: ros, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.textMuted, marginBottom: 10 }}>Account</div>
                      <div style={{ fontFamily: ros, fontSize: 20, fontWeight: 700, color: T.afterburn, letterSpacing: "-0.02em" }}>Kura Aviation</div>
                      <div style={{ fontFamily: fus, fontSize: 14, color: T.textMuted, marginTop: 5, fontVariantNumeric: "tabular-nums" }}>KUR001</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: ros, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.textMuted, marginBottom: 10 }}>Period</div>
                      <div style={{ fontFamily: fus, fontSize: 16, color: T.afterburn, lineHeight: 1.5, maxWidth: 200 }}>{S.period}</div>
                    </div>
                  </div>

                  <div style={{ height: 1, background: `linear-gradient(90deg, ${T.aurum}55, ${T.hairline} 40%, ${T.hairline})`, marginBottom: 18 }} />

                  {/* Column heads */}
                  <div className="strow" style={{ padding: "0 12px 8px" }}>
                    {["Date", "Description", "Amount", "Status"].map((h, j) => (
                      <span key={h} style={{ fontFamily: ros, fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.textMuted, textAlign: j === 2 ? "right" : j === 3 ? "right" : "left" }}>{h}</span>
                    ))}
                  </div>

                  {/* Rows */}
                  {S.rows.map((r, j) => (
                    <div key={r.n} className="strow" style={{ borderBottom: j < S.rows.length - 1 ? `1px solid ${T.hairline}` : "none" }}>
                      <span style={{ fontFamily: fus, fontSize: 14, color: T.textSecondary, fontVariantNumeric: "tabular-nums" }}>{r.dt}</span>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontFamily: ros, fontSize: 15.5, fontWeight: 600, color: T.afterburn, marginBottom: 4 }}>{r.d}</div>
                        <div style={{ fontFamily: fus, fontSize: 13.5, color: T.textMuted, fontVariantNumeric: "tabular-nums" }}>{r.n}</div>
                      </div>
                      <span style={{ fontFamily: ros, fontSize: 16, fontWeight: 600, color: T.afterburn, fontVariantNumeric: "tabular-nums", textAlign: "right" }}>{r.a}</span>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8 }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: r.tone === "danger" ? T.danger : T.warning, flexShrink: 0 }} />
                        <span style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, color: r.tone === "danger" ? T.danger : T.warning }}>{r.s}</span>
                      </div>
                    </div>
                  ))}

                  {/* Totals */}
                  <div style={{ height: 1, background: `linear-gradient(90deg, ${T.hairline}, ${T.hairline} 55%, ${T.aurum}55)`, margin: "24px 0 20px" }} />
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 28 }}>
                      <span style={{ fontFamily: fus, fontSize: 15, color: T.textSecondary }}>Total invoiced</span>
                      <span style={{ fontFamily: ros, fontSize: 18, fontWeight: 600, color: T.afterburn, fontVariantNumeric: "tabular-nums", minWidth: 130, textAlign: "right" }}>{S.invoiced}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 28 }}>
                      <span style={{ fontFamily: fus, fontSize: 15, color: T.textSecondary }}>Paid</span>
                      <span style={{ fontFamily: ros, fontSize: 18, fontWeight: 600, color: S.paid === "$0.00" ? T.textMuted : T.success, fontVariantNumeric: "tabular-nums", minWidth: 130, textAlign: "right" }}>{S.paid}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 28, marginTop: 6 }}>
                      <span style={{ fontFamily: ros, fontSize: 15, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: T.textSecondary }}>Outstanding</span>
                      <span style={{ fontFamily: ros, fontSize: 30, fontWeight: 700, color: T.cabernet, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums", minWidth: 130, textAlign: "right" }}>{S.out}</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Footer */}
              <div className="mfoot">
                <span style={{ fontFamily: fus, fontSize: 13.5, color: T.textMuted, marginRight: "auto" }}>Generated {S.period.split("–")[1].trim()}</span>
                <button className="btn-p" style={{ fontSize: 15, padding: "14px 28px" }}>
                  <Icon cls="dla" d={<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /><path d="M12 15V3" /></>} size={18} color={T.skyway} sw={1.8} /> Download PDF
                </button>
              </div>

            </div>
          </div>
        </>
      )}
    </div>
  );
}
