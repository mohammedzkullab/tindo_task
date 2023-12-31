import Button from "components/Button";
import Modal from "components/Modal";
import NoSsr from "components/NoSsr";
import { useState } from "react";

export const ModalExample = ({
  initOpen,
  withoutFooter,
}: {
  initOpen?: boolean;
  withoutFooter?: boolean;
}) => {
  const [isOpen, setOpen] = useState<boolean>(initOpen || false);
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <NoSsr>
      <Button className="border border-white" onClick={() => setOpen(true)}>
        Show Modal
      </Button>
      <Modal.Wrapper open={isOpen} onClose={closeModal} size="large">
        <Modal.Head>Example Modal </Modal.Head>
        <Modal.Body className="p-5">
          Dolore ipsum quis mollit esse tempor. Proident ut tempor quis ipsum
          non veniam mollit consectetur sunt ipsum eu. Ullamco consequat dolor
          voluptate adipisicing non laborum cupidatat cillum esse. Ut anim nisi
          dolor do nisi aute aliquip fugiat. Qui pariatur pariatur consequat
          exercitation laboris proident irure quis anim culpa do reprehenderit
          ad nisi.{" "}
        </Modal.Body>
        {!withoutFooter && (
          <Modal.Footer className="flex items-center justify-end gap-4">
            <Button
              className="bg-transparent border-[0.5px] border-white"
              onClick={closeModal}
              buttonSize="small"
            >
              Dismiss
            </Button>
            <Button
              className="bg-transparent border-[0.5px] border-white"
              onClick={() => alert("You saved me !")}
              buttonSize="small"
            >
              Save
            </Button>
          </Modal.Footer>
        )}
      </Modal.Wrapper>
    </NoSsr>
  );
};

export default ModalExample;
