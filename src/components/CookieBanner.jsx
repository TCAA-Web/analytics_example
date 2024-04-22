import { useEffect, useState } from "react";
import style from "./CookieBanner.module.scss";
import ReactGA from "react-ga4";

export const CookieBanner = () => {
  // Displayes i bunden af skærmen - DONE
  // Skal have en deny og accepter option
  // Skal kun initializere GTAG hvis man accepterer

  const [showBanner, setShowBanner] = useState(true);

  // Tjek om brugeren har acceptert allerede
  useEffect(() => {
    if (localStorage.getItem("cookieAccept")) {
      setShowBanner(false);
      if (JSON.parse(localStorage.getItem("cookieAccept")) === true) {
        ReactGA.initialize("G-YTQRSQPW5B");
      }
    }
  }, [showBanner]);

  // accepter og sæt en local state
  const accept = () => {
    localStorage.setItem("cookieAccept", true);
    setShowBanner(false);
  };

  // afslå og sæt en local state
  const deny = () => {
    localStorage.setItem("cookieAccept", false);
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <section className={style.cookieBanner}>
          <p>
            Denne side bruger cookies til at analysere data trafik. For at
            optimere siden. Hvis du acceptere at dine data bruges til at
            forbedre brugeroplevelsen bedes du venligts trykke accepter. Ellers
            tryk afslå.
          </p>

          <div>
            <button onClick={() => accept()}>Accepter</button>
            <button onClick={() => deny()}>Afslå</button>
          </div>
        </section>
      )}
    </>
  );
};
