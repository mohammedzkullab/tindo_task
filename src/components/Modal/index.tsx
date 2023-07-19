import { Button } from "components";
import { Children, Modal_Wrapper } from "components/types";
import ReactDOM from "react-dom";
import { twMerge } from "tailwind-merge";
import { useModalClose } from "./useModalClose";

const Wrapper: React.FC<Modal_Wrapper> = ({
  children,
  open = false,
  onClose,
  closeOnEsc = true,
  closeOnClickOutside = true,
  className,
}) => {
  const { onOverlayClick, container, portal } = useModalClose(
    closeOnEsc,
    open,
    onClose
  );

  return (
    <>
      {ReactDOM.createPortal(
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
              className="absolute -top-2 -right-2 flex justify-center rounded-full h-8 w-8 bg-blue-100 text-gray-800 cursor-pointer shadow-xl py-0"
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
      )}
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

const Footer: React.FC<{ children: Children; className?: string }> = ({
  children,
  className,
}) => <div className={twMerge("p-3 bg-gray-800", className)}>{children}</div>;

const Modal = { Wrapper, Head, Body, Footer };

export default Modal;
