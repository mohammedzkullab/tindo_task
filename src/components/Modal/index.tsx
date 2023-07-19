import { Button } from "components";
import { Children } from "components/types";
import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const Wrapper: React.FC<{
  children: Children;
  onClose: () => void;
  open?: boolean;
  closeOnEsc?: boolean;
  closeOnClickOutside?: boolean;
}> = ({
  children,
  open = false,
  onClose,
  closeOnEsc = true,
  closeOnClickOutside = true,
}) => {
  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (closeOnEsc && open && e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyPress);
    return () => window.removeEventListener("keydown", onKeyPress);
  }, [closeOnEsc, onClose, open]);

  const container = useRef<HTMLDivElement>(null);
  const onOverlayClick = (e: React.MouseEvent) => {
    if (!container.current?.contains(e.target as Node)) onClose();
  };
  return (
    <>
      <div
        className={twMerge(
          "fixed inset-0 z-50 p-8 text-white bg-gray-600/90 border border-red w-full h-full",
          `${open ? "block" : "hidden"}`
        )}
        onClick={closeOnClickOutside ? onOverlayClick : undefined}
      >
        <div
          className="relative w-full max-w-sm mx-auto mt-8 "
          // onClick={(e) => e.stopPropagation()}
          ref={container}
        >
          <Button
            className="absolute -top-2 -right-2 flex justify-center rounded-full h-8 w-8 bg-gray-600 cursor-pointer shadow-xl py-0"
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
