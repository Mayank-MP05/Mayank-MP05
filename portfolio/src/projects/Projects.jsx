import React, { useState, useEffect } from "react";
import "./projects.css";

//importing icons here
import CarQuality from "./data/car-quality.png";
import HulkHuffMan from "./data/hulk-huffman-compression.png";
import MarathiLetterConv from "./data/Marathi-letter-convnet.png";
import Molequilizer from "./data/moliquilizer-logo.png";
import VasooliMoney from "./data/vasooli-money.png";

function Projects() {
  const [ActiveProject, setActiveProject] = useState(0);
  return (
    <>
      <div className='bg-img'>
        <h3>Projects</h3>
      </div>
      <div className='project-navigation'>
        <img
          src={CarQuality}
          className='project-logo'
          onClick={() => setActiveProject(1)}
        />
      </div>
    </>
  );
}

export default Projects;
