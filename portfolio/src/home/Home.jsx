import React from "react";
import "./home.css";

import Introcard from "./Introcard";
import Achievements from "./Achievements";
import Sociallinks from "./Sociallinks";

function Home() {
  return (
    <>
      <Introcard />
      <Sociallinks />
      <Achievements />
    </>
  );
}

export default Home;
