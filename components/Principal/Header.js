const headerLinks = [
  "Destacados",
  "Podcasts",
  "Listas",
  "Generos y Estados de Animo",
  "Nuevos Lanzamientos",
  "Descrubir"
];

function Header() {
  return (
    <React.Fragment>
      <div className="header-container">
        <ul>
          {headerLinks.map((elem, index) => {
            return <li key={index}>{elem}</li>;
          })}
        </ul>
      </div>

      <style jsx>{`
      .header-container {
    padding: 15px 15px 15px 15px;
    display: flex;
    justify-content: center;
  }

  .header-container ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-container ul li {
    list-style-type: none;
    color: #b3b3b3;
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: 800;
    letter-spacing: 2px;
    padding: 0px 15px 0px 15px;
  }

  .header-container ul li:hover {
    color: #fff;
    transition: 0.5s;
    cursor: pointer;
  }
      `}</style>
    </React.Fragment>
  );
}

export default Header;
