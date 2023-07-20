import { Button } from "components";
import { Children, Modal_Wrapper } from "components/types";
import ReactDOM from "react-dom";
import { twMerge } from "tailwind-merge";
import { useModalClose } from "./useModalClose";
import { useEffect, useState } from "react";

const Wrapper: React.FC<Modal_Wrapper> = ({
  children,
  open = false,
  onClose,
  closeOnEsc = true,
  closeOnClickOutside = true,
  className,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { onOverlayClick, container, portal } = useModalClose(
    closeOnEsc,
    open,
    onClose
  );

  return (
    <>
      {mounted ? (
        ReactDOM.createPortal(
          <div
            className={twMerge(
              "transition-all",
              "fixed inset-0 z-50 p-8 text-white bg-gray-600/90 border border-red w-full h-full",
              `${open ? "block" : "hidden"}`,
              className
            )}
            onClick={closeOnClickOutside ? onOverlayClick : undefined}
          >
            <div
              className="relative w-full max-w-lg mx-auto mt-8 transition duration-300 ease-in-out "
              // onClick={(e) => e.stopPropagation()}
              ref={container}
            >
              <Button
                className="absolute flex justify-center w-8 h-8 py-0 text-gray-800 bg-blue-100 rounded-full shadow-xl cursor-pointer -top-2 -right-2"
                onClick={() => onClose()}
                title="Cancel"
              >
                <span className="text-2xl leading-7 select-none">&times;</span>
              </Button>

              <div className="overflow-hidden bg-gray-500 rounded shadow-xl">
                {children}
              </div>
            </div>
          </div>,
          portal.current
        )
      ) : (
        <></>
      )}
    </>
  );
};

const Head: React.FC<{ children: Children; className?: string }> = ({
  children,
  className,
}) => (
  <div className={twMerge("block p-4 bg-gray-900", className)}>
    <h1 className="text-lg">{children}</h1>
  </div>
);

const Body: React.FC<{ children: Children; className?: string }> = ({
  children,
  className,
}) => <div className={twMerge("p-4", className)}>{children}</div>;

const Footer: React.FC<{ children: Children; className?: string }> = ({
  children,
  className,
}) => <div className={twMerge("p-3 bg-gray-800", className)}>{children}</div>;

const Modal = { Wrapper, Head, Body, Footer };

export default Modal;
