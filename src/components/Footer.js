import React, { useState } from "react";
import { developers } from "../Developers";
import DeveloperPopUp from "./DeveloperPopUp";

const Footer = () => {
  const [devPopup, setdevPopup] = useState(false);

  const handleDevPopUp = () => setdevPopup(!devPopup);
  const [devData, setDevData] = useState(null);

  return (
    <div>
      <div className="bg-green-500 h-[250px] w-screen fixed bottom-0 text-white">
        <div className="flex flex-wrap justify-around items-center mt-8">
          <div>
            <ul>
              <li>Chi siamo</li>
              <li>Contatti</li>
              <li>News</li>
              <li>P. iva</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Chi siamo</li>
              <li>Contatti</li>
              <li>News</li>
              <li>P. iva</li>
            </ul>
          </div>
          <div>
            <ul>
              <h2 className="font-bold text-xl">Sviluppato da:</h2>
              {developers.map((developer) => {
                return (
                  <li
                    className="cursor-pointer hover:underline"
                    onClick={() => {
                      setDevData(developer);
                      handleDevPopUp();
                    }}
                  >
                    {developer.name}
                  </li>
                );
              })}
              {devPopup && <DeveloperPopUp dev={devData} state={setdevPopup} />}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
