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

const I = {
  grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  doc: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></>,
  plane: <path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a.8.8 0 0 0-.9 1.1l2.3 4.6-2 2H2.5a.5.5 0 0 0-.3.9l3 2 2 3a.5.5 0 0 0 .9-.3v-1.7l2-2 4.6 2.3a.8.8 0 0 0 1.1-.9z"/>,
  send: <><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></>,
  plus: <path d="M12 5v14M5 12h14"/>,
  user: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></>,
  card: <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>,
  chat: <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></>,
  chev: <path d="m9 18 6-6-6-6"/>,
  arrUR: <><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>,
  screen: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>,
  menu: <path d="M3 12h18M3 6h18M3 18h18"/>,
  bell: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></>,
  takeoff: <><path d="M2 22h20"/><path d="M6.4 17.4 3.6 12a1 1 0 0 1 .6-1.4l1.3-.4 2 2.2 3.3-1-3.5-5.6a1 1 0 0 1 .6-1.5l1.4-.4a1.3 1.3 0 0 1 1.2.3l5.6 5.2 3.6-1.1a2 2 0 0 1 2.5 1.3 1.5 1.5 0 0 1-1 1.9L6.4 17.4Z"/></>,
  landing: <><path d="M2 22h20"/><path d="M3.8 12.6 3 9.5a1 1 0 0 1 1-1.3l1.3.1 1.2 2.7 3.4.9L9.3 5a1 1 0 0 1 1.1-1.2l1.4.2a1.3 1.3 0 0 1 1 .8l2.8 7 3.7 1a2 2 0 0 1 1.5 2.4 1.5 1.5 0 0 1-1.8 1.1L3.8 12.6Z"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.1a4 4 0 0 1 0 7.75"/></>,
  shield: <path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1 1 0 0 1 1.6 0C14.6 3.8 17 5 19 5a1 1 0 0 1 1 1Z"/>,
  box: <><path d="m7.5 4.3 9 5.2"/><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></>,
  pencil: <><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></>,
  dl: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></>,
  x: <path d="M18 6 6 18M6 6l12 12"/>,
  lock: <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
};

const Ic = ({ d, s = 20, c = "currentColor", w = 1.5, cls }) => (
  <svg className={cls} width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>{d}</svg>
);

const Badge = ({ children, tone, sm }) => {
  const m = { success: [T.successTint, T.success], warning: [T.warningTint, T.warning], danger: [T.dangerTint, T.danger] };
  const [bg, c] = m[tone] || m.success;
  return <span style={{ fontFamily: ros, fontSize: sm ? 11 : 12, fontWeight: 600, background: bg, color: c, padding: sm ? "3px 9px" : "4px 11px", borderRadius: 100, whiteSpace: "nowrap" }}>{children}</span>;
};

const ACT = [
  { t: "LOS (EAN) → Abuja", r: "5N-DSN", d: "23 Aug", a: "$640.00", s: "Requested", tone: "warning", ic: I.plane,
    det: { dep: { t: "Departed LOS (EAN) (DNMM)", to: "To Abuja (DNAA)", fbo: "Nnamdi Azikiwe", m: "1 passenger · 1 crew · Domestic", dt: "23 Aug 2026 · 13:51" },
           arr: { t: "Arrived in Abuja (DNAA)", to: "From LOS (EAN) (DNMM)", fbo: "EAN Hangar", m: "1 passenger · 1 crew · Domestic", dt: "25 Aug 2026 · 01:52" },
           pax: ["Dennis Jay"], crew: ["Jenny Kay"],
           svc: [["ABV Handling", "$300.00"], ["Hangarage", "$300.00"], ["Dishes", "$20.00"], ["Fridge Storage", "$20.00"]], total: "$640.00" } },
  { t: "ABV Handling +4", r: "5N-DSN", d: "19 Aug", a: "$2,050.00", s: "Requested", tone: "warning", ic: I.screen,
    det: { dep: { t: "Departed LOS (EAN) (DNMM)", to: "To Abuja (DNAA)", fbo: "Nnamdi Azikiwe", m: "3 passengers · 2 crew · Domestic", dt: "19 Aug 2026 · 09:20" },
           arr: { t: "Arrived in Abuja (DNAA)", to: "From LOS (EAN) (DNMM)", fbo: "EAN Hangar", m: "3 passengers · 2 crew · Domestic", dt: "19 Aug 2026 · 11:05" },
           pax: ["Dennis Jay", "Marcus Obi", "Ruth Adeyemi"], crew: ["Jenny Kay", "Paul Eze"],
           svc: [["ABV Handling", "$300.00"], ["Hangarage", "$600.00"], ["Catering", "$450.00"], ["Ground Power Unit", "$400.00"], ["Lavatory Service", "$300.00"]], total: "$2,050.00" } },
  { t: "GroundEquipService +1", r: "N104DA", d: "7 Sept", a: "$188.02", s: "Unpaid", tone: "danger", ic: I.screen,
    det: { dep: { t: "Departed LOS (EAN) (DNMM)", to: "To Port Harcourt (DNPO)", fbo: "EAN Jet Centre", m: "2 passengers · 2 crew · Domestic", dt: "7 Sept 2026 · 06:45" },
           arr: { t: "Arrived in Port Harcourt (DNPO)", to: "From LOS (EAN) (DNMM)", fbo: "Omagwa Apron", m: "2 passengers · 2 crew · Domestic", dt: "7 Sept 2026 · 08:10" },
           pax: ["Ibrahim Sule", "Grace Oduya"], crew: ["Jenny Kay", "Paul Eze"],
           svc: [["Ground Equipment Service", "$120.00"], ["Apron Handling", "$68.02"]], total: "$188.02" } },
  { t: "LOS → GAT → LOS", r: "N605DA", d: "7 Sept", a: "", s: "Completed", tone: "success", ic: I.plane,
    det: { dep: { t: "Departed LOS (EAN) (DNMM)", to: "To LOS (GAT) (DNMM)", fbo: "EAN Jet Centre", m: "1 passenger · 2 crew · Local", dt: "7 Sept 2026 · 14:30" },
           arr: { t: "Returned to LOS (EAN) (DNMM)", to: "From LOS (GAT) (DNMM)", fbo: "EAN Hangar", m: "1 passenger · 2 crew · Local", dt: "7 Sept 2026 · 16:15" },
           pax: ["Dr. Apex Motive"], crew: ["Jenny Kay", "Paul Eze"],
           svc: [["Positioning Flight", "Included"], ["Hangarage", "Included"]], total: "Settled" } },
  { t: "LOS → GAT → LOS", r: "N605DA", d: "3 Sept", a: "", s: "Completed", tone: "success", ic: I.plane,
    det: { dep: { t: "Departed LOS (EAN) (DNMM)", to: "To LOS (GAT) (DNMM)", fbo: "EAN Jet Centre", m: "2 passengers · 2 crew · Local", dt: "3 Sept 2026 · 10:05" },
           arr: { t: "Returned to LOS (EAN) (DNMM)", to: "From LOS (GAT) (DNMM)", fbo: "EAN Hangar", m: "2 passengers · 2 crew · Local", dt: "3 Sept 2026 · 12:40" },
           pax: ["Dr. Apex Motive", "Dennis Jay"], crew: ["Jenny Kay", "Paul Eze"],
           svc: [["Positioning Flight", "Included"], ["Hangarage", "Included"]], total: "Settled" } },
];

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

const PERIODS = {
  "September 2026": { period: "1 – 30 September 2026", count: 3,
    rows: [
      { dt: "6 Sept 2026", d: "3rd Party Equipment Handling +1", n: "INV-14260", a: "$188.02", s: "Due", tone: "warning" },
      { dt: "1 Sept 2026", d: "Apron Parking Fee", n: "INV-14251", a: "$5,375.00", s: "Due", tone: "warning" },
      { dt: "1 Sept 2026", d: "Apron Parking Fee", n: "INV-14252", a: "$5,375.00", s: "Due", tone: "warning" },
    ], invoiced: "$10,938.02", paid: "$0.00", out: "$10,938.02" },
  "August 2026": { period: "1 – 31 August 2026", count: 4,
    rows: [
      { dt: "30 Aug 2026", d: "DNMM", n: "INV-14233", a: "$77.89", s: "Due", tone: "warning" },
      { dt: "3 Aug 2026", d: "Apron Parking Fee", n: "INV-14139", a: "$5,375.00", s: "Overdue", tone: "danger" },
      { dt: "3 Aug 2026", d: "Apron Parking Fee", n: "INV-14138", a: "$5,375.00", s: "Overdue", tone: "danger" },
      { dt: "3 Aug 2026", d: "Apron Parking Fee", n: "INV-14140", a: "$5,375.00", s: "Overdue", tone: "danger" },
    ], invoiced: "$16,202.89", paid: "$0.00", out: "$16,202.89" },
};
const INV = [
  { n: "14260", d: "6 Sept 2026", a: "$188.02" },
  { n: "14252", d: "1 Sept 2026", a: "$5,375.00" },
  { n: "14251", d: "1 Sept 2026", a: "$5,375.00" },
];
const STM = [
  { m: "September 2026", c: "3 invoices", a: "$10,938.02" },
  { m: "August 2026", c: "4 invoices", a: "$16,202.89" },
];

/* ── Phone shell ── */
function Phone({ children, label, tagline, notes }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "1 1 0" }}>
      <div style={{ textAlign: "center", marginBottom: 22, maxWidth: 400 }}>
        <div style={{ fontFamily: ros, fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.aurum, marginBottom: 7 }}>{tagline}</div>
        <h2 style={{ fontFamily: ros, fontSize: 26, fontWeight: 700, color: T.afterburn, margin: "0 0 10px", letterSpacing: "-0.02em" }}>{label}</h2>
        <p style={{ fontFamily: fus, fontSize: 14, color: T.textSecondary, lineHeight: 1.6, margin: 0 }}>{notes}</p>
      </div>
      <div style={{
        width: 390, height: 812, borderRadius: 52, background: "#100407",
        padding: 11, boxShadow: "0 30px 70px rgba(42,7,15,.30), 0 6px 18px rgba(42,7,15,.20)", flexShrink: 0, marginTop: "auto",
      }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 42, overflow: "hidden", position: "relative", background: T.canvas }}>
          {children}
        </div>
      </div>
    </div>
  );
}

const Scroll = ({ children, style }) => (
  <div className="scr" style={{ height: "100%", overflowY: "auto", overflowX: "hidden", ...style }}>{children}</div>
);

const SecHead = ({ title, note }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 14 }}>
    <h3 style={{ fontFamily: ros, fontSize: 18, fontWeight: 700, color: T.afterburn, margin: 0, letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>{title}</h3>
    <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${T.aurum}55, transparent)` }} />
    {note && <span style={{ fontFamily: fus, fontSize: 12.5, color: T.textMuted, whiteSpace: "nowrap" }}>{note}</span>}
  </div>
);

/* ── Expanded flight detail (shared) ── */
function FlightDetail({ D }) {
  return (
    <div className="expi">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span className="dlab">Schedule &amp; Route</span>
        <button className="btn-edit" onClick={e => e.stopPropagation()}>
          <Ic d={I.pencil} s={13} c={T.cabernet} /> Edit
        </button>
      </div>

      <div className="paper-s" style={{ marginBottom: 12 }}>
        {[{ k: "Departure", ic: I.takeoff, v: D.dep }, { k: "Arrival", ic: I.landing, v: D.arr }].map((leg, j) => (
          <div key={leg.k} style={{ padding: "18px 18px", borderTop: j === 1 ? `1px solid ${T.hairline}` : "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 11 }}>
              <Ic d={leg.ic} s={15} c={T.cabernet} />
              <span style={{ fontFamily: ros, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.cabernet }}>{leg.k}</span>
            </div>
            <div style={{ fontFamily: ros, fontSize: 15.5, fontWeight: 600, color: T.afterburn, letterSpacing: "-0.01em", marginBottom: 6 }}>{leg.v.t}</div>
            <div style={{ fontFamily: fus, fontSize: 13.5, color: T.textSecondary, lineHeight: 1.55 }}>{leg.v.to}</div>
            <div style={{ fontFamily: fus, fontSize: 13.5, color: T.textSecondary, lineHeight: 1.55, marginBottom: 11 }}>{leg.v.fbo}</div>
            <div style={{ fontFamily: fus, fontSize: 12.5, color: T.textMuted, marginBottom: 4 }}>{leg.v.m}</div>
            <div style={{ fontFamily: fus, fontSize: 12.5, color: T.textMuted, fontVariantNumeric: "tabular-nums" }}>{leg.v.dt}</div>
          </div>
        ))}
      </div>

      <div className="paper-s" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginBottom: 12 }}>
        {[{ k: "Passengers", ic: I.users, list: D.pax }, { k: "Crew", ic: I.shield, list: D.crew }].map((g, j) => (
          <div key={g.k} style={{ padding: "16px 18px", borderLeft: j === 1 ? `1px solid ${T.hairline}` : "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <Ic d={g.ic} s={14} c={T.cabernet} />
              <span style={{ fontFamily: ros, fontSize: 12.5, fontWeight: 600, color: T.textSecondary }}>{g.k}</span>
            </div>
            {g.list.map(p => <div key={p} style={{ fontFamily: fus, fontSize: 13.5, color: T.afterburn, lineHeight: 1.7 }}>{p}</div>)}
          </div>
        ))}
      </div>

      <div className="paper-s" style={{ padding: "16px 18px 18px" }}>
        <div className="dlab" style={{ marginBottom: 4 }}>Requested Services</div>
        {D.svc.map(([n, v]) => (
          <div key={n} className="srow">
            <Ic d={I.box} s={15} c={T.aurum} />
            <span style={{ flex: 1, fontFamily: fus, fontSize: 13.5, color: T.afterburn }}>{n}</span>
            <span style={{ fontFamily: ros, fontSize: 13.5, fontWeight: 600, color: v === "Included" ? T.textMuted : T.afterburn, fontVariantNumeric: "tabular-nums" }}>{v}</span>
          </div>
        ))}
        <div style={{ height: 1, background: `linear-gradient(90deg, ${T.hairline}, ${T.hairline} 60%, ${T.aurum}55)`, margin: "12px 0" }} />
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <span style={{ fontFamily: ros, fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: T.textSecondary }}>Estimated Total</span>
          <span style={{ fontFamily: ros, fontSize: 19, fontWeight: 700, color: T.cabernet, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>{D.total}</span>
        </div>
      </div>
    </div>
  );
}

/* ── Payment bottom sheet (shared) ── */
function PaySheet({ onClose }) {
  return (
    <>
      <div className="sscrim" onClick={onClose} />
      <div className="usheet" style={{ top: 54 }}>
        <div className="ush-head">
          <svg className="ush-arcs" viewBox="0 0 300 300" fill="none">
            {[70, 100, 130, 160, 190].map(r => <circle key={r} cx="230" cy="40" r={r} stroke={T.aurum} strokeWidth="1" strokeDasharray="3 9" />)}
          </svg>
          <div className="ush-sheen" />
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <div style={{ width: 40, height: 4, borderRadius: 100, background: "rgba(247,230,202,.28)" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <button className="dclose" onClick={onClose}><Ic d={I.x} s={16} c="currentColor" w={2} /> Close</button>
              <button className="ddl"><Ic cls="dla" d={I.dl} s={15} c="currentColor" w={1.8} /> Download</button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16 }}>
              <div>
                <div style={{ fontFamily: ros, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.aurum }}>Total Outstanding</div>
                <div style={{ fontFamily: fus, fontSize: 13, color: "rgba(247,230,202,.58)", marginTop: 5 }}>Across 12 invoices</div>
              </div>
              <div style={{ fontFamily: ros, fontSize: 30, fontWeight: 700, color: T.skyway, letterSpacing: "-0.035em", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>$44,179.66</div>
            </div>
          </div>
        </div>

        <div className="ush-body">
          <div className="paper">
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontFamily: ros, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.cabernet, marginBottom: 9 }}>EAN Aviation</div>
              <div style={{ fontFamily: fus, fontSize: 13, color: T.textSecondary, lineHeight: 1.7 }}>Murtala Muhammed International Airport<br />Lagos, Nigeria</div>
            </div>
            <div style={{ height: 1, background: T.hairline, marginBottom: 18 }} />
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontFamily: ros, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.textMuted, marginBottom: 8 }}>Bill To</div>
              <div style={{ fontFamily: ros, fontSize: 18, fontWeight: 700, color: T.afterburn, letterSpacing: "-0.02em" }}>Kura Aviation</div>
              <div style={{ fontFamily: fus, fontSize: 13, color: T.textMuted, marginTop: 4, fontVariantNumeric: "tabular-nums" }}>KUR001</div>
            </div>
            <div style={{ height: 1, background: `linear-gradient(90deg, ${T.aurum}55, ${T.hairline} 40%, ${T.hairline})`, marginBottom: 6 }} />
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0 2px" }}>
              <span style={{ fontFamily: ros, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.textMuted }}>Invoice</span>
              <span style={{ fontFamily: ros, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.textMuted }}>Amount</span>
            </div>
            {BILL.map((b, i) => (
              <div key={b.n} className="irow" style={{ borderBottom: i < BILL.length - 1 ? `1px solid ${T.hairline}` : "none" }}>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, color: T.afterburn, fontVariantNumeric: "tabular-nums", marginBottom: 4 }}>{b.n}</div>
                  <div style={{ fontFamily: fus, fontSize: 12.5, color: T.textMuted, lineHeight: 1.5 }}>
                    {b.d} · {b.dt}{b.od && <> · <span style={{ color: T.danger, fontWeight: 500 }}>{b.od}</span></>}
                  </div>
                </div>
                <div style={{ fontFamily: ros, fontSize: 14.5, fontWeight: 600, color: T.afterburn, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>{b.a}</div>
              </div>
            ))}
            <div style={{ height: 1, background: `linear-gradient(90deg, ${T.hairline}, ${T.hairline} 60%, ${T.aurum}55)`, margin: "18px 0 16px" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontFamily: ros, fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: T.textSecondary }}>Total</span>
              <span style={{ fontFamily: ros, fontSize: 26, fontWeight: 700, color: T.cabernet, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums" }}>$44,179.66</span>
            </div>
          </div>
        </div>

        <div className="ush-foot">
          <div className="pw" style={{ marginBottom: 12 }}>
            <svg className="halo" width="100%" height="100%" preserveAspectRatio="none">
              <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="10" pathLength="100" />
              <rect className="t2" x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="10" pathLength="100" />
            </svg>
            <button className="btn-cab"><Ic d={I.card} s={19} c={T.skyway} /> Pay Now · $44,179.66</button>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <Ic d={I.lock} s={13} c={T.textMuted} />
              <span style={{ fontFamily: fus, fontSize: 12.5, color: T.textMuted }}>Secure payment</span>
            </div>
            <span style={{ width: 1, height: 14, background: T.hairline }} />
            <div style={{ display: "flex", gap: 6 }}>
              {["VISA", "MC", "AMEX"].map(c => <div key={c} className="cmark">{c}</div>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Statement bottom sheet (shared) ── */
function StmtSheet({ stmt, setStmt, onClose }) {
  const S = PERIODS[stmt];
  const m = stmt.split(" ")[0], y = stmt.split(" ")[1];
  return (
    <>
      <div className="sscrim" onClick={onClose} />
      <div className="usheet light" style={{ top: 54 }}>
        <div className="ush-headw">
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
            <div style={{ width: 40, height: 4, borderRadius: 100, background: T.hairline }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
            <span style={{ fontFamily: ros, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.textMuted }}>Statement for</span>
            <button className="mclose" onClick={onClose}><Ic d={I.x} s={17} c={T.cabernet} w={2} /></button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div className="sel">
              <select value={m} onChange={e => setStmt(`${e.target.value} ${y}`)}>
                <option>September</option><option>August</option>
              </select>
              <Ic cls="cv" d={I.chevD} s={14} c={T.cabernet} />
            </div>
            <div className="sel">
              <select value={y} onChange={e => setStmt(`${m} ${e.target.value}`)}><option>2026</option></select>
              <Ic cls="cv" d={I.chevD} s={14} c={T.cabernet} />
            </div>
            <span style={{ fontFamily: fus, fontSize: 13.5, color: T.textMuted, marginLeft: 2 }}>{S.count} invoices</span>
          </div>
        </div>

        <div className="ush-body">
          <div className="paper">
            <div style={{ display: "flex", justifyContent: "space-between", gap: 18, marginBottom: 20 }}>
              <div>
                <div style={{ fontFamily: ros, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.cabernet, marginBottom: 9 }}>EAN Aviation</div>
                <div style={{ fontFamily: fus, fontSize: 13, color: T.textSecondary, lineHeight: 1.7 }}>Murtala Muhammed<br />International Airport<br />Lagos, Nigeria</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: ros, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.textMuted, marginBottom: 8 }}>Statement</div>
                <div style={{ fontFamily: ros, fontSize: 24, fontWeight: 700, color: T.afterburn, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>KUR001</div>
              </div>
            </div>
            <div style={{ height: 1, background: T.hairline, marginBottom: 18 }} />
            <div style={{ display: "flex", justifyContent: "space-between", gap: 18, marginBottom: 18 }}>
              <div>
                <div style={{ fontFamily: ros, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.textMuted, marginBottom: 8 }}>Account</div>
                <div style={{ fontFamily: ros, fontSize: 17, fontWeight: 700, color: T.afterburn, letterSpacing: "-0.02em" }}>Kura Aviation</div>
                <div style={{ fontFamily: fus, fontSize: 12.5, color: T.textMuted, marginTop: 4, fontVariantNumeric: "tabular-nums" }}>KUR001</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: ros, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.textMuted, marginBottom: 8 }}>Period</div>
                <div style={{ fontFamily: fus, fontSize: 14, color: T.afterburn, lineHeight: 1.5 }}>{S.period}</div>
              </div>
            </div>
            <div style={{ height: 1, background: `linear-gradient(90deg, ${T.aurum}55, ${T.hairline} 40%, ${T.hairline})`, marginBottom: 8 }} />

            {S.rows.map((r, j) => (
              <div key={r.n} className="irow" style={{ borderBottom: j < S.rows.length - 1 ? `1px solid ${T.hairline}` : "none" }}>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, color: T.afterburn, marginBottom: 4 }}>{r.d}</div>
                  <div style={{ fontFamily: fus, fontSize: 12.5, color: T.textMuted, fontVariantNumeric: "tabular-nums" }}>{r.n} · {r.dt}</div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontFamily: ros, fontSize: 14.5, fontWeight: 600, color: T.afterburn, fontVariantNumeric: "tabular-nums", marginBottom: 5 }}>{r.a}</div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: r.tone === "danger" ? T.danger : T.warning }} />
                    <span style={{ fontFamily: ros, fontSize: 12, fontWeight: 600, color: r.tone === "danger" ? T.danger : T.warning }}>{r.s}</span>
                  </div>
                </div>
              </div>
            ))}

            <div style={{ height: 1, background: `linear-gradient(90deg, ${T.hairline}, ${T.hairline} 55%, ${T.aurum}55)`, margin: "18px 0 16px" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {[["Total invoiced", S.invoiced, T.afterburn], ["Paid", S.paid, S.paid === "$0.00" ? T.textMuted : T.success]].map(([l, v, c]) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontFamily: fus, fontSize: 13.5, color: T.textSecondary }}>{l}</span>
                  <span style={{ fontFamily: ros, fontSize: 15.5, fontWeight: 600, color: c, fontVariantNumeric: "tabular-nums" }}>{v}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 5 }}>
                <span style={{ fontFamily: ros, fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: T.textSecondary }}>Outstanding</span>
                <span style={{ fontFamily: ros, fontSize: 24, fontWeight: 700, color: T.cabernet, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums" }}>{S.out}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ush-foot">
          <button className="btn-cab"><Ic cls="dla" d={I.dl} s={18} c={T.skyway} w={1.8} /> Download PDF</button>
        </div>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════
   CONCEPT A — LEDGER
   ══════════════════════════════════════════ */
function ConceptA() {
  const [tab, setTab] = useState("Overview");
  const [pay, setPay] = useState(false);
  const [stmt, setStmt] = useState(null);
  const [openRow, setOpenRow] = useState(null);
  const nav = [
    { l: "Overview", i: I.grid }, { l: "Invoices", i: I.doc },
    { l: "Requests", i: I.send }, { l: "Aircraft", i: I.plane }, { l: "Account", i: I.user },
  ];

  return (
    <>
      <Scroll style={{ paddingBottom: 96 }}>
        {/* Status bar */}
        <div style={{ height: 50, display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 26px 6px" }}>
          <span style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, color: T.afterburn }}>9:41</span>
          <div style={{ display: "flex", gap: 5, alignItems: "center", opacity: .75 }}>
            <svg width="17" height="11" viewBox="0 0 17 11" fill={T.afterburn}><rect x="0" y="7" width="3" height="4" rx="1"/><rect x="4.5" y="5" width="3" height="6" rx="1"/><rect x="9" y="2.5" width="3" height="8.5" rx="1"/><rect x="13.5" y="0" width="3" height="11" rx="1"/></svg>
            <svg width="23" height="11" viewBox="0 0 23 11" fill="none"><rect x=".5" y=".5" width="19" height="10" rx="3" stroke={T.afterburn} strokeOpacity=".5"/><rect x="2" y="2" width="14" height="7" rx="1.6" fill={T.afterburn}/><path d="M21 4v3" stroke={T.afterburn} strokeOpacity=".5" strokeWidth="1.6" strokeLinecap="round"/></svg>
          </div>
        </div>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 22px 20px" }}>
          <div>
            <div style={{ fontFamily: ros, fontSize: 25, fontWeight: 700, color: T.cabernet, letterSpacing: "-0.02em", lineHeight: 1 }}>ean</div>
            <div style={{ fontFamily: ros, fontSize: 7, fontWeight: 500, color: T.aurum, letterSpacing: "0.42em", marginTop: 3 }}>AVIATION</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div className="tap" style={{ width: 40, height: 40, borderRadius: 12, border: `1px solid ${T.hairline}`, background: T.white, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <Ic d={I.bell} s={18} c={T.cabernet} />
              <span style={{ position: "absolute", top: 10, right: 11, width: 6, height: 6, borderRadius: "50%", background: T.danger, border: `1.5px solid ${T.white}` }} />
            </div>
            <div className="av-r tap" style={{ width: 40, height: 40 }}>AM</div>
          </div>
        </div>

        {/* Greeting */}
        <div style={{ padding: "0 22px 22px" }}>
          <h1 style={{ fontFamily: ros, fontSize: 29, fontWeight: 700, color: T.afterburn, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.12 }}>Good afternoon,<br/>Dr. Apex</h1>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 11 }}>
            <span style={{ fontFamily: fus, fontSize: 14, color: T.textSecondary }}>Kura Aviation · KUR001</span>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: T.aurum }} />
            <span style={{ fontFamily: fus, fontSize: 14, color: T.textSecondary }}>8 movements</span>
          </div>
        </div>

        {/* Hero balance */}
        <div style={{ padding: "0 22px 26px" }}>
          <div className="hero" style={{ padding: 26 }}>
            <svg className="arcs" viewBox="0 0 300 300" fill="none">
              {[70, 98, 126, 154, 182].map(r => <circle key={r} cx="150" cy="150" r={r} stroke={T.aurum} strokeWidth="1" strokeDasharray="3 9" />)}
            </svg>
            <div className="sheen" />
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <span className="glow" style={{ width: 6, height: 6, borderRadius: "50%", background: T.aurum }} />
                <span style={{ fontFamily: ros, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.aurum }}>Balance Due</span>
              </div>
              <div style={{ fontFamily: ros, fontSize: 40, fontWeight: 700, color: T.skyway, letterSpacing: "-0.035em", lineHeight: 1, fontVariantNumeric: "tabular-nums", marginBottom: 18 }}>$44,179.66</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 22 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#E8756A" }} />
                  <span style={{ fontFamily: fus, fontSize: 13.5, color: T.skyway, fontVariantNumeric: "tabular-nums" }}>$33,163.75</span>
                  <span style={{ fontFamily: fus, fontSize: 13.5, color: "rgba(247,230,202,.55)" }}>overdue</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: T.aurum }} />
                  <span style={{ fontFamily: fus, fontSize: 13.5, color: T.skyway, fontVariantNumeric: "tabular-nums" }}>$11,015.91</span>
                  <span style={{ fontFamily: fus, fontSize: 13.5, color: "rgba(247,230,202,.55)" }}>due 29 Sept</span>
                </div>
              </div>
              <div className="pw">
                <svg className="halo" width="100%" height="100%" preserveAspectRatio="none">
                  <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="10" pathLength="100" />
                  <rect className="t2" x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="10" pathLength="100" />
                </svg>
                <button className="btn-gold" onClick={() => setPay(true)}>
                  <Ic d={I.card} s={17} c={T.cabernetDeep} /> Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stat chips — horizontal scroll */}
        <div className="hsc" style={{ display: "flex", gap: 12, padding: "0 22px 30px", overflowX: "auto" }}>
          {[
            { l: "Spent YTD", v: "$130,965", s: "+₦197,499" },
            { l: "Movements", v: "130", s: "this year" },
            { l: "Unpaid", v: "12", s: "invoices" },
          ].map(c => (
            <div key={c.l} className="chip tap" style={{ minWidth: 148 }}>
              <div className="ttl" style={{ fontFamily: ros, fontSize: 10, fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: T.textMuted, marginBottom: 9 }}>{c.l}</div>
              <div style={{ fontFamily: ros, fontSize: 23, fontWeight: 700, color: T.afterburn, letterSpacing: "-0.025em", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>{c.v}</div>
              <div style={{ fontFamily: fus, fontSize: 12.5, color: T.textMuted, marginTop: 6 }}>{c.s}</div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div style={{ padding: "0 22px 26px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 11, flex: 1 }}>
              <h3 style={{ fontFamily: ros, fontSize: 18, fontWeight: 700, color: T.afterburn, margin: 0, letterSpacing: "-0.02em" }}>Recent Activity</h3>
              <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${T.aurum}55, transparent)` }} />
            </div>
            <button className="lnk">All<Ic cls="la" d={I.chev} s={13} c={T.cabernet} /></button>
          </div>
          <div className="card" style={{ overflow: "hidden" }}>
            {ACT.map((a, i) => {
              const open = openRow === i;
              return (
                <div key={i} style={{ borderBottom: i < ACT.length - 1 ? `1px solid ${T.hairline}` : "none" }}>
                  <div className={`row${open ? " open" : ""}`} onClick={() => setOpenRow(open ? null : i)} style={{ padding: "16px 18px" }}>
                    <div className="tile" style={{ width: 40, height: 40 }}><Ic d={a.ic} s={18} c={T.cabernet} /></div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: ros, fontSize: 14.5, fontWeight: 600, color: T.afterburn, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.t}</div>
                      <div style={{ fontFamily: fus, fontSize: 12.5, color: T.textMuted, marginTop: 3 }}>{a.r} · {a.d}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5 }}>
                        {a.a && <span style={{ fontFamily: ros, fontSize: 14.5, fontWeight: 600, color: T.afterburn, fontVariantNumeric: "tabular-nums" }}>{a.a}</span>}
                        <Badge tone={a.tone} sm>{a.s}</Badge>
                      </div>
                      <Ic cls="chev" d={I.chevD} s={16} c={T.textMuted} />
                    </div>
                  </div>
                  <div className={`exp${open ? " on" : ""}`}>
                    <div className="expw"><FlightDetail D={a.det} /></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Statements */}
        <div style={{ padding: "0 22px 26px" }}>
          <SecHead title="Statements" note="Latest" />
          <div className="card" style={{ overflow: "hidden" }}>
            {STM.map((s, i) => (
              <div key={s.m} className="row" onClick={() => setStmt(s.m)} style={{ padding: "16px 18px", justifyContent: "space-between", borderBottom: i < STM.length - 1 ? `1px solid ${T.hairline}` : "none" }}>
                <div>
                  <div style={{ fontFamily: ros, fontSize: 14.5, fontWeight: 600, color: T.afterburn }}>{s.m}</div>
                  <div style={{ fontFamily: fus, fontSize: 12.5, color: T.textMuted, marginTop: 3, fontVariantNumeric: "tabular-nums" }}>{s.c} · {s.a}</div>
                </div>
                <div className="sa"><Ic d={I.arrUR} s={15} c={T.cabernet} /></div>
              </div>
            ))}
          </div>
        </div>

        {/* Client relations */}
        <div style={{ padding: "0 22px 30px" }}>
          <div className="card" style={{ padding: 22 }}>
            <div style={{ fontFamily: ros, fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.textSecondary, marginBottom: 15 }}>Client Relations</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div className="av-d" style={{ width: 44, height: 44, fontSize: 14 }}>AN</div>
                <div>
                  <div style={{ fontFamily: ros, fontSize: 15.5, fontWeight: 600, color: T.afterburn }}>Ann</div>
                  <div style={{ fontFamily: fus, fontSize: 12.5, color: T.textMuted, marginTop: 2 }}>Lounge and complaints</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {[I.phone, I.chat, I.mail].map((ic, i) => <div key={i} className="ib tap"><Ic d={ic} s={16} c={T.cabernet} /></div>)}
              </div>
            </div>
          </div>
        </div>
      </Scroll>

      {/* Bottom tab bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 88,
        background: "rgba(255,255,255,.90)", backdropFilter: "blur(20px)",
        borderTop: `1px solid ${T.hairline}`, display: "flex", padding: "10px 8px 0",
      }}>
        {nav.map(n => {
          const on = tab === n.l;
          return (
            <div key={n.l} className={`tb${on ? " on" : ""}`} onClick={() => setTab(n.l)}>
              <span className="tbd" />
              <Ic d={n.i} s={20} c={on ? T.cabernet : "rgba(8,0,0,.34)"} w={on ? 2 : 1.5} />
              <span style={{ fontFamily: ros, fontSize: 10.5, fontWeight: on ? 600 : 500, color: on ? T.cabernet : "rgba(8,0,0,.36)", marginTop: 5 }}>{n.l}</span>
            </div>
          );
        })}
      </div>
      <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 134, height: 5, borderRadius: 100, background: "rgba(8,0,0,.22)" }} />

      {pay && <PaySheet onClose={() => setPay(false)} />}
      {stmt && <StmtSheet stmt={stmt} setStmt={setStmt} onClose={() => setStmt(null)} />}
    </>
  );
}

/* ══════════════════════════════════════════
   CONCEPT B — ATRIUM
   ══════════════════════════════════════════ */
function ConceptB() {
  const [tab, setTab] = useState("Home");
  const [pay, setPay] = useState(false);
  const [stmt, setStmt] = useState(null);
  const [openRow, setOpenRow] = useState(null);

  return (
    <>
      <Scroll>
      {/* Dark canopy */}
      <div className="canopy">
        <svg className="arcs2" viewBox="0 0 360 360" fill="none">
          {[80, 112, 144, 176, 208].map(r => <circle key={r} cx="300" cy="60" r={r} stroke={T.aurum} strokeWidth="1" strokeDasharray="2 10" />)}
        </svg>
        <div className="sheen2" />

        <div style={{ position: "relative", padding: "0 24px" }}>
          {/* Status */}
          <div style={{ height: 50, display: "flex", alignItems: "flex-end", justifyContent: "space-between", paddingBottom: 6 }}>
            <span style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, color: T.skyway }}>9:41</span>
            <div style={{ display: "flex", gap: 5, alignItems: "center", opacity: .8 }}>
              <svg width="17" height="11" viewBox="0 0 17 11" fill={T.skyway}><rect x="0" y="7" width="3" height="4" rx="1"/><rect x="4.5" y="5" width="3" height="6" rx="1"/><rect x="9" y="2.5" width="3" height="8.5" rx="1"/><rect x="13.5" y="0" width="3" height="11" rx="1"/></svg>
              <svg width="23" height="11" viewBox="0 0 23 11" fill="none"><rect x=".5" y=".5" width="19" height="10" rx="3" stroke={T.skyway} strokeOpacity=".5"/><rect x="2" y="2" width="14" height="7" rx="1.6" fill={T.skyway}/><path d="M21 4v3" stroke={T.skyway} strokeOpacity=".5" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </div>
          </div>

          {/* Bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0 22px" }}>
            <div>
              <div style={{ fontFamily: ros, fontSize: 24, fontWeight: 700, color: T.skyway, letterSpacing: "-0.02em", lineHeight: 1 }}>ean</div>
              <div style={{ fontFamily: ros, fontSize: 7, fontWeight: 500, color: T.aurum, letterSpacing: "0.42em", marginTop: 3 }}>AVIATION</div>
            </div>
            <div className="av-l tap" style={{ width: 38, height: 38, fontSize: 13 }}>AM</div>
          </div>

          {/* Greeting */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontFamily: fus, fontSize: 14, color: "rgba(247,230,202,.60)", marginBottom: 6 }}>Good afternoon</div>
            <h1 style={{ fontFamily: ros, fontSize: 28, fontWeight: 700, color: T.skyway, margin: 0, letterSpacing: "-0.025em", lineHeight: 1.1 }}>Dr. Apex</h1>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginTop: 9 }}>
              <span style={{ fontFamily: fus, fontSize: 13, color: "rgba(247,230,202,.55)" }}>Kura Aviation · KUR001</span>
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: T.aurum }} />
              <span style={{ fontFamily: fus, fontSize: 13, color: "rgba(247,230,202,.55)" }}>8 movements</span>
            </div>
          </div>

          {/* Balance inline */}
          <div style={{ borderTop: "1px solid rgba(195,166,109,.22)", paddingTop: 20, marginBottom: 22 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span className="glow" style={{ width: 6, height: 6, borderRadius: "50%", background: T.aurum }} />
              <span style={{ fontFamily: ros, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.aurum }}>Balance Due</span>
            </div>
            <div style={{ fontFamily: ros, fontSize: 44, fontWeight: 700, color: T.skyway, letterSpacing: "-0.04em", lineHeight: 1, fontVariantNumeric: "tabular-nums", marginBottom: 16 }}>$44,179.66</div>

            <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E8756A", flexShrink: 0 }} />
                <span style={{ fontFamily: fus, fontSize: 13.5, color: T.skyway, fontVariantNumeric: "tabular-nums" }}>$33,163.75</span>
                <span style={{ fontFamily: fus, fontSize: 13.5, color: "rgba(247,230,202,.55)" }}>overdue</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.aurum, flexShrink: 0 }} />
                <span style={{ fontFamily: fus, fontSize: 13.5, color: T.skyway, fontVariantNumeric: "tabular-nums" }}>$11,015.91</span>
                <span style={{ fontFamily: fus, fontSize: 13.5, color: "rgba(247,230,202,.55)" }}>due 29 Sept</span>
              </div>
            </div>

            <div className="pw">
              <svg className="halo" width="100%" height="100%" preserveAspectRatio="none">
                <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="10" pathLength="100" />
                <rect className="t2" x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="10" pathLength="100" />
              </svg>
              <button className="btn-gold" onClick={() => setPay(true)}><Ic d={I.card} s={17} c={T.cabernetDeep} /> Pay Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Sheet */}
      <div className="sheet">
          <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 2px" }}>
            <div style={{ width: 40, height: 4, borderRadius: 100, background: T.hairline }} />
          </div>

          {/* Metrics strip */}
          <div style={{ display: "flex", padding: "16px 24px 0", gap: 0 }}>
            {[{ l: "Spent YTD", v: "$130,965" }, { l: "Movements", v: "130" }, { l: "Unpaid", v: "12" }].map((m, i) => (
              <div key={m.l} style={{ flex: 1, textAlign: i === 0 ? "left" : i === 2 ? "right" : "center", borderLeft: i > 0 ? `1px solid ${T.hairline}` : "none", paddingLeft: i > 0 ? 14 : 0 }}>
                <div style={{ fontFamily: ros, fontSize: 19, fontWeight: 700, color: T.afterburn, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>{m.v}</div>
                <div style={{ fontFamily: ros, fontSize: 9.5, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: T.textMuted, marginTop: 5 }}>{m.l}</div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div style={{ padding: "42px 24px 0" }}>
            <SecHead title="Recent Activity" />
            {ACT.map((a, i) => {
              const open = openRow === i;
              return (
                <div key={i} className={`lrow-wrap${open ? " open" : ""}`}>
                  <div className={`lrow${open ? " open" : ""}`} onClick={() => setOpenRow(open ? null : i)}
                       style={{ margin: 0, border: "none", borderRadius: 0, background: "transparent" }}>
                    <div className="tile" style={{ width: 42, height: 42 }}><Ic d={a.ic} s={18} c={T.cabernet} /></div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: ros, fontSize: 14.5, fontWeight: 600, color: T.afterburn, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.t}</div>
                      <div style={{ fontFamily: fus, fontSize: 12.5, color: T.textMuted, marginTop: 3 }}>{a.r} · {a.d}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5 }}>
                        {a.a && <span style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, color: T.afterburn, fontVariantNumeric: "tabular-nums" }}>{a.a}</span>}
                        <Badge tone={a.tone} sm>{a.s}</Badge>
                      </div>
                      <Ic cls="chev" d={I.chevD} s={16} c={T.textMuted} />
                    </div>
                  </div>
                  <div className={`exp${open ? " on" : ""}`}>
                    <div className="expw"><FlightDetail D={a.det} /></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Unpaid Invoices */}
          <div style={{ padding: "30px 24px 0" }}>
            <SecHead title="Unpaid Invoices" note="12 awaiting" />
            {INV.map(v => (
              <div key={v.n} className="lrow">
                <div className="tile" style={{ width: 42, height: 42 }}><Ic d={I.doc} s={18} c={T.cabernet} /></div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: ros, fontSize: 14.5, fontWeight: 600, color: T.afterburn, fontVariantNumeric: "tabular-nums" }}>Invoice {v.n}</div>
                  <div style={{ fontFamily: fus, fontSize: 12.5, color: T.textMuted, marginTop: 3 }}>{v.d}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5 }}>
                  <span style={{ fontFamily: ros, fontSize: 14, fontWeight: 600, color: T.afterburn, fontVariantNumeric: "tabular-nums" }}>{v.a}</span>
                  <Badge tone="danger" sm>Unpaid</Badge>
                </div>
              </div>
            ))}
          </div>

          {/* Statements */}
          <div style={{ padding: "30px 24px 0" }}>
            <SecHead title="Statements" />
            {STM.map(s => (
              <div key={s.m} className="lrow" onClick={() => setStmt(s.m)}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: ros, fontSize: 15, fontWeight: 600, color: T.afterburn }}>{s.m}</div>
                  <div style={{ fontFamily: fus, fontSize: 12.5, color: T.textMuted, marginTop: 3, fontVariantNumeric: "tabular-nums" }}>{s.c} · {s.a}</div>
                </div>
                <div className="sa"><Ic d={I.arrUR} s={15} c={T.cabernet} /></div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div style={{ padding: "22px 24px 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 14 }}>
              <span style={{ fontFamily: ros, fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.textSecondary }}>Client Relations</span>
              <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${T.aurum}55, transparent)` }} />
            </div>
            <div style={{ display: "flex", gap: 9 }}>
              {[{ n: "Ann", ic: I.phone }, { n: "Tosin", ic: I.chat }, { n: "Finance", ic: I.mail }].map(c => (
                <div key={c.n} className="cbox tap">
                  <Ic d={c.ic} s={17} c={T.cabernet} />
                  <span style={{ fontFamily: ros, fontSize: 12, fontWeight: 600, color: T.afterburn, marginTop: 8 }}>{c.n}</span>
                </div>
              ))}
            </div>
          </div>
      </div>
      </Scroll>

      {/* Floating nav */}
      <div className="fnav">
        {[{ l: "Home", i: I.grid }, { l: "Trips", i: I.plane }, { l: "Bills", i: I.doc }, { l: "You", i: I.user }].map(n => {
          const on = tab === n.l;
          return (
            <div key={n.l} className={`fb${on ? " on" : ""}`} onClick={() => setTab(n.l)}>
              <Ic d={n.i} s={19} c={on ? T.skyway : "rgba(247,230,202,.45)"} w={on ? 2 : 1.5} />
            </div>
          );
        })}
        <div className="fab tap"><Ic d={I.plus} s={20} c={T.cabernetDeep} w={2.2} /></div>
      </div>
      <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 134, height: 5, borderRadius: 100, background: "rgba(8,0,0,.22)", zIndex: 21 }} />

      {pay && <PaySheet onClose={() => setPay(false)} />}
      {stmt && <StmtSheet stmt={stmt} setStmt={setStmt} onClose={() => setStmt(null)} />}
    </>
  );
}

/* ══════════════════════════════════════════ */
export default function EANMobileConcepts() {
  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=Rosario:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Fustat:wght@300;400;500;600;700;800&display=swap');
    * { -webkit-font-smoothing: antialiased; box-sizing: border-box; }
    .scr::-webkit-scrollbar, .hsc::-webkit-scrollbar { display:none; }
    .scr, .hsc { scrollbar-width:none; -ms-overflow-style:none; }

    .card { background:${T.white}; border:1px solid ${T.hairline}; border-radius:14px; }

    /* Hero */
    .hero { position:relative; overflow:hidden; border-radius:16px; background:${T.cabernetDark};
      box-shadow: 0 14px 36px rgba(42,7,15,.30), 0 2px 8px rgba(42,7,15,.20);
      transition: box-shadow .5s cubic-bezier(.25,.1,.25,1), transform .5s cubic-bezier(.25,.1,.25,1); }
    .hero:active { transform: scale(.985); }
    .arcs { position:absolute; right:-80px; top:-90px; width:280px; height:280px; opacity:.17; pointer-events:none;
      animation: drift 26s linear infinite; }
    .sheen { position:absolute; inset:0; pointer-events:none;
      background: radial-gradient(130% 95% at 10% 0%, rgba(247,230,202,.11) 0%, transparent 56%); }
    @keyframes drift { 0%{transform:rotate(0)} 100%{transform:rotate(360deg)} }
    .glow { box-shadow: 0 0 10px ${T.aurum}; animation: pulse 3.2s ease-in-out infinite; }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.45} }

    /* Canopy (B) */
    .canopy { position:relative; overflow:hidden; background:${T.cabernetDark}; padding-bottom: 46px; }
    .arcs2 { position:absolute; right:-40px; top:-120px; width:360px; height:360px; opacity:.15; pointer-events:none;
      animation: drift 34s linear infinite; }
    .sheen2 { position:absolute; inset:0; pointer-events:none;
      background: radial-gradient(110% 70% at 85% 0%, rgba(195,166,109,.16) 0%, transparent 58%); }
    .sheet { position:relative; z-index:3; background:${T.canvas};
      border-radius: 30px 30px 0 0; margin-top:-28px; min-height:560px; padding-bottom:132px;
      box-shadow: 0 -10px 30px rgba(42,7,15,.24); }
    .mini { display:flex; align-items:center; gap:9px; padding:11px 15px; border-radius:12px;
      background: rgba(247,230,202,.06); border:1px solid rgba(195,166,109,.18); }

    /* Pay button */
    .btn-gold { display:flex; align-items:center; justify-content:center; gap:9px; width:100%;
      font-family:${ros}; font-size:15px; font-weight:600; letter-spacing:.03em; padding:15px 28px;
      background:${T.skyway}; color:${T.cabernetDeep}; border:none; border-radius:10px; cursor:pointer;
      position:relative; z-index:2; animation: breathe 9s cubic-bezier(.4,0,.6,1) infinite;
      transition: background .4s ease, transform .3s ease; }
    .btn-gold:active { transform: scale(.98); background:#FFF3DC; }
    .pw { position:relative; }
    .halo { position:absolute; inset:-4px; pointer-events:none; overflow:visible; z-index:1; }
    .halo rect { fill:none; stroke:${T.skyway}; stroke-width:1.6; stroke-linecap:round; stroke-dasharray:16 84;
      filter: drop-shadow(0 0 5px rgba(247,230,202,.95)) drop-shadow(0 0 12px rgba(195,166,109,.55));
      animation: travel 9s cubic-bezier(.4,0,.6,1) infinite; }
    .halo rect.t2 { stroke:${T.aurum}; stroke-width:1.2; stroke-dasharray:9 91; opacity:.75; animation-delay:.18s; }
    @keyframes travel { 0%{stroke-dashoffset:100;opacity:0} 4%{opacity:1} 26%{stroke-dashoffset:0;opacity:1} 31%{opacity:0} 100%{stroke-dashoffset:0;opacity:0} }
    @keyframes breathe {
      0%,100% { box-shadow: 0 2px 10px rgba(0,0,0,.20); }
      14% { box-shadow: 0 2px 10px rgba(0,0,0,.20), 0 0 0 3px rgba(247,230,202,.10); }
      26% { box-shadow: 0 4px 16px rgba(0,0,0,.24), 0 0 0 7px rgba(247,230,202,.045); }
      40% { box-shadow: 0 2px 10px rgba(0,0,0,.20), 0 0 0 10px rgba(247,230,202,0); }
    }

    /* Avatars */
    .av-r, .av-d, .av-l { border-radius:50%; display:flex; align-items:center; justify-content:center;
      font-family:${ros}; font-weight:600; font-size:13px; background:transparent;
      transition: all .35s cubic-bezier(.25,.1,.25,1); }
    .av-r { border:1.5px solid rgba(100,18,36,.28); color:${T.cabernet}; }
    .av-d { border:1.5px solid ${T.aurum}; color:${T.cabernet}; background:${T.canvasDeep}; }
    .av-l { border:1.5px solid ${T.aurum}; color:${T.aurum}; }

    /* Rows */
    .row { display:flex; align-items:center; gap:14px; position:relative; cursor:pointer;
      transition: background .35s cubic-bezier(.25,.1,.25,1); }
    .row:before { content:''; position:absolute; left:0; top:0; bottom:0; width:2px; background:${T.aurum};
      transform:scaleY(0); transition: transform .4s cubic-bezier(.25,.1,.25,1); }
    .row:active { background:#FCFAF6; }
    .row:active:before { transform:scaleY(1); }
    .tile { border-radius:10px; background:${T.white}; border:1px solid ${T.hairline};
      display:flex; align-items:center; justify-content:center; flex-shrink:0;
      transition: all .35s cubic-bezier(.25,.1,.25,1); }
    .row:active .tile { background:${T.canvasDeep}; border-color:${T.skywayDark}; }

    .lrow { display:flex; align-items:center; gap:14px; padding:15px 16px; margin-bottom:9px;
      background:${T.white}; border:1px solid ${T.hairline}; border-radius:13px; cursor:pointer;
      position:relative; overflow:hidden;
      transition: transform .35s cubic-bezier(.25,.1,.25,1), box-shadow .35s cubic-bezier(.25,.1,.25,1), border-color .35s ease; }
    .lrow:before { content:''; position:absolute; left:0; top:0; bottom:0; width:2.5px; background:${T.aurum};
      transform:scaleY(0); transition: transform .4s cubic-bezier(.25,.1,.25,1); }
    .lrow:active { transform: scale(.985); border-color:${T.aurum}; box-shadow: 0 6px 18px rgba(100,18,36,.10); }
    .lrow:active:before { transform:scaleY(1); }

    /* Chips */
    .chip { background:${T.white}; border:1px solid ${T.hairline}; border-radius:14px; padding:16px 18px;
      flex-shrink:0; cursor:pointer; position:relative; overflow:hidden;
      transition: all .35s cubic-bezier(.25,.1,.25,1); }
    .chip:before { content:''; position:absolute; left:0; top:0; bottom:0; width:2.5px; background:${T.aurum};
      transform:scaleY(0); transition: transform .4s cubic-bezier(.25,.1,.25,1); }
    .chip:active { transform: translateY(-3px); border-color:${T.aurum}; box-shadow: 0 10px 24px rgba(100,18,36,.12); }
    .chip:active:before { transform:scaleY(1); }
    .chip:active .ttl { color:${T.cabernet}; }

    /* Segmented */
    .seg { display:flex; background:${T.white}; border:1px solid ${T.hairline}; border-radius:100px; padding:4px; }
    .sg { flex:1; text-align:center; font-family:${ros}; font-size:13px; font-weight:600; padding:9px 0;
      border-radius:100px; cursor:pointer; color:${T.textSecondary};
      transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .sg.on { background:${T.cabernet}; color:${T.skyway}; box-shadow: 0 2px 8px rgba(100,18,36,.22); }

    /* Icon buttons */
    .ib { width:36px; height:36px; border-radius:10px; border:1px solid ${T.hairline}; background:${T.white};
      display:flex; align-items:center; justify-content:center; cursor:pointer;
      transition: all .35s cubic-bezier(.25,.1,.25,1); }
    .ib:active { background:${T.cabernet}; border-color:${T.cabernet}; }
    .ib:active svg { stroke:${T.skyway}; }
    .sa { width:34px; height:34px; border-radius:9px; border:1px solid ${T.hairline};
      display:flex; align-items:center; justify-content:center; flex-shrink:0; transition: all .35s ease; }
    .lrow:active .sa { background:${T.cabernet}; border-color:${T.cabernet}; }
    .lrow:active .sa svg { stroke:${T.skyway}; }

    .cbox { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center;
      padding:16px 8px; background:${T.white}; border:1px solid ${T.hairline}; border-radius:13px; cursor:pointer;
      transition: all .35s cubic-bezier(.25,.1,.25,1); }
    .cbox:active { border-color:${T.aurum}; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(100,18,36,.10); }

    /* Tab bar A */
    .tb { flex:1; display:flex; flex-direction:column; align-items:center; cursor:pointer; padding-top:8px;
      position:relative; transition: all .35s cubic-bezier(.25,.1,.25,1); }
    .tbd { position:absolute; top:0; left:50%; transform:translateX(-50%) scaleX(0); width:22px; height:2.5px;
      border-radius:100px; background:${T.aurum}; transition: transform .4s cubic-bezier(.34,1.56,.64,1); }
    .tb.on .tbd { transform:translateX(-50%) scaleX(1); }
    .tb svg { transition: transform .4s cubic-bezier(.34,1.56,.64,1); }
    .tb.on svg { transform: translateY(-2px); }

    /* Floating nav B */
    .fnav { position:absolute; bottom:26px; left:24px; right:24px; height:62px; z-index:20;
      background: rgba(61,11,22,.94); backdrop-filter: blur(20px); border-radius:100px;
      display:flex; align-items:center; padding:0 10px 0 18px; gap:4px;
      box-shadow: 0 12px 34px rgba(42,7,15,.34); border:1px solid rgba(195,166,109,.18); }
    .fb { flex:1; display:flex; align-items:center; justify-content:center; height:44px; border-radius:100px;
      cursor:pointer; transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .fb.on { background: rgba(247,230,202,.13); }
    .fb svg { transition: transform .4s cubic-bezier(.34,1.56,.64,1); }
    .fb.on svg { transform: scale(1.1); }
    .fab { width:46px; height:46px; border-radius:50%; background:${T.skyway}; display:flex;
      align-items:center; justify-content:center; cursor:pointer; flex-shrink:0; margin-left:6px;
      box-shadow: 0 4px 14px rgba(0,0,0,.28); transition: all .35s cubic-bezier(.25,.1,.25,1); }
    .fab:active { transform: scale(.92) rotate(90deg); }

    .lnk { display:flex; align-items:center; gap:4px; font-family:${ros}; font-size:13px; font-weight:600;
      color:${T.cabernet}; background:transparent; border:none; cursor:pointer; padding:0; }
    .la { transition: transform .35s cubic-bezier(.25,.1,.25,1); }
    .lnk:active .la { transform: translateX(3px); }

    .tap { cursor:pointer; transition: transform .3s cubic-bezier(.25,.1,.25,1); }
    .tap:active { transform: scale(.93); }

    @keyframes fade { from{opacity:0; transform:translateY(8px)} to{opacity:1; transform:none} }
    .fade { animation: fade .45s cubic-bezier(.25,.1,.25,1) both; }

    /* ══ Bottom sheets ══ */
    @keyframes scrimIn { from{opacity:0} to{opacity:1} }
    @keyframes sheetUp { from{transform:translateY(100%)} to{transform:none} }
    .sscrim { position:absolute; inset:0; background:rgba(42,7,15,.50); backdrop-filter:blur(4px);
      z-index:40; animation: scrimIn .4s cubic-bezier(.25,.1,.25,1) both; }
    .usheet { position:absolute; left:0; right:0; bottom:0; z-index:41; background:${T.canvas};
      border-radius:26px 26px 0 0; display:flex; flex-direction:column; overflow:hidden;
      box-shadow: 0 -14px 44px rgba(42,7,15,.34);
      animation: sheetUp .52s cubic-bezier(.22,.9,.28,1) both; }

    .ush-head { position:relative; overflow:hidden; background:${T.cabernetDark};
      padding:12px 22px 24px; flex-shrink:0; }
    .ush-arcs { position:absolute; right:-80px; top:-110px; width:300px; height:300px; opacity:.16;
      pointer-events:none; animation: drift 30s linear infinite; }
    .ush-sheen { position:absolute; inset:0; pointer-events:none;
      background: radial-gradient(120% 90% at 10% 0%, rgba(247,230,202,.10), transparent 58%); }
    .ush-headw { flex-shrink:0; background:${T.white}; border-bottom:1px solid ${T.hairline};
      padding:12px 22px 18px; }
    .ush-body { flex:1; overflow-y:auto; padding:18px 20px 22px; }
    .ush-body::-webkit-scrollbar { display:none; }
    .ush-body { scrollbar-width:none; }
    .ush-foot { flex-shrink:0; background:${T.white}; border-top:1px solid ${T.hairline};
      padding:16px 20px 22px; box-shadow: 0 -6px 22px rgba(100,18,36,.06); }

    .paper { background:${T.white}; border:1px solid ${T.hairline}; border-radius:14px; padding:22px 20px 24px; }

    .dclose { display:flex; align-items:center; gap:7px; background:transparent; border:none; cursor:pointer;
      font-family:${ros}; font-size:13px; font-weight:600; color:rgba(247,230,202,.72);
      padding:7px 13px 7px 9px; border-radius:100px; transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .dclose:active { background:rgba(247,230,202,.12); color:${T.skyway}; }
    .ddl { display:flex; align-items:center; gap:7px; cursor:pointer; font-family:${ros}; font-size:13px;
      font-weight:600; color:${T.skyway}; background:rgba(247,230,202,.08);
      border:1px solid rgba(195,166,109,.32); padding:8px 15px; border-radius:100px;
      transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .ddl:active { background:${T.skyway}; color:${T.cabernetDeep}; }
    .ddl:active svg { stroke:${T.cabernetDeep}; }
    .dla { transition: transform .45s cubic-bezier(.34,1.56,.64,1), stroke .4s ease; }
    .ddl:active .dla { transform: translateY(3px); }

    .btn-cab { display:flex; align-items:center; justify-content:center; gap:9px; width:100%;
      font-family:${ros}; font-size:16px; font-weight:600; letter-spacing:.02em; padding:17px 24px;
      background:${T.cabernet}; color:${T.skyway}; border:none; border-radius:10px; cursor:pointer;
      position:relative; z-index:2; box-shadow: 0 2px 8px rgba(100,18,36,.20);
      transition: all .35s cubic-bezier(.25,.1,.25,1); }
    .btn-cab:active { transform: scale(.98); background:${T.cabernetDark}; }

    .mclose { width:38px; height:38px; border-radius:10px; border:1px solid ${T.hairline}; background:${T.white};
      display:flex; align-items:center; justify-content:center; cursor:pointer; flex-shrink:0;
      transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .mclose:active { background:${T.cabernet}; border-color:${T.cabernet}; }
    .mclose:active svg { stroke:${T.skyway}; }

    .sel { position:relative; }
    .sel select { appearance:none; font-family:${ros}; font-size:14px; font-weight:600; color:${T.afterburn};
      background:${T.white}; border:1px solid ${T.hairline}; border-radius:8px;
      padding:10px 34px 10px 14px; cursor:pointer; outline:none;
      transition: all .35s cubic-bezier(.25,.1,.25,1); }
    .sel select:active { border-color:${T.aurum}; }
    .sel .cv { position:absolute; right:12px; top:50%; transform:translateY(-50%); pointer-events:none; }

    .irow { display:flex; align-items:flex-start; justify-content:space-between; gap:16px;
      padding:13px 10px; margin:0 -10px; border-radius:8px; position:relative;
      transition: background .35s cubic-bezier(.25,.1,.25,1); }
    .irow:before { content:''; position:absolute; left:0; top:6px; bottom:6px; width:2px; background:${T.aurum};
      border-radius:2px; transform:scaleY(0); transition: transform .4s cubic-bezier(.25,.1,.25,1); }
    .irow:active { background:#FDFBF7; }
    .irow:active:before { transform:scaleY(1); }

    .cmark { height:26px; padding:0 9px; border-radius:5px; border:1px solid ${T.hairline}; background:${T.white};
      display:flex; align-items:center; justify-content:center; font-family:${ros}; font-size:9px;
      font-weight:700; letter-spacing:.04em; color:${T.textSecondary}; }

    /* ══ Expandable rows ══ */
    .exp { display:grid; grid-template-rows:0fr; transition: grid-template-rows .55s cubic-bezier(.25,.1,.25,1); }
    .exp.on { grid-template-rows:1fr; }
    .exp > .expw { overflow:hidden; }
    .expi { background:${T.canvasDeep}; border-top:1px solid ${T.hairline}; padding:18px 16px 20px;
      opacity:0; transition: opacity .45s cubic-bezier(.25,.1,.25,1) .1s; }
    .exp.on .expi { opacity:1; }
    .row.open, .lrow.open { background:#FCFAF6; }
    .row.open:before, .lrow.open:before { transform:scaleY(1); }
    .row.open .chev, .lrow.open .chev { transform: rotate(180deg); }
    .chev { transition: transform .5s cubic-bezier(.25,.1,.25,1); }

    .dlab { font-family:${ros}; font-size:11px; font-weight:600; letter-spacing:.12em;
      text-transform:uppercase; color:${T.textMuted}; }
    .paper-s { background:${T.white}; border:1px solid ${T.hairline}; border-radius:11px; }
    .btn-edit { display:flex; align-items:center; gap:7px; font-family:${ros}; font-size:12px; font-weight:600;
      color:${T.cabernet}; background:${T.white}; border:1px solid ${T.hairline}; cursor:pointer;
      padding:7px 15px; border-radius:100px; transition: all .4s cubic-bezier(.25,.1,.25,1); }
    .btn-edit:active { background:${T.cabernet}; color:${T.skyway}; border-color:${T.cabernet}; }
    .btn-edit:active svg { stroke:${T.skyway}; }
    .srow { display:flex; align-items:center; gap:10px; padding:9px 0; border-bottom:1px solid ${T.hairline}; }
    .srow:last-of-type { border-bottom:none; }
    .lrow-wrap { background:${T.white}; border:1px solid ${T.hairline}; border-radius:13px;
      margin-bottom:9px; overflow:hidden; transition: border-color .35s ease, box-shadow .35s ease; }
    .lrow-wrap.open { border-color:${T.aurum}; box-shadow: 0 8px 22px rgba(100,18,36,.10); }

    @media (prefers-reduced-motion: reduce) { * { animation:none !important; transition:none !important; } }
  `;

  return (
    <div style={{ background: "#EFE9DE", minHeight: "100vh", padding: "52px 32px 72px", fontFamily: fus }}>
      <style>{CSS}</style>

      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontFamily: ros, fontSize: 13, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.aurum, marginBottom: 10 }}>EAN Client Portal</div>
          <h1 style={{ fontFamily: ros, fontSize: 38, fontWeight: 700, color: T.afterburn, margin: "0 0 14px", letterSpacing: "-0.03em" }}>Mobile Concepts</h1>
          <p style={{ fontFamily: fus, fontSize: 16, color: T.textSecondary, lineHeight: 1.7, margin: "0 auto", maxWidth: 620 }}>
            Two directions for the client overview on mobile. Both use the same tokens, tempo, and luxury principles as the desktop build. Tap and hold elements to see the interaction states.
          </p>
        </div>

        <div style={{ display: "flex", gap: 72, justifyContent: "center", flexWrap: "wrap" }}>
          <Phone
            label="The Ledger"
            tagline="Concept A"
            notes="We kept the desktop layout. The dark balance card sits on cream as its own piece, the metrics slide sideways, and a standard navigation bar runs along the bottom."
          >
            <ConceptA />
          </Phone>

          <Phone
            label="The Atrium"
            tagline="Concept B"
            notes="We let the dark surface run the whole top of the screen. The balance sits inside a Cabernet header, and a cream panel pulls up over it with the rest of the content. A floating navigation bar runs along the bottom."
          >
            <ConceptB />
          </Phone>
        </div>
      </div>
    </div>
  );
}
