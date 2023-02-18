import React, { useState } from "react";
import Modal from "./Modal";

export default function Home({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="grid min-h-screen place-items-center bg-slate-100">
      <button
        onClick={() => setIsModalOpen(true)}
        className="rounded-full border border-slate-800 bg-slate-800 py-2 px-4 tracking-wider text-slate-100 shadow shadow-black/20 duration-200 ease-linear hover:bg-transparent hover:text-slate-800"
      >
        Show Modal
      </button>
      <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} />
      {children}
    </main>
  );
}
