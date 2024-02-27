import React from "react";
import heroImg1 from "../assets/1.png";
import heroImg2 from "../assets/2.png";
import machineImg from "../assets/3.png";

function Hero() {
  return (
    <main>
      <div className="main">
        <section className="hero-img">
          <img src={heroImg1} alt="Hero Image" />
        </section>
        <section className="hero-text">
          <h3>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h3>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <div>
            <img src={heroImg2} alt="Image" />
          </div>
          <p>
            Government of India has awarded the{" "}
            <b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.
          </p>
        </section>
      </div>
      <section>
        <p className="text-center fw-bold">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <div>
          <div className="industry-img">
            <img src={machineImg} alt="Image" />
          </div>
          <p className="text-center fw-bold">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
        </div>
      </section>

      <hr />
    </main>
  );
}

export default Hero;
