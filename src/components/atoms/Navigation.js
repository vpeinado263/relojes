import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <header className="menu">
        <nav className="sub">
          <Link href="/">
            <span className="bar">Inicio</span>
          </Link>
          <Link href="/tiposDeRelojes">
            <span className="bar">Tipos de Relojes</span>
          </Link>
        </nav>
      </header>

      <style jsx>{`
        .menu {
          width: 100%;
          background-color: #0d0d0d; /* negro elegante */
          border-bottom: 1px solid rgba(255, 215, 0, 0.4); /* dorado premium */
          padding: 15px 0;
          display: flex;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }

        .sub {
          display: flex;
          gap: 30px;
          align-items: center;
        }

        .bar {
          font-family: "Merriweather", serif; /* estilo editorial */
          color: #f5f5f5;
          font-size: 1.1rem;
          letter-spacing: 0.5px;
          position: relative;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        /* Efecto línea dorada debajo */
        .bar::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 2px;
          background: gold;
          transition: width 0.3s ease;
        }

        .bar:hover {
          color: gold;
        }

        .bar:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Navigation;
