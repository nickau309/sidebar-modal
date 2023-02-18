import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import CloseButton from "./CloseButton";
import { social, links } from "./data";
import logo from "./logo.svg";

export default function Sidebar() {
  return (
    <Transition
      as={Fragment}
      enter="transition duration-300 ease-out"
      enterFrom="transform -translate-x-full"
      enterTo="transform translate-x-0"
      leave="transition duration-300 ease-in"
      leaveFrom="transform translate-x-0"
      leaveTo="transform -translate-x-full"
    >
      <Popover.Panel
        as="aside"
        className="fixed inset-y-0 left-0 flex w-full flex-col gap-4 bg-white p-6 shadow-lg sm:max-w-sm"
      >
        {({ close }) => (
          <>
            <div className="flex items-center justify-between">
              <img src={logo} alt="coding addict" className="h-10" />
              <CloseButton handleClick={() => close()} />
            </div>
            <ul className="flex-auto">
              {links.map((link) => {
                const { id, url, text, icon } = link;
                return (
                  <li key={id}>
                    <a
                      href={url}
                      className="group -mx-6 flex gap-4 py-4 px-6 capitalize tracking-wider duration-200 ease-linear hover:bg-slate-200"
                    >
                      <span className="text-2xl text-slate-500 duration-200 ease-linear group-hover:text-slate-600">
                        {icon}
                      </span>
                      <span className="text-slate-600 duration-200 ease-linear group-hover:text-slate-700">
                        {text}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="flex justify-center">
              {social.map((link) => {
                const { id, url, icon } = link;
                return (
                  <li key={id}>
                    <a
                      href={url}
                      className="block p-2 text-2xl text-blue-400 duration-200 ease-linear hover:text-blue-500"
                    >
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </Popover.Panel>
    </Transition>
  );
}
