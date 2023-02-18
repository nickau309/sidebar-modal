import React from "react";
import { Popover } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import Home from "./Home";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <Popover>
      <Home>
        <Popover.Button className="fixed top-8 left-12 transform text-3xl text-blue-400 duration-200 ease-linear hover:scale-125">
          <FaBars />
        </Popover.Button>
      </Home>
      <Sidebar />
    </Popover>
  );
}
