import { Button } from "components";
import { Children } from "components/types";
import React from "react";
import { twMerge } from "tailwind-merge";

const Wrapper: React.FC<{
  children: Children;
  open?: boolean;
  onClose: () => void;
}> = ({ children, open = false, onClose }) => {
  return (
    <>
      {open ? (
        <div
          className={twMerge(
            "fixed inset-0 z-10 p-8 text-white bg-gray-600/90",
            `${open ? "block" : "hidden"}`
          )}
        >
          <div className="relative w-full max-w-sm mx-auto mt-8">
            <Button
              className="absolute -top-2 -right-2 flex justify-center rounded-full h-8 w-8 bg-gray-600 cursor-pointer shadow-xl"
              onClick={() => onClose()}
              title="Cancel"
            >
              <span className="text-2xl leading-7 select-none">&times;</span>
            </Button>

            <div className="overflow-hidden bg-gray-800 rounded shadow-xl">
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

const Head: React.FC<{ children: Children }> = ({ children }) => (
  <div className="block p-4 bg-gray-900">
    <h1 className="text-lg">{children}</h1>
  </div>
);

const Body: React.FC<{ children: Children }> = ({ children }) => (
  <div className="p-4">{children}</div>
);

const Footer: React.FC<{ children: Children }> = ({ children }) => (
  <div className="p-4">{children}</div>
);

const Modal = { Wrapper, Head, Body, Footer };

export default Modal;
