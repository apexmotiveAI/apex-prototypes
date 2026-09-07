import { useState } from "react";

const stats = [
  { label: "Active Flights", value: "24", change: "+3", up: true },
  { label: "Fuel Capacity", value: "87%", change: "-2%", up: false },
  { label: "Ground Crew", value: "18", change: "+1", up: true },
];

const flights = [
  { id: "EAN-401", route: "LOS → ABV", status: "On Time", color: "#2D9B6F" },
  { id: "EAN-220", route: "LOS → PHC", status: "Delayed", color: "#E6A817" },
  { id: "EAN-105", route: "ABV → LOS", status: "Boarding", color: "#641224" },
];

export default function ExamplePrototype() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#F7F3EA", minHeight: "100vh", padding: 32 }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: "#080000", marginBottom: 4 }}>
          Operations Dashboard
        </h1>
        <p style={{ fontSize: 14, color: "rgba(8,0,0,0.5)", marginBottom: 32 }}>
          Example prototype — replace me with a real design
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 32 }}>
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                background: "#fff",
                border: "1px solid #EAE3D6",
                borderRadius: 14,
                padding: 24,
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "rgba(8,0,0,0.45)", marginBottom: 12 }}>
                {s.label}
              </div>
              <div style={{ fontSize: 36, fontWeight: 700, color: "#080000", lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: s.up ? "#2D9B6F" : "#E6A817", marginTop: 8 }}>
                {s.change}
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "#fff", border: "1px solid #EAE3D6", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ padding: "20px 24px", borderBottom: "1px solid #EAE3D6" }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: "#080000" }}>Today's Flights</h2>
          </div>
          {flights.map((f) => (
            <div
              key={f.id}
              onClick={() => setSelected(selected === f.id ? null : f.id)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 24px",
                borderBottom: "1px solid #EAE3D6",
                cursor: "pointer",
                background: selected === f.id ? "#FDFBF7" : "transparent",
                transition: "background 0.2s",
              }}
            >
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#080000" }}>{f.id}</div>
                <div style={{ fontSize: 13, color: "rgba(8,0,0,0.5)", marginTop: 2 }}>{f.route}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: f.color }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: f.color }}>{f.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
