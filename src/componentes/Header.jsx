export default function Header({
  setCity,
  darkMode,
}) {
  return (
    <nav className={darkMode ? "nav-dark" : "nav-light"}>
      <style>
        {`
        .nav-dark {
          background: #23254e;
          color: #fff;
        }
        .nav-light {
          background: #f6d365;
          color: #23254e;
        }
        .nav-toolbar {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nav-btn.selected, .unit-btn.selected {
          background: #f6d365;
          color: #23254e;
        }
        `}
      </style>

      <div className="nav-toolbar">
        {/* Aquí puedes poner tu título/logo */}
        <span style={{fontWeight: "bold", fontSize: "1.2em"}}>WeatherApp</span>

        {/* Ejemplo: input para buscar ciudad */}
        <input
          type="text"
          placeholder="Buscar ciudad..."
          onChange={e => setCity(e.target.value)}
          style={{marginLeft: "12px", borderRadius: "8px", padding: "4px 9px"}}
        />
      </div>
    </nav>
  );
}