import Button from "components/Button";
import Modal from "components/Modal";

export const ModalExample = ({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) => {
  return (
    <Modal.Wrapper open={isOpen} onClose={close}>
      <Modal.Head>Example Modal </Modal.Head>
      <Modal.Body className="p-5">
        Dolore ipsum quis mollit esse tempor. Proident ut tempor quis ipsum non
        veniam mollit consectetur sunt ipsum eu. Ullamco consequat dolor
        voluptate adipisicing non laborum cupidatat cillum esse. Ut anim nisi
        dolor do nisi aute aliquip fugiat. Qui pariatur pariatur consequat
        exercitation laboris proident irure quis anim culpa do reprehenderit ad
        nisi.{" "}
      </Modal.Body>
      <Modal.Footer className="flex items-center justify-end">
        <Button onClick={close}>Dismiss</Button>
        <Button onClick={() => alert("You saved me !")}>Save</Button>
      </Modal.Footer>
    </Modal.Wrapper>
  );
};

export default ModalExample;
