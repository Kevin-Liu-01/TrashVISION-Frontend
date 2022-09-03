import { ClockIcon, UserIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Navbar from "../Navbar/Navbar";
import DBHeader from "./DbHeader";
import DBCounter from "./DbCounter";
import DBPIE from "./DbPIE";
import DBMetrics from "./DbMetrics";
import React from "react";
import { useState } from "react";
function Home() {
  const [itemsRecycled, setItemsRecycled] = useState(75);
  const [itemsDisposed, setItemsDisposed] = useState(88);
  const [weight, setWeight] = useState(45);

  return (
    <div className="min-h-screen bg-gradient-to-b to-plantGreenDarker from-plantGreenDark  pb-14 ">
      {/*Navbar*/}
      <Navbar page="Dashboard" />
      {/*Dashboard */}

      <div className="p-10 md:p-16  grid grid-cols-6 gap-4">
        {/*header section */}
        <DBHeader />

        {/* Counter block */}
        <DBCounter />

        {/* To be named */}
        <DBPIE
          rates={[
            { title: "Recycled", value: 50 },
            { title: "Disposed", value: 75 },
          ]}
        />

        {/* To be named */}
        <DBMetrics />
      </div>
    </div>
  );
}

export default Home;
