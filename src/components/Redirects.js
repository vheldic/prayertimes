import "./Redirects.css";
import iz_logo from "../img/IZ_Logo.png";
import vaktija_logo from "../img/Vaktija_Logo.png";

function Redirects() {
  const redirects = [
    { img: iz_logo, url: "https://www.izwien.at/" },
    { img: vaktija_logo, url: "https://vaktija.ba/" },
  ];

  return (
    <div className="redirect">
      {redirects.map((redirect, index) => (
        <a href={redirect.url} key={index} target="_blank" rel="noreferrer">
          <img src={redirect.img} alt={redirect.url} />
        </a>
      ))}
    </div>
  );
}

export default Redirects;
