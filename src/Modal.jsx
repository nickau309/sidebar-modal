import React from "react";
import { Dialog } from "@headlessui/react";
import CloseButton from "./CloseButton";

export default function Modal({ isOpen, handleClose }) {
  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 grid place-items-center py-4">
        <Dialog.Panel className="relative grid h-full max-h-60 w-11/12 max-w-2xl place-items-center rounded-3xl bg-white">
          <Dialog.Title className="text-xl font-bold tracking-wider text-slate-800 md:text-2xl">
            Modal Content
          </Dialog.Title>
          <CloseButton
            handleClick={handleClose}
            extraClassName="absolute top-4 right-4"
          />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
