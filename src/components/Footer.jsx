import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const industries = [
  "CHEMICALS & PROCESS",
  "POWER WATER & WASTE WATER",
  "OILS & GAS",
  "PHARMA SUGARS & DISTILLERIES",
  "PAPER & PULP",
  "MARINE & DEFENCE",
  "METAL & MINING",
  "FOOD & BEVERAGE",
  "PETROCHEMICAL & REFINERIES",
  "SOLAR BUILDING HVAC FIRE FIGHTING",
  "AGRICULTURE & RESIDENTIAL",
];

function Footer() {
  return (
    <footer>
      <h4 className="text-center">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </h4>

      <p className="text-center">
        {industries.map((industry, index) => (
          <span>
            {index > 0 && <b style={{ color: "red" }}> |</b>} {industry}
          </span>
        ))}
      </p>

      <div className="footer-links">
        <div>
          <FontAwesomeIcon icon={faPhone} size="lg" />
          <a href="tel:18002001234">
            Toll Free <b>1800 200 1234</b>
          </a>
        </div>
        <div>
          <FontAwesomeIcon icon={faFacebook} size="xl" />
          <a href="https://www.facebook.com/cripumps" target="_blank">
            www.facebook.com/cripumps
          </a>
        </div>
        <div>
          <FontAwesomeIcon icon={faGlobe} size="lg" />
          <a href="https://www.crigroups.com" target="_blank">
            www.crigroups.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
